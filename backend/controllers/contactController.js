const transporter = require("../config/nodemailer");
const { mailValidation } = require("../middleware/validation");
const wrapAsync = require("../middleware/wrapAsync");
exports.sendMail = wrapAsync(async (req, res) => {
  await mailValidation.validateAsync(req.body);
  let { name, lastName, mail, sub, msg } = req.body;
  const info = await transporter.sendMail({
    from: `${name} <diyankhan33@gmail.com>`, // Visible From: header
    to: "diyankhan33@gmail.com",
    replyTo: mail, // Visible To: header
    subject: sub,
    text: `Name : ${name} ${lastName} \n
             From : ${mail} \n 
             Message : ${msg}
      `,
  });
  return res.status(201).json({
    success: true,
    message: "Mail sent successfully",
  });
});
