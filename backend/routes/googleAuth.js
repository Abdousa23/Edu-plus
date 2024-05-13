const express = require('express');
const session = require('express-session');
const passport = require('passport');
const {signToken} = require('../controllers/authController');
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
require('./auth');
require('dotenv').config();
require('../controllers/googleAuthController');

const router = express.Router();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get('',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/callback',
    passport.authenticate('google', {
        successRedirect : 'https://edu-plus-1.onrender.com/api/auth/google/setToken',
        failureRedirect: '/failure'
    })
);

router.get('/setToken', async (req, res, next) => {
    try {
        const result = await signToken(req, res);
        res.redirect("https://edu-plus-1.onrender.com/home");
    } catch (error) {
        next(error);
    }
});



router.get('/protected', isLoggedIn, (req, res) => {
    if (req.user) {
        res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
          //   cookies: req.cookies
        });
    }
});

router.get('/failure', (req, res) => {
    res.send('Failed to authenticate..');
});


module.exports = router