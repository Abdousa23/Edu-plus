const router = require("express").Router()
const verifyJWT = require("../../middlewares/verifyJWT")
const verifyRoles = require('../../middlewares/verifyRoles')
const ROLES_LIST = require('../../config/rolesList')
const courseController = require('../../controllers/courseController')


router.get('/:courseId',verifyJWT,verifyRoles([ROLES_LIST.User]),courseController.getCourseResources)


module.exports = router;