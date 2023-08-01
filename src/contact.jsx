import React, { useState } from 'react';
import './ContactForm.css'; // Make sure to create and import the CSS file
import emailjs from '@emailjs/browser';
import emailjsConfig from './emailjsConfig';

const ContactForm = () => {
  const [userType, setUserType] = useState('new');
  const [plotNumber, setPlotNumber] = useState('');
  const [name, setName] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setPlotNumber(''); // Reset plotNumber when userType is changed
  };

  const handleSubmit = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    if (!nameInput.value || !phoneInput.value) {
      // Check if required fields are not filled
      alert('Please fill in all required fields.');
      return;
    }

    const formData = {
      userType,
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      plotNumber: userType === 'existing' ? plotNumber : null,
      message: messageInput.value,
    };

    emailjs
      .send(emailjsConfig.serviceId, emailjsConfig.templateId, formData, emailjsConfig.userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000); // 4 seconds
        // Reset the form after submission (optional)
        setUserType('new');
        setPlotNumber('');
        setName('');
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
          <label htmlFor="name">Name:  *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:  *</label>
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
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </div>

      {showNotification && (
        <div className="notification">
          Thank you, our sales team shall soon revert back to you.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
