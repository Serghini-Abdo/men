const Team = require('../models/Team');

// Create a new team
exports.createTeam = async (req, res) => {
    try {
        const { name, city, listPlayers } = req.body;
        const newTeam = new Team({ name, city, listPlayers });
        const team = await newTeam.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all teams
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a team by ID
exports.getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a team
exports.updateTeam = async (req, res) => {
    try {
        const { name, city, listPlayers } = req.body;
        const team = await Team.findByIdAndUpdate(req.params.id, { name, city, listPlayers }, { new: true });
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a team
exports.deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
