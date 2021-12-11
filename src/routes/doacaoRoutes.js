const doacaoController = require('../controller/doacaoController')

const express = require("express")
const router = express.Router()

router.get('/', doacaoController.getAll)
router.post('/', doacaoController.create)

module.exports = router;