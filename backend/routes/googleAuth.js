const express = require('express');
const session = require('express-session');
const passport = require('passport');
const signToken = require('../controllers/authController').signToken;
require('dotenv').config();
require('./auth');

const router = express.Router;

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get('/',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }),signToken
);


router.get('/failure', (req, res) => {
    res.send('Failed to authenticate..');
});


module.exports = router