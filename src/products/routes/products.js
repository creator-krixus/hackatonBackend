const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

//Crear un nuevo producto
router.post('/', controller.createNewProduct)

//Obtener todos los productos
router.get('/', controller.getAllProducts)

//Obtener productos por categoria
router.get('/:id', controller.getById)

//Actualizar producto
router.put('/:id', controller.updateProductById)

//Borrado de producto
router.delete('/:id', controller.deleteProduct)

module.exports = router