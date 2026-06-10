// src/pages/Skills.jsx
import React from 'react';
import SkillIcon from '../components/SkillIcon';
import { skills } from '../data';
import './Skills.css';

function Skills({ id }) {
  const frontendSkills = skills.filter(skill => skill.category === "Frontend");
  const backendSkills = skills.filter(skill => skill.category === "Backend");
  const dbSkills = skills.filter(skill => skill.category === "Database");
  const otherSkills = skills.filter(skill => skill.category === "Tools" || skill.category === "Concepts");

  return (
    <section className="skills-section" id={id}>
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Skills & Capabilities</h2>
          <div className="section-title-divider"></div>
        </div>

        <div className="skills-categories-grid">
          {/* Frontend Category */}
          {frontendSkills.length > 0 && (
            <div className="skill-category-block">
              <h3 className="category-block-title">Frontend Engineering</h3>
              <div className="skills-icon-grid">
                {frontendSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {/* Backend Category */}
          {backendSkills.length > 0 && (
            <div className="skill-category-block">
              <h3 className="category-block-title">Backend Architecture</h3>
              <div className="skills-icon-grid">
                {backendSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {/* Databases Category */}
          {dbSkills.length > 0 && (
            <div className="skill-category-block">
              <h3 className="category-block-title">Data & Query Systems</h3>
              <div className="skills-icon-grid">
                {dbSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {/* Tools & Concepts Category */}
          {otherSkills.length > 0 && (
            <div className="skill-category-block">
              <h3 className="category-block-title">Workflow & Methodologies</h3>
              <div className="skills-icon-grid">
                {otherSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;