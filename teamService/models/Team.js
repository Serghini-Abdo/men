const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: String,
  city: String,
  listPlayers: [Number], // Player numbers
});

module.exports = mongoose.model('Team', TeamSchema);