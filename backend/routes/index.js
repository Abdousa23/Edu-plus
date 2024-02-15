const express = require('express')
const router = express.Router()
const register = require('../controllers/registerController') 

router.use('/register', register)

module.exports = router