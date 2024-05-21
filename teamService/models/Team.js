const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    listPlayers: { type: [Number] }
});

module.exports = mongoose.model('Team', TeamSchema);
