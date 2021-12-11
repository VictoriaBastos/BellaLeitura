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

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash.toString();

    next();
})

module.exports = mongoose.model('User', UserSchema)