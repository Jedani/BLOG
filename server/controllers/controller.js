const Post = require("../model/Post");

const getAllBlogs = async (req, res) => {
	res.send("get me");
};

const postBlog = async (req, res) => {
	try {
		let { title, blog, snippet } = req.body;
		let post = new Post(blog, snippet, title);

		post = await post.save();
		console.log(post);

		res.send("post me");
	} catch (error) {
		console.log(error);
	}
};

const getById = async (req, res) => {
	res.send("get me by id");
};

module.exports = {
	getAllBlogs,
	postBlog,
	getById,
};
