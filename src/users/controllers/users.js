const controller = {};

controller.createUser = (req, res) => {
    res.send('nuevo usuario creando');
}

controller.getAllUsers = (req, res) => {
    res.send('Lista de usuarios registrados');
}

controller.getOneUser = (req, res) => {
    res.send('usuario identificado por id')
}

controller.updateUser = (req, res) => {
    res.send('Usuario actualizado')
}

controller.deleteUser = (req, res) => {
    res.send('Usuario borrado')
}

module.exports = controller;