const mongoose = require('mongoose');

const schema = mongoose.Schema
const lessonSchema = new schema({
    title: String,
    description: String,
    videoUrl: String,
    course : {
        type: schema.Types.ObjectId,
        ref: 'course'
    },
    publicId: {
      type: String,
      default: ''
    }
  });


const lessons = mongoose.model('Lessons', lessonSchema);

module.exports = lessons;
