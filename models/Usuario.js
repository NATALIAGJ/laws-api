import mongoose from 'mongoose';

const UsuarioSchema = mongoose.Schema({
  email: {
    type: String
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

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema, 'Usuario');

export default UsuarioModel;
