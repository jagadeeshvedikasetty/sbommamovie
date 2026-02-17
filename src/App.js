import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import MovieDetailPage from './components/MovieDetailPage';
import { moviesData } from './moviesData';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleHomeClick = () => {
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onHomeClick={handleHomeClick}
      />
      <Hero />
      <MovieGrid 
        searchQuery={searchQuery}
        moviesData={moviesData}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage moviesData={moviesData} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
