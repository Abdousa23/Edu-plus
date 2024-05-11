const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '449721150061-eqankip4ekleq58p1qs712h8lsv0nii4.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth",
    passReqToCallback: true,
},
    function (request, accessToken, refreshToken, profile, done) {
        const foundUser =  User.find({email: profile.email })
        if(foundUser){
            return res.sendStatus(401); //Unauthorized
        }
        return done(null, profile);
    }));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});