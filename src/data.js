// src/data.js

export const personalInfo = {
  name: "Kavin K",
  title: "Full-Stack Developer | IT Student",
  email: "kavikavin847@gmail.com",
  phone: "+91 7867049587",
  linkedin: "https://www.linkedin.com/in/kavin-k-b2711a290/",
  github: "https://github.com/Kavink-k",
  tagline: "Building intuitive and robust web applications with a passion for learning and problem-solving.",
  aboutMe: `Hi, I'm Kavin As a passionate 3rd-year information technology student, I'm deeply immersed in the world of full-stack development. I thrive on bringing ideas to life through code, from crafting elegant user interfaces with React to building efficient server-side logic with Node.js. My journey so far has equipped me with a strong foundation in modern web technologies, and I'm constantly eager to learn new tools and tackle exciting challenges. Let's build something amazing together!`,
  profilePic: "/Kimage.jpg", // Path to profile image
};

export const skills = [
  { name: "HTML5", icon: "fab fa-html5", category: "Frontend" },
  { name: "CSS3", icon: "fab fa-css3-alt", category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: "fab fa-js-square", category: "Frontend" },
  { name: "React.js", icon: "fab fa-react", category: "Frontend" },
  { name: "Node.js", icon: "fab fa-node", category: "Backend" },
  { name: "Express.js", icon: "fas fa-server", category: "Backend" },
  { name: "SQL (Mysql2)", icon: "fas fa-database", category: "Database" },
  { name: "Git", icon: "fab fa-git-alt", category: "Tools" },
  { name: "RESTful APIs", icon: "fas fa-exchange-alt", category: "Concepts" },
  { name: "Responsive Design", icon: "fas fa-mobile-alt", category: "Concepts" },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Storefront",
    category: "Full-Stack",
    thumbnail: "/ecommerce.png",
    screenshots: ["/assets/images/project1-screenshot1.jpg", "/assets/images/project1-screenshot2.jpg"],
    description: `A responsive e-commerce application built with React for the frontend, featuring product listings, a shopping cart, and user authentication. The backend was developed using Node.js and Express.js with MongoDB for data persistence, handling API requests for products, orders, and user management.`,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
    githubLink: "https://github.com/janedoe/ecommerce-storefront",
    liveDemoLink: "https://ecommerce-storefront-demo.netlify.app", // Example, replace with actual
    features: [
      "User authentication (login, registration)",
      "Product browsing and filtering",
      "Shopping cart functionality",
      "Order placement and history",
      "Admin panel for product management (concept)",
    ],
  },
  {
    id: 2,
    title: "Data Management App",
    category: "Frontend Focused",
    thumbnail: "/ecommerce.png",
    screenshots: ["/assets/images/project2-screenshot1.jpg"],
    description: `A modern and intuitive Data management application developed using React. It allows users to add, delete,7, with local storage persistence to remember tasks across sessions. Focus was placed on a clean UI/UX and efficient state management.`,
    technologies: ["React", "React Hooks", "CSS3", "Local Storage"],
    githubLink: "https://github.com/Kavink-k/Task_managment",
    liveDemoLink: "https://kavink-k.github.io/Task_managment/",
    features: [
      "Add new tasks",
      "Mark tasks as complete/incomplete",
      "Delete tasks",
      "Filter tasks (all, active, completed)",
      "Persist tasks in local storage",
    ],
  },
  {
    id: 3,
    title: "Simple Blog Platform",
    category: "Backend Focused",
    thumbnail: "/ecommerce.png",
    screenshots: ["/assets/images/project3-screenshot1.jpg"],
    description: `A basic blog platform backend built with Node.js and Express.js, exposing RESTful API endpoints for managing posts, comments, and users. Data is stored in a mySql database. Frontend is a simple HTML/CSS interface for demonstration purposes.`,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "HTML", "CSS"],
    githubLink: "https://github.com/janedoe/simple-blog-api",
    liveDemoLink: "N/A (API only)",
    features: [
      "API for creating, reading, updating, deleting blog posts",
      "API for managing comments on posts",
      "Basic user authentication (API level)",
    ],
  },
  // Add more projects here
];