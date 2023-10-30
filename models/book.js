const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
});

module.exports = mongoose.model('Book', bookSchema);
