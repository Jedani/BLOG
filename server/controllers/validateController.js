const User = require("../model/User");
const { signUpValidation } = require("../model/validation");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
	res.render("credentials/signup", { title: "signup page" });
};

const signUp = async (req, res) => {
	// VALIDATION
	const { error } = signUpValidation(req.body);
	if (error) {
		return res.status(404).send(error.details[0].message);
	}
	// CHECK IF EMAIL EXISTS
	const emailCheck = await User.findEmail();
	const array = await emailCheck;
	if (array[0].length > 0) return res.send("email exists");

	// HASHING PASSWORD
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.pass, salt);

	// CREATE A NEW USER
	const { username, country, email } = req.body;
	let newUser = new User(username, country, email, hashPassword);

	try {
		newUser = await newUser.save();
		res.redirect("/login");
	} catch (error) {
		res.send(error);
	}
};

const login = async (req, res) => {
	res.render("credentials/login", { title: "login page" });
};

module.exports = {
	signUp,
	login,
	createUser,
};
