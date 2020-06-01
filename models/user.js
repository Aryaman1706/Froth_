const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String
    },
    phone:{
        type: String,
        minlength: 10
    },
    groups:{
        type: Array,
        default: [] // array of object
    }
});

const User = mongoose.model('User', userSchema);

exports.User = User;