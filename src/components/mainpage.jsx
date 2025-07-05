import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for routing
import "../Main.css";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);  // Keep track of reviews locally in state (not necessary for review submission)
  const navigate = useNavigate();

  const cardData = [
    { id: 1, title: "Halo Infinite", genre: "Action", publisher: "343 Studios", imgSrc: "halo.png", rating: 4.5 },
    { id: 2, title: "Halo MCC", genre: "Action", publisher: "343 Studios", imgSrc: "halomcc.png", rating: 4.8 },
    { id: 3, title: "Hollow Knight", genre: "Metroidvania", publisher: "Team Cherry", imgSrc: "hollow.png", rating: 4.9 },
    { id: 4, title: "Dark Souls 3", genre: "Souls Like", publisher: "From Software", imgSrc: "darksouls3.png", rating: 4.7 },
    { id: 5, title: "Dead Space Remake", genre: "Horror", publisher: "EA", imgSrc: "deadspace.png", rating: 4.6 },
    { id: 6, title: "Terraria", genre: "Creative", publisher: "505 Studios", imgSrc: "terraria.png", rating: 4.4 },
    { id: 7, title: "Concord", genre: "Shooter", publisher: "Sony Interactive", imgSrc: "concord.png", rating: 4.3 },
    { id: 8, title: "Elden Ring", genre: "Souls Like", publisher: "From Software", imgSrc: "eldenring.png", rating: 4.9 },
    { id: 9, title: "Black Ops 6", genre: "Shooter", publisher: "Treyarch", imgSrc: "bo6.png", rating: 4.2 },
    { id: 10, title: "Mario Party", genre: "RPG", publisher: "Nintendo", imgSrc: "marioparty.png", rating: 4.1 },
    { id: 11, title: "Forza Horizon 4", genre: "Racing", publisher: "Playground Games", imgSrc: "fh4.png", rating: 4.5 },
    { id: 12, title: "Forza Horizon 5", genre: "Racing", publisher: "Playground Games", imgSrc: "fh5.png", rating: 4.6 },
    { id: 13, title: "Uncharted 4", genre: "Adventure", publisher: "Naughty Dog", imgSrc: "Uncharted4.png", rating: 4.8 },
    { id: 14, title: "God Of War (2016)", genre: "Action", publisher: "Santa Monica Studio", imgSrc: "godofwar.png", rating: 4.9 },
    { id: 15, title: "BloodBorne", genre: "Souls Like", publisher: "From Software", imgSrc: "bloodborne.png", rating: 4.7 },
    { id: 16, title: "Sekiro", genre: "Souls Like", publisher: "From Software", imgSrc: "sekiro.png", rating: 4.8 },
  ];

  // Filtered data based on search query
  const filteredData = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // State to track likes for each card
  const [likes, setLikes] = useState(
    cardData.reduce((acc, card) => {
      acc[card.id] = { liked: false, likeCount: Math.floor(Math.random() * 101) }; // Randomized likes between 0-100
      return acc;
    }, {})
  );

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: {
        liked: !prevLikes[id].liked,
        likeCount: prevLikes[id].liked
          ? prevLikes[id].likeCount - 1 // Decrement if previously liked
          : prevLikes[id].likeCount + 1, // Increment if not liked
      },
    }));
  };

  // Handle review submission (without navigation)
  const handleReviewSubmit = () => {
    if (review.trim() !== "") {
      // Retrieve existing reviews from localStorage
      const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
      // Add the new review to the array
      const newReviews = [...storedReviews, review];
      // Save the updated array back to localStorage
      localStorage.setItem("reviews", JSON.stringify(newReviews));
      // Clear the review input field
      setReview("");
    }
  };

  // Handle clearing the review box
  const handleClearReview = () => {
    setReview(""); // Clear the review box
  };

  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Game Nexus</h1>
          <p className="hero-subtitle">
            Discover the ultimate gaming experience. Explore, review, and connect with the gaming community.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">16</span>
              <span className="stat-label">Games</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.7</span>
              <span className="stat-label">Avg Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mt-5">
        {/* Search Section */}
        <div className="search-section mb-5">
          <div className="search-container">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search by title, studio, or genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Game Cards */}
        <div className="games-section">
          <h2 className="section-title mb-4">Featured Games</h2>
          <div className="row g-4">
            {filteredData.length > 0 ? (
              filteredData.map((card, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={card.id}>
                  <div 
                    className="game-card slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="game-card-image-container">
                      <img
                        className="game-card-img"
                        src={card.imgSrc}
                        alt={card.title}
                      />
                      <div className="game-card-overlay">
                        <div className="game-rating">
                          <span className="rating-star">⭐</span>
                          <span className="rating-number">{card.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="game-card-body">
                      <h3 className="game-card-title">{card.title}</h3>
                      <p className="game-card-publisher">{card.publisher}</p>
                      <div className="game-card-genre-badge">{card.genre}</div>
                      
                      <button
                        className={`like-btn ${likes[card.id]?.liked ? 'liked' : ''}`}
                        onClick={() => handleLike(card.id)}
                      >
                        {likes[card.id]?.liked ? '❤️' : '🤍'} {likes[card.id]?.liked ? 'Liked' : 'Like'} ({likes[card.id].likeCount})
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-5">
                <div className="no-results-card">
                  <div className="no-results-icon">🎮</div>
                  <h3>No results found</h3>
                  <p>Try searching for a different title, studio, or genre.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Review Section */}
        <div className="review-section mt-5">
          <div className="review-container">
            <h2 className="section-title text-center mb-4">Share Your Thoughts</h2>
            <div className="review-content">
              <textarea
                className="review-textarea form-control"
                placeholder="Write your review here... Share your gaming experience with the community!"
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <div className="review-actions">
                <button className="btn btn-outline" onClick={handleClearReview}>
                  <span className="btn-icon">🗑️</span>
                  Clear
                </button>
                <button className="btn btn-primary" onClick={handleReviewSubmit}>
                  <span className="btn-icon">📝</span>
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
