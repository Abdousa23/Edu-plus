const User = require("../models/user");
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require('cloudinary')
const Course = require("../models/course");

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
    const { firstname, lastname, username, email,oldPassword, password, country, city, bio, phonenumber, id } =
        req.body;
        console.log(req.body)
    const pfp = {
        url: req.fileUrls,
        publicId: req.publicId
    };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = password && await bcrypt.hash(password, salt);
   
    if (password && !passwordRegex.test(password)) {
        return res.status(400).json({
            message:
                "Password must be at least 8 characters long, contain at least one letter, and one number,and a symbol",
        });
    }
    if (email && !emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email" });
    }
    
    try {
        const user = await User.findById(id);
        const match = await bcrypt.compare(oldPassword, user.password);
        const duplicatedUser = await User.find({ _id: { $ne: id }, $or: [{ email: email }, { username: username }] });
        const prevPfpUrl = user.pfp.url;
        console.log(user.password)
        console.log(oldPassword)
        console.log(match)
        console.log(password)
        if (password && !match) {
             console.log(oldPassword)
             console.log(match)
            return res.status(401).json({ message: 'Old password is incorrect' });
        }
        if (duplicatedUser.length !== 0) {
            return res.status(409).json({ 'message': "Username or email already used " });
        }
        
        if (
            prevPfpUrl.toString() !==
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        ) {
            if (pfp.url && pfp.publicId) {
                const result = await cloudinary.uploader.destroy(user.pfp.publicId)
            };
        }

        const currentInformation = {
            firstname,
            lastname,
            username,
            email,
            password: hashedPass,
            phonenumber,
            pfp,
            country,
            city,
            bio
        }
        const filteredInformation = Object.entries(currentInformation).reduce((acc, [key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                if (typeof value === 'object' && !Object.values(value).every(v => v !== undefined)) {
                    console.log('no profile pic provided')
                } else {
                    acc[key] = value;
                }
            }
            return acc;
        }, {});
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { ...filteredInformation },
            { new: true } // returns the updated document
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'No user found with this id' });
        }
        const newRefreshToken = jwt.sign(
            { username: updatedUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        updatedUser.refreshToken = newRefreshToken;
        await updatedUser.save();
        res.clearCookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'Strict' });
        res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'Strict', maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json(updatedUser);
        console.log("gg")
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
};
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
};
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
const getUserCourses = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        const courses = await Course.find({ _id: { $in: user.courses } });
        if (!courses) {
            return res.status(404).json({ message: "No courses found" });
        }
        if (!user) {
            return res.status(404).json({ message: "No user found" });
        }
        res.status(200).json({courses:courses,user:user});
    }catch(error){
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}

module.exports = {
    updateUser,
    deleteUser,
    changeRoles,
    addCourseToUser,
    getAllUsers,
    getUserById,
    getUserByName,
    getUserCourses
};
