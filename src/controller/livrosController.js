const  LivroSchema = require('../models/livroSchema')
const mongoose = require('mongoose')

const getAll = async (req,res) => {
    try {
        const livro = await LivroSchema.find();
        res.status(200).send(livro);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const body = req.body;
        const novoLivro = await LivroSchema.create(body)
        res.status(200).json({"message": "Livro cadastrado com sucesso", novoLivro})
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        let livro = await LivroSchema.findById(req.params.id)
        if(livro){
            livro.titulo = req.body.titulo || livro.titulo
            livro.texto = req.body.texto || livro.texto
            livro.ilustracao = req.body.ilustracao || livro.ilustracao
            livro.tradutores = req.body.tradutores || livro.tradutores  
            livro.editora = req.body.editora || livro.editora
            livro.idades = req.body.idades || livro.idades
            livro.ano = req.body.ano || livro.ano
            livro.pais = req.body.pais || livro.pais 
            livro.paginas = req.body.paginas || livro.paginas 
            livro.idDoador = req.body.idDoador || livro.idDoador
        await livro.save()
        res.status(200).send(livro)
        }else{
            res.status(400).json({message:"Não foi possível localizar esse livro"})
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const remove = async (req, res) => {
try {
    let livro = await LivroSchema.findById(req.params.id)
    livro.delete()

    res.status(200).json({"message":"Livro removido:", livro})
} catch (error) {
    res.status(500).send(error.message)
}
}


const getByTitle = async (req, res) => {
    try {
        const livro = await LivroSchema.find({titulo: req.query.titulo});
        res.status(200).send(livro)
    } catch (error) {
        res.status(500).send(error.message)
    } 
}
module.exports = {
    getAll, 
    create,
    update,
    remove,
    getByTitle
}