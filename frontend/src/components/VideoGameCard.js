// components/VideoGameCard.js
import React from "react";
import ReviewInput from "./ReviewInput";

function VideoGameCard({ game, reviews, onReviewChange, onAddReview }) {
  return (
    <div className="game-card">
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
      <ReviewInput
        review={reviews[game.id] || ""}
        onReviewChange={(e) => onReviewChange(game.id, e.target.value)}
        onAddReview={() => onAddReview(game.id)}
      />
    </div>
  );
}

export default VideoGameCard;
