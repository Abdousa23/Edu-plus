const User = require('../models/user');
require('dotenv').config();
const express=require("express") 


const updateUser = async (req, res) => {
    const { id } = req.params
    const { firstname, lastname, username, email, password, phonenumber } = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstname,
            lastname,
            username,
            email,
            password,
            phonenumber
        }, { new: true }) // { new: true } returns the updated document

        res.status(200).json(updatedUser)
        console.log("gg")

    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong" })
    }
}


const delateUser = async (req,res)=>{
    const {id}=req.params
    try{
        const User = await User.ByIdAndDelete(id)
        res.status(200).json(User)
    }catch{
        res.status(500).json({error:error,mssage:"somthing gooes wrong "})
    }
}

    const changeRols = async (req,res)=>{
        const {id}=req.params
    const {roles} = req.body
    try{
        const User = await User.findByIdAndUpdate(role)
        res.status(200).json(user)
    }catch{
        res.status(500).json({error:error,message:"Something went wrong"})
    }}
    module.exports={
        updateUser,
        delateUser,
        changeRols
    }