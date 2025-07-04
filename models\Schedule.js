const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  date: Date,
  opponent: String,
  venue: String
});

module.exports = mongoose.model('Schedule', scheduleSchema);