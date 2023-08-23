const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const NotAuthError = require('../errors/NotAuthError');

module.exports.validateToken = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(
      token,
      'dev-secret',
    );
  } catch (err) {
    return next(new NotAuthError('Authorization required'));
  }

  req.user = payload;

  return next();
};
