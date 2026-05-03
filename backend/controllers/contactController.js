require("dotenv").config();
const expressError = require("../expressError");
const { mailValidation } = require("../middleware/validation");
const wrapAsync = require("../middleware/wrapAsync");
const { Resend } = require("resend");

const resend = new Resend(process.env.MAIL_API);

exports.sendEmail = wrapAsync(async (req, res) => {
  await mailValidation.validateAsync(req.body);
  let { name, lastName, mail, sub, msg } = req.body;
  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "diyankhan33@gmail.com",
    reply_to: mail,
    subject: sub,
    text: `Name: ${name} ${lastName}\nFrom: ${mail}\nMessage: ${msg}`,
  });
  if (!data || data.error) {
    throw new expressError(500, "Mail failed");
  }
  return res.status(200).json({
    success: true,
    message: "Mail sent successfully",
  });
});
