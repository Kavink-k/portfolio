// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalInfo } from '../data';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              {personalInfo.name}<span>.dev</span>
            </a>
            <p className="footer-tagline">{personalInfo.tagline}</p>
          </div>
          
          <div className="footer-nav">
            <h4>Sitemap</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="footer-social-links">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              )}
              <a href={`mailto:${personalInfo.email}`} aria-label="Email Me">
                <FontAwesomeIcon icon={['fas', 'envelope']} />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <a href="#home" className="back-to-top-link" aria-label="Scroll to top of page">
            Back to top <FontAwesomeIcon icon={['fas', 'arrow-up']} className="back-to-top-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;