const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample video games data
const videoGamesData = require('./videogames_data.json');

// Routes
app.get('/api/videogames', (req, res) => {
    res.json(videoGamesData);
});

// Add new review
app.post('/api/videogames/:id/review', (req, res) => {
    const gameId = req.params.id;
    const { review } = req.body;
    const game = videoGamesData.find(game => game.id == gameId);
    
    if (game) {
        game.reviews.push(review);
        res.json({ success: true, message: "Review added successfully", game });
    } else {
        res.status(404).json({ success: false, message: "Game not found" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
