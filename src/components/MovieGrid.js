import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieGrid.css';
import MovieCard from './MovieCard';

const MovieGrid = ({ searchQuery, moviesData }) => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(moviesData);
    } else {
      const filtered = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.year.includes(searchQuery)
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, moviesData]);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <section className="movie-grid-section">
      <div className="movie-grid-container">
        {filteredMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredMovies.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                index={index}
                onClick={() => handleMovieClick(movie.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No movies found</h3>
            <p>Try searching for a different title or genre</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
