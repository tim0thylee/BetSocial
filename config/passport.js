const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/user')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/redirect',
      proxy: true
    }, 
      (accessToken, refreshToken, profile, done) => {
      
      //User.findOne won't fire until we have all our google data
      process.nextTick(() => {
        //check if user already exists in our db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        
        if (currentUser) {
          //already have the user
          console.log('user is', currentUser)
          res.send(currentUser);
          done(null, currentUser);

        } else {
          //if not, create user in our db
          new User({
            googleId: profile.id,
            name: profile.displayName

          }).save().then((newUser) => {
            console.log('new user is', newUser);
            done(null, newUser);
          })
        }
      })
      })     
    })
);