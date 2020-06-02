const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const auth = require('../middleware/auth');

const { User } = require('../models/user');
const { Group } = require('../models/group');

const router = express.Router();

// to get info about a group
router.get('/:id', auth, async (req, res)=>{
    const group = await Group.findById(req.params.id);
    if(!group) {
        res.send("no group found");
    } else {
        res.send(group);
    }
});

// to create a new group
router.post('/', auth, async(req, res)=>{
    let group = new Group({
        title: req.body.title,
        description: req.body.description 
    });
    // adding user to group
    group.members.push(req.user._id);
    group = await group.save();
    
    // adding group to user
    let user = await User.findById(req.user._id);
    user.groups.push(group._id);
    user = await user.save();

    res.send(group);
});

// join a group
router.put('/join/:id', auth, async(req, res)=>{
    // adding user to group
    let group = await Group.findById(req.params.id);
    group.members.push(req.user._id);
    group = await group.save();

    // adding group to user
    let user = await User.findById(req.user._id);
    user.groups.push(group._id);
    user = await user.save();

    res.send(group);
});

// leave a group
router.put('/leave/:id', auth, async(req, res)=>{
    // removing user from group
    let group = await Group.findById(req.params.id);
    for( var i = 0; i<group.members.length; i++ ) {
        if(group.members[i] === req.user._id){
            group.members.splice(i, 1);
            group = await group.save();
            break;
        };
    };

    // removing group from user
    let user = await User.findById(req.user._id);
    for (var j= 0; j<user.groups.length; j++){
        if(user.groups[i]._id === req.params.id){
            user.groups.splice(j,1);
            user = await user.save();
            break;
        };
    }

    res.send(group);
});

//remove a user from group
router.put('/removeMember/:id', async(req, res)=>{
    let group = await Group.findById(req.params.id);
    for(var i=0; i<group.members.length; i++){
        if(group.members[i] === req.body._id){
            group.members.splice(i,1);
            group = await group.save();
            break;
        }
    }
    res.send(group);
});