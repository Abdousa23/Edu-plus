const express = require('express');
const router = express.Router(); 
const chatController = require('../../controllers/chatController');
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');

// View cart
router.get('/getChats',verifyJWT,verifyRoles(ROLES_LIST.User),chatController.getChats);
router.get('/getChat/:chatId',verifyJWT,verifyRoles(ROLES_LIST.User),chatController.getChatsMessages);


module.exports = router
