import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetailPage.css';
import Header from './Header';
import { moviesData } from '../moviesData';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movie = moviesData.find((m) => m.id === parseInt(id));

  const handleHomeClick = () => {
    setSearchQuery('');
    navigate('/');
  };

  if (!movie) {
    return (
      <div className="movie-detail-page">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onHomeClick={handleHomeClick}
        />
        <div className="not-found">
          <h2>⚠️ Movie not found</h2>
          <p>This movie doesn't exist or has been removed.</p>
          <button onClick={handleHomeClick}>Go Home</button>
        </div>
      </div>
    );
  }

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
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onHomeClick={handleHomeClick}
      />

      <div className="detail-content">
        <div className="detail-info-card">
          <div className="detail-poster-wrapper">
            <img src={movie.image} alt={movie.title} className="detail-poster" />
          </div>

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
                <div className="placeholder-logo">SBOMMA</div>
                <div className="placeholder-text">WHERE QUALITY & CLARITY MATTERS</div>
                <button className="placeholder-play">
                  <span>▶</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="synopsis-container">
          <h2 className="synopsis-title">Synopsis:</h2>
          <p className="synopsis-text">{movie.synopsis}</p>

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
