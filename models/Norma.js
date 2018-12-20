import mongoose from 'mongoose';

const NormasSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  fecha: {
    type: Date
  },
  entidadEmision: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'entidad'
  },
  codigoNorma: {
    type: Number
  },
  ciudad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ciudad'
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuario'
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

const NormasModel = mongoose.model('norma', NormasSchema, 'norma');

export default NormasModel;
