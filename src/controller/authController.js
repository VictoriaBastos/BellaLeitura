require("dotenv").config(); //tirar
const DoacaoSchema = require('../models/doacaoSchema');
const HospedagemSchema = require('../models/hospedagemSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function generateToken(params ={}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    }); 
}

const autentica = async (req,res) => {
    const {email,password} = req.body;

    if(!email){
        return res.status(422).json({"ERRO:" : "Campo email é obrigatório"})
    }
    if(!password){
        return res.status(422).json({"ERRO:" : "Campo password é obrigatório"})
    }

    let user = await DoacaoSchema.findOne({ email: email})
    if(!user) user = await HospedagemSchema.findOne({ email: email})
    if(!user) res.status(404).send("ERRO: Usuário não encontrado")
    
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(422).send("ERRO: Senha Incorreta")
    }

    try{
        const secret = process.env.SECRET;
        const token = jwt.sign(
            { id:user._id},secret)
        res.status(200).json({msg:"Autenticação realizada com sucesso ", token})

    }catch(error){
        res.status(400).send("ERRO: Usuário não autorizado");
    }
}


module.exports = {
    autentica
 }