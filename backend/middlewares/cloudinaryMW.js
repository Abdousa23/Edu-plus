const { json } = require("express");
const cloudinary = require("../utils/cloudinary");
const videoupload = require("./multer");

const cloudinaryMW = async (req, res, next) => {
    
    try {
        if (req.file) {
        let result = await cloudinary.uploader.upload(req.file.path);
        req.fileUrls = result.secure_url;
        req.publicId = result.public_id
        next();
        } else {
        
        next();
        }
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Server error",
        });
    }
    }
    const cloudinaryForVideos = async (req, res, next) => {
        try {
            if (req.file) {
                let result = await new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_large(
                        req.file.path,
                        {
                            resource_type: 'video',
                        },
                        (error, result) => {
                            if (error) {
                                reject(error);
                            }
                            resolve(result);
                        }
                    );
                })
                req.fileUrls = result.secure_url;
                next();
            } else {
                next();
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Server error",
            });
        }
    }

/*     app.post('/upload',fileExtLimiter ,upload.single("image"),////the order to use once you want to upload a photo ,a file , or a video
cloudinaryMW,  ,(req, res) => {
    console.log(req.fileUrls);
    res.send('Image uploaded');
}); */

module.exports = cloudinaryMW , cloudinaryForVideos;
