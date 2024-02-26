const path = require('path')
const fileExtLimiter =(arrayOfExt)=>{
    return (req , res ,next)=>{
        const files = req.files
        const filesExt = []
        Object.keys(files).forEach(key=>{
            filesExt.push(path.extname(files[key].name))
        })
        const allowed = filesExt.every(ext => arrayOfExt.includes(ext))
        if (!allowed) {
            const message = `Upload failed. Only ${arrayOfExt.toString()} files allowed.`.replaceAll(",", ", ");

            return res.status(422).json({ status: "error", message });
        }
        next()
    }

}

module.exports = fileExtLimiter