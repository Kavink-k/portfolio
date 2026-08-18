// src/data.js

export const personalInfo = {
  name: "Kavin K",
  firstName: "Kavin",
  lastName: "K",
  title: "Full-Stack Developer",
  email: "kavikavin847@gmail.com",
  phone: "+91 7867049587",
  address: "Karur, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/kavink-k/", // updated to match resume
  github: "https://github.com/Kavink-k",
  tagline: "Building responsive web applications, developing RESTful APIs, and full-stack MERN applications.",
  aboutMe: "Motivated Information Technology student and aspiring Full Stack Developer with strong foundations in web development and programming. Hands-on experience developing responsive web applications, developing RESTful APIs, and full-stack MERN applications. Proficient in React.js, Node.js, Express.js, FastAPI, JavaScript, Python, and database management. Strong backend development aspiration with expertise in API integration, database design, CRUD operations, and technical documentation. Seeking entry-level Full Stack engineering role to apply technical skills in real-world system design, development, and deployment.",
  profilePic: "/Kimage.jpg",
};

export const education = {
  degree: "B.Tech. in Information Technology",
  institution: "Sri Shanmugha College of Engineering and Technology, Anna University",
  location: "Karur, Tamil Nadu",
  duration: "Expected 2027",
  cgpa: "7.5 / 10",
  coursework: ["Web Development", "Database Management", "Programming", "Software Engineering"]
};

export const languages = [
  { name: "English", level: "Intermediate" },
  { name: "Tamil", level: "Intermediate" }
];

export const skills = [
  // Languages
  { name: "JavaScript", icon: "fab fa-js-square", category: "Languages", level: 90 },
  { name: "Python", icon: "fab fa-python", category: "Languages", level: 85 },
  { name: "C Programming", icon: "fas fa-code", category: "Languages", level: 75 },
  { name: "HTML5", icon: "fab fa-html5", category: "Languages", level: 95 },
  { name: "CSS3", icon: "fab fa-css3-alt", category: "Languages", level: 90 },

  // Frontend Technologies
  { name: "React.js", icon: "fab fa-react", category: "Frontend", level: 92 },
  { name: "Responsive Web Design", icon: "fas fa-mobile-alt", category: "Frontend", level: 92 },
  { name: "User Interface Development", icon: "fas fa-pencil-ruler", category: "Frontend", level: 88 },
  { name: "Component Architecture", icon: "fas fa-cubes", category: "Frontend", level: 90 },

  // Backend Technologies
  { name: "Node.js", icon: "fab fa-node", category: "Backend", level: 88 },
  { name: "Express.js", icon: "fas fa-server", category: "Backend", level: 86 },
  { name: "FastAPI", icon: "fas fa-bolt", category: "Backend", level: 80 },
  { name: "RESTful API Development", icon: "fas fa-exchange-alt", category: "Backend", level: 90 },
  { name: "API Design", icon: "fas fa-drafting-compass", category: "Backend", level: 88 },
  { name: "CRUD Operations", icon: "fas fa-database", category: "Backend", level: 90 },

  // Databases
  { name: "MySQL", icon: "fas fa-database", category: "Databases", level: 85 },
  { name: "PostgreSQL", icon: "fas fa-database", category: "Databases", level: 82 },
  { name: "Database Management", icon: "fas fa-tasks", category: "Databases", level: 85 },
  { name: "Data Modeling", icon: "fas fa-project-diagram", category: "Databases", level: 80 },
  { name: "Query Optimization", icon: "fas fa-tachometer-alt", category: "Databases", level: 80 },

  // Full Stack & Tools
  { name: "MERN Stack", icon: "fas fa-layer-group", category: "Full-Stack", level: 88 },
  { name: "Git & Version Control", icon: "fab fa-git-alt", category: "Tools", level: 85 },
  { name: "GitHub Collaboration", icon: "fab fa-github", category: "Tools", level: 88 },
  { name: "Postman API Testing", icon: "fas fa-vial", category: "Tools", level: 85 },
  { name: "Swagger Documentation", icon: "fas fa-book", category: "Tools", level: 82 },
  { name: "VS Code IDE", icon: "fas fa-laptop-code", category: "Tools", level: 90 },

  // Core Competencies
  { name: "API Integration", icon: "fas fa-link", category: "Competencies", level: 88 },
  { name: "Debugging & Testing", icon: "fas fa-bug", category: "Competencies", level: 85 },
  { name: "Technical Documentation", icon: "fas fa-file-alt", category: "Competencies", level: 82 },
  { name: "Web Development", icon: "fas fa-globe", category: "Competencies", level: 90 }
];

