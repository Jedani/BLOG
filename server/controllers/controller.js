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

const postBlog = async (req, res) => {
	try {
		let { title, blog, snippet } = req.body;
		let post = new Post(blog, snippet, title);

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
	} catch (error) {}
};

module.exports = {
	getAllBlogs,
	postBlog,
	getById,
	create_page,
};
