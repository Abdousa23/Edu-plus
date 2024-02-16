const express = require('express');
const User = require('../models/course');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/course');
require('dotenv').config();


const addCourse = async (req, res) => { 
    
    const { title, type, description, schoolname, teacher, chapters, lessons, level , language,categorie, studentEnrolled,   rating, reviews, imageUrl,  price    }=req.body
    if(!title || !type || !description || !teacher || !chapters || !lessons  || !language ||! categorie ||     !price ){
        return res.status(400).json("re entrer les donner ")}
        try {
        const newCourse = new Course({
            title:req.body.title,
            type:req.body.type,
            description:req.body.description,
            schoolname:req.body.schoolname,
            teacher:req.body.teacher,
            chapters:req.body.chapters, 
            lessons:req.body.lessons,
            level:req.body.level , 
            language:req.body.language,
            categorie:req.body.categorie, 
            studentEnrolled:req.body.studentEnrolled, 
            rating:req.body.rating, 
            reviews:req.body.reviews, 
            imageUrl:req.body.imageUrl,  
            price:req.body.price
        })
        const Course = await newCourse.save();
        res.status(200).json(Course);
    }  catch(err){
        console.log(err)


    }}
router.post('/addCourse',addCourse)
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

