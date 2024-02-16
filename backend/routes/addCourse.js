const router = require('express').Router();
const User = require('../models/course');
const addCourseController= require('../controllers/addCourseController')
require('dotenv').config();
router.post('/addCourse',addCourseController.addCourse)


module.exports = router




// const newCourse = new Course({
//   title: 'back-end course ',
//   type: 'Online',
//   description: 'Description',
//   schoolname: 'Your School Name',
//   teacher: 'Teacher Name',
//   chapters: [
//     { title: 'Chapter 1', order: 1 },
//     { title: 'Chapter 2', order: 2 },
//   ],
//   lessons: [
//     { title: 'Lesson 1', order: 1 },
//     { title: 'Lesson 2', order: 2 },
//   ],
//   level: 'Intermediate',
//   language: 'English',
//    categorie: 'Programming',
//   studentEnrolled: 100,
//   rating: 4.5,
//   reviews: [
//     { username: 'User1', rating: 5, reviewText: 'Great course!', date: new Date() },
//     { username: 'User2', rating: 4, reviewText: 'Enjoyed the content.', date: new Date() },
//   ],
//   imageUrl: 'https://example.com/course-image.jpg',
//   price: 49.99,
// });

