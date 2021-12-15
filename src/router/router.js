const express = require('express');
const router = express.Router();
const routes = require('../users/routes/users')

const apiRouter = (app) => {
    app.use('/api/v1', router);
    router.use('/users', routes)
};

module.exports = apiRouter