const  app = require('express');
const router= app.Router()
const verifyJWT = require('../../middlewares/verifyJWT');
const { getMessageContoller,sendMessageController,createChatsController,addParticipentToChat , getallChatRoomsController  } = require('../../controllers/chatController');


// for creating all the chat rooms at the start of the application
router.post("/creat",  createChatsController )
// add partisipent to chat
router.post("/addParticipent", verifyJWT, addParticipentToChat )

// for getting all the chat rooms 
router.get('/allchats', getallChatRoomsController)

// for getting messages of a chat room
router.get('/:id', verifyJWT, getMessageContoller)


router.post('/send/:id', verifyJWT, sendMessageController)


module.exports = router