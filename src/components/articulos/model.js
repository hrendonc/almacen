const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const ArticuloShema = new Schema ({
    codigo: {type: Number, required: true, unique: true},
    nombre: {type: String, required: true, unique: true},
    medida: {type: String, required: true},
    stock: {type: Number, required: true},    
    descripcion: {type: String},
    img: {type: String}
})

const model = Mongoose.model('Articulo', ArticuloShema)
module.exports = model