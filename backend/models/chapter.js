const mongoose = require('mongoose');

const schema = mongoose.Schema
const chapterSchema= new schema({
    title: String,
    description: String,
    order: Number,
});




const chapter = mongoose.model('chapter', chapterSchema);
module.exports = chapter ;
