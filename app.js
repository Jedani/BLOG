const mysql = require("mysql");
const express = require("express");
const app = express();

const port = "3020";

app.set("view engine", "ejs");

app.use(express.static("public"));

let connection = mysql.createConnection({
	host: "localhost",
	user: "fich",
	password: "forever",
	database: "join_us",
});

let blogs = [];

connection.query(
	"SELECT full_name FROM users LIMIT 10",
	(error, results, field) => {
		if (error) throw error;
		for (i = 0; i < results.length; i++) {
			blogs.push(results[i].full_name);
		}
	},
);

connection.end;

app.get("/", (req, res) => {
	res.render("index", { title: "Home", blogs });
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
