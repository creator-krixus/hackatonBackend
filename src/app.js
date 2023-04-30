const express = require('express');
const app = express();
const apiRoutes = require('./router/router')
const morgan = require('morgan')
const documents = require('./config/documentsApi')
require('dotenv').config()
const conection = require('./config/configDB')
const cors = require('cors');
const helmet = require('helmet')

const createApp = () => {
    app.set('port', process.env.PORT || 6500);
    app.use(express.json());
    app.use(morgan('dev'))
    app.use(cors());
    app.use(helmet());
    documents(app)
    
    conection(app);
    apiRoutes(app);

    return app
}

module.exports = createApp;