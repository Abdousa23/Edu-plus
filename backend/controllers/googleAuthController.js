const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '449721150061-eqankip4ekleq58p1qs712h8lsv0nii4.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const User = require('../models/user');

var roles = {
    User: 0,
    Admin: 0,
    Editor: 0,
    School: 0
}


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true,
},
    async function (request, accessToken, refreshToken, profile, done) {
        console.log(profile);
        const foundUser =  User.find({email: profile.email }).exec()
        if(foundUser){
            return done(null, profile);
        } 
        else {
            roles = {User: 2000};
            return newUser = await new User({email : profile.email , username : profile.displayName ,  roles }).save() 
        }
    }));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});