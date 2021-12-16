const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentation API Hackaton upb 2021",
            version: "1.0.0"
        },
        servers: [
            {
                url:"https://backend-hackaton2021.herokuapp.com/"
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
 *          nombre:
 *              type: string
 *              description: Nombre de usuario nuevo
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
 *           nombre: wilson   
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

//*********************************************************************************** */

//Creacion del esquema de la documentacion register new user
/**
 * @swagger
 * components:
 *   schemas:
 *      Users:
 *        type: object
 *        properties:
 *          nombre:
 *              type: string
 *              description: Nombre de usuario nuevo
 *          email:
 *              type: string
 *              description: Email valido
 *          password:
 *              type: string
 *              description: Clave secreta
 *          confirmPassword:
 *              type: string
 *              description: Confirmar clave secreta
 *          token:
 *              type: string
 *              description: Token de usuario
 *        required:
 *            -email
 *            -password
 *            -confirmPassword      
 *        example:
 *           nombre: wilson   
 *           email: email@gmail.com
 *           password: xxxxxxx
 *           token: xxxxxxx
 */


//Endpoint para obtener todos los usuarios
/**
 * @swagger
 * /api/v1/users:
 *  get:
 *      summary: Return all users
 *      tags: [users]                
 *      responses:
 *          200:
 *              description: All users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 */


//Obtener un usuario por su id
/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *      summary: Return a propertie
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: A user
 *      responses:
 *          200:
 *              description: A user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Users'
 *          404:
 *              description: Propertie not found
 */

//Editar la informacion de un usuario
/**
 * @swagger
 * /api/v1/users/{id}:
 *  put:
 *      summary: Update a propertie
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: update user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 *          404:
 *              description: User not found
 */


//Borra un usuario
/**
 * @swagger
 * /api/v1/users/{id}:
 *  delete:
 *      summary: Delete a propertie
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Delete a user
 *      responses:
 *          200:
 *              description: Delete user
 *          404:
 *              description: User not found
 */