const Joi = require("joi");
const User = require("../model/User");
// DATA VALIDATION
const signUpValidation = (data) => {
	const schema = {
		username: Joi.string().required(),
		email: Joi.string().min(6).required().email(),
		country: Joi.string().required(),
		password: Joi.string().required(),
	};
	return Joi.validate(data, schema);
};

const loginValidation = (data) => {
	const schema = {
		username: Joi.string().required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().required(),
	};
	return Joi.validate(data, schema);
};

const signUp = async (req, res) => {
	const { error } = signUpValidation(req.body);
	if (error) res.sendStatus(400).send(error.details[0].message);
	let { username, country, email, pass } = req.body;
	const newUser = new User();
	try {
		console.log(newUser);
		res.render("credentials/signup", {
			title: "signup page",
		});
	} catch (error) {}
};

const login = async (req, res) => {
	res.render("credentials/login", { title: "login page" });
};

module.exports = {
	signUp,
	login,
};
