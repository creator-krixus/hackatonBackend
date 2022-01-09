const schemaProducts = require('../models/products');

const controller = {}

controller.createNewProduct = (req, res) => {
    product = schemaProducts(req.body);
    product
        .save()
        .then(data =>  res.json(data))
        .catch(err => res.json({message:err}))
}

controller.getAllProducts = (req, res) => {
    schemaProducts
            .find()
            .then(data => res.json(data))
            .catch(error => res.json({message: error}))
}

controller.getById = (req, res) => {
    const { id } = req.params;
    schemaProducts
            .findById(id)
            .then((data) => res.json(data))
            .catch(error => res.json({message: error}))
}

controller.updateProductById = (req, res) => {
    const { id } = req.params;
    const { imagen, nombre, valor, calificacion } = req.body;
    schemaProducts
            .updateOne({_id: id}, {$set:{ imagen, nombre, valor, calificacion }})
            .then((data) =>  res.json(data))
            .catch((error) =>  res.json({message: error}))
}

controller.deleteProduct = (req, res) => {
    const { id } = req.params; 
    userSchema
        .remove({_id:id})
        .then((data) =>  res.json(data))
        .catch((error) =>  res.json({message: error}))
}

module.exports = controller;