import mongoose from 'mongoose';

const EntidadSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  nit: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

const EntidadModel = mongoose.model('entidad', EntidadSchema, 'entidad');

export default EntidadModel;
