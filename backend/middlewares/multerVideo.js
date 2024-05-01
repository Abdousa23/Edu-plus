const multer = require('multer');
const path= require("path")
const date = require("date-fns")

const storage = multer.diskStorage({
destination : (req, file, cb) => {
    cb(null, 'video')
},
filename: (req,file,cb)=> {
    cb(null, Date.now() +path.extname(file.originalname) )
}
});  

const upload = multer({storage: storage});

module.exports = upload;
