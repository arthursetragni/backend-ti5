const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    default: 'arthursetragni@gmail.com'
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
