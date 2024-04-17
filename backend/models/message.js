const mongoose = require('mongoose')

const schema = mongoose.Schema

const message = new schema({
    sender: {
        type: schema.Types.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
        required: true,
    },

},
    { timestamps: true },
    

)
const Message = mongoose.model('Message', message)


module.exports = Message