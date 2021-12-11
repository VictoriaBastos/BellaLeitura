const  DoacaoSchema = require('../modules/doacaoSchema')
const mongoose = require('mongoose')

const getAll = async (req,res) => {
    try {
        const doacao = await DoacaoSchema.find();
        res.status(200).send(doacao);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const novaDoacao = new DoacaoSchema({
            nome:req.body.nome
        })

        const doacao = await novaDoacao.save();
        res.status(200).send(doacao)
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = {
    getAll, 
    create
}