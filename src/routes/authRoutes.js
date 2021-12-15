const authController = require('../controller/authController')

const express = require("express");
const router = express.Router();

router.post('/registra', authController.registra)
router.post('/autentica',authController.autentica)

module.exports = router;