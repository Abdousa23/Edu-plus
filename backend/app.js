const express = require('express');
// const app = express();
const {app }= require('./socket/socket')
const {server}= require('./socket/socket.js')
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');
const dotenv = require('dotenv');
const router = require("./routes/index")
const cookieParser = require('cookie-parser')
const connectDB = require('./config/connectDB');
const session = require('express-session');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const Swagger = require('./swagger.json');


require('./controllers/googleAuthController')
dotenv.config();
// what is is the perpose of this line
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// app.use(session({ secret: process.env.ACCESS_TOKEN_SECRET , resave: false, saveUninitialized: true ,cookie: { maxAge: 60000 }}));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(credentials)
app.use(cors({...corsOptions,origin: 'http://localhost:3000',credentials:true}));
// app.use(cors({
//   origin: 'http://localhost:3001', // specify the origin
//   credentials: true, // allow credentials
// }));


app.get('/', (_req, res) => {
    res.send('Welcome to my API');
})

app.use('/api', router);



// app.post('/upload',fileExtLimiter ,upload.single("image"),
// cloudinaryMW, (req, res) => {
//     console.log(req.fileUrls);
//     res.send('Image uploaded');
// });


app.use('/documentation', swaggerUi.serve, swaggerUi.setup(Swagger));

connectDB()
.then(() => {
    server.listen(3001, () => {
        console.log(`Server is running on port 3001`);
    });
})


.catch((err) => {
    console.error(err.message);
});  