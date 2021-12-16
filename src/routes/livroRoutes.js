const livrosController = require('../controller/livrosController')
const checkToken = require('../middleware/auth')

const express = require("express")
const router = express.Router()

//Public Routes
router.get('/', livrosController.getAll)
router.get('/', livrosController.getByGenre)
router.get('/', livrosController.getByTitle)
router.get('/', livrosController.getByAuthor)


//Private Routes
router.post('/', checkToken,  livrosController.create)
router.put('/', checkToken, livrosController.update)
router.delete('/', checkToken,  livrosController.delete)

module.exports = router;