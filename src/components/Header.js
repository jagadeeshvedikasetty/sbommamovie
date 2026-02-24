import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ searchQuery = '', setSearchQuery, onHomeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close search box when location changes (after navigation)
  useEffect(() => {
    setIsSearchOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    // If search is open and has text, navigate and close
    if (isSearchOpen && searchQuery.trim() !== '') {
      if (location.pathname !== '/') {
        navigate('/', { state: { searchQuery: searchQuery } });
      }
      // Always close search after clicking icon with text
      setIsSearchOpen(false);
    } else {
      // Otherwise just toggle open/close
      setIsSearchOpen(!isSearchOpen);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    
    // Update search query
    if (setSearchQuery) {
      setSearchQuery(query);
    }
  };

  // Navigate to home when user presses Enter and ALWAYS close search
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim() !== '' && location.pathname !== '/') {
        navigate('/', { state: { searchQuery: searchQuery } });
      }
      // Always close search box after pressing Enter
      setIsSearchOpen(false);
    }
  };

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    }
    navigate('/');
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleBugClick = () => {
    navigate('/bug');
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="header">
      {/* DESKTOP HEADER - Shows on screens > 1024px */}
      <div className="header-desktop">
        <button className="logo" onClick={handleHomeClick} aria-label="Go to home">
          SBOMMA
        </button>

        <div className="header-spacer"></div>

        <nav className="nav-desktop">
          <button className="nav-link" onClick={handleHomeClick}>
            Home
          </button>
          <button className="nav-link" onClick={handleAboutClick}>
            About
          </button>
          <button className="nav-link" onClick={handleBugClick}>
            Bug
          </button>
        </nav>

        {/* Desktop Search - Auto-hides after search */}
        <div className="search-container-desktop">
          <button 
            className="search-icon-desktop" 
            onClick={toggleSearch}
            aria-label={isSearchOpen && searchQuery ? 'Search' : isSearchOpen ? 'Close search' : 'Open search'}
            aria-expanded={isSearchOpen}
            title={isSearchOpen && searchQuery ? 'Click to search' : isSearchOpen ? 'Close search' : 'Open search'}
          >
            🔍
          </button>
          
          {isSearchOpen && (
            <input
              type="text"
              className="search-input-desktop"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
              aria-label="Search movies"
              autoFocus
            />
          )}
        </div>
      </div>

      {/* MOBILE/TABLET HEADER - Shows on screens <= 1024px */}
      <div className="header-mobile">
        <div className="mobile-header-row">
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <button className="logo" onClick={handleHomeClick} aria-label="Go to home">
            SBOMMA
          </button>

          <div className="search-icon-container">
            <button 
              className="search-icon" 
              onClick={toggleSearch}
              aria-label={isSearchOpen && searchQuery ? 'Search' : isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
              title={isSearchOpen && searchQuery ? 'Click to search' : isSearchOpen ? 'Close search' : 'Open search'}
            >
              🔍
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Auto-hides after search */}
        {isSearchOpen && (
          <div className="search-bar-mobile">
            <input
              type="text"
              className="search-input-mobile"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
              autoFocus
              aria-label="Search movies"
            />
            <button 
              className="search-close" 
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          <button className="nav-link" onClick={handleHomeClick}>
            Home
          </button>
          <button className="nav-link" onClick={handleAboutClick}>
            About
          </button>
          <button className="nav-link" onClick={handleBugClick}>
            Bug
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
