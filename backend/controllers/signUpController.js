const wrapAsync = require("../middleware/wrapAsync");
const User = require("../model/userModel");

exports.userRegister = wrapAsync(async (req, res) => {
  let { email, password } = req.body;
  const user = new User({ email });
  await User.register(user, password);
  console.log("User registered successfully");
  res.status(201).json({
    success: true,
    message: "User registered successfully",
  });
});
