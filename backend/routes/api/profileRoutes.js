const express = require('express');
const router = express.Router(); 
const userController = require('../../controllers/usersController')
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');

// verifyJWT
router.get('/:id',verifyJWT,verifyRoles(ROLES_LIST.User),userController.getUserById);

router.put('/:id',verifyJWT,verifyRoles(ROLES_LIST.User),userController.updateUser);

router.post('/:id',verifyJWT,verifyRoles(ROLES_LIST.User),userController.addCourseToUser)

router.delete('/:id',verifyJWT,verifyRoles(ROLES_LIST.User),userController.deleteUser)



module.exports = router;