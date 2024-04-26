const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const passport = require('passport');
const { json } = require('express');
require('dotenv').config();

const handleAuth = async (req,res)=>{
    const cookies = req.cookies;
    /* console.log(`cookie available at login: ${JSON.stringify(cookies)}`); */
    const { email, password } = req.body;
    /* console.log(email,password)  */
    if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await User.findOne({ email:email }).exec();
    // if(bcrypt.compare(process.env.RPWD ,foundUser.password)) return res.status(401).send(json({"message" : "access denied"}))
    /* console.log(foundUser); */
    if (!foundUser) return res.status(404).json({ 'message': 'no user found.' })
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        /* console.log(roles); */
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
       /*  console.log(result);
        console.log(roles); */

        // Creates Secure Cookie with refresh token
        // Send authorization roles and access token to user
        try {
            res.cookie('jwt', newRefreshToken, { httpOnly: true,sameSite:'Strict', maxAge: 24 * 60 * 60 * 1000});            
            console.log("cookie set")
        } catch (error) {
            console.log("cookie not set")
        }
        /* console.log(req.user) */
        res.status(200).json({ foundUser,roles, accessToken });

    } else {
        return res.status(401).json({ 'message': 'wrong password.' });
    }
}

const signToken = async (req, res) => {
    const foundUser = await User.find({ email: req.user.email }).exec();
    const roles = Object.values(foundUser.roles).filter(Boolean)
    jwt.sign(
        {
            "UserInfo": {
                "username": foundUser.username,
                "roles": roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '45s' }
    , (err, token) => {
        if(err){
            res.sendStatus(500);
        } else {
            res.json({token});
        }
    });
    const newRefreshToken = jwt.sign(
        { "username": foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    );
    console.log(newRefreshToken);
    console.log(foundUser.refreshToken);
    // Changed to let keyword
    // let newRefreshTokenArray =
    //     !cookies?.jwt
    //         ? foundUser.refreshToken
    //         : foundUser.refreshToken.filter(rt => rt !== cookies.jwt);

    // if (cookies?.jwt) {

    //     /* 
    //     Scenario added here: 
    //         1) User logs in but never uses RT and does not logout 
    //         2) RT is stolen
    //         3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
    //     */
    //     const refreshToken = cookies.jwt;
    //     const foundToken = await User.findOne({ refreshToken }).exec();

    //     // Detected refresh token reuse!
    //     if (!foundToken) {
    //         console.log('attempted refresh token reuse at login!')
    //         // clear out ALL previous refresh tokens
    //         newRefreshTokenArray = [];
    //     }

    //     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    // }

    // // Saving refreshToken with current user
    // foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    const result = await foundUser.save();
    console.log(result);
    console.log(roles);

    // Creates Secure Cookie with refresh token
    res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: false, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

    // Send authorization roles and access token to user
    res.json({ foundUser,roles, accessToken });
}
module.exports= { handleAuth }


        // console.log(newRefreshToken);
        // console.log(foundUser.refreshToken);
        // // Changed to let keyword
        // let newRefreshTokenArray =
        //     !cookies?.jwt
        //         ? foundUser.refreshToken
        //         : foundUser.refreshToken.filter(rt => rt !== cookies.jwt);

        // if (cookies?.jwt) {

        //     /* 
        //     Scenario added here: 
        //         1) User logs in but never uses RT and does not logout 
        //         2) RT is stolen
        //         3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
        //     */
        //     const refreshToken = cookies.jwt;
        //     const foundToken = await User.findOne({ refreshToken }).exec();

        //     // Detected refresh token reuse!
        //     if (!foundToken) {
        //         console.log('attempted refresh token reuse at login!')
        //         // clear out ALL previous refresh tokens
        //         newRefreshTokenArray = [];
        //     }

        //     res.clearCookie('jwt', { httpOnly: true,secure:false ,sameSite: 'None', secure: true });
        // }

        // // Saving refreshToken with current user