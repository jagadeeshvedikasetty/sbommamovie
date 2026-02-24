import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";
import Header from "./Header";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="about-page">
      <Header
        searchQuery=""
        setSearchQuery={() => {}}
        onHomeClick={handleHomeClick}
      />

      <div className="about-content">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">About SBOMMA</h1>
            <p className="about-subtitle">Where Quality & Clarity Matters</p>
          </div>

          <div className="about-section">
            <p className="about-text">
              SBOMMA is your ultimate destination for the latest movie updates, teasers, and trailers. 
              We bring you exclusive first looks at upcoming films across all genres, from Hollywood 
              blockbusters to regional cinema. Stay informed about the newest releases and never miss 
              a premiere with our regularly updated collection of high-quality teasers and trailers. 
              Whether you're looking for action-packed adventures, heartwarming dramas, or thrilling 
              mysteries, SBOMMA keeps you connected to everything happening in the world of movies.
            </p>
          </div>

          <div className="about-cta">
            <button className="btn-home" onClick={handleHomeClick}>
              Explore Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
