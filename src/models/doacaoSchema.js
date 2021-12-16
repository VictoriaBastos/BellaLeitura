const mongoose = require('mongoose');

const doacaoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true
    },
    termoDeCompromisso:{
        type: Boolean,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('parceirosDoacao', doacaoSchema)