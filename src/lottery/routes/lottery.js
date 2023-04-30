const express = require('express');
const router = express.Router();
const controller = require('../controllers/lottery')

router.post('/', controller.createNewWin)

router.get('/', controller.getWinners)

module.exports = router