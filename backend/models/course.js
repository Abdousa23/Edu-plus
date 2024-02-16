const mongoose = require('mongoose');
const schema = mongoose.Schema
const course = new schema({
    title: {
        type: String,
        required: true,
        },
        
    category:{
        type:[schema.Types.ObjectId],
        required:true,
        },

    description:{
        type:String,
    },
    
    owner: {
        type:[schema.Types.ObjectId],
        required : true,
        ref: 'users'
    },
    
    lessons:{
        type:[schema.Types.ObjectId],
        ref:'lessons'
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'pro']
    },
    language:{
        type:String,
    },
            
    studentEnrolled:{
            type:Number,
            default :0,
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
    }
    },
    {timestamps:true});

const Course= mongoose.model('Course', course);

module.exports = Course;
