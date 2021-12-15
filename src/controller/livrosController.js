const  LivroSchema = require('../models/livroSchema')
const mongoose = require('mongoose')


const getAll = async (req,res) => {
    try {
        const livro = await LivroSchema.find();
        res.status(200).send(hospedagem);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const novoLivro = new LivroSchema({
            nome:req.body.nome
        })

        const livro = await novoLivro.save();
        res.status(200).send(livro)
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = {
    getAll, 
    create
}