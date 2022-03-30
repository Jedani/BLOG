const express = require("express");
const routes = require("./routes/routes");
const app = express();

const PORT = process.env.PORT || "3000";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use((req, res) => {
	res.status(404).render("site_defaults/404");
});

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`listening on PORT: ${PORT}`);
});
