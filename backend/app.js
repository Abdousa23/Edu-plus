const connectDB = require('./config/connectDB');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');
const cors = require("cors")
const router = require("./routes/index")
const cookieParser = require('cookie-parser')
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');
const cors = require("cors")
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (_req, res) => {
    res.send('Welcome to my API');
});

app.use('/api', router);

app.use(credentials)
app.use(cors(corsOptions))
connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });
})
.catch((err) => {
    console.error(err.message);
});