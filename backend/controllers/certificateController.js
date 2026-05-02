const certificateModel = require("../model/certificateModel");
const wrapAsync = require("../middleware/wrapAsync");
const expressError = require("../expressError");

exports.getCertificate = wrapAsync(async (req, res) => {
  const certificates = await certificateModel.find({});
  return res.status(200).json({
    success: true,
    message: "Certificates fetched successfully",
    data: certificates,
  });
});
