const router = require('express').Router();
const { errors } = require('celebrate');
const { validateLogin, validateCreateUser } = require('../middlewares/joi-schemas');
const { login, createUser } = require('../controllers/users');

const { validateToken } = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const BadRequestError = require('../errors/BadRequestError');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);
router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Exit' });
});

router.use('/users', validateToken, usersRouter);
router.use('/movies', validateToken, moviesRouter);
router.use('/*', validateToken, (req, res, next) => next(new BadRequestError('This page not found')));

router.use(errors());

module.exports = router;
