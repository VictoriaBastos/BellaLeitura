const livrosController = require('../controller/livrosController')
const checkToken = require('../middleware/auth')

const express = require("express")
const router = express.Router()

//Public Routes
router.get('/', livrosController.getAll)
router.get('/autor', livrosController.getByAuthor)
router.get('/genero', livrosController.getByGenre)
router.get('/titulo', livrosController.getByTitle)

//Private Routes
router.post('/novo-livro/', checkToken,  livrosController.create)
router.put('/:id', checkToken, livrosController.update)
router.delete('/:id', checkToken,  livrosController.remove)

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmE4ZjA1Zjk2NDdhMjdkM2ZjMGU0NCIsImlhdCI6MTYzOTYxNjI4Nn0.4oRre22XPhCNtMlmHiW7jcBddjhmCB-95GRLhoB2PPY