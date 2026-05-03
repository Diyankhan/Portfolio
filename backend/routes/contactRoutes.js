const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/contactController");
const { mailValidation } = require("../middleware/validation");
const limiter = require("../middleware/mailLimit");

router.route("/").post(limiter, sendEmail);

module.exports = router;
