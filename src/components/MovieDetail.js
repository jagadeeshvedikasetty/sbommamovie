import React, { useEffect } from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie, onClose }) => {


  // Cleanup function when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    let videoId = null;
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(movie.videoUrl);

  return (
    <div className="movie-detail-overlay" onClick={onClose}>
      <div className="movie-detail-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        {/* Movie Info Section */}
        <div className="movie-info-section">
          <div className="poster-container">
            <img src={movie.image} alt={movie.title} className="detail-poster" />
          </div>

          <div className="info-container">
            <h1 className="detail-title">{movie.title}</h1>
            <p className="detail-year">{movie.year}</p>
            <p className="detail-genre">{movie.genre}</p>
            {movie.director && (
              <p className="detail-director">
                {/* <span className="director-icon">👤</span>  */}
                Director: {movie.director}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="trailer-button">
            <span className="button-icon">▶</span>
            TRAILER
          </button>
          <button className="updates-button">
            <span className="button-icon">💬</span>
            JOIN FOR UPDATES
          </button>
        </div>

        {/* Video Player Section */}
        <div className="video-section">
          <div className="video-player">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={movie.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="video-overlay">
                <div className="video-logo">SHETTY</div>
                <div className="video-tagline">WHERE QUALITY & CLARITY MATTERS</div>
                <button className="play-button-large">
                  <span className="play-icon-large">▶</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="synopsis-section">
          <h2 className="synopsis-title">Synopsis:</h2>
          <p className="synopsis-text">
            {movie.synopsis || `Watch ${movie.title} (${movie.year}) Telugu movie online in HD. 
            Experience the perfect blend of ${movie.genre} with stunning cinematography and 
            compelling storytelling. This critically acclaimed film features outstanding performances 
            and has been praised for its engaging narrative and high production values. Stream now 
            exclusively on SHETTY.COM for the best viewing experience with superior quality and clarity.`}
          </p>
          
          {movie.cast && (
            <div className="cast-info">
              <h3>Cast:</h3>
              <p>{movie.cast}</p>
            </div>
          )}

          <div className="movie-meta">
            <div className="meta-item">
              <span className="meta-label">Rating:</span>
              <span className="meta-value">⭐ {movie.rating}/10</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Quality:</span>
              <span className="meta-value">HD</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Language:</span>
              <span className="meta-value">Telugu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
