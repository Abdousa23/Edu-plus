const mongoose = require('mongoose');

const schema = mongoose.Schema
const resourceSchema = new schema({
    title: String,
    resourceUrl: String,
    course: {
        type: schema.Types.ObjectId,
        ref: 'course',
    },
});



module.exports = mongoose.model('Resource' , resourceSchema)