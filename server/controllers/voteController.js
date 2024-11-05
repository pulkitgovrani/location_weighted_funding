const Vote = require("../models/Vote");
const Project = require("../models/Project");

exports.vote = async (req, res) => {
  const { userId, projectId, amount } = req.body;
  try {
    const vote = await Vote.create({ userId, projectId, amount });
    const project = await Project.findByPk(projectId);
    project.funding += amount;
    await project.save();
    res.json(vote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVotes = async (req, res) => {
  try {
    const votes = await Vote.findAll();
    res.json(votes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
