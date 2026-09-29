const express = require("express");
const router = express.Router();
const userController = require("../user/controllers/user.controller");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/me", userController.me);
router.post("/refresh", userController.refresh);

module.exports = router;
