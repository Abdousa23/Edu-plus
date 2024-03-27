const User = require("../models/user");
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
};
// Regex verification and handling of the password and pfp later y
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, username, email, password, phonenumber } =
        req.body;
    const pfp = req.fileUrls;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    try {
        const user = await User.findById(id);
        const prevPfpUrl = user.pfp;
        if (
            prevPfpUrl.toString() !==
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        ) {
            await cloudinary.uploader.destroy(publicId);
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                firstname,
                lastname,
                username,
                email,
                password: hashedPass,
                phonenumber,
                pfp, ///I dont think that this is an efficient way...
            },
            { new: true }
        ); // { new: true } returns the updated document

        res.status(200).json(updatedUser);
        console.log("gg");
    } catch (error) {
        res
            .status(500)
            .json({ error: error.message, message: "Something went wrong" });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const User = await User.findByIdAndDelete(id);
        res.status(200).json(User);
    } catch {
        res.status(500).json({ error: error, mssage: "somthing gooes wrong " });
    }
};

const changeRoles = async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { roles: role },
            { new: true }
        );
        res
            .status(200)
            .json({ user, message: `User role has been changed to ${role}` });
    } catch {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
};

const addCourseToUser = async (req, res) => {
    const { id } = req.params;
    const { courseId } = req.body.courseId;
    try {
        const addCourse = User.findByIdAndUpdate(
            id,
            { $push: { purchasedcourses: courseId } },
            { new: true }
        );
        res.status(200).json(addCourse);
    } catch {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}

const getUserById = async (req,res)=>{
    const {id}=req.params
    try{
        const user = await User.findById(id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error:error,message:"Something went wrong"})
}}

// const getUserById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const user = await User.findById(id);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: error, message: "Something went wrong" });
//     }
// };
const getUserByName = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.find({
            username: { $regex: username, $options: "i" },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
};

module.exports={
    updateUser,
    deleteUser,
    changeRoles,
    addCourseToUser,
    getAllUsers,
    getUserById,
    getUserByName,
};
