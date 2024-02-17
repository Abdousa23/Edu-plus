const express = require('express');
const router = express.Router(); 
const courseController = require('../../controllers/courseController');
const categoryController = require('../../controllers/categoryController');
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');

// verifyJWT
router.get('/',courseController.getAllCourses);
router.get('/search/:name', courseController.getCoursesByName);
router.get('/categories/:category', courseController.getCoursesByCategory);
router.get('/categories/', courseController.getCoursesByCategory);
router.get('/:id', courseController.getCourseById);
module.exports = router;