// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalInfo } from '../data';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <div className="social-links">
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
    </footer>
  );
}

export default Footer;