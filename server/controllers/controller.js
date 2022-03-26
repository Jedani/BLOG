const getAllBlogs = async (req, res) => {
	res.send("get me");
};

const postBlog = async (req, res) => {
	res.send("post me");
};

const getById = async (req, res) => {
	res.send("get me by id");
};

module.exports = {
	getAllBlogs,
	postBlog,
	getById,
};
