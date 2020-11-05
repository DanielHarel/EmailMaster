const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const emailUser = mongoose.model('emailUsers');
// using one argument in the model means we are fetching from mongoose

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    emailUser.findById(id)
        .then(user => {
            done(null, user)
        });
});

passport.use(
    new GoogleStrategy(
        {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) =>{
        const existingUser = await emailUser.findOne({googleId: profile.id})
        if (existingUser) {
            done(null, existingUser);
        } else {
            const user = await new emailUser({ googleId: profile.id }).save();
            done(null, user);
        }
        }
    )
);