const verifyRoles = (...allowedRoles) => {
    return (req, res , next)=>{
        const rolesArray =[...allowedRoles]
        const reqRoles = Object.values(req.roles);
        if(!req?.roles) return res.sendStatus(401)
        const result = rolesArray.some(role => reqRoles.includes(role));
        if(!result) return res.sendStatus(401)
        next()
}
}

module.exports = verifyRoles;