const express = require('express');
const app = express();
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({ secret: process.env.ACCESS_TOKEN_SECRET , resave: false, saveUninitialized: true ,cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());

app.use(credentials)
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('<a href="/api/auth/google">Authenticate with Google</a>');
});
app.use('/api', router);

// app.post('/upload',fileExtLimiter ,upload.single("image"),
// cloudinaryMW, (req, res) => {
//     console.log(req.fileUrls);
//     res.send('Image uploaded');
// });


app.use('/documentation', swaggerUi.serve, swaggerUi.setup(Swagger));

connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });
})
.catch((err) => {
    console.error(err.message);
});