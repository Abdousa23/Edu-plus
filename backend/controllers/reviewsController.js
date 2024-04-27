const Course = require('../models/course')
const courses = require('../models/course')
const Review = require('../models/review')
const User = require('../models/user')


const adjustRating = async (course) => {
    const totalRatings = await Promise.all(course.reviews.map(async (review) => {
        const newR = await Review.findById(review._id)
        return newR.rating
    }))
    let tt = totalRatings.reduce((a, b) => a + b, 0)
    if(totalRatings.length===0){ tt = 0 }
    const reviewersNum = course.reviews.length
    if(reviewersNum!==0){
    course.rating = tt / reviewersNum
    }else{
        course.rating = 0
    }
    await course.save()
}


const addReview = async (req, res) => {
    const { rating, reviewText } = req.body
    const username = req.user
    const user = await User.find({ username: username })
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }
    const { courseId } = req.params///les say that we get the courseId from the params
    if (!username) {
        res.status(400).json({ 'message': "a logged in user is required to leave a review" })
    }
    if (!rating) {
        res.status(400).json({ 'message': "rating is required" })
    }
    const duplicateReview = await Review.find({ username: username, courseId: courseId })
    if (duplicateReview.length > 0) {
        return res.status(401).json({ message: "you have already reviewed this course" })
    }
    
    try {
        const course = await courses.findById(courseId)
        const newReview = new Review({
            username,
            rating,
            reviewText,
            courseId,
            courseOswner:course.owner
        })
        course.reviews.push(newReview)
        await newReview.save()
        await course.save()
        adjustRating(course)
        return res.status(200).json(newReview)

    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

const deleteReview = async (req, res) => {
    const { courseId } = req.params
    const username = req.user
    console.log(username)
    try {
        const review = await Review.find({username:username, courseId: courseId}).exec()
        console.log(review)
        if (!review || review.length === 0) {
            return res.status(404).json({ message: "review not found" })
        }
        const reviewId = review[0]._id.toString(); // Ensure review is not undefined before accessing its properties
        let course = await courses.findById(courseId).exec()
        console.log(course)
        const filteredArray = course.reviews.filter(Review => Review._id.toString() !== reviewId)
        course.reviews = filteredArray; // Update the reviews array with the filtered array
        await course.save()
        await Review.findByIdAndDelete(reviewId)
        await adjustRating(course)
        return res.status(200).json({ message: "review deleted" })
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

const updateReview = async (req, res) => {
    const { courseId } = req.params
    const { rating, reviewText } = req.body
    const username = req.user
    try {
        const course = await courses.findById(courseId)
        const review = await Review.find({ username: username, courseId: courseId }).exec()
        if (!review) {
            return res.status(404).json({ message: "review not found" })
        }

        if (rating) {
            review[0].rating = rating
        }
        if (reviewText) {
            review[0].reviewText = reviewText
        }
        await review[0].save()
        adjustRating(course)
        res.status(200).json({ message: "review updated" })
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

const getAllReviews = async (req, res) => {
    const { courseId } = req.params
    try {
        const course = await courses.findById(courseId)
        res.status(200).json(course.reviews)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

const getAllUserReviews = async (req,res) => {
    const {username} = req.params
    try {
        const reviews = await Review.find({username: username})
        if(!reviews){
            return res.status(404).json({message: "user not found"})
        }
        if(reviews.length===0){
            return res.status(404).json({message: "no reviews found"})
        }
        res.status(200).json(reviews)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

const getAllRatings = async (req, res) => {
    const username = req.user
    try {
        const courses = await Course.find({ owner: username })
        if (!courses) {
            return res.status(404).json({ message: "no courses found" })
        }
        let ratings = []
        for (let i = 0; i < courses.length; i++) {
            ratings.push(courses[i].rating)
        }
        res.status(200).json(ratings)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}
module.exports = { adjustRating,addReview, deleteReview, updateReview, getAllReviews,getAllUserReviews,getAllRatings }