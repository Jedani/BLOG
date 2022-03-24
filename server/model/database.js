const mysql = require("mysql");

let connection = mysql.createPool({
	host: "localhost",
	user: "fich",
	password: "forever",
	database: "blog_data",
	port: "3306",
});

let blogs = {};

blogs.all = () => {
	return new Promise((resolve, reject) => {
		connection.query("SELECT * FROM users", (error, results, field) => {
			if (error) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

module.exports = blogs;
