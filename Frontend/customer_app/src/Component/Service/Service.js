
import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
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
  );
};

export default Services;
