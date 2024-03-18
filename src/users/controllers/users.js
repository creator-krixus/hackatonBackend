const userSchema = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/users');
const auth = require("../auth/auth");

//Numero de rondas de encriptaciones
const roundSalt = 10;

const controller = {};

controller.createUser = async (req, res) => {
     try {
       const { nombre, email, password, confirmPassword } = req.body;
   
       if (password !== confirmPassword) {
         return res.status(400).json({ isOk: false, msj: 'Passwords do not match' });
       }
   
       // Validar email con expresiones regulares
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email)) {
         return res.status(400).json({ isOk: false, msj: 'Invalid email' });
       }
       // Verificar si el correo electrónico ya está en uso
       const existingUser = await userSchema.findOne({ email });
       if (existingUser) {
         return res.status(400).json({ isOk: false, msj: 'Email is already in use' });
       }
   
       const hashedPassword = await bcrypt.hash(password, roundSalt);
   
       const user = userSchema({
         nombre,
         email,
         password: hashedPassword,
       });
   
       const token = await jwt.sign(
         {
           id: user._id,
           email: user.email,
         },
         'kjaskjkfjkfhdshfurh65423',
         {
           expiresIn: 3600000,
         }
       );
   
       user.token = token;
   
       await user.save();
   
       return res.json({ isOk: true, msj: 'User created', data: user });
     } catch (error) {
       console.log(error);
       return res.status(500).json({ isOk: false, msj: 'Could not create user' });
     }
   };

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

// controller.getAllUsers = (req, res) => {
//     userSchema
//         .find()
//         .then(data =>  res.json(data))
//         .catch(error =>  res.json({msj: error}))
// }
controller.getAllUsers = (req, res) => {
     userSchema
     .find()
     .then((data) => {
     if (!data || data.length === 0) { // Si no hay datos encontrados, devuelve un error 404
     return res.status(404).json({msj: 'No users found' });
     }
     return res.status(200).json(data); // Devuelve una respuesta exitosa 200 con los datos
     })
     .catch((error) => res.status(500).json({msj: error.message })); // Si hay algún error, devuelve un error 500
     }

controller.getOneUser = (req, res) => {
     const { id } = req.params;
     
     userSchema
     .findById(id)
     .then((data) => {
     if (!data) { // Si el usuario no existe, devuelve un error 404
     return res.status(404).json({ isOk: false, msj: 'User not found' });
     }
     return res.json({ isOk: true, data: data });
     })
     .catch((error) => res.status(500).json({ isOk: false, msj:'user not found', error: error }));
}     

// controller.updateUser = (req, res) => {
//      const { id } = req.params;
//      const { nombre, email, password } = req.body;
//      userSchema
//          .updateOne({_id: id}, {$set:{ nombre, email, password }})
//          .then((data) =>  res.json(data))
//          .catch((error) =>  res.json({message: error}))
// }
controller.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, password } = req.body;

    // Validar que los parámetros no sean undefined o null
    if (!id || !nombre || !email || !password) {
      return res.status(400).json({ message: 'Faltan parámetros en la solicitud.' });
    }

    // Actualizar el usuario en la base de datos
    const updatedUser = await userSchema.updateOne({ _id: id }, { nombre, email, password });

    // Devolver el usuario actualizado
    res.json(updatedUser);
  } catch (error) {
    // Devolver un código de error adecuado y un mensaje descriptivo
    res.status(500).json({ message: error.message });
  }
};

// controller.deleteUser = (req, res) => {
//      const { id } = req.params; 
//      userSchema
//          .remove({_id:id})
//          .then((data) =>  res.json(data))
//          .catch((error) =>  res.json({message: error}))
// }
controller.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el parámetro no sea undefined o null
    if (!id) {
      return res.status(400).json({ message: 'Falta el parámetro de ID en la solicitud.' });
    }

    // Eliminar el usuario de la base de datos
    const deletedUser = await userSchema.remove({ _id: id });

    // Devolver el usuario eliminado
    res.json(deletedUser);
  } catch (error) {
    // Devolver un código de error adecuado y un mensaje descriptivo
    res.status(500).json({ message: error.message });
  }
};
module.exports = controller;