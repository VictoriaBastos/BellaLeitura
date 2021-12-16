const express = require("express")
const router = express.Router()

router.get("/", (req, res)=> {
    res.status(200).json({
        "Titulo":"Bella Leitura",
        "versao":"1.0",
        "mensagem":"Projeto final do bootcamp {reprograma}"
    })
})

module.exports = router;