const mongoose = require('mongoose');

const hospedagemSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('parceiros', hospedagemSchema)