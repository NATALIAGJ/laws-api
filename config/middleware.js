import jwt from 'jsonwebtoken';

const verifyJWTToken = (req, res, next) => {
  const token = req.headers.authentication;
  jwt.verify(token, 'simple', (err, decoded) => {
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token', flag: 0, Err: err });
    }
    console.log({ success: true, message: 'congrats you got in', flag: 1, dec: decoded });
    return next();
  });
};

const createJWToken = (usuario) => {
  const token = jwt.sign({
    data: usuario
  }, 'simple', {
    expiresIn: '1d'
  });
  return token;
};

export default {
  verifyJWTToken,
  createJWToken,
};
