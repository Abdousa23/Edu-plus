const mongoose = require('mongoose')
const schema = mongoose.Schema
const chat= new schema({
        name:{
            type:String,
            required:true,
        },

        pic:{
            type:String,
            default:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
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