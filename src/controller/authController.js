const UserSchema = require('../modules/userSchema');
const mongoose = require('mongoose');

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

        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = { registra }