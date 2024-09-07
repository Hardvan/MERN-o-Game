const express = require("express");
const router = express.Router();
const videoGameController = require("../controllers/videogameController");

// Route to get all video games
router.get("/", videoGameController.getVideoGames);

// Route to add a review to a video game
router.post("/:id/review", videoGameController.addReview);

module.exports = router;
