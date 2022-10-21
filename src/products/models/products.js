const mongoose = require('mongoose');

const SchemaProducts = mongoose.Schema({
    imagen: {
        type: String,
        // required: true
    },
    nombre: {
        type: String,
        // unique: true,
        // required: true
    },
    valor: {
        type: Number,
        // required: true
    },
    calificacion: {
        type: String,
        // default: true
    }
},
{
    //Con timestamps me pone la fecha de creacion del objeto
    timestamps:true,
    //Con versionKey le quito el valor que trae por defecto la version
    versionKey:false
}
)

module.exports = mongoose.model('product', SchemaProducts);