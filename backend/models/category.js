const mongoose = require("mongoose")
const schema = mongoose.Schema

const categorySchema = new schema ({
    name : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 255,
    },
    
    description : {
        type : String,
    },
    courses : {
        type : [schema.Types.ObjectId],
        ref : 'courses',
        default : []
    }
    ,
    totalStudent: {
        type : Number,
        default : 0
    },
})
const category = mongoose.model('category', categorySchema);
module.exports = category ;
