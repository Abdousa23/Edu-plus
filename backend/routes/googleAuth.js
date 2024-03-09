const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authController = require('../controllers/authController');
require('dotenv').config();
require('../controllers/googleAuthController');

const router = express.Router();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get('/',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure'
    }),authController.signToken
);


router.get('/failure', (req, res) => {
    res.send('Failed to authenticate..');
});


module.exports = router