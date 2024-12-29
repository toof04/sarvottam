import React, { useState } from 'react';
import './topnavbar.css';

const TopNavbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const openOverlay = (pdf) => {
    setPdfUrl(pdf);  // Set the PDF URL based on which button was clicked
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="top-navbar">
      <button className="nav-button">Home</button>
      <button className="nav-button">About Us</button>
      <button className="nav-button" style = {{backgroundColor: 'lightgreen'}} onClick={() => openOverlay('https://drive.google.com/file/d/1gQGCdgxe0Rz3BOt4cNnWT3pcK8zD8oZC/preview')}>Master Plan</button>
      <button className="nav-button" style = {{backgroundColor: 'lightgreen'}} onClick={() => openOverlay('https://drive.google.com/file/d/1iqAGT2RX-BCe78QPZWo6xw1S7-jhJtHv/preview')}>Sector Maps</button>
      <button className="nav-button">Investment Options</button>
      <button className="nav-button">Location</button>
      <button className="nav-button">Contact Us</button>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>
                
            </button>
            <iframe src={pdfUrl} width="100%" height="100%" allow="autoplay" title='maps'></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
