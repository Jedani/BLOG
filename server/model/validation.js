const Joi = require("joi");

// DATA VALIDATION
const signUpValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().required(),
		email: Joi.string().min(6).required().email(),
		country: Joi.string().required(),
		pass: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = {
		email: Joi.string().min(6).required().email(),
		pass: Joi.string().min(6).required(),
	};

	return schema.validate(data);
};

module.exports = {
	signUpValidation,
	loginValidation,
};
