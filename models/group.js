const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    members:{
        type:Array,
        default:[] // array of id of users
    }
});

const Group = mongoose.model('Group', groupSchema);

exports.Group = Group;