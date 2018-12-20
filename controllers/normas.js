import Norma from '../models/Norma';

/**
 * Listar normas
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const list = async (req, res) => {
  try {
    const normas = await Norma.find({ usuario: global.idUsuario });
    return res.json({ success: true, normas: normas });
  } catch (err) {
    throw new Error(err);
  }
};


/**
 * Nueva norma
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const create = async (req, res) => {
  try {
    const nuevaNorma = new Norma(req.body);
    nuevaNorma.usuario = global.idUsuario;
    await nuevaNorma.save();
    return res.json({ success: true });
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Detalle norma
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const detail = async (req, res) => {
  try {
    const norma = await Norma.findById(req.params.id);
    return res.json({ success: true, norma: norma });
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Editar norma
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const update = async (req, res) => {
  try {
    const norma = await Norma.findByIdAndUpdate(req.params.id, req.body);
    return res.json({ success: true });
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Eliminar norma
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const deleteNorma = async (req, res) => {
  try {
    await Norma.findByIdAndRemove(req.params.id);
    return res.json({ success: true });
  } catch (err) {
    throw new Error(err);
  }
};

export default {
  list,
  create,
  detail,
  update,
  deleteNorma
};
