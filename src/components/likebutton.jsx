import React, { useState } from "react";

function LikeButton() {
  // State to track whether the button has been liked
  const [liked, setLiked] = useState(false);

  // State to track the count of likes
  const [likeCount, setLikeCount] = useState(0);

  // Handler for the like button
  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div>
      <button 
        onClick={handleLike} 
        disabled={liked} 
        style={{
          backgroundColor: liked ? "lightblue" : "white",
          cursor: liked ? "not-allowed" : "pointer",
        }}
      >
        {liked ? "Liked" : "Like"}
      </button>
      <p>{likeCount} {likeCount === 1 ? "like" : "likes"}</p>
    </div>
  );
}

export default LikeButton;