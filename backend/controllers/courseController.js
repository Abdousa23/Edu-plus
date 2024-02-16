const Course = require('../models/Course');

const getAllCourses = async (req, res) => {
    try {
        
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}

const getCoursesByName = async (req, res) => {
    const {name} = req.body
    try {
        const courses = await Course.find({ name: { $regex: name, $options: 'i' } })
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
// const get all categories filter catgeroies
const getCourseById = async (req, res) => {
    const {id} = req.params
    try {
        const course = await Course.findById(id)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const addOfflineCourse =async (req, res) => {
    const {title,description,category,price,level,language,location,availableSeats} = req.body
    const owner = req.user;
    try {
        const course = await Course.create({title,description,category,price,owner,level,language,location,availableSeats})
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const addOnlineCourse =async (req, res) => {
    const {title,description,category,price,level,language} = req.body
    const owner = req.user;
    try {
        const course = await Course.create({title,description,category,price,owner,level,language})
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const addOnlinelesson =async (req, res) => {
    const courseId = req.params.courseId; // Assuming courseId is passed as a parameter
    const { title, content, duration } = req.body;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const lesson = new Lesson({ title, content, duration, course: courseId });
        await lesson.save();

        course.lessons.push(lesson._id); 
        await course.save();

        res.status(200).json({ course, lesson });
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}
const updateCourse =async (req, res) => {
    const {id} = req.params
    const {name,description,category,price} = req.body
    try {
        const course = await Course.findByIdAndUpdate(id,{name,description,category,price})
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const deleteCourse =async (req, res) => {
    const {id} = req.params
    try {
        const course = await Course.findByIdAndDelete(id)
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const getCoursesByCategory = async (req, res) => {
    const {category} = req.body
    try {
        const courses = await Course.find({ category: { $regex: category, $options: 'i' } })
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
    addOfflineCourse,
    addOnlineCourse,
    addOnlinelesson
}