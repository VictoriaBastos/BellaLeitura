const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    titulo:{
        type: String,
        required: true
    },
    texto:{
        type: String,
        required: true
    },
    ilustracao:{
        type: String,
        required: true
    },
    tradutores:{
        type: String,
        required: false
    },
    editora:{
        type: String,
        required: true
    },
    idades:{
        type: String,
        required: true
    },
    ano:{
        type: String,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    paginas:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('livros', livroSchema);