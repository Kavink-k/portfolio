// src/components/ProjectCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
              <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
            </a>
          )}
          {project.liveDemoLink && project.liveDemoLink !== 'N/A (API only)' && (
            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">
              <FontAwesomeIcon icon={['fas', 'globe']} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;