const db = require("../model/database");
// delete_blog

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
	res.render("credentials/login");
};

const sign_up = (req, res) => {
	res.render("credentials/signup");
};

const create_page = (req, res) => {
	res.render("blogs/create");
};

const about = (req, res) => {
	res.render("site_defaults/about");
};

module.exports = {
	blog_index,
	blogs_page,
	login_page,
	sign_up,
	create_page,
	about,
};
