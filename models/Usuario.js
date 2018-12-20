import mongoose from 'mongoose';

const UsuarioSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, 'Introduzca un email valido']
  },
  password: {
    type: String
  },
  actualizado: {
    type: Boolean
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

const UsuarioModel = mongoose.model('usuario', UsuarioSchema, 'usuario');

export default UsuarioModel;
