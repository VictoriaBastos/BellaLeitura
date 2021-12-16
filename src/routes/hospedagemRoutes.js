const hospedagemController = require('../controller/hospedagemController')
const checkToken = require('../middleware/auth')

const express = require("express")
const router = express.Router()

//Public Routes
router.get('/', hospedagemController.getAll)
router.get('/bairro', hospedagemController.getByNeighborhood)
router.get('/cidade', hospedagemController.getByCity)
router.get('/estado', hospedagemController.getByState)

//Private Routes
router.post('/novo-posto', checkToken,  hospedagemController.create)
router.put('/:id', checkToken, hospedagemController.update)
router.delete('/:id', checkToken,  hospedagemController.remove)

module.exports = router;
