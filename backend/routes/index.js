const express = require('express')
const router = express.Router()
const register = require('./register') 
const refreshToken = require('./refresh');
const auth = require('./auth');


router.use('/login', auth);
router.use('/logout', logout);
router.use('/refresh', refreshToken);
router.use('/register', register);

module.exports = router