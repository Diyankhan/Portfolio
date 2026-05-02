const Joi = require("joi");

let currYear = new Date().getFullYear();

const projectValidation = Joi.object({
  title: Joi.string().trim().required(),
  category: Joi.string().empty("").optional(),
  year: Joi.number().integer().min(2020).max(currYear).required(),
  about: Joi.string().trim().min(300).max(700).required(),
  projectLink: Joi.string().required(),
});

const mailValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  mail: Joi.string().required(),
  sub: Joi.string().min(5).max(30).required(),
  msg: Joi.string().min(10).required(),
});
module.exports = { projectValidation, mailValidation };
