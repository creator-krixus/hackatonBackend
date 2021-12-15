const userSchema = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/users');
const auth = require("../auth/auth");

//Numero de rondas de encriptaciones
const roundSalt = 10;

const controller = {};

controller.createUser = async(req, res) => {
    try {
        const {email, password, confirmPassword} = req.body;
        
        if (password == confirmPassword){
             //encriptar la clave
             const hashed = await bcrypt.hash(password, roundSalt);
             const user = userSchema({
                  email: email,
                  password: hashed
             });
             //Generamos el token
             const token = await jwt.sign({
                  email,
                  password : password
             }, "kjaskjkfjkfhdshfurh65423", {
                  expiresIn:3600000
             })
             //Añadimos el token al objeto usuario
             user.token = token;
             //Ingresamos el usuario a la db con el token
             user
                  .save()
                  .then(data => {
                       res.json(data)
                       res.json({isOk: true, msj:'Usuario creado'});
                  } )
                  .catch(error =>  {
                       res.json(error)
                       res.json('Usuario no se puede crear');
                  })
             
        }else{
             //Enviar mensaje de error
             res.json({isOk: false, msj: 'Passwords not equals'});
        }
   } catch (error) {
        console.log(error)
   }
}

//Logeamos un usuario
controller.loginUser = async (req, res) => {
    // Our login logic starts here
    try {
       // Get user input
       const { email, password } = req.body;
       // Validate user input
       if (!(email && password)) {
         res.status(400).send("All input is required");
       }
       // Validate if user exist in our database
       const user = await users.findOne({ email });
       if (user && (await bcrypt.compare(password, user.password))) {
         // Create token
         const token = jwt.sign(
           { user_id: user._id, email },
           "kjaskjkfjkfhdshfurh65423",
           {
             expiresIn: 3600000,
           }
         );
         // save user token
         user.token = token;
         // user
         res.status(200).json(user); 
       }
       res.status(400).send("Invalid Credentials");
     } catch (err) {
       console.log(err);
     }
     // Our register logic ends here
  }

controller.getAllUsers = (req, res) => {
    userSchema
        .find()
        .then(data =>  res.json(data))
        .catch(error =>  res.json({msj: error}))
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