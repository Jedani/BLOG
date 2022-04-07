const User = require("../model/User");
const { signUpValidation, loginValidation } = require("../model/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
	res.render("credentials/signup", { title: "signup page" });
};

const duration = 1 * 24 * 60 * 60;
const createToken = (user_id) => {
	return jwt.sign({ user_id }, process.env.TOKEN_SECRET, {
		expiresIn: duration,
	});
};

const signUp = async (req, res) => {
	// VALIDATION
	const { error } = signUpValidation(req.body);
	if (error) {
		return res.status(404).send(error.details[0].message);
	}
	// CHECK IF EXISTS
	const exists = await User.findOne(req.body.email);
	if (exists[0].length > 0) return res.send("email exists");

	// HASHING PASSWORD
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.pass, salt);

	// CREATE A NEW USER
	const { username, country, email } = req.body;
	let newUser = new User(username, country, email, hashPassword);

	// SAVING TO THE DATABASE IN THIS CASE MYSQL
	try {
		newUser = await newUser.save();
		const user = newUser[0];
		const token = createToken(user.insertId);
		res.cookie("jwt", token, { httpOnly: true, maxAge: duration * 1000 });
		// res.redirect("/");
	} catch (error) {
		res.send("username is taken");
	}
};

const login = (req, res) => {
	res.render("credentials/login", { title: "login page" });
};

const logged = async (req, res) => {
	// VALIDATION
	const { error } = loginValidation(req.body);
	if (error) {
		return res.status(404).send(error.details[0].message);
	}
	// CHECK IF EXISTS
	const user = await User.findOne(req.body.email);
	if (!user[0]) return res.send("email doesnt exist");

	// PASSWORD CHECKER
	const password = user[0][0];
	const validPass = await bcrypt.compare(req.body.pass, password.pass);
	if (!validPass) return res.send("invalid password");

	// logging in
	try {
		const userid = user[0][0].id;
		const token = createToken(userid);
		res.cookie("jwt", token, { httpOnly: true, maxAge: duration * 1000 });
		res.redirect("/");
	} catch (error) {
		res.json({ error });
	}
};

const logout = (req, res) => {
	res.cookie("jwt", "", { maxAge: 1 });
	res.redirect("/login");
};

module.exports = {
	signUp,
	login,
	createUser,
	logged,
	logout,
};
