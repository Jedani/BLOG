require("dotenv").config();
const mysql = require("mysql2");

let pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: "blog_data",
	port: process.env.DB_PORT,
});

module.exports = pool.promise();
