import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import VideoGameCard from "./components/VideoGameCard";

function App() {
  const [videoGames, setVideoGames] = useState([]); // State to store the video games
  const [reviews, setReviews] = useState({}); // State to store reviews for each game

  // Use the environment variable for API URL
  const API_URL = process.env.REACT_APP_API_URL;

  // Fetch all video games data from the server and clear reviews
  useEffect(() => {
    // Clear reviews
    setReviews({});

    // Fetch video games data
    axios
      .get(`${API_URL}/api/videogames`)
      .then((response) => {
        setVideoGames(response.data); // Update the video games state
      })
      .catch((error) => {
        console.error("There was an error fetching the video games!", error);
      });
  }, [API_URL]);

  // Function to add a new review to a video game
  const handleAddReview = (id) => {
    const newReview = reviews[id]; // Get the review for the specific game

    if (newReview) {
      axios
        .post(`${API_URL}/api/videogames/${id}/review`, {
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

  // Function to delete all reviews for a video game
  const handleDeleteAllReviews = (id) => {
    axios
      .delete(`${API_URL}/api/videogames/${id}/reviews`)
      .then((response) => {
        // Update the video games state with the updated game
        const updatedGames = videoGames.map((game) =>
          game.id === id ? response.data.game : game
        );
        setVideoGames(updatedGames);

        // Clear reviews for the specific game
        setReviews((prevReviews) => ({
          ...prevReviews,
          [id]: "",
        }));
      })
      .catch((error) => {
        console.error("There was an error deleting all reviews!", error);
      });
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
            onDeleteAllReviews={handleDeleteAllReviews}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
