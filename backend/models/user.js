const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema ({
    firstname : {
        type : String,
        required : true,
        maxlength : 20,
        minlength : 2,
    },
    
    lastname : {
        type : String,
        required : true,
        maxlength : 20,
        minlength : 2
    },
    username : {
        type : String,
        required : true,
        maxlength : 15,
        minlength : 4,
        trim : true
    },
    roles : {
        User : {
            type : Number,
        },
        Admin : Number,
        Editor : Number,
        School : Number,

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    password : {
        type : String,
        required : true
    },
    courses : {
        type : schema.Types.ObjectId,
        ref : 'courses'
    },
    phonenumber : {
        type : String,///make it an Array later
        required : false,
        default : "",

    },
    refreshtoken : {
        type : Array[String],
        default : []
    }
} , 
{timestamps : true}
)

module.exports = userSchema