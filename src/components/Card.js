// src/components/Card.js
import React from 'react';

const Card = ({ post, onClick, isSelected }) => {
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-image">
        <img src={post.thumbnail.small} alt={post.title} />
      </div>
      <div className="card-content">
        <h2>{post.title}</h2>
        <p>{post.author.name}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
