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
        INSERT INTO users(blog_id, blog, snippet, title)
                     VALUES (${1},
						'${this.blog}',
						'${this.snippet}', 
                        '${this.title}'
						)`;

		return db.execute(sql);
	}
}
