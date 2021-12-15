const express = require('express');
const router = express.Router()
const controller = require('../controllers/users')

router.post('/register', controller.createUser);
router.post('/login', controller.loginUser);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getOneUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;