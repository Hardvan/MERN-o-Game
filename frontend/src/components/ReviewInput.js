// components/ReviewInput.js
import React from "react";

function ReviewInput({ review, onReviewChange, onAddReview }) {
  return (
    <div className="review-input">
      <input
        type="text"
        placeholder="Add a review"
        value={review}
        onChange={onReviewChange}
      />
      <button onClick={onAddReview}>+ Add Review</button>
    </div>
  );
}

export default ReviewInput;
