const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    position: { type: String, required: true },
    isFree: { type: Boolean, default: true }
});

module.exports = mongoose.model('Player', PlayerSchema);
