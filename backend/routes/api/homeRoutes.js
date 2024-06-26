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
router.get('/student/:name',verifyJWT ,courseController.getStudentCourseByName);
router.get('/teacher/:name',verifyJWT ,courseController.getTeacherCourseByName);


router.get('/categories',categoryController.getAllCategories)
router.get('/categories/:category', courseController.getCoursesByCategory);

router.get('/categories/', categoryController.getAllCategories);

router.get('/:id', courseController.getCourseById);


router.post ('/categories/add',categoryController.addCategory)

module.exports = router;