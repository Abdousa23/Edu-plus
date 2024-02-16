const mongoose = require('mongoose');
const chapter = require('./chapter')
const lesson = require('./lesson');
const schema = mongoose.Schema
const course = new schema({


        title: {
            type: String,
            required: true,
            },
        
        category:{
            type:String,
            required:true,
        },

        description:{type:String,},



        schoolname: {type:String,},
        courses:{
            type:[schema.Types.ObjectId],
            ref:'courses'
        },


        teacher: {
            type: String,
            required: true,},
            
            
            level:{type:String,},
            language:{type:String,},
            
            studentEnrolled:{
                type:Number,
                default :0,
            },
            
            rating:{
                type:Number
            },

        reviews:[{
            username:{type:String,},
            rating:{
                    type:Number,
                    min : 1,
                    max: 5,
                    },
            reviewText:{type:String,},
            date:{
                    type: Date,
                    default : Date.now ,
                    },
                }],


            imageUrl:{type:String,},


            price : { 
            type: Number ,
            default : 0, }
            },


            {timestamps:true});

const Course= mongoose.model('Course', course);

module.exports = Course;
