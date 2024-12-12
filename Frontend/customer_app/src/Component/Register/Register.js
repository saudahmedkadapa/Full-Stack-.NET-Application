import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    vehicleNumber: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid";
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters long";
    if (!formData.vehicleNumber) tempErrors.vehicleNumber = "Vehicle Number is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch('https://localhost:7170/api/Register', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        });

        if (response.ok) {
          // Show alert after successful registration
          alert('Registration successful!');
          navigate('/login'); // Redirect to login after showing alert
        } else {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.name && <small className="error-text">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.username && <small className="error-text">{errors.username}</small>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.email && <small className="error-text">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.password && <small className="error-text">{errors.password}</small>}
        </div>

        <div className="form-group">
          <label>Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.vehicleNumber && <small className="error-text">{errors.vehicleNumber}</small>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>

        <p>Already registered? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
