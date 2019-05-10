const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  },
  description: {
    type: String,
    default: 'No description'
  },
  tags: {
    type: [String]
  },
  bookmark: { type: Boolean, default: false }
});

module.exports = mongoose.model('Card', cardSchema);
