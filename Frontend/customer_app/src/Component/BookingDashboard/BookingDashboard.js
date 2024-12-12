import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const BookingDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    bookingDate: '',
    vehicleNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const tempErrors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!formData.bookingDate) {
      tempErrors.bookingDate = 'Booking Date is required';
    } else if (new Date(formData.bookingDate) < new Date(today)) {
      tempErrors.bookingDate = 'Booking Date cannot be in the past';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const formattedDate = new Date(formData.bookingDate).toISOString();
        const response = await fetch('http://localhost:8080/booking/book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            bookingDate: formattedDate,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          const slotNumber = data.slotNumber; // Get the slot number from the response
          alert(`Booking successful! Your slot number is ${slotNumber}`);
          navigate('/confirmation', { state: { slotNumber } }); // Pass slotNumber to the confirmation page
        } else {
          alert(`Booking failed: ${data.message || 'Please check your details.'}`);
        }
      } catch (error) {
        console.error('Error during booking:', error);
        alert('Failed to book. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Get today's date for the min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Booking Date:</label>
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleInputChange}
            required
            min={today} // Set the minimum date to today
          />
          {errors.bookingDate && <p className="error">{errors.bookingDate}</p>}
        </div>

        <div className="form-group">
          <label>Vehicle Number:</label>
          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Booking...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default BookingDashboard;
