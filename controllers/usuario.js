import Usuario from '../models/Usuario';

/**
 * Autenticacion Usuario
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const signin = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });
    if (usuario) {
      if (usuario.password === req.body.password) {
        usuario.actualizado = true;
        await usuario.save();
        return res.json({ success: true });
      } else {
        return res.json({ success: false, msj: 'Credenciales Inválidas' });
      }
    } else {
      return res.json({ success: false, msj: 'Credenciales Inválidas' });
    }
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Registro usuario
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const signup = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    return res.json({ success: true, msj: 'Usuario creado' });
  } catch (err) {
    throw new Error(err);
  }
};

export default {
  signin,
  signup
};
