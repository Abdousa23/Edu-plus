const Cart = require('../models/cart');
const Course = require('../models/course');
const User = require('../models/user');
const { ObjectId } = require('mongoose').Types;


const addToCart = async (req, res) => {
    const user = req.user
    const { courseId } = req.body
    try {
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
        const cart = await Cart.findOne({userId: user._id})
        if(!cart){
            const newCart = await Cart.create({userId: user._id, items: [{courseId: course._id}]})
            return res.status(200).json(newCart)
        }
        const item = cart.items.find(item => item.courseId.toString() === course._id.toString())
        if(item){
            return res.status(400).json({message:"Course already in cart"})
        } else {
            cart.items.push({courseId: course._id})
        }
        await cart.save()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}

const removeFromCart = async (req, res) => {
    const user = req.user
    const { courseId } = req.params
    try {
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
        const cart = await Cart.findOne({userId: user._id})
        if(!cart){
            return res.status(404).json({message:"Cart not found"})
        }
        const item = cart.items.find(item => item.courseId.toString() === course._id.toString())
        if(!item){
            return res.status(404).json({message:"Course not in cart"})
        }
        cart.items = cart.items.filter(item => item.courseId.toString() !== course._id.toString())
        await cart.save()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}

const getCart = async (req, res) => {
    const user = req.user
    try {
        const cart = await Cart.findOne({userId: user._id}).populate('items.courseId')
        if(!cart){
            return res.status(404).json({message:"Cart not found"})
        }
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }
}
const UpdateCart = async (req, res) => {
    const user = req.user
    const { courseId } = req.params
    try {
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
        const cart = await Cart.findOne({userId: user._id})
        if(!cart){
            return res.status(404).json({message:"Cart not found"})
        }
        const item = cart.items.find(item => item.courseId.toString() === course._id.toString())
        if(!item){
            return res.status(404).json({message:"Course not in cart"})
        }
        await cart.save()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({error:error,message:"Something went wrong"})
    }

}

module.exports = { addToCart, removeFromCart, getCart, UpdateCart } ;