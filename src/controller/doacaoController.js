const  DoacaoSchema = require('../models/doacaoSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt'); 

const getAll = async (req,res) => {
    try {
        const doacao = await DoacaoSchema.find().select("-password -cnpj");
        res.status(200).send(doacao);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const {email,password} = req.body;

        const userExistente = await DoacaoSchema.findOne({ email: email})
        if(userExistente){
            return res.status(422).json({"ERRO:" : "Email já cadastrado"})
        }
    
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const novoDoador = new DoacaoSchema({
            nome:req.body.nome,
            email:req.body.email,
            password: passwordHash,
            telefone:req.body.telefone,
            cnpj:req.body.cnpj,
            endereco:req.body.endereco,
            bairro:req.body.bairro,
            cidade:req.body.cidade,
            estado:req.body.estado,
            termoDeCompromisso:req.body.termoDeCompromisso
        })

        const doador = await novoDoador.save();
        novoDoador.password = undefined;
        res.status(200).json({"message": "Doador cadastrado com sucesso", novoDoador})

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        let doacao = await DoacaoSchema.findById(req.params.id)
        if(doacao){
            doacao.nome = req.body.nome || doacao.nome
            doacao.email = req.body.email || doacao.email
            doacao.telefone = req.body.telefone || doacao.telefone
            doacao.cnpj = req.body.cnpj || doacao.cnpj 
            doacao.termoDeCompromisso = req.body.termoDeCompromisso || doacao.termoDeCompromisso  
        await doacao.save()
        res.status(200).send(doacao)
        }else{
            res.status(400).json({message:"Não foi possível localizar esse colaborador"})
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const remove = async (req, res) => {
    try {
        let doacao = await DoacaoSchema.findById(req.params.id)
        doacao.delete()
        res.status(200).json({"message":"Colaborador removido: ", doacao})
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