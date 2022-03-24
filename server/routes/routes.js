const express = require("express");
const blogController = require("../controllers/controller");

const router = express.Router();

router.get("/", blogController.blog_index);

router.get("/signup", (req, res) => {
	res.render("signup");
});

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/blogs", (req, res) => {
	res.render("blogs");
});

module.exports = router;
