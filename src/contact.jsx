import React, { useState } from 'react';
import './ContactForm.css'; // Make sure to create and import the CSS file
import emailjs from 'emailjs-com';
import emailjsConfig from './emailjsConfig';

const ContactForm = () => {
  const [userType, setUserType] = useState('new');
  const [plotNumber, setPlotNumber] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setPlotNumber(''); // Reset plotNumber when userType is changed
  };

  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const formData = {
      userType,
      name,
      email,
      phone,
      plotNumber: userType === 'existing' ? plotNumber : null,
      message,
    };

    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      formData,
      emailjsConfig.userId
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 4000); // 4 seconds
      // Reset the form after submission (optional)
      
      setPlotNumber('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };

  
 return (
    <div className="container">
      <h1>Contact Us</h1>

      <div>
        <label htmlFor="userType">Select your option:</label>
        <select id="userType" value={userType} onChange={handleUserTypeChange}>
          <option value="new">New Investor</option>
          <option value="existing">Existing Investor (Ansal API)</option>
        </select>
      </div>

      <div id="newInvestorFields">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" required />
        </div>
        {userType === 'existing' && (
        <div id="existingInvestorFields" className={userType === 'existing' ? 'slide-in' : ''}>
          <div>
            <label htmlFor="plotNumber">Plot Number:</label>
            <input
              type="text"
              id="plotNumber"
              value={plotNumber}
              onChange={(e) => setPlotNumber(e.target.value)}
              required
            />
          </div>
        </div>
      )}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
      </div>

      

      <div>
        <button type="button" onClick={handleSubmit}>Send</button>
      </div>
            {showNotification && (
        <div className="notification">Thank you, our sales team shall soon revert back to you.</div>
      )}
    </div>
  );
};

export default ContactForm;
