const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router()
const controller = require('../controllers/users')

router.post('/', controller.createUser);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getOneUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;