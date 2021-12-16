const  DoacaoSchema = require('../models/doacaoSchema')
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
            colaborador:req.body.colaborador,
            email:req.body.email,
            telefone:req.body.telefone,
            cnpj:req.body.cnpj,
            termoDeCompromisso:req.body.termoDeCompromisso
        })
        const doacao = await novaDoacao.save();
        res.status(200).send(doacao)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        let doacao = await DoacaoSchema.findById(req.params.id)
        if(doacao){
            doacao.colaborador = req.body.colaborador || doacao.colaborador
            doacao.email = req.body.email || doacao.email
            doacao.telefone = req.body.telefone || doacao.telefone
            doacao.cnpj = req.body.cnpj || doacao.cnpj 
            doacao.termoDeCompromisso = req.body.termoDeCompromisso || doacao.termoDeCompromisso  
        await doacao.save()
        res.status(200).send(doacao)
        }
        res.status(400).json({message:"Não foi possível localizar esse colaborador"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const remove = async (req, res) => {
    try {
        let doacao = await doacaoSchema.findById(req.params.id)
        doacao.delete()
        res.status(200).send(doacao)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAll, 
    create,
    update,
    remove   
}