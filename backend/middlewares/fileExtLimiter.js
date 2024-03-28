const path = require('path')
const fileExtLimiter =(arrayOfExt)=>{
    console.log('checking extentions')
    return (req , res ,next)=>{
        console.log("s")
        const file = req.file

        console.log(file)
        if (!file) {
            next()
        }else{
            const filesExt = []
        Object.keys(file).forEach(key=>{
            console.log(path.extname(file[key].originalname || file.originalname))
            filesExt.push(path.extname(file[key].originalname || file.originalname))
        })
        const allowed = filesExt.every(ext => arrayOfExt.includes(ext))
        if (!allowed) {
            const message = `Upload failed. Only ${arrayOfExt.toString()} files allowed.`.replaceAll(",", ", ");

            return res.status(422).json({ status: "error", message });
        }
        console.log("tm")
        next()
    }
    }

}

module.exports = fileExtLimiter