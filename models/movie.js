const mongoose = require('mongoose');
const { linkRegValid } = require('../middlewares/linkRegValid');

const movieSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    validate: {
      validator: (url) => linkRegValid.test(url),
    },
  },
  trailerLink: {
    type: String,
    validate: {
      validator: (url) => linkRegValid.test(url),
    },
  },
  thumbnail: {
    type: String,
    validate: {
      validator: (url) => linkRegValid.test(url),
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
