import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetailPage.css';
import Header from './Header';

const MovieDetailPage = ({ moviesData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find(m => m.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) {
    return (
      <div className="movie-detail-page">
        <Header searchQuery="" setSearchQuery={() => {}} onHomeClick={() => navigate('/')} />
        <div className="not-found">
          <h2>Movie not found</h2>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      </div>
    );
  }

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
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
    <div className="movie-detail-page">
      <Header searchQuery="" setSearchQuery={() => {}} onHomeClick={() => navigate('/')} />
      
      <div className="detail-content">
        {/* Movie Info Section - Matches iBOMMA exactly */}
        <div className="detail-info-card">
          {/* Poster on Left */}
          <div className="detail-poster-wrapper">
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="detail-poster" 
            />
          </div>

          {/* Info on Right */}
          <div className="detail-info-content">
            <h1 className="detail-title">{movie.title}</h1>
            <p className="detail-year">{movie.year}</p>
            <p className="detail-genre">{movie.genre}</p>
            
            {movie.cast && (
              <div className="detail-meta-row">
                <span className="meta-icon">👥</span>
                <span className="meta-label">Cast:</span>
                <span className="meta-text">{movie.cast}</span>
              </div>
            )}
            
            {movie.director && (
              <div className="detail-meta-row">
                <span className="meta-icon">👤</span>
                <span className="meta-label">Director:</span>
                <span className="meta-text">{movie.director}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="detail-buttons-row">
          <button className="btn-trailer">
            <span className="btn-icon">▶</span>
            TRAILER
          </button>
          <button className="btn-updates">
            <span className="btn-icon">💬</span>
            JOIN FOR UPDATES
          </button>
        </div>

        {/* Video Player */}
        <div className="video-container">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          ) : (
            <div className="video-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-logo">SHETTY</div>
                <div className="placeholder-text">WHERE QUALITY & CLARITY MATTERS</div>
                <button className="placeholder-play">
                  <span>▶</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Synopsis */}
        <div className="synopsis-container">
          <h2 className="synopsis-title">Synopsis:</h2>
          <p className="synopsis-text">{movie.synopsis}</p>

          {/* Additional Info */}
          <div className="movie-info-grid">
            <div className="info-item">
              <span className="info-label">Rating:</span>
              <span className="info-value">⭐ {movie.rating}/10</span>
            </div>
            <div className="info-item">
              <span className="info-label">Quality:</span>
              <span className="info-value">HD</span>
            </div>
            <div className="info-item">
              <span className="info-label">Language:</span>
              <span className="info-value">English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
