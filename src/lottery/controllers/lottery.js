const SchemaLottery = require('../models/lottery')

const controller = {}

controller.createNewWin = (req, res) => {
    winner = SchemaLottery(req.body);
    winner
        .save()
        .then(data =>  res.json(data))
        .catch(err => res.json({message:err}))
}

controller.getWinners = (req, res) => {
    SchemaLottery
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({message: error}))
}

module.exports = controller