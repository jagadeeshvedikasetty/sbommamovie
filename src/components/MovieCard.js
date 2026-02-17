import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="movie-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="movie-card-inner">
        <div className="movie-image-container">
          <img 
            src={movie.image} 
            alt={movie.title}
            className="movie-image"
          />
          <div className={`${isHovered ? 'active' : ''}`}>
            {/* <button className="play-button" onClick={(e) => { e.stopPropagation(); onClick(); }}>
              <span className="play-icon">▶</span>
              <span className="play-text">Play Now</span>
            </button> */}
            <div className="movie-info-overlay">
              <div className="movie-rating">
                <span className="star">⭐</span>
                {movie.rating}
              </div>
              <div className="movie-genre">{movie.genre}</div>
            </div>
          </div>
          <div className="quality-badge">HD</div>
        </div>
        
        <div className="movie-details">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-year">{movie.year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
