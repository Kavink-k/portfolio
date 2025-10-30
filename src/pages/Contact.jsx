// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalInfo } from '../data';
import './Contact.css';

function Contact({id}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a no-backend setup, you'd typically link to mailto: or a service like Formspree or Netlify Forms
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;

    alert("Thank you for your message! Your email client should open shortly.");
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <section className="contact-page section" id={id}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          I'm always open to new opportunities, collaborations, or just a chat. Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p><FontAwesomeIcon icon={['fas', 'envelope']} /> {personalInfo.email}</p>
            {personalInfo.phone && <p><FontAwesomeIcon icon={['fas', 'phone']} /> {personalInfo.phone}</p>}
            <div className="social-links-contact">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                </a>
              )}
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
            <p className="form-note">
              (Note: This form uses your default email client. For a live form, you would integrate a service like Formspree or Netlify Forms.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;