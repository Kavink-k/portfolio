// src/components/SkillIcon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SkillIcon.css';

function SkillIcon({ skill }) {
  return (
    <div className="skill-icon-card">
      <FontAwesomeIcon icon={skill.icon.split(' ')} size="3x" className="skill-icon" />
      <p className="skill-name">{skill.name}</p>
      <span className="skill-category">{skill.category}</span>
    </div>
  );
}

export default SkillIcon;