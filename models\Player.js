const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String
});

module.exports = mongoose.model('Player', playerSchema);