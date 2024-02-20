const express = require('express')
const router = express.Router()
const register = require('./register') 
const refreshToken = require('./refresh');
const auth = require('./auth');
const logout = require('./logout');
const homeRoutes = require('./api/homeRoutes');
const cartRoutes = require('./api/cartRoutes');


router.use('/home', homeRoutes);
router.use('/cart', cartRoutes);
router.use('/login', auth);
router.use('/refresh', refreshToken);
router.use('/logout', logout);
router.use('/register', register);

module.exports = router