const User = require("../models/user");
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require('cloudinary')
const Course = require("../models/course");
const ROLES_LIST = require("../config/rolesList");

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
    const { firstname, lastname, username, email, oldPassword, password, country, city, bio, phonenumber, id } =
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
        console.log('user delete')
        const user = await User.findByIdAndDelete(id);
        console.log(user)
        res.status(200).json(user);
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
        res.status(200).json({ courses: courses, user: user });
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}

const getAllUsersByRole = async (req, res) => {
    const { role } = req.params;
    try {
        switch (role) {
            case 'teacher':
                const teachers = await User.find({
                    'roles.School': ROLES_LIST.School,
                });
                let filteredteachers = teachers.filter((teacher) => {
                    return !teacher.roles.Admin && !teacher.roles.Editor
                });
                res.status(200).json(filteredteachers);
                break;
            case 'mod':
                const mods = await User.find({
                    'roles.Editor': ROLES_LIST.Editor,
                });
                let filteredEditors = mods.filter((teacher) => {
                    return !teacher.roles.Admin
                });
                res.status(200).json(filteredEditors);
                break;
            case 'student':
                const users = await User.find({
                    'roles.User': ROLES_LIST.User,
                });
                let filteredUsers = users.filter((teacher) => {
                    return !teacher.roles.Admin && !teacher.roles.School && !teacher.roles.Editor
                });
                res.status(200).json(filteredUsers);
                break;
            case 'admin':
                const admins = await User.find({
                    'roles.Admin': ROLES_LIST.Admin,
                });
                res.status(200).json(admins);
                break;
            default:
                res.status(404).json({ message: "Role not found" });
                break;
        }
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong" });
    }
};

const multipleDelete = async (req, res) => {
    const { ids } = req.body;
    try {
        const users = await User.deleteMany({ _id: { $in: ids } });
        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        if (users.deletedCount === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        if (users.deletedCount === 1) {
            return res.status(200).json({ message: "User deleted" });
        }
        if (users.deletedCount > 1) {
            return res.status(200).json({ message: "Users deleted successfuly", users });
        }

    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}
const addMod = async (req, res) => {
    const { ids } = req.body;
    console.log("testing")
    console.log(ids)
    try {
        const users = await User.updateMany({ _id: { $in: ids } }, { $set: { 'roles.Editor': ROLES_LIST.Editor } });
        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        if (users.nModified === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        if (users.nModified === 1) {
            return res.status(200).json({ message: "User updated" });
        }
        if (users.nModified > 1) {
            return res.status(200).json({ message: "Users updated successfuly" });
        }
    } catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong" });
    }
}
const removeMod = async (req, res) => {
    const { ids } = req.body;
    console.log("testing")
    console.log(ids)
    try {
        const users = await User.updateMany({ _id: { $in: ids } }, { $unset: { 'roles.Editor': '' } });
         if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        if (users.nModified === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        if (users.nModified === 1) {
            return res.status(200).json({ message: "User updated" });
        }
        if (users.nModified > 1) {
            return res.status(200).json({ message: "Users updated successfuly" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Something went wrong" })
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
    getUserCourses,
    getAllUsersByRole,
    multipleDelete,
    addMod,
    removeMod
};
