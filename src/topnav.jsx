import React, { useState } from 'react';
import './topnavbar.css';

const TopNavbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [showSectorButtons, setShowSectorButtons] = useState(false);

  const openOverlay = (pdf) => {
    setPdfUrl(pdf);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="top-navbar">
      <button className="nav-button">Home</button>
      <button
              className="nav-button"
              style={{ backgroundColor: 'lightgreen' }}
              onClick={() =>
                openOverlay(
                  'video.mp4'
                )
              }
            >Video</button>
      <button
        className="nav-button"
        style={{ backgroundColor: 'lightgreen' }}
        onClick={() =>
          openOverlay(
            'https://drive.google.com/file/d/1gQGCdgxe0Rz3BOt4cNnWT3pcK8zD8oZC/preview'
          )
        }
      >
        Master Plan
      </button>
      <div
        className="nav-button"
        style={{ position: 'relative', backgroundColor: 'lightgreen' }}
        onMouseEnter={() => setShowSectorButtons(true)}
        onMouseLeave={() => setShowSectorButtons(false)}
      >
        Sector Maps
        {showSectorButtons && (
          <div className="dropdown-menu">
            <button
              className="dropdown-button"
              onClick={() =>
                openOverlay(
                  'https://drive.google.com/file/d/1OlcmKKFRXfNYOypdW_CklC--TTtZSmDS/preview'
                )
              }
            >
             <center> Sector 2</center>
            </button>
            <button
              className="dropdown-button"
              onClick={() =>
                openOverlay(
                  'https://drive.google.com/file/d/1SElfIPAjZ7rW-ES1E-DbvOS6xRuBgvkL/preview'
                )
              }
            >
             <center>  Sector 3 and 4</center> 
            </button>
            <button
              className="dropdown-button"
              onClick={() =>
                openOverlay(
                  'https://drive.google.com/file/d/1LLKNZYYPRVrUBNv2IjbqblgGI_YRdmWl/preview'
                )
              }
            >
             <center>  Sector 5</center> 
            </button>
          </div>
        )}
      </div>
      <button className="nav-button">Investment Options</button>
      <a target = "_blank" rel="noreferrer"  href = "https://maps.app.goo.gl/gzd2AApojANt438Q7">
      <button
        className="nav-button"
        style={{ backgroundColor: 'lightgreen' }}
      >Location</button></a>
      <button className="nav-button">Contact Us</button>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>
              Close
            </button>
            <iframe src={pdfUrl} width="100%" height="100%" allow="autoplay" title="maps"></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;


