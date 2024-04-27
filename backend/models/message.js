const mongoose = require('mongoose')

const schema = mongoose.Schema

const message = new schema({
    sender: {
        type:String,
        required:true,
    },
    message: {
        type: String,
        required: true,
    },
    chat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true,
    },
    senderphp: {
        type: String,
        required: true,
    },

},
    { timestamps: true },
    

)
const Message = mongoose.model('Message', message)


module.exports = Message