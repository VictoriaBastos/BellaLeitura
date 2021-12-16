const doacaoController = require('../controller/doacaoController')
const hospedagemController = require('../controller/hospedagemController')
const authController = require('../controller/authController')

const express = require("express");
const router = express.Router();

router.post('/novo-doador', doacaoController.create)
router.post('/novo-posto', hospedagemController.create)
router.post('/autentica', authController.autentica)

module.exports = router;