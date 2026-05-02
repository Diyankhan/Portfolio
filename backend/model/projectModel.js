const {model} = require("mongoose");
const {addProjectSchema} = require("../schema/addProjectSchema")

const projectModel = model("Addproject", addProjectSchema );

module.exports = {projectModel}