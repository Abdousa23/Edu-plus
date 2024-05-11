const router = require("express").Router()
const verifyJWT = require("../../middlewares/verifyJWT")
const verifyRoles = require('../../middlewares/verifyRoles')
const ROLES_LIST = require('../../config/rolesList')
const courseController = require('../../controllers/courseController')
const paymenCheckout = require('../../controllers/paymentController')
const  {updateCourse, deleteCourse, addOnlineCourse, addOfflineCourse, addOnlinelesson, updateLesson, deleteLesson} = require('../../controllers/courseController');
const upload = require('../../middlewares/multer')

router.get('/enrolled', verifyJWT,courseController.getEnrolledCourses);
router.get('/all/online', verifyJWT,courseController.getAllOnlineCourses);
router.get('/all/offline', verifyJWT,courseController.getAllOfflineCourses,);
router.get('/all/student' , verifyJWT , courseController.getAllStudentCourses)
router.get('/all/teacher/online', verifyJWT,courseController.getTeacherOnlineCourses);
router.get('/all/teacher/inperson', verifyJWT,courseController.getTeacherOfflineCourses);
router.get('/all/teacher', verifyJWT,courseController.getTeacherAllCourses);
router.post('/payment', verifyJWT, paymenCheckout);
router.post('/enroll/:courseId', verifyJWT, courseController.enrollOnlineCourse);
router.post("/price/:courseId", verifyJWT, courseController.addPriceId);
//
router.get('/all',courseController.getAllCourses);
router.get('/all/category/:category', courseController.getCoursesByCategory);
router.get('/all/:courseId',verifyJWT ,courseController.getCourseResources);
router.post('/addOnlineCourse' ,  verifyJWT/* , verifyRoles(ROLES_LIST.School) */ ,upload.any("video") ,  addOnlineCourse);
router.post('/addOfflineCourse', verifyJWT, verifyRoles(ROLES_LIST.School), addOfflineCourse);
router.post('/addLesson', verifyJWT, verifyRoles(ROLES_LIST.School), addOnlinelesson);
router.put('/updateLesson/:id', verifyJWT, verifyRoles(ROLES_LIST.School), updateLesson);
router.delete('/deleteLesson/:id', verifyJWT, verifyRoles(ROLES_LIST.School), deleteLesson);
router.put('/updateCourse/:id', verifyJWT, verifyRoles(ROLES_LIST.School), updateCourse);
router.delete('/deleteCourse/:id', verifyJWT, verifyRoles([ROLES_LIST.School, ROLES_LIST.Admin, ROLES_LIST.Editor]), deleteCourse);
router.get('/:id', courseController.getCourseById);

module.exports = router;