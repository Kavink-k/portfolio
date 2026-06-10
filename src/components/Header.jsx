// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo } from "../data";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync theme with document element attribute and local storage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Scrollspy observer logic
  useEffect(() => {
    const sections = ["home", "about", "experience", "skills", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies center third of screen
      threshold: 0.05,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll shadow
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-content">
        <a href="#home" className="site-logo">
          {personalInfo.name.split(" ")[0]}
          <span className="logo-dot">.dev</span>
        </a>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="#home" className={activeSection === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle dark/light theme"
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
          >
            {theme === "light" ? (
              <FontAwesomeIcon icon={["fas", "moon"]} className="toggle-icon moon-icon" />
            ) : (
              <FontAwesomeIcon icon={["fas", "sun"]} className="toggle-icon sun-icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
