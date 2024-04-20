/* const router = require('express').Router();
const  {updateCourse, deleteCourse, addOnlineCourse, addOfflineCourse, addOnlinelesson, updateLesson, deleteLesson} = require('../../controllers/courseController');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles')
const ROLES_LIST = require('../../config/rolesList')


router.post('/addOnlineCourse',  verifyJWT, verifyRoles(ROLES_LIST.School), addOnlineCourse)
router.post('/addOfflineCourse', verifyJWT, verifyRoles(ROLES_LIST.School), addOfflineCourse)
router.post('/addLesson', verifyJWT, verifyRoles(ROLES_LIST.School), addOnlinelesson)
router.put('/updateLesson/:id', verifyJWT, verifyRoles(ROLES_LIST.School), updateLesson)
router.delete('/deleteLesson/:id', verifyJWT, verifyRoles(ROLES_LIST.School), deleteLesson)
router.put('/updateCourse/:id', verifyJWT, verifyRoles(ROLES_LIST.School), updateCourse)
router.delete('/deleteCourse/:id', verifyJWT, verifyRoles([ROLES_LIST.School , ROLES_LIST.Admin , ROLES_LIST.Editor]), deleteCourse)

module.exports = router; */