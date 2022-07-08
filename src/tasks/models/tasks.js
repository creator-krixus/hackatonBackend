const mongoose = require('mongoose');

const SchemaTask = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
},
{
    //Con timestamps me pone la fecha de creacion del objeto
    timestamps:true,
    //Con versionKey le quito el valor que trae por defecto la version
    versionKey:false
}
)

module.exports = mongoose.model('task', SchemaTask);