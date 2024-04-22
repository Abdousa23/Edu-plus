const router = require("express").Router()
const verifyJWT = require("../../middlewares/verifyJWT")
const verifyRoles = require('../../middlewares/verifyRoles')
const ROLES_LIST = require('../../config/rolesList')
const totalResult =require('../../controllers/totalResult')
const totalSales= require('../../controllers/totalResult')
const totalCourses = require('../../controllers/totalResult')
const newUsersOfWeek = require('../../controllers/totalResult')
const topCategories = require('../../controllers/topCategoriesController')
const topCreators= require('../../controllers/topCreatorsController')
const  getUsersCountByMonth=require('../../controllers/newUsersOfEveryMonth')
const usersController = require('../../controllers/usersController')


router.post('/',(req,res)=>{
    res.send('Welcome to admin page')
})

router.get('/totalusers',totalResult.totalUsers)
router.get('/totalsales',totalResult.totalSeles)
router.get('/totalcourses',totalResult.totalCourses)
router.get('/newusersofweek',totalResult.newUsersOfWeek)
router.get('/topcategories',topCategories)
router.get('/topcreators', topCreators)
// the only one that is not working ill cheak it later 
router.get('./newusersofeverymonth',getUsersCountByMonth)
router.get('/totalroles/:role',usersController.getAllUsersByRole)
router.delete('/multipleDelete',usersController.multipleDelete)
router.put('/addMod',usersController.addMod)
router.put('/removeMod',usersController.removeMod)
module.exports = router;