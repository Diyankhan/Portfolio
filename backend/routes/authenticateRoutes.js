const express = require("express");
const isLoggedIn = require("../middleware/authenticate");
const { authController } = require("../controllers/authController");
const router = express.Router();

router.route("/").get(isLoggedIn, authController);

module.exports = router;
