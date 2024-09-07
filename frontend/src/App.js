import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import VideoGameCard from "./components/VideoGameCard";

function App() {
  const [videoGames, setVideoGames] = useState([]); // State to store the video games
  const [reviews, setReviews] = useState({}); // State to store reviews for each game

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
    const newReview = reviews[id]; // Get the review for the specific game

    if (newReview) {
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

          // Clear the review for the specific game after adding
          setReviews((prevReviews) => ({
            ...prevReviews,
            [id]: "",
          }));
        })
        .catch((error) => {
          console.error("There was an error adding the review!", error);
        });
    }
  };

  // Function to handle review input change for each game
  const handleReviewChange = (id, value) => {
    setReviews((prevReviews) => ({
      ...prevReviews, // ... spread operator: copy the existing reviews
      [id]: value, // Update the review for the specific game
    }));
  };

  return (
    <div className="App">
      <h1>Video Game Library</h1>
      <div className="game-list">
        {videoGames.map((game) => (
          <VideoGameCard
            key={game.id}
            game={game}
            reviews={reviews}
            onReviewChange={handleReviewChange}
            onAddReview={handleAddReview}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
