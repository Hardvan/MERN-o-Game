const express = require("express");
const router = express.Router();
const videoGameController = require("../controllers/videogameController");

// Route to get all video games
router.get("/", videoGameController.getVideoGames);

// Route to add a review to a video game
router.post("/:id/review", videoGameController.addReview);

// Route to delete all reviews for a specific game
router.delete("/videogames/:id/reviews", (req, res) => {
  const { id } = req.params;

  // Logic to find the game and clear its reviews
  const game = games.find((game) => game.id === parseInt(id));
  if (game) {
    game.reviews = [];
    res.json({ game });
  } else {
    res.status(404).send("Game not found");
  }
});

module.exports = router;
