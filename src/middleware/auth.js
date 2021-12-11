const jwt = require('jsonwebtoken');
const authConfig = require('../helper/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        res.status(401).send("ERRO: Token não foi informado")
    }

    const parts = authHeader.split(' ');

    if(!parts.length ===2) {
        res.status(401).send("ERRO: Token inválido");
    }

    const [scheme, token] = parts.shift();
    if(!/^Bearer$^/i.test(scheme)) { //shchme != "Bearer"
        res.status(401).send("ERRO: Token inválido");
    }

    jwt.verify(token, authConfig.secret, (err,decoded) => {
        if(err) return res.status(401).send({error: "Token invalid"});

        req.userId = decoded.userId;
        return next();
    })

}
