const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/upload");
const isLoggedIn = require("../middleware/authenticate");

const {
  addProject,
  getProject,
  deleteProject,
  getDetailedProject,
} = require("../controllers/projectController");

router
  .route("/")
  .get(getProject)
  .post(isLoggedIn, upload.single("img"), addProject)
  .delete(isLoggedIn, deleteProject);

router.route("/:id").get(getDetailedProject);

module.exports = router;
