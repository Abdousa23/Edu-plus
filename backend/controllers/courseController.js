const Course = require('../models/course');
const Category = require('../models/category');
const User = require('../models/user');
const Lesson = require('../models/lesson');
const { ObjectId } = require('mongoose').Types;
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}

const getCoursesByName = async (req, res) => {
    const { name } = req.params;
    console.log(name);
    try {
        const courses = await Course.find({ title: { $regex: name, $options: 'i' } });
        
        if (courses.length === 0) {
            return res.status(404).json({ message: "No courses found with the given name." });
        }
    res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
// const get all categories filter catgeroies
const getCourseById = async (req, res) => {
    const {id} = req.params
    console.log(id);
    try {
        if(!ObjectId.isValid(id)){
            return res.status(404).json({message:"Course not found"})
        }
        const course = await Course.findById(id)
       
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const addOfflineCourse =async (req, res) => {
    const {title,description,category,price,level,language,location,availableSeats} = req.body
    const owner = req.user;
    try {
    const courseCategory = await Category.findOne({name:category})
    const user = await User.findOne({username:owner})
    if(!user){
       return res.status(404).json({message:"something wrong , user not found please reconnect to your account"})
    }
    if(!courseCategory){
        return res.status(404).json({message:"Category not found , please choose an existing category"})
    }
        const course = await Course.create({title,description,category:courseCategory._id,price,owner:user._id,level,language,location,availableSeats})
        await course.save()
        courseCategory.courses.push(course._id)
        await courseCategory.save()
        user.courses.push(course._id)
        await user.save()
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const addOnlineCourse =async (req, res) => {
    const {title,description,category,price,level,language} = req.body
    const ownerId = req.user;
    try {
    const courseCategory = await Category.findOne({name:category})
    const user = await User.findOne({username:ownerId})
    if(!user){
       return res.status(404).json({message:"something wrong , user not found please reconnect to your account"})
    }
    if(!courseCategory){
        return res.status(404).json({message:"Category not found , please choose an existing category"})
    }
    const id = courseCategory?._id
        const course = await Course.create({title,description,category:id,price,owner:user._id,level,language})
        await course.save()
        courseCategory.courses.push(course._id)
        await courseCategory.save()    
        user.courses.push(course._id)
        await user.save()
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const addOnlinelesson =async (req, res) => {
    const courseId = req.params.courseId; // Assuming courseId is passed as a parameter
    const { title, description} = req.body;
    const result = req.fileUrl;
    const videoUrl = result
    
    const username = req.user;
    try {
        const course = await Course.findById(courseId);
        const user = await User.findOne({username:username})
        if(!user){
        return res.status(404).json({message:"something wrong , user not found please reconnect to your account"})
        }

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const lesson = new Lesson({ title, description, videoUrl, course: courseId });
        await lesson.save();

        course.lessons.push(lesson._id); 
        await course.save();

        res.status(200).json({ course, lesson });
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}
const updateCourse =async (req, res) => {
    const {courseId} = req.params
    console.log(courseId);
    const {title,description,category,lessons,level,language,imageUrl,location,date,price} = req.body
    try {
        // const course = await Course.findById(courseId)
        const course = await Course.findByIdAndUpdate(courseId,{title,description,category,lessons,level,language,imageUrl,location,date,price},{ new: true })
        console.log(course);
        await course.save()
        console.log(course);
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const deleteCourse =async (req, res) => {
    const {id} = req.params
    try {
        const course = await Course.findById(id)
        if(!course){
            return res.status(201).json({message:"Course doesn't exist"})
        }
        const result = await Course.findByIdAndDelete(id)
        res.status(200).json("Course has been deleted successfully")
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const updateLesson =async (req, res) => {
    const {id} = req.params
    console.log(id);
    const {title,description,videoUrl} = req.body
    try {
        // const course = await Course.findById(courseId)
        const lesson = await Lesson.findByIdAndUpdate(courseId,{title,description,videoUrl},{ new: true })
        console.log(lesson);
        await lesson.save()
        console.log(lesson);
        res.status(200).json(lesson)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const deleteLesson =async (req, res) => {
    const {id} = req.params
    try {
        const lesson = await Lesson.findById(id)
        if(!lesson){
            return res.status(201).json({message:"Course doesn't exist"})
        }
        const result = await Lesson.findByIdAndDelete(id)
        res.status(200).json("lesson has been deleted successfully")
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const getCoursesByCategory = async (req, res) => {
    const {category} = req.params;
    try {
        if(!ObjectId.isValid(category)){
            return res.status(404).json({message:"category not found"})
        }
        const course = await Course.find({category:category})
        if(!course ){
            return res.status(404).json({message:"there is no course in this category"})
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
module.exports = {
    getAllCourses,
    getCoursesByName,
    getCourseById,
    getCoursesByCategory,
    updateCourse,
    deleteCourse,
    updateLesson,
    deleteLesson,
    addOfflineCourse,
    addOnlineCourse,
    addOnlinelesson
}