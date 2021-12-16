const hospedagemController = require('../controller/hospedagemController')
const checkToken = require('../middleware/auth')

const express = require("express")
const router = express.Router()

//Public Routes
router.get('/', hospedagemController.getAll)
router.get('/', hospedagemController.getByNeighborhood)
router.get('/', hospedagemController.getByCity)
router.get('/', hospedagemController.getByState)


//Private Routes
//router.post('/', hospedagemController.create)
//router.put('/:id', hospedagemController.update)
//router.delete('/id', hospedagemController.delete)

//Private Routes
router.post('/', checkToken,  hospedagemController.create)
router.put('/:id', checkToken, hospedagemController.update)
router.delete('/:id', checkToken,  hospedagemController.delete)

module.exports = router;