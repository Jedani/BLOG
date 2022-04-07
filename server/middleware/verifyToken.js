const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authenticate = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, process.env.TOKEN_SECRET, (error, decodedToken) => {
			if (error) {
				res.redirect("/login");
			} else {
				next();
			}
		});
	} else {
		res.redirect("/login");
	}
};

const checkuser = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, process.env.TOKEN_SECRET, async (error, decodedToken) => {
			if (error) {
				console.log(error.message);
				res.locals.user = null;
				next();
			} else {
				let id = decodedToken.user_id;

				next();
			}
		});
	} else {
		res.locals.user = null;
		next();
	}
};

module.exports = { authenticate, checkuser };
