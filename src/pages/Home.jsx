// src/pages/Home.jsx
import React from 'react';
// import { Link } from 'react-router-dom'; // No longer needed
import { personalInfo } from '../data';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact'; // 1. Import the Contact component
import './Home.css';

function Home() {
  return (
    // Use a React.Fragment (<>) to hold all the sections
    <>
      {/* ===== HOME SECTION ===== */}
      <section className="home-hero section" id="home"> {/* 2. Add id="home" */}
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">{personalInfo.name.split(' ')[0]}</span>.</h1>
            <h2>{personalInfo.title}</h2>
            <p className="tagline">{personalInfo.tagline}</p>
            <div className="hero-buttons">
              {/* 3. Change Link to <a> tags */}
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            {/* 4. Removed the inline style, use your CSS file instead */}
            <img src={personalInfo.profilePic} alt={personalInfo.name} className="profile-pic" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
<section className="container about-me-section" id="about">    
        <h2 className="section-title ">About Me</h2>
        <p>{personalInfo.aboutMe}</p>
        {/* 6. Change Link to <a> tag */}
        <a href="#skills" className="btn btn-secondary margin-top-lg">My Skills</a>
</section> 
      {/* ===== SKILLS SECTION ===== */}
      {/* 7. Pass the 'id' prop to the component */}
      <Skills id="skills" />

      {/* ===== PROJECTS SECTION ===== */}
      {/* 8. Pass the 'id' prop to the component */}
      <Projects id="projects" />

      {/* ===== CONTACT SECTION ===== */}
      {/* 9. Add the Contact component with its 'id' prop */}
      <Contact id="contact" />
    </>
  );
}

export default Home;