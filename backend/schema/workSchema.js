const {Schema} = require('mongoose');

const workSchema = Schema({
    title : String,
    year : Number,
    category : String,
    about : String
})

module.exports = {workSchema};