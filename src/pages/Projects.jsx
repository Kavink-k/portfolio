// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import './Projects.css';

function Projects({id}) {
  return (
    <section className="projects-page section" id={id}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">A collection of my work showcasing various full-stack and front-end skills.</p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;