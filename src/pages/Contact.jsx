// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalInfo } from '../data';
import './Contact.css';

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMsg = '';
    if (!value.trim()) {
      errorMsg = 'This field is required';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = 'Please enter a valid email address';
      }
    }
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
    return errorMsg === '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMsgValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      return;
    }

    setStatus('loading');

    // Simulate server response time for high-end micro-interaction
    setTimeout(() => {
      setStatus('success');
      const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email} (${formData.name})`;
      window.location.href = mailtoLink;
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
    setErrors({});
  };

  return (
    <section className="contact-section" id={id}>
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-title-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Details Column */}
          <div className="contact-info-block">
            <h3>Let's Collaborate</h3>
            <p className="contact-tagline">
              I am open to discuss interesting freelance projects, internship opportunities, or full-time roles in full-stack web engineering.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-detail-item glass-card">
                <div className="detail-icon">
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                </div>
                <div className="detail-text">
                  <span>Email Me</span>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              {personalInfo.phone && (
                <div className="contact-detail-item glass-card">
                  <div className="detail-icon">
                    <FontAwesomeIcon icon={['fas', 'phone']} />
                  </div>
                  <div className="detail-text">
                    <span>Call Me</span>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
                  </div>
                </div>
              )}
            </div>

            <div className="contact-social-footer">
              <h4>Follow My Progress</h4>
              <div className="social-links-row">
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </a>
                )}
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-block glass-card">
            {status === 'loading' && (
              <div className="form-state-container">
                <div className="spinner"></div>
                <p>Preparing communication bridge...</p>
              </div>
            )}

            {status === 'success' && (
              <div className="form-state-container success-state animate-zoom-in">
                <div className="success-icon-box">
                  <FontAwesomeIcon icon={['fas', 'check-circle']} />
                </div>
                <h3>Message Ready!</h3>
                <p>
                  Thank you! Your email client should now open. If it doesn't, click the button below to launch manually.
                </p>
                <div className="success-actions">
                  <a 
                    href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`}
                    className="btn btn-primary"
                  >
                    Open Client Again
                  </a>
                  <button onClick={handleReset} className="btn btn-secondary">
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="custom-contact-form" noValidate>
                <h3>Send a direct message</h3>
                
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${errors.name ? 'input-error' : ''}`}
                    placeholder="John Doe"
                    required
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${errors.email ? 'input-error' : ''}`}
                    placeholder="john@example.com"
                    required
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${errors.message ? 'input-error' : ''}`}
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                  {errors.message && <span className="field-error-msg">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit-form">
                  Send Message <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;