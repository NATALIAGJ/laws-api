import express from 'express';
import usarioController from '../controllers/usuario';
import normasController from '../controllers/normas';
import middleware from '../helpers/middleware';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

/* ROUTES USER */
router.post('/auth/signin', usarioController.signin);
router.post('/auth/signup', usarioController.signup);

/* ROUTES NORMAS */
router.get('/laws', middleware.verificaActualizacion, normasController.list);
router.post('/laws/create', middleware.verificaActualizacion, normasController.create);
router.get('/laws/:id/detail', middleware.verificaActualizacion, normasController.detail);
router.post('/laws/:id/update', middleware.verificaActualizacion, normasController.update);
router.delete('/laws/:id/delete', middleware.verificaActualizacion, normasController.deleteNorma);

export default router;
