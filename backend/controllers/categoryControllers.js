const Category = require('../models/Category');

const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
   



module.exports = {
    getAllCategories,
}