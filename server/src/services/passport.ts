import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback, StrategyOptions } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import keys from '../config/keys';
// import {Express} from 'express';

const emailUser = mongoose.model('emailUsers');
// using one argument in the model means we are fetching from mongoose

type Profile = {
    id: string;
}

passport.serializeUser((user: Express.User, done) => {
    done(null, user.id);
});

// passport.deserializeUser((id, done) => {
//     emailUser.findById(id)
//         .then(user => {
//             done(null, user)
//         });
// });

passport.deserializeUser(async (id, done: (err: any, user?: mongoose.Document | null ) => void) => {
    const user = await emailUser.findById(id)
    done(null, user);
        });

passport.use(
    new GoogleStrategy(
        {
    // @ts-ignore - keys.googleClientID will never be null
    clientID: keys.googleClientID,
    //@ts-ignore - keys.googleClientSecret will never be null
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },
    async (accessToken: any, refreshToken: any, profile: Profile, done: Function) =>{
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