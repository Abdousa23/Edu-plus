const Category = require('../models/category');

const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
   
const addCategory = async (req,res) => {
    const {name,description} = req.body
    try {
        if(!name){
            return res.status(400).json({message:"Name is required"})
        }
        if(!description){
            return res.status(400).json({message:"Description is required"})
        }
        const otherCategory = await Category.findOne({name})
        if(otherCategory){
            return res.status(400).json({message:"Category already exists"})
        }
        const category = await Category.create({name,description})
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}

const updateCategory = async (req,res) => {
    const {id} = req.params
    const {name,description} = req.body
    try {
        const category = await Category.findById(id)
        if(!category){
            return res.status(404).json({message:"Category not found"})
        }
        if(name){
            category.name = name
        }
        if(description){
            category.description = description
        }
        const updatedCategory = await category.save()
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}

const deleteCategory = async (req,res) => {
    const {id} = req.params
    try {
        const category = await Category.findById(id)
        if(!category){
            return res.status(404).json({message:"Category not found"})
        }
        await category.remove()
        res.status(200).json("Category has been deleted successfully")
    }catch(error){
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}


module.exports = {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
}