const express = require('express');
const router = express.Router(); 
const userController = require('../../controllers/usersController')

router.get('/users/',userController.getAllUsers)
router.get('/courses/:id',userController.getUserCourses);

module.exports = router