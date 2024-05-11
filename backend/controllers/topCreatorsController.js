const User = require('../models/user')
const ROLES_LIST= require('../config/rolesList')

const topCreators= async (req,res)=>{

    try{ 
        const topCreators = await User.find({role:ROLES_LIST.School})
        topCreators = topCreators.sort((a,b)=>b.courses.length-a.courses.length).slice(0,5)



        res.status(200).json({topCreators:topCreators})
    } catch (error) {
        res.status(500).json({ error: "an error occurred while calculating the top creators" })
        
    }
}

module.exports = topCreators