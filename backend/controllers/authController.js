const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = async (req,res,next)=>{
    const cookies = req.cookies
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json("All fields are required")
    }
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json('User not found');
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json('Wrong password');
        const roles = Object.values(user.roles)
        console.log(roles)
        //JWT
        const accessToken = jwt.sign(
            {"UserInfo":{
                "username": user.username,
                "roles":roles
            }},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}
            )
        const newRefreshToken = jwt.sign(
            {
                "username": user.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
            )
        const newRefreshTokenArray =
            !cookies?.jwt 
                ? user.refreshToken
                : user.refreshToken.filter((token)=>token!==cookies.jwt)
        if (cookies?.jwt){
            res.clearCookie('jwt',{httpOnly: true,sameSite: 'None', secure : true })
        }
        // const otherUsers = await User.find({username:{$ne:user.username}})
        // const currentUser = {...user , refreshToken}
        user.refreshToken = [...newRefreshTokenArray,newRefreshToken]
        res.cookie('jwt', newRefreshToken, { httpOnly: true , sameSite: 'None', secure : true ,maxAge: 7 * 24 * 60 * 60 * 1000});
        await user.save()
        console.log(user)
        return res.status(200).json({user,accessToken})
        // res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }


}