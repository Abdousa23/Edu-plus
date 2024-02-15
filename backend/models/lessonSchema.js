const mongoose = require('mongoose');
const lessonSchema = new mongoose.Schema({
    title: {title: String,
        required: true,},

    description: String,
    videoUrl: String,
    duration: Number,
    order: Number,
    
  });

const Course = mongoose.model('Course', courseSchema);

module.exports =lessonSchema;