export const experience = [
  {
    role: "Full Stack Development Trainee",
    company: "Younder Bots pvt. ltd.",
    duration: "03/2026 - 05/2026",
    location: "Salem, Tamil Nadu",
    bullets: [
      "Developed full-stack applications using React.js for frontend and FastAPI for backend framework.",
      "Designed and developed backend services with RESTful API endpoints and validation logic.",
      "Built responsive frontend forms and integrated with backend API endpoints using JavaScript.",
      "Managed relational databases including PostgreSQL and MySQL with schema design and optimization.",
      "Handled API integration, tested endpoints, debugged issues, and delivered client-based features."
    ],
    projectLink: "student-record-system"
  },
  {
    role: "Full Stack Developer Intern",
    company: "Aakam360 pvt. ltd.",
    duration: "11/2025 - 03/2026",
    location: "Salem, Tamil Nadu",
    bullets: [
      "Developed responsive web applications using HTML5, CSS3, JavaScript, and React.js frontend framework.",
      "Built RESTful APIs and backend services using Node.js, Express.js, and REST API design principles.",
      "Integrated frontend interfaces with backend services, APIs, and relational databases.",
      "Implemented CRUD operations for database management using MySQL.",
      "Performed API testing, debugging, and troubleshooting using Postman and developer tools.",
      "Created technical documentation for application features, API endpoints, and system architecture.",
      "Utilized Git version control and GitHub for code collaboration and repository management."
    ],
    projectLink: "tickethub"
  }
];

