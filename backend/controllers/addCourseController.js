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

module.exports = {addCourse}