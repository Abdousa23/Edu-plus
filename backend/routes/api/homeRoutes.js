const express = require('express');
const router = express.Router(); 
const courseController = require('../../controllers/courseController');s
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');


router.get('/', verifyJWT, homeController.getAllCourses);

router.get('/', (req, res) => {
    res.send('About page');
});