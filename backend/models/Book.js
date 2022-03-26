const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
  });
  const Book = mongoose.model('book', BookSchema);
  module.exports = Book