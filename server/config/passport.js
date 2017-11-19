const GoogleStrategy = require('passport-google-oauth2').Strategy;

const configAuth = require('./auth');
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,
        passReqToCallback: true
    },
        function (request, accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                User.findOne({ 'google.id': profile.id }, function (err, user) {
                    if (err)
                        return done(err);
                    if (user)
                        return done(null, user);
                    else {
                        let newUser = new User({
                            username: 'google_user',
                            email: 'google_email',
                            password: 'google_password',
                            google: {
                                id: profile.id,
                                token: accessToken,
                                name: profile.displayName,
                                email: profile.emails[0].value
                            }
                        })
                        User.addUser(newUser, (err, user) => {
                            if (err) {
                                return (err);
                            } else {
                                return done(null, newUser);
                            }
                        });
                    }
                });
                //console.log('goog..........');
                //console.log(profile);
                // console.log(profile.displayName);
                // console.log(profile.emails[0].value);
                //return done(null, profile);
            }
            );
        }
    ));
};