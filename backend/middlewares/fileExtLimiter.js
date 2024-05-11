const path = require('path')
const fileExtLimiter =(arrayOfExt)=>{
    return (req , res ,next)=>{
        const file = req.file

        if (!file) {
            next()
        }else{
            const filesExt = []
        Object.keys(file).forEach(key=>{
            filesExt.push(path.extname(file[key].originalname || file.originalname))
        })
        const allowed = filesExt.every(ext => arrayOfExt.includes(ext))
        if (!allowed) {
            const message = `Upload failed. Only ${arrayOfExt.toString()} files allowed.`.replaceAll(",", ", ");

            return res.status(422).json({ status: "error", message });
        }
        next()
    }
    }

}

module.exports = fileExtLimiter