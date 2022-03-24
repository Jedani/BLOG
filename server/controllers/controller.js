const db = require("../model/database");
// blogs_page, blog_index, login_page, create_page, about_page, sign_up, delete_blog

const blog_index = async (req, res) => {
	try {
		let blogs = await db.all();
		console.log(blogs[0].username);
		res.render("index", { title: "Home", blogs });
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
};

module.exports = {
	blog_index,
};
