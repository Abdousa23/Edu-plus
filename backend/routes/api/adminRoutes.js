const router = require("express").Router()
const verifyJWT = require("../../middlewares/verifyJWT")
const verifyRoles = require('../../middlewares/verifyRoles')
const ROLES_LIST = require('../../config/rolesList')


router.post('/',(req,res)=>{
    res.send('Welcome to admin page')
})


module.exports = router;