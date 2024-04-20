const User = require('../models/user')
const Course = require('../models/course')
const moment = require('moment'); // Import moment.js for date manipulation
const startOfWeek = moment().startOf('week').toDate(); // Get the start of the current week
const endOfWeek = moment().endOf('week').toDate(); // Get the end of the current week

const totalUsers = async (req,res)=>{
    try {
        const users = await User.find();
        let total = users.length;
        res.status(200).json({totalUsers:total});


    } catch (error) {
        console.log("error in the total result controller")
        console.log(error)
        res.status(500).json({error:"an error occured while getting the total result"})
        
    }
}


const totalSeles = async (req, res) => {
    try {
        const users = await User.find();
        let total = 0;
        users.forEach((user) => {
            user.purchasedcourses.forEach((course) => {
                total += course.price;
            });
        });
        res.status(200).json({ totalSales: total });
    } catch (error) {
        console.log("error in the total sales controller");
        console.log(error);
        res.status(500).json({ error: "an error occurred while calculating the total sales" });
    }
};



const totalCourses = async (req,res)=>{
    try {
        const courses = await Course.find();
        let total = 0;
        const totalCourses = courses.length;
        res.status(200).json({ totalCourses: total });
    } catch (error) {
        console.log("error in the total sales controller");
        console.log(error);
        res.status(500).json({ error: "an error occurred while calculating the total sales" });
    }
}


const newUsersOfWeek = async (req, res) => {

    try {
        const users = await User.find({ createdAt: { $gte: startOfWeek, $lte: endOfWeek } });
        res.status(200).json({ newUsers: users.length });
    } catch (error) {
        console.log("error in the new users of the week controller");
        console.log(error);
        res.status(500).json({ error: "an error occurred while calculating the new users of the week" });
    }
};


module.exports = {totalUsers,totalSeles, totalCourses, newUsersOfWeek}