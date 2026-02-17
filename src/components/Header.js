import React, { useState } from 'react';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery, onHomeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onHomeClick) {
      onHomeClick();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"onClick={handleHomeClick} >SBOMMA</div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className="nav-link active" onClick={handleHomeClick}>
            <span className="nav-icon">🏠</span>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            About
          </a>
          <a href="#bug" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">🐛</span>
            Bug
          </a>
        </nav>

        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon" onClick={searchQuery}>🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
