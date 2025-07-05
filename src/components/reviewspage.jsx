import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Reviews.css";

function ReviewsPage() {
  // Retrieve the reviews from localStorage
  const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const [reviews, setReviews] = useState(storedReviews);

  // Function to remove a review
  const handleRemoveReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1); // Remove the review at the specified index
    setReviews(updatedReviews); // Update the state with the modified list of reviews

    // Save the updated list of reviews back to localStorage
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="container mt-3">
      <h1>Submitted Reviews</h1>
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-card mb-3">
              <div className="d-flex justify-content-between">
                <p>{review}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveReview(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove 
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews submitted yet.</p>
        )}
      </div>
      <Link to="/" className="btn btn-primary mt-3">Back to Main Page</Link>
    </div>
  );
}

export default ReviewsPage;
