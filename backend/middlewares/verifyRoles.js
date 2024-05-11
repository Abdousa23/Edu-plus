const verifyRoles = (...allowedRoles) => {
    return (req, res , next)=>{
        const rolesArray =[...allowedRoles].flat()
        const reqRoles = [].concat(...Object.values(req.roles));
        if(!req?.roles) return res.status(401).json('Roles are not provided');
        const result = rolesArray.some(role => reqRoles.includes(role));
        if(!result) return res.sendStatus(401)
        next()
}
}

module.exports = verifyRoles;