require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "diyankhan33@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports = transporter;
