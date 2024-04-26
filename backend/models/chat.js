const mongoose = require('mongoose')
const schema = mongoose.Schema
const chat= new schema({
        name:{
            type:String,
            required:true,
        },

        pic:{
            type:String,
            default:"https://res.cloudinary.com/dzjzhwvix/image/upload/v1623317568/ChatApp/DefaultProfilePic_qzv9xj.png"
        },

        participent :[{
            type:schema.Types.ObjectId,
            ref:"User",
            default:[],
        }],

        messages: [
            {
            type: schema.Types.ObjectId,
            ref: "Message",
            default: [],
            },
                ],

},
{timestamps:true})

const Chat = mongoose.model("Chat",chat)


module.exports = Chat