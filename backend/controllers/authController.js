const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const passport = require('passport');
const { json } = require('express');
require('dotenv').config();

const handleAuth = async (req,res)=>{
    const cookies = req.cookies;
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await User.findOne({ email:email }).exec();
    if (!foundUser) return res.status(404).json({ 'message': 'no user found.' })
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );
        const newRefreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        foundUser.refreshToken = newRefreshToken;
        const result = await foundUser.save();
        // Creates Secure Cookie with refresh token
        // Send authorization roles and access token to user
        try {
            res.cookie('jwt', newRefreshToken, { httpOnly: true,sameSite:'Strict', maxAge: 24 * 60 * 60 * 1000});            
        } catch (error) {
        }
        res.status(200).json({ foundUser,roles, accessToken });

    } else {
        return res.status(401).json({ 'message': 'wrong password.' });
    }
}

    
const signToken = async (req, res) => {
    const foundUser = await User.findOne({ email: req.user.email }).exec();
    const roles = Object?.values(foundUser?.roles).filter(Boolean);
    console.log(foundUser);
    const accessToken =jwt.sign(
        {
            "UserInfo": {
                "username": foundUser.username,
                "roles": roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '45s' },)
        try {
            const newRefreshToken = jwt.sign(
                { "username": foundUser.username },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            foundUser.refreshToken = newRefreshToken;
            await foundUser.save();

            try {
                res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'Strict', maxAge: 24 * 60 * 60 * 1000 });
                console.log("cookie set")
            } catch (error) {
                console.log("cookie not set")
            }
            console.log(foundUser, roles, newRefreshToken, 'token set');
            const result = { foundUser, roles, accessToken };
            req.user = result;
            return json({ foundUser, roles, accessToken });
        } catch (error) {
            console.log(error)
        }
}

module.exports= { handleAuth ,signToken }


        