const HospedagemSchema = require('../models/hospedagemSchema')
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
        const novaHospedagem = new HospedagemSchema({
            estabelecimento:req.body.estabelecimento,
            email:req.body.email,
            telefone:req.body.telefone,
            cnpj:req.body.cnpj,
            endereco:req.body.endereco,
            bairro:req.body.bairro,
            cidade:req.body.cidade,
            estado:req.body.estado,
            termoDeCompromisso:req.body.termoDeCompromisso
        })

        const hospedagem = await novaHospedagem.save();
        res.status(200).send(hospedagem)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
        try {
            let hospedagem = await HospedagemSchema.findById(req.params.id)
        
            if(hospedagem){
                hospedagem.estabelecimento = req.body.estabelecimento || hospedagem.estabelecimento
                hospedagem.email = req.body.email || hospedagem.email
                hospedagem.telefone = req.body.telefone || hospedagem.telefone
                hospedagem.cnpj = req.body.cnpj || hospedagem.cnpj
                hospedagem.endereco = req.body.endereco || hospedagem.endereco
                hospedagem.bairro = req.body.bairro || hospedagem.bairro
                hospedagem.cidade = req.body.cidade || hospedagem.cidade
                hospedagem.estado = req.body.estado || hospedagem.estado
                hospedagem.termoDeCompromisso = req.body.termoDeCompromisso || hospedagem.termoDeCompromisso
            
            await hospedagem.save()
            res.status(200).send(hospedagem)
            }

            res.status(400).json({message:"Não foi possível localizar essa hospedagem."})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

const remove = async (req, res) => {
    try {
        let hospedagem = await HospedagemSchema.findById(req.params.id)
        hospedagem.delete()

        res.status(200).send(hospedagem)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getByState = async (req, res) => {
    try {
        const hospedagem = await HospedagemSchema.find({estado: req.query.estado})
        res.status(200).send(hospedagem)
    } catch (error) {
        res.status(500).send(error.message)
    } 
}

const getByCity = async (req, res) => {
    try {
        const hospedagem = await HospedagemSchema.find({cidade: req.query.cidade})
        res.status(200).send(hospedagem)
    } catch (error) {
        res.status(500).send(error.message)
    } 
}

const getByNeighborhood = async (req, res) => {
    try {
        const hospedagem = await HospedagemSchema.find({bairro: req.query.bairro})
        res.status(200).send(hospedagem)
    } catch (error) {
        res.status(500).send(error.message)
    } 
}

module.exports = {
    getAll, 
    create,
    update,
    remove,
    getByState,
    getByCity,
    getByNeighborhood
}