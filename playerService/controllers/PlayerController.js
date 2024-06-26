const Player = require('../models/Player');

// Create a new player
exports.createPlayer = async (req, res) => {
    try {
        const { fullName, name, size, position } = req.body;
        const newPlayer = new Player({ fullName, name, size, position });
        const player = await newPlayer.save();
        res.status(201).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all players
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a player by ID
exports.getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a player
exports.updatePlayer = async (req, res) => {
    try {
        const { fullName, name, size, position, isFree } = req.body;
        const player = await Player.findByIdAndUpdate(req.params.id, { fullName, name, size, position, isFree }, { new: true });
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a player
exports.deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
