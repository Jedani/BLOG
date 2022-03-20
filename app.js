const express = require("express");
const app = express();

const port = "3020";

app.get("/", (req, res) => {
	res.send("<h1>hello</h1>");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
