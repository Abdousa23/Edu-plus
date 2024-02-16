const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const {firstname,lastname,username,email,password,role,phonenumber}=req.body
    if(!username || !email || !password || !role || !firstname || !lastname){
        return res.status(400).json("All fields are required")
    }
    // const duplicate = User.find({email:email}||{username:username})
    try {
    const duplicate = await User.find({ $or: [{email: email}, {username: username}] });
    if(duplicate.length!==0){
        return res.status(409).json("User already exists")
    }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        var roles = {
            User: 0,
            Admin: 0,
            Editor: 0,
            School: 0
        }
        if (role == "school") {
            roles = {School: 3000};
        } else if (role == "user") {
            roles = {User: 2000};
        }
        var phone = phonenumber || ""
        console.log(roles)
        const newUser = new User({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPass,
            roles:roles,
            phonenumber:phone
        })

        const user = await newUser.save();
        console.log(user)
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports={register}