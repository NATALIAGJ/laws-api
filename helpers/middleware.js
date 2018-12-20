import Usuario from '../models/Usuario';

const verificaActualizacion = async (req, res, next) => {
  try {
    const idUsuario = req.headers.idusuario;
    const usuario = await Usuario.findOne({ _id: idUsuario });
    if (usuario.actualizado) {
      global.idUsuario = usuario._id;
      return next();
    } else {
      return res.json({ success: false, msj: 'Usuario no autorizado' });
    }
  } catch (err) {
    return res.json({ 
      success: false, 
      msj: 'Oops! Ocurrió un error', 
      err: err
    });
  }
};

export default {
  verificaActualizacion
};
