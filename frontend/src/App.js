import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [videoGames, setVideoGames] = useState([]); // State to store the video games
  const [newReview, setNewReview] = useState(""); // State to store the new review

  // Fetch all video games data from the server
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/videogames")
      .then((response) => {
        setVideoGames(response.data); // Update the video games state
      })
      .catch((error) => {
        console.error("There was an error fetching the video games!", error);
      });
  }, []);

  // Function to add a new review to a video game
  const handleAddReview = (id) => {
    axios
      .post(`http://localhost:5000/api/videogames/${id}/review`, {
        review: newReview,
      })
      .then((response) => {
        // Update the video games state with the new review
        const updatedGames = videoGames.map((game) =>
          game.id === id ? response.data.game : game
        );
        setVideoGames(updatedGames);

        setNewReview(""); // Clear the input field
      })
      .catch((error) => {
        console.error("There was an error adding the review!", error);
      });
  };

  return (
    <div className="App">
      <h1>Video Game Library</h1>
      <div className="game-list">
        {videoGames.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.title} />
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <div className="reviews">
              <h3>Reviews:</h3>
              {game.reviews.length > 0 ? (
                game.reviews.map((review, index) => <p key={index}>{review}</p>)
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Add a review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button onClick={() => handleAddReview(game.id)}>
              + Add Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
