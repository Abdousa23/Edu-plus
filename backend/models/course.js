const mongoose = require('mongoose');
const chapterSchema = require('./chapterSchema');
const lessonSchema = require('./lessonSchema');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    schoolname: {
        type: String,
    },
    teacher: {
        type: String,
        required: true,
    },
    chapters: [chapterSchema],
    lessons: [lessonSchema],
    level: {
        type: String,
    },
    language: {
        type: String,
    },
    categorie: {
        type: String,
    },
    studentEnrolled: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
    },
    reviews: [{
        username: {
            type: String,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        reviewText: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }],
    imageUrl: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
