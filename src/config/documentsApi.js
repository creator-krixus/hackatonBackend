const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentation API Brexiu",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:6500"
            }
        ]
    },
    apis: ['./src/config/documentsApi.js']
}

const documents = (app) => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)));
}

module.exports = documents;

//Creacion del esquema de la documentacion register new user
/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              description: Email valido
 *          password:
 *              type: string
 *              description: Clave secreta
 *          confirmPassword:
 *              type: string
 *              description: Confirmar clave secreta
 *        required:
 *            -email
 *            -password
 *            -confirmPassword     
 *        example:
 *           email: email@gmail.com
 *           password: Halo1
 *           confirmPassword: Halo1
 */

//Creacion del esquema de la documentacion login user
/**
 * @swagger
 * components:
 *   schemas:
 *      UserLogin:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              description: Email valido
 *          password:
 *              type: string
 *              description: Clave secreta
 *          confirmPassword:
 *              type: string
 *              description: Confirmar clave secreta
 *        required:
 *            -email
 *            -password   
 *        example:
 *           email: email@gmail.com
 *           password: Halo1
 */

//Endpoint para registrar y crear nuevos usuarios
/**
 * @swagger
 * /api/v1/users/register:
 *  post:
 *      summary: Create new user
 *      tags: [users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: New user create!
 */

//Endpoint para logear los usuarios
/**
 * @swagger
 * /api/v1/users/login:
 *  post:
 *      summary: Login 
 *      tags: [users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/UserLogin'
 *      responses:
 *          200:
 *              description: User login!
 */