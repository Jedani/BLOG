const db = require("../config/database");

class Post {
	constructor(blog, snippet, title) {
		(this.title = title), (this.blog = blog), (this.snippet = snippet);
	}

	async save() {
		let sql = `
        INSERT INTO blogs(blog_id, blog, snippet, title)
                     VALUES (${1}, '${this.blog}', '${this.snippet}', 
                        '${this.title}')
                        `;

		const [newPost, _] = await db.execute(sql);
		return newPost;
	}

	static findAll() {}
}

module.exports = Post;
