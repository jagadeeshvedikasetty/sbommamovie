import React, { useState, useEffect } from 'react';
import './MovieGrid.css';
import MovieCard from './MovieCard';

// HOW TO ADD CUSTOM IMAGES:
// 1. Place your images in: public/images/movies/
// 2. Update the "image" field below with your filename
// 3. Example: image: "/images/movies/dd-returns.jpg"

const moviesData = [
  {
    id: 1,
    title: "DD Returns",
    year: "2023",
    // CHANGE THIS: Replace with your actual image path
    image: "https://via.placeholder.com/300x450/1a472a/4ade80?text=DD+Returns",
    // Example with local image: image: "/images/movies/dd-returns.jpg",
    rating: 7.5,
    genre: "Action, Thriller"
  },
  {
    id: 2,
    title: "Nene Naa",
    year: "2023",
    image: "https://via.placeholder.com/300x450/472a1a/de804a?text=Nene+Naa",
    // Example with local image: image: "/images/movies/nene-naa.jpg",
    rating: 8.2,
    genre: "Horror, Mystery"
  },
  {
    id: 3,
    title: "Vidyarthi",
    year: "2023",
    image: "https://via.placeholder.com/300x450/4a3c1a/debd4a?text=Vidyarthi",
    // Example with local image: image: "/images/movies/vidyarthi.jpg",
    rating: 7.8,
    genre: "Drama, Action"
  },
  {
    id: 4,
    title: "Gandeevadhari Arjuna",
    year: "2023",
    image: "https://via.placeholder.com/300x450/1a2a47/4a80de?text=Arjuna",
    rating: 7.9,
    genre: "Action, Thriller"
  },
  {
    id: 5,
    title: "Bedurulanka 2012",
    year: "2023",
    image: "https://via.placeholder.com/300x450/471a3c/de4abd?text=Bedurulanka",
    rating: 8.5,
    genre: "Comedy, Drama"
  },
  {
    id: 6,
    title: "Journey Of Love -18 Plus",
    year: "2023",
    image: "https://via.placeholder.com/300x450/1a4747/4adede?text=Journey+Of+Love",
    rating: 6.8,
    genre: "Romance, Drama"
  },
  {
    id: 7,
    title: "Family Drama",
    year: "2023",
    image: "https://via.placeholder.com/300x450/3c1a47/bd4ade?text=Family+Drama",
    rating: 7.3,
    genre: "Drama, Family"
  },
  {
    id: 8,
    title: "Romantic Thriller",
    year: "2023",
    image: "https://via.placeholder.com/300x450/47241a/de774a?text=Romantic",
    rating: 7.6,
    genre: "Romance, Thriller"
  },
  {
    id: 9,
    title: "Action Hero",
    year: "2023",
    image: "https://via.placeholder.com/300x450/24471a/77de4a?text=Action+Hero",
    rating: 8.0,
    genre: "Action, Adventure"
  },
  {
    id: 10,
    title: "Bharatapuram",
    year: "2023",
    image: "https://via.placeholder.com/300x450/1a4724/4ade77?text=Bharatapuram",
    rating: 7.4,
    genre: "Action, Drama"
  },
  {
    id: 11,
    title: "Ramabanam",
    year: "2023",
    image: "https://via.placeholder.com/300x450/471a24/de4a77?text=Ramabanam",
    rating: 7.7,
    genre: "Action, Drama"
  },
  {
    id: 12,
    title: "Dance Special",
    year: "2023",
    image: "https://via.placeholder.com/300x450/1a2447/4a77de?text=Dance+Special",
    rating: 7.1,
    genre: "Drama, Music"
  }
  
  // TO ADD MORE MOVIES: Copy this template and paste below
  /*
  ,{
    id: 13,
    title: "Your Movie Title",
    year: "2024",
    image: "/images/movies/your-movie.jpg",
    rating: 8.0,
    genre: "Genre1, Genre2"
  }
  */
];

const MovieGrid = ({ searchQuery }) => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

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
  }, [searchQuery]);

  return (
    <section className="movie-grid-section">
      <div className="movie-grid-container">
        {filteredMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
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
