// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import LandingPage from './Component/LandingPage/LandingPage';
import HomePage from './Component/HomePage/HomePage';
import About from './Component/About/About';
import Services from './Component/Service/Service';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import BookingDashboard from './Component/BookingDashboard/BookingDashboard';
import ConfirmationDashboard from './Component/ConfirmationDashboard/ConfirmationDashboard';
import Features from './Component/Features/FeaturesData';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/features" element={<Features />} />
        <Route path="/booking-dashboard" element={<BookingDashboard />} />
        <Route path="/confirmation" element={<ConfirmationDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
