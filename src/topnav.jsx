import React from 'react';
import './topnavbar.css';
const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <button className="nav-button">Home</button>
      <button className="nav-button">About Us</button>
      <button className="nav-button">Master Plan</button>
      <button className="nav-button">Sector Maps</button>
      <button className="nav-button">Investment Options</button>
      <button className="nav-button">Location</button>
      <button className="nav-button">Contact Us</button>
    </div>
  );
};

export default TopNavbar;
