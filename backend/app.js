const connectDB = require('./config/connectDB');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });
})
.catch((err) => {
    console.error(err.message);
});