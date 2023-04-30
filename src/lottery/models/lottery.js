const mongoose = require('mongoose')

const SchemaLottery = mongoose.Schema({
    numero : {
        type: Number
    },
    vendedor: {
        type: String
    },
    apuesta: {
        type: Number
    },
    numeroGanador: {
        type: String
    }
},
{
    //Con timestamps me pone la fecha de creacion del objeto
    timestamps:true,
    //Con versionKey le quito el valor que trae por defecto la version
    versionKey:false
}
)

module.exports = mongoose.model('lottery', SchemaLottery)