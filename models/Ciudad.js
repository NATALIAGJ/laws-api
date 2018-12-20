import mongoose from 'mongoose';

const CiudadSchema = mongoose.Schema({
  nombre: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

const CiudadModel = mongoose.model('ciudads', CiudadSchema, 'ciudads');

export default CiudadModel;
