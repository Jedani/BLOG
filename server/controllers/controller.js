const Post = require("../model/Post");

const getAllBlogs = async (req, res) => {
	try {
		const [blogs, _] = await Post.findAll();
		res.render("blogs/index", { title: "All blogs", blogs });
	} catch (error) {
		console.log(error);
	}
};

const create_page = (req, res) => {
	res.render("blogs/create", { title: "create a blog" });
};

const about_page = (req, res) => {
	res.render("site_defaults/about", { title: "about page" });
};

const postBlog = async (req, res) => {
	try {
		let { title, blog } = req.body;
		let post = new Post(blog, title);
		post = await post.save();
		res.redirect("/blogs");
	} catch (error) {
		console.log(error);
	}
};

const getById = async (req, res) => {
	try {
		let postId = req.params.id;
		let [post, _] = await Post.findById(postId);
		let result = post[0];
		res.render("blogs/details", { blog: result, title: "details of blog" });
	} catch (error) {
		res.sendStatus(404).render("site_defaults/404");
	}
};

const deleteId = async (req, res) => {
	try {
		let delId = req.params.id;

		let del = await Post.deleteById(delId);
		res.json({ redirect: "/blogs" });
	} catch (error) {
		console.log(error);
	}
};

const updateId = async (req, res) => {
	try {
		let upId = req.params.id;
		let { title, blog, snippet } = req.body;
		let post = new Post(blog, snippet, title);

		post = await Post.updateById(upId);
		res.json({ redirect: `/blogs/${upId}` });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllBlogs,
	postBlog,
	getById,
	create_page,
	deleteId,
	about_page,
	updateId,
};
