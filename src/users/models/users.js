const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String
    },
    token: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('users', userSchema)