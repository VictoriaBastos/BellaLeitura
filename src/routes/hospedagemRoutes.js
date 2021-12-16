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
//router.post('/', hospedagemController.create)
//router.put('/:id', hospedagemController.update)
//router.delete('/id', hospedagemController.delete)

//Private Routes
router.post('/novo-posto', checkToken,  hospedagemController.create)
router.put('/:id', checkToken, hospedagemController.update)
router.delete('/:id', checkToken,  hospedagemController.remove)

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmE4ZjA1Zjk2NDdhMjdkM2ZjMGU0NCIsImlhdCI6MTYzOTYxNjI4Nn0.4oRre22XPhCNtMlmHiW7jcBddjhmCB-95GRLhoB2PPY