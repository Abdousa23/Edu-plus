const cloudinary = require("cloudinary").v2
require('dotenv').config()

cloudinary.config({
    could_name : "dqnwniezl",
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET_KEY,
    secure : true
})

module.exports = cloudinary