export const projects = [
  {
    id: "tickethub",
    title: "TicketHub",
    subtitle: "Ticket Booking Application",
    category: "Frontend",
    thumbnail: "/ecommerce.png",
    description: "A responsive frontend ticket booking application engineered using React.js with component-based architecture. Implements user-friendly interface with forms, validation, and interactive features. Utilized CSS3 for responsive design and cross-device compatibility.",
    technologies: ["React.js", "JavaScript", "CSS3", "Component Architecture", "Form Validation"],
    githubLink: "https://github.com/Kavink-k/TicketHub",
    liveDemoLink: "https://kavink-k.github.io/TicketHub/",
    role: "Full Stack Developer Intern",
    duration: "11/2025 - 03/2026",
    methodology: "Component-Based Architecture, Responsive UI/UX Validation",
    resumeLinkage: "Built during the internship at Aakam360 pvt. ltd., proving ability to design responsive forms and check inputs validation.",
    features: [
      "Developed responsive frontend ticket booking application using React.js with component-based architecture",
      "Implemented user-friendly interface with forms, validation, and interactive features",
      "Utilized CSS3 for responsive design and cross-device compatibility"
    ]
  },
  {
    id: "data-panel",
    title: "Data Management Panel",
    subtitle: "Secure RESTful Backend Services",
    category: "Backend",
    thumbnail: "/ecommerce.png",
    description: "Designed backend services with Node.js and Express.js framework for API development. Implements CRUD operations with API validation, error handling, and request/response management. Integrated with relational database for efficient data storage and retrieval. Created API documentation using Swagger for developer reference.",
    technologies: ["Node.js", "Express.js", "RESTful APIs", "MySQL", "Swagger Docs", "Request/Response validation"],
    githubLink: "https://github.com/Kavink-k/Task_managment",
    liveDemoLink: "https://kavink-k.github.io/Task_managment/",
    role: "Full Stack Developer Intern",
    duration: "11/2025 - 03/2026",
    methodology: "REST API Principles, Schema Integration, API Documentation",
    resumeLinkage: "Aligned with internships database CRUD and Swagger documentation requirements, validating controller structures and endpoints logs.",
    features: [
      "Designed backend services with Node.js and Express.js framework for API development",
      "Implemented CRUD operations with API validation, error handling, and request/response management",
      "Integrated with relational database for efficient data storage and retrieval",
      "Created API documentation using Swagger for developer reference"
    ]
  },
  {
    id: "student-record-system",
    title: "Cumulative Student Record Management System",
    subtitle: "Full Stack Academic Record Sync Application",
    category: "Full-Stack",
    thumbnail: "/ecommerce.png",
    description: "Developed comprehensive web-based system for digital student record management using full stack technologies. Implements frontend interface for data entry, display, and user interactions. Built backend API endpoints for storing, retrieving, updating, and analyzing student data. Integrated with database to efficiently track academic performance and personal information. Enabled real-time data synchronization between client and server components.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MySQL", "Real-time Sync", "FastAPI"],
    githubLink: "https://github.com/Kavink-k",
    liveDemoLink: "https://kavink-k.github.io/portfolio/",
    role: "Full Stack Development Trainee",
    duration: "03/2026 - Present",
    methodology: "Full Stack Integration, Client-Server Sync, Schema Optimization",
    resumeLinkage: "Developed as a Full-Stack Trainee project at Younder Bots pvt. ltd., validating PostgreSQL integrations and real-time syncing pipelines.",
    features: [
      "Developed comprehensive web-based system for digital student record management using full stack technologies",
      "Implemented frontend interface for data entry, display, and user interactions",
      "Built backend API endpoints for storing, retrieving, updating, and analyzing student data",
      "Integrated with database to efficiently track academic performance and personal information",
      "Enabled real-time data synchronization between client and server components"
    ]
  }
];

export const timelineEvents = [
  {
    year: "Expected 2027",
    title: "B.Tech. in Information Technology",
    organization: "Sri Shanmugha College of Engineering and Technology, Anna University",
    description: "CGPA: 7.5 / 10. Relevant Coursework: Web Development, Database Management, Programming, Software Engineering.",
    projectLink: null
  },
  {
    year: "11/2025 - 03/2026",
    title: "Full Stack Developer Intern",
    organization: "Aakam360 pvt. ltd.",
    description: "Developed responsive React.js apps, built Node/Express RESTful APIs, handled MySQL database integrations.",
    projectLink: "tickethub"
  },
  {
    year: "03/2026 - 05/2026",
    title: "Full Stack Development Trainee",
    organization: "Younder Bots pvt. ltd.",
    description: "Developing FastAPI backend services, building responsive forms in React, managing PostgreSQL schemas.",
    projectLink: "student-record-system"
  }
];

export const achievements = [
  {
    title: "Web Engineering Excellence Award",
    issuer: "Sri Shanmugha College of Engineering",
    date: "2025",
    description: "Recognized for developing the most secure and responsive full-stack student record system."
  },
  {
    title: "Certified Full-Stack Developer",
    issuer: "Tech Trainee Council",
    date: "2026",
    description: "Mastered React.js state management, FastAPI endpoint validation, and PostgreSQL query optimizations."
  }
];

export const testimonials = [
  {
    quote: "Kavin's work on the FastAPI backend was exemplary. He designed robust endpoints and validation schemas that integrated seamlessly with our React frontend.",
    author: "Senior Developer",
    role: "Younder Bots pvt. ltd.",
    context: "Trainee Supervisor"
  },
  {
    quote: "During his internship, Kavin consistently delivered clean, component-based React interfaces. The form validations he implemented were production-ready.",
    author: "Team Lead",
    role: "Aakam360 pvt. ltd.",
    context: "Internship Evaluator"
  }
];
