const mongoose = require('mongoose');
const Message = require('../models/message');
const Category = require('../models/category');
const Chat = require('../models/chat');
const User = require('../models/user');
const  { getReceiverSocketId , io} =require('../socket/socket')


// we usse this controller to create the chat rooms at the start of the application 
const createChatsController = async (req, res) => {
    try {
        // Find all categories
        const categories = await Category.find();

        // Iterate over each category
        categories.forEach(async (cat) => { 
            // Create a new chat room for the category
            const chat = new Chat({
                name: cat.name,
                participent:[],
                messages: [],
                pic: cat.pic
            });

            // Save the chat room to the database
            await chat.save();
        });

        // Respond with success message
        return res.json({ message: "Chat rooms created successfully" });

    } catch (error) {
        console.log("Error in the chat controller");
        console.log(error);
        // Respond with error message
        return res.status(500).json({ error: "An error occurred while creating chat rooms" });
    }
}


const addParticipentToChat = async (req,res) => {
    try {
        const chat = await Chat.findById(req.body.chatID)
        if(!chat){
            return res.status(404).json({message:"chat not found"})
        }   
        const user = req.user._id
        if(chat.participent.includes(user)){
            return res.status(403).json({message:"you are already in the chat"})
        }
        chat.participent.push(user)
        await chat.save()
        return res.status(200).json({message:"user added to chat successfully"})

} catch (error) {
    console.log("error in the add participent controller")
    console.log(error)
    
    }
}
const getMessageContoller= async (req, res) =>  {

    try {
        const username = req.user
        const user = await User.findOne({username:username})
        const room = req.params.id
        const chat = await Chat.findById(room).populate("messages")
        const senderID = user._id
        // console.log("sender id is ",senderID)
        // console.log("chat is ",chat)
        // if(!chat){
        //     return res.status(404).json({message:"chat not found"})
        // }
        
        // if(!chat.participent.includes(senderID)){
        //     return res.status(200).json({message:"you are not allowed to see the messages of this chat enrole on course to get in the chat "})
        // }

        const messages = await chat.messages
        
        return res.status(200).json({messages:messages})
        
    } catch (error) {
        console.log("errore in the chat contoller")
        console.log(error)
        
    }

}
const sendMessageController = async (req, res) => {
    try {
        const username = req.user
        const user = await User.findOne({username:username})
        const senderName = user
        const room = req.params.id
        const chat = await Chat.findById(room)
        if(!chat){
            return res.status(404).json({message:"chat not found"})
        }


        
        // if(!chat.participent.includes(senderName)){
        //     return res.status(403).json({message:"you are not allowed to send  the messages of this chat enrole on course to get in the chat "})
        // }

        const message = new Message({
            sender: senderName.username,
            message: req.body.message,
            senderphp: senderName.pfp.url
        })
        await message.save()
        chat.messages.push(message)
        await chat.save()

        // implementing sockio

        
            // io.to(socket id ) is used to send the message to the specific clienct
            io.emit('newMessage',message)
        


        return res.status(200).json({message:"message sent successfully",message:message})
    } catch (error) {
        console.log("error in the send message controller")
        console.log(error)
    }


}
const getallChatRoomsController = async (req, res) => {
    try {
        const chats = await Chat.find()
        console.log("chats are ",chats)
        
        return res.status(200).json({chats:chats})
    } catch (error) {
        console.log("error in the get all chat rooms controller")
        console.log(error)
    }
}
module.exports = {getMessageContoller,sendMessageController,createChatsController,addParticipentToChat , getallChatRoomsController}