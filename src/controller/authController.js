require("dotenv").config(); //tirar
const UserSchema = require('../modules/userSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function generateToken(params ={}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    }); 
}

const registra = async (req, res) => {
    try{
        const {nome, email,password} = req.body;

        if(!nome){
            return res.status(422).json({"ERRO:" : "Campo nome é obrigatório"})
        }
        if(!email){
            return res.status(422).json({"ERRO:" : "Campo email é obrigatório"})
        }
        if(!password){
            return res.status(422).json({"ERRO:" : "Campo password é obrigatório"})
        }
        
        const userExistente = await UserSchema.findOne({ email: email})

        if(userExistente){
            return res.status(422).json({"ERRO:" : "Email já cadastrado"})
        }
    
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new UserSchema({ 
            nome,
            email, 
            password: passwordHash
        })
        
        await user.save();

        res.status(201).json({"msg:" : "Usuário cadastrado com sucesso"})
        
    }catch(error){
        console.log(error)
        res.status(400).send("ERRO: Cadastro não autorizado");
    }
}

const autentica = async (req,res) => {
    const {email,password} = req.body;

    if(!email){
        return res.status(422).json({"ERRO:" : "Campo email é obrigatório"})
    }
    if(!password){
        return res.status(422).json({"ERRO:" : "Campo password é obrigatório"})
    }

    const user = await UserSchema.findOne({ email: email})

    if(!user){
        return res.status(404).send("ERRO: Usuário não encontrado")
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        console.log(password)
        console.log(user.password)
        return res.status(422).send("ERRO: Senha Incorreta")
    }

    try{
        const secret = process.env.SECRET;
        
        const token = jwt.sign(
            {
            id:user._id,
            },
            secret)
        res.status(200).json({msg:"Autenticação realizada com sucesso ", token})

    }catch(error){
        console.log(error)
        res.status(400).send("ERRO: Cadastro não autorizado");
    }
}


module.exports = { 
    registra,
    autentica
 }