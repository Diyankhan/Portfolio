const {model} = require('mongoose');
const {recentPostSchema} = require("../schema/recentPostSchema")

const recentPostModel = model("RecentPostModel", recentPostSchema);

module.exports = {recentPostModel}