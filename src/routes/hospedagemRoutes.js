const hospedagemController = require('../controller/hospedagemController')

const express = require("express")
const router = express.Router()

router.get('/', hospedagemController.getAll)
router.post('/', hospedagemController.create)

module.exports = router;