const router = require("express").Router()
const verifyJWT = require("../../middlewares/verifyJWT")
const verifyRoles = require('../../middlewares/verifyRoles')
const ROLES_LIST = require('../../config/rolesList')
const courseController = require('../../controllers/courseController')
const  {updateCourse, deleteCourse, addOnlineCourse, addOfflineCourse, addOnlinelesson, updateLesson, deleteLesson} = require('../../controllers/courseController');

router.get('/:courseId',verifyJWT ,courseController.getCourseResources);
router.get('/online', verifyJWT,courseController.getOnlineCourses);
router.get('/offline', verifyJWT,courseController.getOfflineCourses);
router.get('/all',courseController.getAllCourses);
router.get('/all/:category', courseController.getCoursesByCategory);
router.get('/:id', courseController.getCourseById);
router.get('/lesson/:id', courseController.getLessonById);
router.get('enrolled/:id', verifyJWT,courseController.getEnrolledCourses);
router.post('/addOnlineCourse', verifyJWT, verifyRoles(ROLES_LIST.School), addOnlineCourse);
router.post('/addOfflineCourse', verifyJWT, verifyRoles(ROLES_LIST.School), addOfflineCourse);
router.post('/addLesson', verifyJWT, verifyRoles(ROLES_LIST.School), addOnlinelesson);
router.put('/updateLesson/:id', verifyJWT, verifyRoles(ROLES_LIST.School), updateLesson);
router.delete('/deleteLesson/:id', verifyJWT, verifyRoles(ROLES_LIST.School), deleteLesson);
router.put('/updateCourse/:id', verifyJWT, verifyRoles(ROLES_LIST.School), updateCourse);
router.delete('/deleteCourse/:id', verifyJWT, verifyRoles([ROLES_LIST.School, ROLES_LIST.Admin, ROLES_LIST.Editor]), deleteCourse);

module.exports = router;