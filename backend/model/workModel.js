const {model} = require('mongoose');
const {workSchema} = require("../schema/recentPostSchema")

const workModel = model("RecentPostModel", workSchema);

module.exports = {workModel}