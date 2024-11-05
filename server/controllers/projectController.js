const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { name, description, lat, lon } = req.body;
  try {
    const project = await Project.create({ name, description, lat, lon });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const projects = await Project.findAll({ order: [["funding", "DESC"]] });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
