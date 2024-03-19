const jwt = require('jsonwebtoken');
require('dotenv').config();
///no need for this function
const verifySession = (req, res, next) => {
    const cookie = req.headers.cookie;
    if (!cookie) {
        return res.sendStatus(401)
    }
    const token = cookie.split('=')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.roles = decoded.UserInfo.roles;
        next()
    })
}