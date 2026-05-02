const {Schema} = require('mongoose');

const certificateSchema = Schema({
    title : String,
    url : String,
    thumbnail : String
});

module.exports = certificateSchema