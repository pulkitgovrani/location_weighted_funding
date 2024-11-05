const express = require("express");
const { vote, getVotes } = require("../controllers/voteController");
const router = express.Router();

router.post("/", vote);
router.get("/", getVotes);

module.exports = router;
