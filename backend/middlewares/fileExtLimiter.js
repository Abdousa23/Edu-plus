const path = require('path')
const fileExtLimiter =(arrayOfExt)=>{
    console.log('ss')
    return (req , res ,next)=>{
        console.log("s")
        const files = req.files

        console.log(files)
        const filesExt = []
        Object.keys(files).forEach(key=>{
            filesExt.push(path.extname(files[key].name))
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

module.exports = fileExtLimiter