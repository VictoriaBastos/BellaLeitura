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
        const novoLivro = new LivroSchema({
            titulo:req.body.titulo,
            autor:req.body.autor,
            genero:req.body.genero,
            paginas:req.body.paginas
            
        })

        const livro = await novoLivro.save();
        res.status(200).send(livro)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        let livro = await LivroSchema.findById(req.params.id)
        if(livro){
            livro.titulo = req.body.titulo || livro.titulo
            livro.autor = req.body.autor || livro.autor
            livro.genero = req.body.genero || livro.genero
            livro.paginas = req.body.paginas || livro.paginas  
        await livro.save()
        res.status(200).send(livro)
        }
        res.status(400).json({message:"Não foi possível localizar esse livro"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const remove = async (req, res) => {
try {
    let livro = await LivroSchema.findById(req.params.id)
    livro.delete()

    res.status(200).json({"message":"Livro removido: ", livro})
} catch (error) {
    res.status(500).send(error.message)
}
}

const getByAuthor = async (req, res) => {
    try {
        const livro = await LivroSchema.find({autor: req.query.autor})
        res.status(200).send(livro)
    } catch (error) {
        res.status(500).send(error.message)
    } 
}

const getByGenre = async (req, res) => {
    try {
        const livro = await LivroSchema.find({genero: req.query.genero})
        res.status(200).send(livro)
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
    getByAuthor,
    getByGenre,
    getByTitle
}