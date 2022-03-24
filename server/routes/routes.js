const express = require("express");
const blogController = require("../controllers/controller");

const router = express.Router();

router.get("/", blogController.blog_index);
router.get("/blogs", blogController.blogs_page);
router.get("/login", blogController.login_page);
router.get("/signup", blogController.sign_up);
router.get("/create", blogController.create_page);

module.exports = router;
