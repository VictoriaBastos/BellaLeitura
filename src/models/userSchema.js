const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
       // unique: true,
       // lowercase: true
    },
    password:{
        type: String,
        required: true,
       // select:false
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('User', UserSchema)