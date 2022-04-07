const router = require("express").Router();
const home = require("../controllers/homeController");
const blogController = require("../controllers/controller");
const { authenticate, checkuser } = require("../middleware/verifyToken");

// to check if user has permission
router.get("*", checkuser);

// for all requests to be redirected
router.get("/", (req, res) => {
	res.redirect("/homepage");
});

// get request handlers
router.get("/homepage", home.homepage);
router.get("/blogs", authenticate, blogController.getAllBlogs);
router.get("/blogs/create", authenticate, blogController.create_page);
router.get("/blogs/about", authenticate, blogController.about_page);

router.post("/blogs", authenticate, blogController.postBlog);

router.get("/blogs/:id", authenticate, blogController.getById);
router.delete("/blogs/:id", authenticate, blogController.deleteId);

router.put("/blogs/:id", authenticate, blogController.updateId);

module.exports = router;
