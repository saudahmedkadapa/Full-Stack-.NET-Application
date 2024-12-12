import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css'; // Import your CSS for styling

const featuresData = [
  {
    id: 1,
    title: 'Easy Booking',
    description: 'Book your parking slot in just a few clicks with our user-friendly interface.',
    icon: '📅', // You can replace this with an actual icon or image
  },
  {
    id: 2,
    title: 'Real-Time Availability',
    description: 'Check the availability of slots in real-time to avoid any inconvenience.',
    icon: '📍',
  },
  {
    id: 3,
    title: 'Secure Payment',
    description: 'Enjoy secure transactions with our trusted payment gateways.',
    icon: '💳',
  },
  {
    id: 4,
    title: 'Customer Support',
    description: 'Our dedicated support team is available 24/7 to assist you with your queries.',
    icon: '🤝',
  },
];

const Features = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEasyBookingClick = () => {
    navigate('/booking-dashboard'); // Redirect to booking dashboard
  };

  return (
    <div className="features-container">
      <h2>Website Features</h2>
      <div className="features-list">
        {featuresData.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            {feature.id === 1 && ( // Show button only for "Easy Booking"
              <button onClick={handleEasyBookingClick} className="btn btn-primary">
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
