const router = require("express").Router();
const authController = require("../controllers/validateController");

router.get("/login", authController.login);
router.get("/signup", authController.createUser);

router.post("/login", authController.logged);
router.post("/signup", authController.signUp);

module.exports = router;
