const { model } = require("mongoose");
const userSchema = require("../schema/userSchema");

let User = model("User", userSchema);

module.exports = User;
