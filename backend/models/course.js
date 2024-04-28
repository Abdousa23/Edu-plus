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
        ref: 'User'
    },
    
    lessons:{
        type:[schema.Types.ObjectId],
        ref:'Lessons'
    },
    resources : {
        type : [schema.Types.ObjectId],
        ref : 'Resource'
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    language:{
        type:String,
    },
            
    studentEnrolled:{
            students : {
                type :[schema.Types.ObjectId],
                ref:"User", // maybe have a problem with ss
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
        enum:['Online', 'In Person'],
        required:true
    }
    },
    {timestamps:true});

const Course= mongoose.model('Course', course);

module.exports = Course;