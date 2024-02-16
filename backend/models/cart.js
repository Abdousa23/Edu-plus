const mongoose = require('mongoose')
const schema=mongoose.Schema
const cart = {
    "courses":{
        type:[schema.Types.ObjectId],
        ref:'course'
    },
    "Totalprice":{
        type: Number,
    },
}