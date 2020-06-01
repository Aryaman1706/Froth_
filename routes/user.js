const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const auth = require('../middleware/auth');

const { User } = require('../models/user');

const router = express.Router();

// get my profile
router.get('/me', auth, async(req, res)=>{
    const user = await User.findById(req.user._id);
    res.send(user);
});

// get some user
router.get('/user', auth, async(req, res)=>{
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        res.send("No user found");
    }
    res.send({
        'email': user.email,
        'name': user.name,
        'groups': user.groups
    })
});

// get some user by id (done by group)
router.get('/:id', async(req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.send("user not found");
    } else {
        res.send({
            name: user.name,
            email: user.email
        });
    }
});

// edit my profile
router.put('/me', auth, async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.user._id, {
        name: req.body.name,
        phone: req.body.phone
    },{new:true});

    res.send(user);
});

// delete my account
router.delete('/me', auth, async(req, res)=>{
    const user = await User.findByIdAndRemove(req.user._id);
    res.send(user);
});

module.exports = router;