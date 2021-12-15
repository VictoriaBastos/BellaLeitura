const doacaoController = require('../controller/doacaoController')
const checkToken = require('../middleware/auth')

const express = require("express")
const router = express.Router()

//rotas privadas 
router.post('/', checkToken, doacaoController.create)
//router.put('/', checkToken, doacaoController.update)
//router.delete('/', checkToken, doacaoController.delete)

//rotas publicas 
router.get('/', doacaoController.getAll)

//Private Routes
//router.post('/:', doacaoController.create)
//router.put('/:id', doacaoController.update)
//router.delete('/:id', doacaoController.delete)

//router.post('/', checkToken,  doacaoController.create)
//router.put('/:id', checkToken, doacaoController.update)
//router.delete('/:id', checkToken,  doacaoController.delete)

module.exports = router;