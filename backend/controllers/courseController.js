const Course = require('../models/course');
const Category = require('../models/category');
const User = require('../models/user');
const Resource = require('../models/resources');
const Lesson = require('../models/lesson');
const { ObjectId } = require('mongoose').Types;
const cloudinary = require("../utils/cloudinary")

const lessonAdder = async (uploadResult , lessons , course) =>{
    for (let i = 0; i < uploadResult.length; i++) {
        console.log('this is uploadResult : ', uploadResult.length)
        console.log('this is i : ', i)
        for (let j = 0; j < lessons.length; j++) {
            console.log('this is j : ', j  )
            console.log(lessons[0].videoUrl.videoName ,  uploadResult[0].original_filename+'.'+ uploadResult[0].format)
            if (lessons[j].videoUrl.videoName == uploadResult[0].original_filename+'.'+ uploadResult[0].format) {
                console.log(lessons[j] , uploadResult[i])
                const lesson = new Lesson({ title: lessons[j].title, description: lessons[j].description, videoUrl: uploadResult[i].secure_url, publicId: uploadResult[i].public_id, course: course._id })
                await lesson.save()
                console.log(lesson)
                await course.lessons.push(lesson._id)
            }
        }
    }
}

const getAllCourses = async (req, res) => {
    try {

        const courses = await Course.find()
        console.log(courses)
        console.log("ssss")
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong" })
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
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
// const get all categories filter catgeroies
const getCourseById = async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        if (!ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Course not found" })
        }
        console.log("hhhh")
        const course = await Course.findById(id).populate("owner").populate('lessons')
        console.log(course)


        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong" })
    }
}
const addOfflineCourse = async (req, res) => {
    const { title, description, category, price, level, language, location, availableSeats } = req.body
    const owner = req.user;
    try {
        const courseCategory = await Category.findOne({ name: category })
        const user = await User.findOne({ username: owner })
        if (!user) {
            return res.status(404).json({ message: "something wrong , user not found please reconnect to your account" })
        }
        if (!courseCategory) {
            return res.status(404).json({ message: "Category not found , please choose an existing category" })
        }
        const course = await Course.create({ title, description, category: courseCategory._id, price, owner: user._id, level, language, location, availableSeats })
        await course.save()
        courseCategory.courses.push(course._id)
        await courseCategory.save()
        user.courses.push(course._id)
        await user.save()
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
const addOnlineCourse = async (req, res) => {
    const { title, description, category, price, level, language , type } = req.body
    console.log(req.files)
    const lessons = JSON.parse(req.body.lesson)
    /* console.log('else : ' , title , category) */

    const ownerId = req.user;
    try {
        const courseCategory = await Category.findOne({ name: category })
        const user = await User.findOne({ username: ownerId })
        if (!user) {
            return res.status(404).json({ message: "something wrong , user not found please reconnect to your account" })
        }
        if (!courseCategory) {
            return res.status(404).json({ message: "Category not found , please choose an existing category" })
        }
        const id = courseCategory?._id
        const course = new Course({ title, description, category: id, price, owner: user._id, level, language , type })
        courseCategory.courses.push(course._id)
        await courseCategory.save()
        user.courses.push(course._id)
        await user.save()
        if (req.files) {
            console.log(req.files)
            let uploadResult = req.files.map(async (file) => {
                try {
                    return await cloudinary.uploader.upload(file.path, { resource_type: "auto" });
                } catch (err) {
                    console.log(err);
                }
            });
            uploadResult = await Promise.all(uploadResult);
/*             for (let i = 0; i < uploadResult.length; i++) {
                for (let j = 0; j < lessons.length; j++) {
                    if (lessons[j].videoUrl == uploadResult[i].original_filename) {
                        const lesson = new Lesson({ title: lessons[j].title, description: lessons[j].description, videoUrl: uploadResult[i].secure_url, publicId: uploadResult[i].public_id, course: course._id })
                        await lesson.save()
                        console.log(lesson)
                        course.lessons.push(lesson._id)
                    }
                }
            } */
            await (lessonAdder(uploadResult , lessons , course))
            await course.save()
            console.log(course)
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
const addOnlinelesson = async (req, res) => {
    const courseId = req.params.courseId; // Assuming courseId is passed as a parameter
    const { title, description } = req.body;
    const result = req.fileUrl;
    const videoUrl = result

    const username = req.user;
    try {
        const course = await Course.findById(courseId);
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ message: "something wrong , user not found please reconnect to your account" })
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
const updateCourse = async (req, res) => {
    const { courseId } = req.params
    console.log(courseId);
    const { title, description, category, lessons, level, language, imageUrl, location, date, price } = req.body
    try {
        // const course = await Course.findById(courseId)
        const course = await Course.findByIdAndUpdate(courseId, { title, description, category, lessons, level, language, imageUrl, location, date, price }, { new: true })
        console.log(course);
        await course.save()
        console.log(course);
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
const deleteCourse = async (req, res) => {
    const { id } = req.params
    try {
        const course = await Course.findById(id)
        if (!course) {
            return res.status(201).json({ message: "Course doesn't exist" })
        }
        const result = await Course.findByIdAndDelete(id)
        res.status(200).json("Course has been deleted successfully")
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
const updateLesson = async (req, res) => {
    const { id } = req.params
    console.log(id);
    const { title, description, videoUrl } = req.body
    try {
        const course = await Course.findOne({ title: courseName })
        if (!title || !description || !videoUrl || !courseName) {
            return res.status(404).json({ message: "All fields are required" })
        }
        if (!course) {
            return res.status(404).json({ message: "Course doesn't exist" })
        }
        const courseId = course?._id
        const lesson = await Lesson.findByIdAndUpdate(id, { title, description, videoUrl, course: courseId }, { new: true })
        console.log(lesson);
        await lesson.save()
        console.log(lesson);
        res.status(200).json(lesson)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
const deleteLesson = async (req, res) => {
    const { id } = req.params
    try {
        const lesson = await Lesson.findById(id)
        if (!lesson) {
            return res.status(201).json({ message: "Course doesn't exist" })
        }
        const result = await Lesson.findByIdAndDelete(id)
        res.status(200).json("lesson has been deleted successfully")
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}
const getCoursesByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        if (!ObjectId.isValid(category)) {
            return res.status(404).json({ message: "category not found" })
        }
        const course = await Course.find({ category: category })
        if (!course) {
            return res.status(404).json({ message: "there is no course in this category" })
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }
}

const getCourseResources = async (req, res) => {
    const { courseId } = req.params
    const username = req.user
    console.log('ssfadspkmde')
    console.log(courseId)
    console.log(username)
    try {
        const resources = await Resource.find({ course: courseId })
        const user = await User.findOne({ username: username })
        const course = await Course.findById(courseId)
        console.log(resources)
        console.log('sadasdqw')
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        if (!user.courses.includes(courseId)) {
            return res.status(403).json({ message: "You are not enrolled in this course,you can't access the resources" })
        }
        if (resources.length === 0) {
            return res.status(404).json({ message: "No resources found for this course" })
        }

        res.status(200).json(resources)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }

}

/* const buyCourse = async (req, res) => {
    const username = req.user
    const courseId = req.params.courseId
    try {
        const user = await User.findOne({
            username: username
        })
        const course = await Course.findById(courseId)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }
        if (user.courses.includes(courseId)) {
            return res.status(403).json({ message: "You are already enrolled in this course" })
        }
        user.purchasedcourses.push(courseId)
        course.studentEnrolled.studentsNumber += 1}
        catch(error){
            res.status(500).json({error:error,message:"Something went wrong"})
        }
    } */

const getEnrolledCourses = async (req, res) => {
    const username = req.user
    const user = await User.findOne({ username: username })
    userId = JSON.stringify(user._id)
    const totalCourses = await Course.find({ owner: user._id })
    console.log(totalCourses)
    const studentsNumberArr = (totalCourses.map(course => { return course.studentEnrolled.studentsNumber }))
    console.log(studentsNumberArr)
    const studentsNumber = studentsNumberArr.reduce((a, b) => a + b, 0)
    res.status(200).json({ studentsNumber })
}

const getAllOnlineCourses = async (req, res) => {
    const courses = await Course.find({ type: "online" }).exec()
    res.status(200).json(courses)
}

const getAllOfflineCourses = async (req, res) => {
    const courses = await Course.find({ type: "inperson" }).exec()
    res.status(200).json(courses)
}

const getTeacherOnlineCourses = async (req, res) => {
    const username = req.user
    const user = await User.findOne({ username: username })
    const courses = await Course.find({ owner: user._id, type: "online" }).exec()
    res.status(200).json(courses)
}

const getTeacherOfflineCourses = async (req, res) => {
    const username = req.user
    const user = await User.findOne({ username: username })
    const courses = await Course.find({ owner: user._id, type: "inperson" }).exec()
    res.status(200).json(courses)
}

const getTeacherAllCourses = async (req, res) => {
    const username = req.user
    const user = await User.findOne({ username: username })
    const courses = await Course.find({ owner: user._id }).exec()
    res.status(200).json(courses)
}

module.exports = {
    getTeacherAllCourses,
    getTeacherOfflineCourses,
    getTeacherOnlineCourses,
    getAllOnlineCourses,
    getAllOfflineCourses,
    getEnrolledCourses,
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
    addOnlinelesson,
    getCourseResources,
}