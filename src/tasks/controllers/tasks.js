const schemaTasks = require('../models/tasks');

const controller = {}

controller.createNewTask = (req, res) => {
    task = schemaTasks(req.body);
    task
        .save()
        .then(data =>  res.json(data))
        .catch(err => res.json({message:err}))
}

controller.getAllTasks = (req, res) => {
    schemaTasks
            .find()
            .then(data => res.json(data))
            .catch(error => res.json({message: error}))
}

controller.getById = (req, res) => {
    const { id } = req.params;
    schemaTasks
            .findById(id)
            .then((data) => res.json(data))
            .catch(error => res.json({message: error}))
}

controller.updateTaskById = (req, res) => {
    const { id } = req.params;
    const { title, description, tags } = req.body;
    schemaTasks
            .updateOne({_id: id}, {$set:{ title, description, tags }})
            .then((data) =>  res.json(data))
            .catch((error) =>  res.json({message: error}))
}

controller.deleteTask = (req, res) => {
    const { id } = req.params; 
    schemaTasks
        .remove({_id:id})
        .then((data) =>  res.json(data))
        .catch((error) =>  res.json({message: error}))
}

module.exports = controller;