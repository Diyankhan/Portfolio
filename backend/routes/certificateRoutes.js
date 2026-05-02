const express = require("express");
const router = express.Router();
const { getCertificate } = require("../controllers/certificateController");

router.route("/").get(getCertificate);

module.exports = router;