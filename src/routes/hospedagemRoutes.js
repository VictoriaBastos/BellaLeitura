const hospedagemController = require('../controller/hospedagemController')
const checkToken = require('../middleware/auth')

const express = require("express")
const router = express.Router()

//Public Routes (5)
router.get('/', hospedagemController.getAll)
//router.get('/', hospedagemController.getByState)
//router.get('/', hospedagemController.getByCity)
//router.get('/', hospedagemController.getByNeighborhood)


//Private Routes (3)
router.post('/', checkToken,  hospedagemController.create)
//router.put('/', checkToken, hospedagemController.update)
//router.delete('/', checkToken,  hospedagemController.delete)

module.exports = router;