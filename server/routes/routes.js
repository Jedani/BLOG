const express = require("express");
const blogController = require("../controllers/controller");

const router = express.Router();

router.route("/").get(blogController.getAllBlogs);
router.post("/blogs", (req, res) => {
	post(blogController.postBlog);
});

router.route("/:id").get(blogController.getById);

module.exports = router;
