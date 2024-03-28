const MB = 100///only 100mb beceause we are broke and can't afford a descent cloud service
const FILE_SIZE_LIMIT = MB * 1024 * 1024


const fileSizeLimiter = (req , res ,next)=>{
    const files = req.files
    const filesOverLimit = []
    Object.keys(files).forEach(key=>{
        if(files[key].size > FILE_SIZE_LIMIT) filesOverLimit.push(files[key].name)
    })

    if(filesOverLimit.length){
        const properVerb = filesOverLimit.length>1 ? "are" : "is"
        const sentence = `upload failed : ${filesOverLimit.toString()}  ${properVerb} over the size limit of ${MB} MB`
        return res.status(413).json({"status" : "error" , "message" : sentence})
    }
    

    next()
}

module.exports = fileSizeLimiter