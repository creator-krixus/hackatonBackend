const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasks')

//Crear una nnueva tarea
router.post('/', controller.createNewTask)

//Obtener todas las tareas
router.get('/', controller.getAllTasks)

//Obtener productos por categoria
router.get('/:id', controller.getById)

//Actualizar tarea
router.put('/:id', controller.createNewTask)

//Borrado de una tarea
router.delete('/:id', controller.deleteTask)

module.exports = router