const multer = require('multer');
const path= require("path")
const date = require("date-fns")

const storage = multer.diskStorage({
destination : (req, file, cb) => {
    cb(null, 'video')
},
filename: (req,file,cb)=> {
    console.log(file.originalname)
    cb(null, Date.now() +path.extname(file.originalname) )
}
});

const upload = multer({storage: storage});

module.exports = upload;
/* <form id="uploadForm" enctype="multipart/form-data" action="/uploadVideo" method="POST">
        <input type="file" name="video">
        <input type="submit">
    </form> *////this is how the form of the video must be
    ///in the input dont touch the name and the form action is showing the redirection of the form