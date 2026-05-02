const { projectModel } = require("../model/projectModel");
const { projectValidation } = require("../middleware/validation");
const wrapAsync = require("../middleware/wrapAsync");
const expressError = require("../expressError");
const { default: mongoose } = require("mongoose");

exports.addProject = wrapAsync(async (req, res) => {
  await projectValidation.validateAsync(req.body);
  if (!req.file) {
    throw new expressError(400, "Please upload Img");
  }
  if (req.file.size > 1024 * 1024) {
    throw new expressError(400, "Img size can't be greater than 1MB");
  }

  const { title, category, year, about, projectLink } = req.body;

  const project = new projectModel({
    title: title,
    category: category,
    year: year,
    about: about,
    img: req.file.path,
    projectLink: projectLink,
  });

  await project.save();
  console.log("Project added successfully");
  return res.status(201).json({
    success: true,
    message: "Project added successfully",
  });
});

exports.getProject = wrapAsync(async (req, res) => {
  const projects = await projectModel.find({});
  return res.status(200).json({
    success: true,
    message: "Project fetched successfully",
    data: projects,
  });
});

exports.deleteProject = wrapAsync(async (req, res) => {
  await projectModel.deleteMany({});
  return res.status(200).json({
    success: true,
    message: "All project deleted successfully",
  });
});

exports.getDetailedProject = wrapAsync(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    throw new expressError(404, "Invalid project Id");
  }
  const detailedProject = await projectModel.findById(id);
  if (!detailedProject) {
    throw new expressError(404, "Project details not found");
  }
  return res.status(200).json({
    success: true,
    message: "Project details fetched successfully",
    data: detailedProject,
  });
});
