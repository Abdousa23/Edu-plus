const { json } = require("express");
const cloudinary = require("../utils/cloudinary");
const videoupload = require("./multer");

const cloudinaryMW = async (req, res, next) => {
    try {
        if (req.file) {
        let result = await cloudinary.uploader.upload(req.file.path);
        req.fileUrls = result.secure_url;
        next();
        } else {
        next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
        success: false,
        message: "Server error",
        });
    }
    }

module.exports = cloudinaryMW;
