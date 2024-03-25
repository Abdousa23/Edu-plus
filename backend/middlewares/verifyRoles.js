const verifyRoles = (...allowedRoles) => {
    return (req, res , next)=>{
        const rolesArray =[...allowedRoles].flat()
        const reqRoles = [].concat(...Object.values(req.roles));
        console.log(reqRoles)
        if(!req?.roles) return res.status(401).json('Roles are not provided');
        console.log(rolesArray)
        const result = rolesArray.some(role => reqRoles.includes(role));
        console.log(result)
        if(!result) return res.sendStatus(401)
        next()
}
}

module.exports = verifyRoles;