const db = require("../config/database");

class User {
	constructor(username, country, email, pass) {
		(this.username = username),
			(this.country = country),
			(this.pass = pass),
			(this.email = email);
	}

	save() {
		let sql = `
        INSERT INTO users(username, country, email, pass)
                     VALUES (
						'${this.username}',
						'${this.country}', 
                        '${this.email}',
                        '${this.pass}'
						)`;

		return db.execute(sql);
	}

	static findEmail() {
		let sql = `SELECT email FROM users
		 WHERE NOT EXISTS ( SELECT email FROM users WHERE email = '${this.email}');`;

		return db.execute(sql);
	}
}

module.exports = User;
