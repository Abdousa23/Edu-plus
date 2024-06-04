const Chat = require('../models/chat');
const Message = require('../models/message');
const Category = require('../models/category');
const User = require('../models/user');
const getChatsMessages = async (req, res) => {
    const chatId = req.params.chatId;
    try {
        // Find chat room by chatId
        const chat = await Chat.findById(chatId);
        if (!chat) {
            return res.status(404).json({ message: "Chat room not found" });
        }

        // Find all messages in the chat room
        const messages = await Message.find({ chatId: chatId }).populate("sender");
        // console.log(messages)
        return res.status(200).json( messages);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching messages" });
    }
}
const getChats = async (req, res) => {
    try {
        // Find all chat rooms
        const chats = await Chat.find();
        return res.status(200).json({ chats: chats });
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching chat rooms" });
    }

}
const createChat = async (req, res) => {
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
        return res.status(200).json({ message: "Chat rooms created successfully" });

    } catch (error) {
        console.log("Error in the chat controller");
        console.log(error);
        // Respond with error message
        return res.status(500).json({ error: "An error occurred while creating chat rooms" });
    }
}

const addParticipant = async (req,res) => {
    try {
        const chat = await Chat.findById(req.body.chatID)
        const username = req.body.username
        const user = await User.findOne({username:username})
        if(!chat){
            return res.status(404).json({message:"chat not found"})
        }   
        if(chat.members.includes(user._id)){
            return res.status(403).json({message:"you are already in the chat"})
        }
        chat.members.push(user._id)
        await chat.save()
        return res.status(200).json({message:"user added to chat successfully"})

} catch (error) {
    console.log("error in the add participent controller")
    console.log(error)
    
    }
}

module.exports = {
    getChatsMessages,
    getChats,
    createChat,
    addParticipant,
}