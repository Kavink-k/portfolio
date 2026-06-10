// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo, education, languages, experience, achievements, testimonials, projects } from "../data";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import "./Home.css";

function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play testimonials slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleTimelineProjectLink = (e, projectId) => {
    e.preventDefault();
    const targetProject = projects.find((p) => p.id === projectId);
    if (targetProject) {
      setSelectedProject(targetProject);
      const projSection = document.getElementById("projects");
      if (projSection) {
        projSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="home-hero" id="home">
        <div className="container hero-container-grid">
          <div className="hero-text-block animate-slide-up">
            <span className="hero-welcome">Welcome to my space</span>
            <h1>
              Hi, I'm <span className="highlight">{personalInfo.firstName}</span>
            </h1>
            <h2>{personalInfo.title}</h2>
            <p className="hero-description">{personalInfo.tagline}</p>
            <div className="hero-actions-row">
              <a href="#projects" className="btn btn-primary">
                View My Work <FontAwesomeIcon icon={["fas", "arrow-right"]} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-social-row">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              )}
              <a href={`mailto:${personalInfo.email}`} aria-label="Send Email">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </a>
            </div>
          </div>
          
          <div className="hero-image-block animate-fade-in">
            <div className="profile-image-frame">
              <img 
                src={`${import.meta.env.BASE_URL}${personalInfo.profilePic.replace(/^\//, "")}`} 
                alt={personalInfo.name} 
                className="profile-avatar" 
              />
              <div className="frame-ring ring-1"></div>
              <div className="frame-ring ring-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. ABOUT ME SECTION (UPDATED LAYOUT) ===== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">About Me</h2>
            <div className="section-title-divider"></div>
          </div>
          
          <div className="about-split-grid">
            {/* Left Column: Bio & Core profile info details */}
            <div className="about-bio-panel">
              <h3>My Story</h3>
              <p className="narrative-text">{personalInfo.aboutMe}</p>
              
              <div className="about-details-card glass-card">
                <h4>Profile Overview</h4>
                <div className="details-card-grid">
                  <div className="details-row">
                    <span className="details-label"><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> Location:</span>
                    <span className="details-value">{personalInfo.address}</span>
                  </div>
                  <div className="details-row">
                    <span className="details-label"><FontAwesomeIcon icon={["fas", "envelope"]} /> Email:</span>
                    <span className="details-value"><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
                  </div>
                  <div className="details-row">
                    <span className="details-label"><FontAwesomeIcon icon={["fas", "phone"]} /> Phone:</span>
                    <span className="details-value">{personalInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Academic Cred & Languages */}
            <div className="about-academic-panel">
              {/* Education Block */}
              <div className="academic-card glass-card">
                <div className="card-header-with-icon">
                  <div className="card-icon-wrapper">
                    <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
                  </div>
                  <div>
                    <h3>Education</h3>
                    <span className="academic-duration">{education.duration}</span>
                  </div>
                </div>
                
                <div className="academic-body">
                  <h4 className="academic-degree">{education.degree}</h4>
                  <p className="academic-school">{education.institution}</p>
                  <p className="academic-location">{education.location}</p>
                  <div className="academic-cgpa-pill">
                    <strong>CGPA:</strong> <span>{education.cgpa}</span>
                  </div>
                  
                  <div className="coursework-block">
                    <h5>Relevant Coursework</h5>
                    <div className="coursework-badges">
                      {education.coursework.map((course, idx) => (
                        <span key={idx} className="course-badge">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages block */}
              <div className="languages-card glass-card">
                <div className="card-header-with-icon">
                  <div className="card-icon-wrapper">
                    <FontAwesomeIcon icon={["fas", "language"]} />
                  </div>
                  <h3>Languages</h3>
                </div>
                <div className="languages-grid">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="language-badge-row">
                      <span className="language-name">{lang.name}</span>
                      <span className="language-proficiency">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. EXPERIENCE SECTION (NEW TIMELINE / BULLETS LIST) ===== */}
      <section className="experience-section" id="experience">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-title-divider"></div>
          </div>

          <div className="experience-timeline">
            {experience.map((exp, idx) => (
              <div key={idx} className="experience-item-wrapper animate-slide-up">
                <div className="experience-timeline-dot"></div>
                <div className="experience-card glass-card">
                  <div className="experience-card-header">
                    <div className="exp-heading-left">
                      <h3 className="exp-role">{exp.role}</h3>
                      <h4 className="exp-company">{exp.company}</h4>
                    </div>
                    <div className="exp-heading-right">
                      <span className="exp-meta-item exp-duration">
                        <FontAwesomeIcon icon={["fas", "calendar-alt"]} /> {exp.duration}
                      </span>
                      <span className="exp-meta-item exp-location">
                        <FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="experience-bullets-list">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <FontAwesomeIcon icon={["fas", "circle-notch"]} className="bullet-icon-notch" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.projectLink && (
                    <div className="experience-footer">
                      <a 
                        href="#projects" 
                        onClick={(e) => handleTimelineProjectLink(e, exp.projectLink)}
                        className="btn btn-secondary exp-case-study-btn"
                      >
                        <FontAwesomeIcon icon={["fas", "link"]} /> Explore Associated Case Study
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. SKILLS SECTION ===== */}
      <Skills id="skills" />

      {/* ===== 5. CERTIFICATIONS & ACHIEVEMENTS ===== */}
      <section className="achievements-section" id="achievements">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Notable Achievements</h2>
            <div className="section-title-divider"></div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-item-card glass-card">
                <div className="achievement-icon-box">
                  <FontAwesomeIcon icon={["fas", "trophy"]} />
                </div>
                <div className="achievement-info">
                  <span className="achievement-date">{item.date}</span>
                  <h3 className="achievement-card-title">{item.title}</h3>
                  <span className="achievement-issuer">by {item.issuer}</span>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. PROJECTS SECTION ===== */}
      <Projects 
        id="projects" 
        onSelectProject={setSelectedProject} 
      />

      {/* ===== 7. TESTIMONIALS SECTION ===== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Recommendations</h2>
            <div className="section-title-divider"></div>
          </div>
          
          <div className="testimonials-carousel-container glass-card">
            <div className="carousel-slide-wrapper">
              <div className="quote-mark-icon">“</div>
              <p className="testimonial-quote">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="testimonial-author-block">
                <h4 className="author-name">{testimonials[currentTestimonial].author}</h4>
                <p className="author-role">
                  {testimonials[currentTestimonial].role} &bull; <span className="author-context">{testimonials[currentTestimonial].context}</span>
                </p>
              </div>
            </div>
            
            <div className="carousel-controls">
              <button 
                onClick={handlePrevTestimonial} 
                className="carousel-btn prev-btn" 
                aria-label="Previous Testimonial"
              >
                <FontAwesomeIcon icon={["fas", "chevron-left"]} />
              </button>
              
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`carousel-dot ${index === currentTestimonial ? "dot-active" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button 
                onClick={handleNextTestimonial} 
                className="carousel-btn next-btn" 
                aria-label="Next Testimonial"
              >
                <FontAwesomeIcon icon={["fas", "chevron-right"]} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. CONTACT SECTION ===== */}
      <Contact id="contact" />

      {/* ===== DETAILS MODAL OVERLAY ===== */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}

export default Home;