const express = require('express')
const router = express.Router()
const register = require('./register') 
const refreshToken = require('./refresh');
const auth = require('./auth');
const logout = require('./logout');
const usersController= require('../controllers/usersController')
router.use('/login', auth);
router.use('/logout', logout);
router.use('/refresh', refreshToken);
router.use('/register', register);
router.put("/test/:id",usersController.updateUser)

module.exports = router