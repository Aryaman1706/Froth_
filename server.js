const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

const { Group } = require('./models/group');
const { User } = require('./models/user');

const user = require('./routes/user');
const auth = require('./routes/auth-google');
const group = require('./routes/group');

const app = express();

// socket.io setup -->
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);
// -->

// middleware
app.use(express.json());

// set up session cookies
app.use(cookieSession({
    keys: ["professor"]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/group', group);

// add message route and socket.io work -->
io.on('connection', (socket) => {
    socket.on('join', (group_id)=>{
        socket.join(group_id);
        console.log("joined");
        socket.on('messageServer', (data) => {
            console.log("received", data);
            socket.broadcast.to(group_id).emit('messageClient', data);
            console.log("emited", data);
        });
    });

    socket.on('disconnect', ()=>{
        console.log("socket io disconnected");
    });
})
// -->

// database setup
mongoose.connect('mongodb://localhost/froth')
.then(()=> console.log('Connected to MongoDB...'))
.catch(err=>console.error('Not Connected...'));

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`Listening on Port ${port}...`));