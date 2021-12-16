const mongoose = require('mongoose');

const hospedagemSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
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
    endereco:{
        type: String,
        required: true
    },
    bairro:{
        type: String,
        required: true
    },
    cidade:{
        type: String,
        required: true
    },
    estado:{
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

module.exports = mongoose.model('hospedeiros', hospedagemSchema)