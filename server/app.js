const express = require("express");
const routes = require("./routes/routes");
const app = express();

const port = process.env.PORT || "3020";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("public"));

app.use("/", routes);

app.use((req, res) => {
	res.status(404).render("404");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
