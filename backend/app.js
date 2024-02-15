const connectDB = require('./config/connectDB');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');
const cors = require("cors")
const mongoose = require("mongoose")
dotenv.config();

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