const  HospedagemSchema = require('../modules/hospedagemSchema')
const mongoose = require('mongoose')

const getAll = async (req,res) => {
    try {
        const hospedagem = await HospedagemSchema.find();
        res.status(200).send(hospedagem);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const novaHospedagem = new DoacaoSchema({
            nome:req.body.nome
        })

        const hospedagem = await novaHospedagem.save();
        res.status(200).send(hospedagem)
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = {
    getAll, 
    create
}