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
    const allTeams = await teamsModel.find();
    res.status(200).json(allTeams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific team by ID
export const getTeamById = async (req, res) => {
  try {
    const {_id}=req.body
    const team = await teamsModel.findOne({_id: _id});
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
    const { _id, newData } = req.body;
    const updatedTeam = await teamsModel.findOneAndUpdate(
      { _id: _id },
      { $set: newData },
      { new: true }
    );
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
    const { _id } = req.body;
    const deletedTeam = await teamsModel.findOneAndDelete({ _id: _id });
    if (deletedTeam) {
      res.status(200).send("Team deleted successfully");
    } else {
      res.status(404).send("Team not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};