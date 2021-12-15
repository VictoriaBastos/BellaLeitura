const mongoose = require('mongoose');

const doacaoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('parceiros', doacaoSchema)