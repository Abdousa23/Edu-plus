const express = require('express')
const router = express.Router()
const register = require('./register') 
const refreshToken = require('./refresh');
const auth = require('./auth');
const logout = require('./logout');
const homeRoutes = require('./api/homeRoutes');
const cartRoutes = require('./api/cartRoutes');
const profileRoutes = require('./api/profileRoutes')
const adminRoutes = require('./api/adminRoutes')
const paymentRoutes = require('./api/paymentRoute')
const courseRoutes = require('./api/courseRoutes')
// const googleAuth = require("./googleAuth")
require('./auth');

router.use('/home', homeRoutes);
// router.use('/auth/google' , googleAuth)
router.use('/cart', cartRoutes);
router.use('/payment', paymentRoutes);
router.use('/profile',profileRoutes)
router.use('/courses',courseRoutes)
router.use('/admin',adminRoutes)
router.use('/login', auth);
router.use('/refresh', refreshToken);
router.use('/logout', logout);
router.use('/register', register);

module.exports = router