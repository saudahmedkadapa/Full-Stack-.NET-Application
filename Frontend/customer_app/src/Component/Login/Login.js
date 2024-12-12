import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
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
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.password) tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true); // Set loading state to true

      try {
        const response = await fetch('https://localhost:7170/api/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const responseText = await response.text(); // Use .text() to get plain text response

        if (!response.ok) {
          throw new Error(responseText || 'Login failed');
        }

        // Attempt to parse the response as JSON
        let data;
        try {
          data = JSON.parse(responseText);
        } catch {
          data = { success: true }; // Fallback if parsing fails
        }

        if (data && data.success) {
          navigate('/features'); // Redirect to the features page after successful login
        } else {
          throw new Error(data.message || 'Invalid username or password'); // Handle unexpected success structure
        }
      } catch (error) {
        console.error("Login error:", error);
        setLoginError(error.message || 'An error occurred, please try again.');
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginError && <p className="error-text">{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={`form-control ${errors.username ? 'error' : ''}`}
          />
          {errors.username && <small className="error-text">{errors.username}</small>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`form-control ${errors.password ? 'error' : ''}`}
          />
          {errors.password && <small className="error-text">{errors.password}</small>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
