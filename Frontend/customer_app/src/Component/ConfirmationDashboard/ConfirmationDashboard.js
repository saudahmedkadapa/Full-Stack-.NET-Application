import React from 'react';
import { useLocation } from 'react-router-dom';
import "./ConfirmationDashboard.css";

const Confirmation = () => {
  const location = useLocation();
  const { slotNumber } = location.state || {};

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmation</h2>
      {slotNumber ? (
        <>
          <p>Your booking was successful. Your slot number is: <strong>{slotNumber}</strong></p>
          <p>You can now park your vehicle in slot <strong>{slotNumber}</strong>.</p>
        </>
      ) : (
        <p>Your booking was successful!</p>
      )}
      <button onClick={() => window.location.href = '/'}>Go Back to Dashboard</button>
    </div>
  );
};

export default Confirmation;
