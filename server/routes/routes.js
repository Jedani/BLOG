const express = require("express");

const router = express.Router();

router.app.get("/", (req, res) => {
	res.render("index", { title: "Home", blogs });
});

router.app.get("/signup", (req, res) => {
	res.render("signup");
});

router.app.get("/login", (req, res) => {
	res.render("login");
});

router.app.get("/blogs", (req, res) => {
	res.render("blogs");
});

module.exports = router;
