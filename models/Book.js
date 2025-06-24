const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
});
module.exports = mongoose.model('Book', bookSchema);
// This code defines a Mongoose schema for a book with fields for title, author, and year.