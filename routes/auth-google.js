const router = require('express').Router();
const passport = require('passport');
const auth = require('../middleware/auth');

// auth login
router.get('/google', passport.authenticate('google',{
    scope:['profile', 'email']
}));

// callback for google auth
router.get('/google/redirect', passport.authenticate('google'),( req, res )=>{
    res.send(req.user);
});

// logout
router.get('/logout', auth, ( req, res ) => {
    req.logout();
});

module.exports = router;