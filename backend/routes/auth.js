const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');
require('dotenv').config();


router.post('/auth', authController.handleAuth);