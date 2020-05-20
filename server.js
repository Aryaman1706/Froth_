const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

const user = require('./routes/user');
const auth = require('./routes/auth-google');

const app = express();

// middleware
app.use(express.json());

// set up session cookies
app.use(cookieSession({
    keys: "professor"
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', user);
app.use('/api/auth', auth);

// database setup
mongoose.connect('mongodb://localhost/froth')
.then(()=> console.log('Connected to MongoDB...'))
.catch(err=>console.error('Not Connected...'));

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`Listening on Port ${port}...`));