const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const auth = require('../middleware/auth');
const joined = require('../functions/joined');

const { User } = require('../models/user');
const { Group } = require('../models/group');

const router = express.Router();

// get all groups
router.get('/', auth, async(req, res)=>{
    const user = await User.findById(req.user._id);
    const group = await Group.find({},{"members": 0}).sort('-membersLength');
    var result= [];
    group.forEach((item)=>{
        console.log(item)
        if( joined(item, user) === false ){
            result.push(item)
        }
    });
    res.send(result);
});

// get whole group
router.get('/open/:id', auth, async (req, res)=>{
    const group = await Group.findById(req.params.id);
    res.send(group);
});

// to get info about a group
router.get('/:id', auth, async (req, res)=>{
    const group = await Group.findById(req.params.id);
    if(!group) {
        res.send("no group found");
    } else {
        res.json({
            title: group.title,
            description: group.description,
            membersLength: group.membersLength,
            _id: group._id
        });
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
    group.membersLength = group.membersLength + 1;
    group = await group.save();
    
    // adding group to user
    let user = await User.findById(req.user._id);
    user.groups.push(group._id);
    user = await user.save();

    res.json({
        title: group.title,
        description: group.description,
        membersLength: group.membersLength,
        _id: group._id
    });
});

// join a group
router.put('/join/:id', auth, async(req, res)=>{
    let group = await Group.findById(req.params.id);
    let user = await User.findById(req.user._id);
    if( joined(group, user) === false ){
        // adding user to group
        group.members.push(req.user._id);
        group.membersLength = group.membersLength + 1;
        group = await group.save();

        // adding group to user
        user.groups.push(group._id);
        user = await user.save();

        res.json({
            title: group.title,
            description: group.description,
            membersLength: group.membersLength,
            _id: group._id
        });
    }else{
        console.log("already joined");
    }
    
});

// leave a group
router.put('/leave/:id', auth, async(req, res)=>{
    // removing user from group
    let group = await Group.findById(req.params.id);
    for( var i = 0; i<group.members.length; i++ ) {
        if(group.members[i].equals(req.user._id)){  
            group.members.splice(i, 1);
            group.membersLength = group.membersLength - 1;
            group = await group.save();
            break;
        };
    };

    // removing group from user
    let user = await User.findById(req.user._id);
    for (var j= 0; j<user.groups.length; j++){
        if(user.groups[j]._id.equals(req.params.id)){
            user.groups.splice(j,1);
            user = await user.save();
            break;
        };
    }

    res.json({
        title: group.title,
        description: group.description,
        membersLength: group.membersLength,
        _id: group._id
    });
});

//remove a user from group
router.put('/removeMember/:id', async(req, res)=>{
    let group = await Group.findById(req.params.id);
    for(var i=0; i<group.members.length; i++){
        if(group.members[i].equals(req.body._id)){
            group.members.splice(i,1);
            group.membersLength = group.membersLength - 1;
            group = await group.save();
            break;
        }
    }
    res.json({
        title: group.title,
        description: group.description,
        membersLength: group.membersLength,
        _id: group._id
    });
});

module.exports = router;