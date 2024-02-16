const mongoose = require('mongoose');

const schema = mongoose.Schema

const reviewSchema = new schema({
    username:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        min : 1,
        max: 5,
    },
    reviewText:{
        type:String,
    },
    },
    {timestamps:true}
    )
const review = mongoose.model('review', reviewSchema);

module.exports = review ;