const doacaoController = require('../controller/doacaoController')

const checkToken = require('../middleware/auth')

const express = require("express")
const authMiddleware = require('../middleware/auth')
const router = express.Router()


//rotas privadas 
router.post('/', checkToken, doacaoController.create)
//router.put('/', checkToken, doacaoController.update)
//router.delete('/', checkToken, doacaoController.delete)

//rotas publicas 

router.get('/', doacaoController.getAll)

module.exports = router;