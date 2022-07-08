const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentation",
            version: "1.0.0"
        },
        servers: [
            {
                url:"https://hack-app-a.herokuapp.com/"
                // url:"https://localhost:6500"
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
 *      summary: Return a user
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
 *      summary: Update a user
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
 *      summary: Delete a user
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

//Creacion del esquema de la documentacion
/**
 * @swagger
 * components:
 *   schemas:
 *      products:
 *        type: object
 *        properties:
 *          imagen:
 *              type: string
 *              description: Imagen del producto
 *          nombre:
 *              type: string
 *              description: Nombre del producto
 *          valor:
 *              type: number
 *              description: Costo del producto
 *          calificacion: 
 *              type: string
 *              description: Calificacion del producto
 *        required:
 *            -imagen
 *            -nombre
 *            -valor
 *            -calificacion   
 *        example:
 *              imagen: http:imagen.png
 *              nombre: pera
 *              valor: 1400
 *              calificacion: cinco estrellas
 */




//Endpoint para crear nuevos productos
/**
 * @swagger
 * /api/v1/products:
 *  post:
 *      summary: Create new product
 *      tags: [products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/products'
 *      responses:
 *          200:
 *              description: New product create!
 */

//Endpoint para obtener todos los productos
/**
 * @swagger
 * /api/v1/products:
 *  get:
 *      summary: Return all products
 *      tags: [products]                
 *      responses:
 *          200:
 *              description: All products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/products'
 */


//Obtener una producto mediante el id
/**
 * @swagger
 * /api/v1/products/{id}:
 *  get:
 *      summary: Return a product for identifier unique
 *      tags: [products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: A product
 *      responses:
 *          200:
 *              description: A product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/products'
 *          404:
 *              description: Product not found
 */

//Editar la informacion de un producto
/**
 * @swagger
 * /api/v1/products/{id}:
 *  put:
 *      summary: Update a product
 *      tags: [products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update a product
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/products'
 *      responses:
 *          200:
 *              description: update product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/products'
 *          404:
 *              description: Product not found
 */

//Borra una producto
/**
 * @swagger
 * /api/v1/products/{id}:
 *  delete:
 *      summary: Delete a product
 *      tags: [products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Delete a product
 *      responses:
 *          200:
 *              description: Delete product
 *          404:
 *              description: Product not found
 */

//Creacion del esquema de la documentacion tasks
/**
 * @swagger
 * components:
 *   schemas:
 *      tasks:
 *        type: object
 *        properties:
 *          title:
 *              type: string
 *              description: Titulo de la tarea
 *          description:
 *              type: string
 *              description: Nombre del product
 *          tags:
 *              type: array
 *              description: Tags identificadores
 *        required:
 *            -title
 *            -description
 *            -tags
 *        example:
 *              title: Hacer un backend
 *              description: Crear un todo
 *              tags: [todo, back, lista]
 */




//Endpoint para crear nuevas tasks
/**
 * @swagger
 * /api/v1/tasks:
 *  post:
 *      summary: Create new task
 *      tags: [tasks]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/tasks'
 *      responses:
 *          200:
 *              description: New task create!
 */

//Endpoint para obtener todas las tasks
/**
 * @swagger
 * /api/v1/tasks:
 *  get:
 *      summary: Return all tasks
 *      tags: [tasks]                
 *      responses:
 *          200:
 *              description: All tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/tasks'
 */


//Obtener una task mediante el id
/**
 * @swagger
 * /api/v1/tasks/{id}:
 *  get:
 *      summary: Return a task for identifier unique
 *      tags: [tasks]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: A task
 *      responses:
 *          200:
 *              description: A task
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/tasks'
 *          404:
 *              description: Task not found
 */

//Editar la informacion de un producto
/**
 * @swagger
 * /api/v1/tasks/{id}:
 *  put:
 *      summary: Update a task
 *      tags: [tasks]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update a task
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/tasks'
 *      responses:
 *          200:
 *              description: update task
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          $ref: '#/components/schemas/tasks'
 *          404:
 *              description: Task not found
 */

//Borra una tarea
/**
 * @swagger
 * /api/v1/tasks/{id}:
 *  delete:
 *      summary: Delete a task
 *      tags: [tasks]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Delete a task
 *      responses:
 *          200:
 *              description: Delete task
 *          404:
 *              description: Task not found
 */