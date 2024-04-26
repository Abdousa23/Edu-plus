const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const handleRefreshToken = async (req, res,next) => {
//     const cookies = req.cookies
//     if(!cookies?.jwt){
//         console.log("no cookies")
//         return res.sendStatus(403)
//     }
//     console.log(cookies.jwt)
//     const refreshToken = cookies.jwt
//     // res.clearCookie('jwt',{httpOnly: true,sameSite: 'None' , secure : true })
//     const user = await User.findOne({ refreshToken: refreshToken }).exec();
//     // console.log(user)
//     // console.log(user.username)
//     // console.log('sss')
//         // console.log(user.username)
//         // Detected refresh tokem reuse
//         // if(!user){
//         //     jwt.verify(
//         //         refreshToken,
//         //         process.env.REFRESH_TOKEN_SECRET,
//         //         async (err,decoded)=>{
//         //             console.log("decodedd"+decoded.username)
//         //             if(err) return res.sendStatus(403)
//         //             const hUser = await User.findOne({ username: decoded.username });
//         //             hUser.refreshToken = ""
//         //             const result = await hUser.save()
//         //             console.log(result) 
//         //         })
//         //     return res.sendStatus(403)
//         // }
//         // const newRefreshTokenArray = user.refreshToken.filter((token)=>token!==refreshToken)
//         // console.log(user)
//         jwt.verify(
//             refreshToken,
//             process.env.REFRESH_TOKEN_SECRET,
//             async (err,decoded)=>{
//                     // console.log("decodedd"+decoded.username)
//                     // console.log(user.username)
//                     const name = user.username
//                 if(err || name !== decoded.username) return res.status(403)
//                 const roles = Object.values(user.roles)
//                 console.log(roles)
//                 const accessToken = jwt.sign(
//                     {
//                         "UserInfo":{
//                             "username": decoded.username,
//                             "roles":roles
//                         }
//                     },
//                     process.env.ACCESS_TOKEN_SECRET,
//                     {expiresIn: '30s'}
//                     )
//                     // const newRefreshToken = jwt.sign(
//                     //     {
//                     //         "username": user.username,
//                     //     },
//                     //     process.env.REFRESH_TOKEN_SECRET,
//                     //     {expiresIn: '1d'}
//                     //     )
//                     //     user.refreshToken = newRefreshToken
//                         console.log(user)
//                         console.log('new')
//                         // const result = await user.save()
//                         // res.cookie('jwt', newRefreshToken, { httpOnly: true , maxAge: 1000*60*60*24});
                        
//                     res.json({user,accessToken})
//             }
//         )
// }
const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    /* console.log(cookies); */
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const user = await User.findOne({ refreshToken }).exec();
    /* console.log(user); */
    if (!user) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    /* console.log(user.username); */
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || user.username !== decoded.username) return res.status(403).json({ message: "Invalid token" });
            const roles = Object.values(user.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );
            res.json({ user, accessToken })
        }
    );
}

module.exports = {handleRefreshToken};