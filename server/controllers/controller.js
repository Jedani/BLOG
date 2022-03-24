const db = require("../model/database");
// blogs_page, blog_index, login_page, create_page, about_page, sign_up, delete_blog

const blogs_page = async (req, res) => {
	let blogs = [];
	try {
		let blog = await db.all();
		for (let i = 0; i < blog.length; i++) {
			blogs.push(blog[i].username);
		}
		res.render("blogs/blogs", { title: "blogs", blogs });
	} catch (e) {
		res.sendStatus(500).render(e);
	}
};

const blog_index = async (req, res) => {
	let blogs = [];
	try {
		let blog = await db.all();
		for (let i = 0; i < blog.length; i++) {
			blogs.push(blog[i].username);
		}
		res.render("blogs/index", { title: "Home", blogs });
	} catch (e) {
		res.sendStatus(500).render(e);
	}
};

const login_page = (req, res) => {
	res.render("login");
};

const sign_up = (req, res) => {
	res.render("signup");
};

module.exports = {
	blog_index,
	blogs_page,
	login_page,
	sign_up,
};
