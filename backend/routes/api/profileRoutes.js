const express = require('express');
const router = express.Router(); 
const userController = require('../../controllers/usersController')
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');
const fileExtLimiter = require('../../middlewares/fileExtLimiter')
const upload = require('../../middlewares/multer')
const cloudinaryMW = require('../../middlewares/cloudinaryMW')
const fileSizeLimiter = require('../../middlewares/fileSizeLimiter')

// verifyJWT

router.get('/:id',userController.getUserById);

// router.put('/:id',verifyJWT,verifyRoles(ROLES_LIST.User),userController.updateUser);

router.put('/:id' ,verifyJWT,verifyRoles([ROLES_LIST.User]),upload.single("pfp"),fileSizeLimiter(10),fileExtLimiter(['.png','.jpeg','.jpg']),cloudinaryMW,userController.updateUser);

router.post('/:id',verifyJWT,verifyRoles(ROLES_LIST.User),userController.addCourseToUser)

router.delete('/:id',verifyJWT,verifyRoles([ROLES_LIST.User,ROLES_LIST.Admin,ROLES_LIST.Editor]),userController.deleteUser)



module.exports = router;