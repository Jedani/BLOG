const express = require("express");
const blogController = require("../controllers/controller");
const verify = require("./verifyToken");

const router = express.Router();

router.get("/", (req, res) => {
	res.redirect("/blogs");
});
router.get("/blogs", verify, blogController.getAllBlogs);
router.get("/blogs/create", verify, blogController.create_page);
router.get("/blogs/about", verify, blogController.about_page);

router.post("/blogs", verify, blogController.postBlog);

router.get("/blogs/:id", verify, blogController.getById);
router.delete("/blogs/:id", verify, blogController.deleteId);

router.put("/blogs/:id", verify, blogController.updateId);

module.exports = router;
