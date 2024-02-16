const mongoose = require('mongoose');
const chapterSchema = new mongoose.Schema({
    title: String,
    description: String,
    order: Number,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = chapterSchema;
