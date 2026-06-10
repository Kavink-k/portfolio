// src/components/ProjectDetailsModal.jsx
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectDetailsModal.css";

function ProjectDetailsModal({ project, onClose }) {
  // Prevent background scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="modal-container animate-zoom-in">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details dialog">
          <FontAwesomeIcon icon={["fas", "times"]} />
        </button>

        <div className="modal-header">
          <span className="modal-project-category">{project.category} Project</span>
          <h2 className="modal-project-title">{project.title}</h2>
          <p className="modal-project-subtitle">{project.subtitle}</p>
        </div>

        <div className="modal-content-grid">
          {/* Main Info Column */}
          <div className="modal-main-info">
            <div className="project-meta-matrix">
              <div className="meta-matrix-item">
                <span className="matrix-label">
                  <FontAwesomeIcon icon={["fas", "user-tag"]} /> My Role
                </span>
                <span className="matrix-value">{project.role}</span>
              </div>
              <div className="meta-matrix-item">
                <span className="matrix-label">
                  <FontAwesomeIcon icon={["fas", "clock"]} /> Duration
                </span>
                <span className="matrix-value">{project.duration}</span>
              </div>
              <div className="meta-matrix-item">
                <span className="matrix-label">
                  <FontAwesomeIcon icon={["fas", "tools"]} /> Methodology
                </span>
                <span className="matrix-value">{project.methodology}</span>
              </div>
            </div>

            <div className="project-description-block">
              <h3>Overview</h3>
              <p>{project.description}</p>
            </div>

            {project.resumeLinkage && (
              <div className="project-resume-linkage-block">
                <h3>Resume & Skill Alignment</h3>
                <p>
                  <FontAwesomeIcon icon={["fas", "link"]} className="sync-icon" /> {project.resumeLinkage}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Specs Column */}
          <div className="modal-sidebar-info">
            <div className="sidebar-group">
              <h3>Technologies Used</h3>
              <div className="modal-tech-badges">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="modal-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="sidebar-group">
                <h3>Key Features</h3>
                <ul className="modal-features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={["fas", "check-circle"]} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-modal-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Code Base
                </a>
              )}
              {project.liveDemoLink && project.liveDemoLink !== "N/A (API only)" && (
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-modal-link">
                  <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> Live System
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;
