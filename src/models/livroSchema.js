const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    paginas:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('livros', livroSchema);