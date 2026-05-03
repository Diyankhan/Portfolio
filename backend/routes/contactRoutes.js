    const express = require("express");
    const router = express.Router();
    const { sendMail } = require("../controllers/contactController");
    const {mailValidation} = require("../middleware/validation");

    router.route("/").post(sendMail);

    module.exports = router;
