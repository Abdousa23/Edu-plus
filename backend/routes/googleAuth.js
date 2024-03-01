const express = require('express');
const session = require('express-session');
const passport = require('passport');
const signToken = require('../controllers/authController').signToken;
require('dotenv').config();
require('./auth');

const app = express();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: process.env.ACCESS_TOKEN_SECRET, resave: false, saveUninitialized: true ,cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }),signToken
);


app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

app.listen(3000, () => console.log('listening on port: 3000'));