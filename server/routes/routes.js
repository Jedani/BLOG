const express = require("express");
const blogController = require("../controllers/controller");

const router = express.Router();

router.get("/", (req, res) => {
	res.redirect("/blogs");
});
router.get("/blogs", blogController.getAllBlogs);
router.get("/blogs/create", blogController.create_page);

router.post("/blogs", blogController.postBlog);

router.get("/blogs/:id", blogController.getById);
router.delete("/blogs/:id", blogController.deleteById);

module.exports = router;
