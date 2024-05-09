const User = require('../models/user');
const ROLES_LIST = require('../config/rolesList');

const topCreators = async (req, res) => {
    try { 
        let topCreatorsList = await User.find({ role: ROLES_LIST.Instructor });
        topCreatorsList = topCreatorsList.sort((a, b) => b.courses.length - a.courses.length).slice(0, 5);

        res.status(200).json({ topCreators: topCreatorsList  });
        console.log("Top creators list sent successfully",topCreatorsList);
    } catch (error) {
        console.log("Error in top creators controller:");
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = topCreators;
