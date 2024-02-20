const User = require('../models/user');
require('dotenv').config();
const express=require("express") 

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().exec()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" })
    }

}
const updateUser = async (req, res) => {
    const { id } = req.params
    const { firstname, lastname, username, email, password, phonenumber , pfp } = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstname,
            lastname,
            username,
            email,
            password,
            phonenumber,
            pfp,
        }, { new: true }) // { new: true } returns the updated document

        res.status(200).json(updatedUser)
        console.log("gg")

    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong" })
    }
}


const deleteUser = async (req,res)=>{
    const {id}=req.params
    try{
        const User = await User.findByIdAndDelete(id)
        res.status(200).json(User)
    }catch{
        res.status(500).json({error:error,mssage:"somthing gooes wrong "})
    }
}

    const changeRoles = async (req,res)=>{
        const {id}=req.params
    const {roles} = req.body
    try{
        const User = await User.findByIdAndUpdate(role)
        res.status(200).json(user)
    }catch{
        res.status(500).json({error:error,message:"Something went wrong"})
    }}

const addCourseToUser = async (req , res)=>{
    const {id} = req.params
    const {courseId} = req.body.courseId
    try{
        const addCourse = User.findByIdAndUpdate(id,{$push:{purchasedcourses:courseId}},{new:true})
        res.status(200).json(addCourse)
    }catch{
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}


module.exports={
    updateUser,
    deleteUser,
    changeRoles,
    addCourseToUser,
    getAllUsers
}