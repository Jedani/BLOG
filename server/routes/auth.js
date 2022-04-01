const router = require("express").Router();
const authController = require("../controllers/controller");

router.post("/signup", authController.signUp);

module.exports = router;
