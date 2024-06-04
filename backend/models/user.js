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
        maxlength : 20,
        minlength : 4,
        trim : true
    },
    roles : {
        User : {
            type : Number,
            default : 2000
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
        required : true,
        minlength : 8,
        // match : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
    },
    courses : {
        type : [schema.Types.ObjectId],
        ref : 'Course',
    },
    purchasedcourses : {
        type : [schema.Types.ObjectId],
        ref : 'Course'
    },
    phonenumber : {
        type : String,///make it an Array later
        required : false,
        default : "",

    },
    bio:{
        type : String,
        default : ""
    },
    country : {
        type : String,
        default : ""
    },
    city : {
        type : String,
        default : ""
    },
    refreshToken : {
        type : String,
        default : ""
    },
    pfp : {
        url: {
            type: String,
            default: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          },
          publicId: {
            type: String,
            default: ''
          }
        },
    cart:{
        type : schema.Types.ObjectId,
        ref : 'cart'
    },
    totaolIncome:{
        type : Number,
        default : 0
    },
    }
,
{timestamps : true}
)

module.exports = mongoose.model('User' , userSchema)