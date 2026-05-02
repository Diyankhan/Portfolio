const {model} = require('mongoose');
const certificateSchema = require("../schema/certificateSchema")

const certificateModel = model("Certificate", certificateSchema );

module.exports = certificateModel;