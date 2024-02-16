const mongoose = require('mongoose');

const schema = mongoose.Schema
const lessonSchema = new schema({
    title: String,
    description: String,
    videoUrl: String,
    duration: Number,
    order: Number,
    
  });




const Lessons = mongoose.model('Lessons', lessonSchema);

module.exports = Lessons;
