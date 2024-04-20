const mongoose = require('mongoose');
const user = require('./user');
const schema = mongoose.Schema
const course = new schema({
    title: {
        type: String,
        required: true,
        },
        
    category:{
        type:schema.Types.ObjectId,
        required:true,
        ref:"category"
        },

    description:{
        type:String,
    },
    
    owner: {
        type:schema.Types.ObjectId,
        required : true,
        ref: 'users'
    },
    
    lessons:{
        type:[schema.Types.ObjectId],
        ref:'lessons'
    },
    resources : {
        type : [schema.Types.ObjectId],
        ref : 'resources'
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'pro']
    },
    language:{
        type:String,
    },
            
    studentEnrolled:{
            students : {
                type :[schema.Types.ObjectId],
                ref:"users", // maybe have a problem with ss
                default :[],
            },
            studentsNumber : {
            type :Number,
            default :0,
            }
            },
            
    rating:{
        type:Number,
        default:0,
        },
    reviews:[{        
        type: schema.Types.ObjectId,
        ref: 'reviews'
    }],

    imageUrl:{
        type:String,
    },

    price : { 
        type: Number ,
        default : 0, },

    liveVideo: {
            title: String,
            url: String,
            scheduledTime: Date
    },
    location: {
        type: String,
        
    },
    date:{
        type: Date,
    },
    availableSeats:{
        type: Number,
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    type:{
        type:String,
        enum:['online', 'inperson']
    }
    },
    {timestamps:true});

const Course= mongoose.model('Courses', course);

module.exports = Course;