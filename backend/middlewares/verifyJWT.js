const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req,res,next) =>{
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader?.startsWith('Bearer')) return res.status(401).json('Token is not provided');
    const token = authHeader.split(' ')[1]
    console.log(token)
    jwt.verify( 
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded) =>{
            
            console.log(err)
            if(err !== null){
                return res.status(401).json('Token is not valid')
            }else if(err===null){
            console.log(decoded.UserInfo.username,decoded.UserInfo.roles)
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
            }
        }
    )
}
module.exports = verifyJWT; 