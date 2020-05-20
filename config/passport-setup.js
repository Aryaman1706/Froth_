const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const {User} = require('../models/user');
const mongoose = require('mongoose');

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser(async(id, done)=>{
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy ({
        clientID: "706694732553-5nsvck643pqebkle654c8fdqvkg4h4bl.apps.googleusercontent.com",
        clientSecret:"Qr8wY4uhBeeJCnmNiEm4FvFc",
        callbackURL: '/api/auth/google/redirect'
    }, async ( accessToken, refreshToken, profile, done ) => {
        // check if user already exists
        const user = await User.findOne({email: profile._json.email});
        if(user){
            console.log("user exists as \n" + user);
            done(null, user);
        } else{
            console.log(profile);
            let newUser = new User ({
                    email: profile._json.email,
                    name: profile.displayName
            });
            newUser = await newUser.save();
            console.log("new user created \n"+ newUser);
            done(null, newUser);
        }
    })
);