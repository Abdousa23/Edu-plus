const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');
const dotenv = require('dotenv');
const router = require("./routes/index")
const cookieParser = require('cookie-parser')
const connectDB = require('./config/connectDB');
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(credentials)
app.use(cors(corsOptions))

app.get('/', (_req, res) => {
    res.send('Welcome to my API');
});
app.use('/api', router);

// app.post('/upload',fileExtLimiter ,upload.single("image"),
// cloudinaryMW, (req, res) => {
//     console.log(req.fileUrls);
//     res.send('Image uploaded');
// });

connectDB()
.then(() => {
    app.listen(3001, () => {
        console.log(`Server is running on port 3000`);
    });
})
.catch((err) => {
    console.error(err.message);
});