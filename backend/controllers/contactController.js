const transporter = require("../config/nodemailer");
const expressError = require("../expressError");
const { mailValidation } = require("../middleware/validation");
const wrapAsync = require("../middleware/wrapAsync");
exports.sendMail = wrapAsync(async (req, res) => {
  try {
    await mailValidation.validateAsync(req.body);

    let { name, lastName, mail, sub, msg } = req.body;

    await transporter.sendMail({
      from: `${name} <diyankhan33@gmail.com>`,
      to: "diyankhan33@gmail.com",
      replyTo: mail,
      subject: sub,
      text: `Name: ${name} ${lastName}\nFrom: ${mail}\nMessage: ${msg}`,
    });

    return res.status(201).json({
      success: true,
      message: "Mail sent successfully",
    });

  } catch (err) {
    console.log("REAL ERROR:", err); 
    throw new expressError(500, "Mail failed")
  }
});
