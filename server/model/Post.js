const db = require("../config/database");

class Post {
	constructor(blog, snippet, title) {
		(this.title = title), (this.blog = blog), (this.snippet = snippet);
	}

	save() {
		let sql = `
        INSERT INTO blogs(blog_id, blog, snippet, title)
                     VALUES (${1}, '${this.blog}', '${this.snippet}', 
                        '${this.title}')
                        `;

		return db.execute(sql);
	}

	static findAll() {
		let sql = `SELECT title, snippet, blog FROM blogs`;
		return db.execute(sql);
	}

	static findById(id) {
		let sql = `SELECT * FROM blogs WHERE id=${id}`;

		return db.execute(sql);
	}
}

module.exports = Post;
