const mysql = require("mysql");

let connection = mysql.createConnection({
	host: "localhost",
	user: "fich",
	password: "forever",
	database: "join_us",
});

let blogs = [];

connection.query(
	"SELECT full_name FROM users LIMIT 9",
	(error, results, field) => {
		if (error) throw error;
		for (i = 0; i < results.length; i++) {
			blogs.push(results[i].full_name);
		}
	},
);

connection.end((err) => {
	console.log("connection is ended");
});
