const router = require("express").Router();
const authController = require("../controllers/validateController");

router.post("/signup", authController.signUp);

module.exports = router;
