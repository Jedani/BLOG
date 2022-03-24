const express = require("express");
const db = require("../model/database");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		let blogs = await db.all();
		console.log(blogs[0].username);
		res.render("index", { title: "Home", blogs });
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

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
