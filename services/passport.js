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
    (accessToken, refreshToken, profile, done) =>{
        emailUser.findOne({googleId: profile.id})
            .then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new emailUser({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);