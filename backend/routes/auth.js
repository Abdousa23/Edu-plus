const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');
const rateLimitMiddleware = require('../middlewares/rateLimiter')

require('dotenv').config();



router.post('/',rateLimitMiddleware,authController.handleAuth);

module.exports = router;