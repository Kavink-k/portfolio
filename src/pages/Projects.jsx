// src/pages/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import './Projects.css';

function Projects({ id, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Categories list
  const filterCategories = ['All', 'Frontend', 'Backend', 'Full-Stack'];

  // Filter projects list
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="projects-section" id={id}>
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-title-divider"></div>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-nav">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn ${activeFilter === category ? 'filter-active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-masonry-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="grid-project-card-wrap">
              <ProjectCard 
                project={project} 
                onExpandDetails={onSelectProject} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;