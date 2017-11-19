const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/authgoog',
        failureRedirect: '/login'
    }));

module.exports = router;


