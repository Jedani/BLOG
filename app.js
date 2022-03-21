const express = require("express");
const app = express();

const port = "3020";

app.set("view engine", "ejs");

app.use(express.static("public"));
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/signup", (req, res) => {
	res.render("signup");
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/blogs", (req, res) => {
	res.render("blogs");
});

app.use((req, res) => {
	res.status(404).render("404");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
