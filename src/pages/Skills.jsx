// src/pages/Skills.jsx
import React from 'react';
import SkillIcon from '../components/SkillIcon';
import { skills } from '../data';
import './Skills.css';

function Skills({ id }) {
  const frontendSkills = skills.filter(skill => skill.category === "Frontend");
  const backendSkills = skills.filter(skill => skill.category === "Backend");
  const databaseSkills = skills.filter(skill => skill.category === "Database");
  const toolSkills = skills.filter(skill => skill.category === "Tools");
  const conceptSkills = skills.filter(skill => skill.category === "Concepts");

  return (
    <section className="skills-page section section-dark " id={id}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">Technologies and tools I've gained experience with throughout my studies and projects.</p>

        {frontendSkills.length > 0 && (
          <div className="skill-category-section">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <SkillIcon key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {backendSkills.length > 0 && (
          <div className="skill-category-section">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <SkillIcon key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {databaseSkills.length > 0 && (
          <div className="skill-category-section">
            <h3>Databases</h3>
            <div className="skills-grid">
              {databaseSkills.map((skill, index) => (
                <SkillIcon key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {toolSkills.length > 0 && (
          <div className="skill-category-section">
            <h3>Tools & Version Control</h3>
            <div className="skills-grid">
              {toolSkills.map((skill, index) => (
                <SkillIcon key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {conceptSkills.length > 0 && (
          <div className="skill-category-section">
            <h3>Concepts & Methodologies</h3>
            <div className="skills-grid">
              {conceptSkills.map((skill, index) => (
                <SkillIcon key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;