// src/components/ProjectCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.css";

function ProjectCard({ project, onExpandDetails }) {
  // Select gradient based on project category for custom aesthetic
  const getCategoryGradient = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)";
      case "backend":
        return "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)";
      case "full-stack":
      default:
        return "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)";
    }
  };

  const gradientStyle = {
    background: getCategoryGradient(project.category),
  };

  return (
    <div className="project-card glass-card">
      <div className="project-card-visual" style={gradientStyle}>
        <div className="visual-overlay"></div>
        <span className="project-card-badge">{project.category}</span>
        <div className="visual-icon-wrap">
          {project.category.toLowerCase() === "frontend" && (
            <FontAwesomeIcon icon={["fab", "react"]} className="visual-icon" />
          )}
          {project.category.toLowerCase() === "backend" && (
            <FontAwesomeIcon icon={["fas", "server"]} className="visual-icon" />
          )}
          {project.category.toLowerCase() === "full-stack" && (
            <FontAwesomeIcon icon={["fas", "database"]} className="visual-icon" />
          )}
        </div>
      </div>

      <div className="project-card-body">
        <span className="project-card-duration">{project.duration}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-excerpt">
          {project.description.substring(0, 110)}...
        </p>

        <div className="project-card-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge-chip">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge-chip-more">+{project.technologies.length - 3} more</span>
          )}
        </div>

        <div className="project-card-actions">
          <button 
            onClick={() => onExpandDetails(project)} 
            className="btn btn-secondary card-details-btn"
          >
            Explore Case Study
          </button>
          
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-github-icon-link"
              aria-label={`View code repository for ${project.title}`}
              title="GitHub Repository"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;