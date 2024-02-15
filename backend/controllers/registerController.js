const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const {username,email,password}=req.body
    if(!username || !email || !password){
        return res.status(400).json("All fields are required")
    }
    // const duplicate = User.find({email:email}||{username:username})
    const duplicate = await User.find({ $or: [{email: email}, {username: username}] });

    console.log(duplicate)
    if(duplicate.length!==0){
        return res.status(409).json("User already exists")
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            roles:{"user":2000}
        })

        const user = await newUser.save();
        res.status(200).json("user has been created successfully");
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports=register