const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const bcrypt = require('bcrypt')
require('dotenv').config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
console.log(GOOGLE_CLIENT_ID)
console.log(GOOGLE_CLIENT_SECRET)

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
    callbackURL: "http://localhost:3000/api/auth/google/callback",
    passReqToCallback: true,
},
    async function (request, accessToken, refreshToken, profile, done) {
        const foundUser =  await User.find({email: profile.email }).exec()
        if(foundUser.length !=0 ){
            return done(null, profile);
        } 
        else {
            roles = {User: 2000};
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(process.env.RPWD, salt);
            newUser = await new User({email : profile.email , username : profile.displayName , firstname : profile.given_name , lastname : profile.family_name ,password : hashedPass,  roles }).save() 
            return done(null , profile)
        }
    }));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});