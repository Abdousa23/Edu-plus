const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleAuth = async (req,res)=>{
    // const cookies = req.cookies
    // const {email,password}=req.body
    // console.log(cookies)
    // if(!email || !password){
    //     return res.status(400).json("All fields are required")
    // }
    // try {
    //     const user = await User.findOne({ email: req.body.email });
    //     !user && res.status(404).json('User not found');
    //     const validPassword = await bcrypt.compare(req.body.password, user.password);
    //     !validPassword && res.status(400).json('Wrong password');
    //     const roles = Object.values(user.roles)
    //     console.log(roles)
    //     console.log(user.roles)
    //     //JWT
    //     console.log(user.username)
    //     const accessToken = jwt.sign(
    //         {"UserInfo":{
    //             "username": user.username,
    //             "roles":roles
    //         }},
    //         process.env.ACCESS_TOKEN_SECRET,
    //         {expiresIn: '30s'}
    //         )
    //     const newRefreshToken = jwt.sign(
    //         {
    //             "username": user.username,
    //         },
    //         process.env.REFRESH_TOKEN_SECRET,
    //         {expiresIn: '1d'}
    //         )
    //         console.log("ddddd")
    //     console.log(user.refreshToken)
    //     let newRefreshTokenArray =
    //         !cookies?.jwt 
    //             ? user.refreshToken
    //             : user.refreshToken.filter((token)=>token!==cookies.jwt)
    //     console.log("sss")
    //     if (cookies?.jwt){
    //         const refreshToken = cookies.jwt;
    //         const foundToken = await User.findOne({ refreshToken }).exec()
    //         if (!foundToken) {
    //             console.log('attempted refresh token reuse at login!')
    //             // clear out ALL previous refresh tokens
    //             newRefreshTokenArray = [];
    //         }

    //         res.clearCookie('jwt',{httpOnly: true,sameSite: 'None', secure : true })
    //     }
    //     // const otherUsers = await User.find({username:{$ne:user.username}})
    //     // const currentUser = {...user , refreshToken}
    //     user.refreshToken = [...newRefreshTokenArray,newRefreshToken]
    //     await user.save()
    //     res.cookie('jwt', newRefreshToken, { httpOnly: true , sameSite: 'None', secure : true ,maxAge: 7 * 24 * 60 * 60 * 1000});

    //     console.log(user)
    //     return res.status(200).json({user,roles,accessToken})
    //     // res.status(200).json(user);
    // } catch (error) {
    //     res.status(500).json(error);
    // }


    const cookies = req.cookies;
    console.log(`cookie available at login: ${JSON.stringify(cookies)}`);
    const { email, password } = req.body;
    console.log(email,password) 
    if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await User.findOne({ email:email }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        console.log(roles);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10s' }
        );
        const newRefreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        console.log(newRefreshToken);
        console.log(foundUser.refreshToken);
        // Changed to let keyword
        let newRefreshTokenArray =
            !cookies?.jwt
                ? foundUser.refreshToken
                : foundUser.refreshToken.filter(rt => rt !== cookies.jwt);

        if (cookies?.jwt) {

            /* 
            Scenario added here: 
                1) User logs in but never uses RT and does not logout 
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */
            const refreshToken = cookies.jwt;
            const foundToken = await User.findOne({ refreshToken }).exec();

            // Detected refresh token reuse!
            if (!foundToken) {
                console.log('attempted refresh token reuse at login!')
                // clear out ALL previous refresh tokens
                newRefreshTokenArray = [];
            }

            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        }

        // Saving refreshToken with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await foundUser.save();
        console.log(result);
        console.log(roles);

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ foundUser,roles, accessToken });

    } else {
        res.sendStatus(401);
    }
}

module.exports={handleAuth}