// src/components/Header.jsx
import React from "react";
// Remove Link and NavLink imports
// import { Link, NavLink } from 'react-router-dom';
import { personalInfo } from "../data";
import "./Header.css"; // We will also update this CSS in the next step

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        {/* This link now goes to the top of the page */}
        <a href="#home" className="site-logo">
          {personalInfo.name.split(" ")[0]}
          <span>.Dev</span>
        </a>
        <nav className="main-nav ">
          <ul >
            {/* Change NavLinks to simple <a> tags with anchor hrefs */}
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
