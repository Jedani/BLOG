const express = require("express");
const routes = require("./routes/routes");
const auth = require("./routes/auth");
const app = express();

const PORT = process.env.PORT || "3000";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes, auth);

app.use((req, res) => {
	res.status(404).render("site_defaults/404", { title: "error page" });
});

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`listening on PORT: ${PORT}`);
});
