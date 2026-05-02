const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/signUpController");

router.route("/").post(userRegister);

module.exports = router;
