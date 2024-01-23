import teamsModel from "../models/teams.js";

export const createTeam =async (req, res) => {
  try {
    const { teamName, teamLeader, members } = req.body;
    const newTeam = await teamsModel.create({ teamName, teamLeader, members });
    res.status(201).json(newTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all teams
export const getTeam = async (req, res) => {
  try {
    const allTeams = await teamsModel.find().populate('teamLeader').populate('members.member');
    res.status(200).json(allTeams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific team by ID
export const getTeamById = async (req, res) => {
  try {
    const team = await teamsModel.findById(req.params.id).populate('teamLeader').populate('members.member');
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a team by ID
export const updateTeamById = async (req, res) => {
  try {
    const updatedTeam = await teamsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('teamLeader').populate('members.member');
    if (!updatedTeam) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(200).json(updatedTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a team by ID
export const deleteTeamById = async (req, res) => {
  try {
    const deletedTeam = await teamsModel.findByIdAndDelete(req.params.id);
    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};