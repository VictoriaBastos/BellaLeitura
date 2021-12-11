const UserSchema = require('../modules/userSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../helper/auth.json')

function generateToken(params ={}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    }); 
}

const registra = async (req, res) => {
    try{
        const {email} = req.body;
        if(await UserSchema.findOne({email:email})){
            return res.status(400).send("ERRO: email previamente cadastrado");
        }

        const novoUser = new UserSchema({
            nome:req.body.nome,
            email:req.body.email,
            password:req.body.password
        })
        const user = await novoUser.save();

        user.password = undefined;

        res.status(200).send({user, token: generateToken({id:user.id})});
    }catch(err){
        res.status(400).send("ERRO: Cadastro não autorizado");
    }
}

const autentica = async (req,res) => {
    const {email,password} = req.body;
    const user = await UserSchema.findOne({email: email}).select('+password');

    if(!user){
        return res.status(400).send("ERRO: Colaborador não encontrado")
    }
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send("ERRO: Senha incorreta")
    }

    user.password = undefined;

    res.status(200).send({user, token: generateToken({id:user.id})});
}


module.exports = { 
    registra,
    autentica
 }