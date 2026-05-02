const {Schema} = require('mongoose');

const recentPostSchema = Schema({
    title : String,
    date : String,
    category : String,
    about : String
})

module.exports = {recentPostSchema};