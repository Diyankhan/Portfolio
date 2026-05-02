const { Schema } = require("mongoose");

let currYear = new Date().getFullYear();

const addProjectSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  year: {
    type: Number,
    required: true,
    min: 2020,
    max: currYear,
  },
  about: {
    type: String,
    minLength: 300,
    maxLength: 700,
  },
  img: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
});

module.exports = { addProjectSchema };
