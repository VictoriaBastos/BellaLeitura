const doacaoController = require('../controller/doacaoController')
const express = require("express")
const authMiddleware = require('../middleware/auth')
const router = express.Router()


router.use(authMiddleware);
router.get('/', doacaoController.getAll)
router.post('/', doacaoController.create)

module.exports = router;