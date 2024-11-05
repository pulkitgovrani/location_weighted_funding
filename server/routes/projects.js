const express = require("express");
const {
  createProject,
  getProjects,
  getLeaderboard,
} = require("../controllers/projectController");
const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.get("/leaderboard", getLeaderboard);

module.exports = router;
