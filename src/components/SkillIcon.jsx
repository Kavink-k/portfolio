// src/components/SkillIcon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SkillIcon.css';

function SkillIcon({ skill }) {
  // Convert standard string fontawesome representations (e.g. 'fab fa-react')
  // into format expected by React FontAwesomeIcon (e.g. ['fab', 'react'])
  const getIconArray = (iconString) => {
    if (!iconString) return ['fas', 'code'];
    const parts = iconString.split(' ');
    if (parts.length >= 2) {
      // Return something like ['fab', 'react'] (removing fa- prefix)
      return [parts[0], parts[1].replace('fa-', '')];
    }
    return ['fas', 'code'];
  };

  return (
    <div className="skill-icon-card glass-card">
      <div className="skill-icon-top">
        <div className="skill-icon-wrap">
          <FontAwesomeIcon icon={getIconArray(skill.icon)} size="2x" className="skill-icon-glyph" />
        </div>
        <div className="skill-info-text">
          <h4 className="skill-name">{skill.name}</h4>
          <span className="skill-category-badge">{skill.category}</span>
        </div>
      </div>
      
      <div className="skill-progress-container">
        <div className="skill-progress-header">
          <span className="skill-proficiency-label">Proficiency</span>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
        <div className="skill-progress-track">
          <div 
            className="skill-progress-bar-fill" 
            style={{ 
              "--skill-level": `${skill.level}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SkillIcon;