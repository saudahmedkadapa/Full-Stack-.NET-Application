
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Go Park</h1>
        <p>Your Smart Vehicle Parking Solution</p>
        <button className="cta-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Easy Booking</h3>
            <p>Book your parking slots in a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Availability</h3>
            <p>Check available parking slots in real-time.</p>
          </div>
          <div className="feature">
            <h3>Secure Parking</h3>
            <p>Your vehicle's safety is our priority.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Select your parking level.</li>
          <li>Choose a slot and book it.</li>
          <li>Park your vehicle and enjoy your time!</li>
        </ol>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Go Park. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
