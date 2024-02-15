const router = require('express').Router()
const registerController = require('../controllers/registerController')
require('dotenv').config()

router.post('/register',registerController.register)