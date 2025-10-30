// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // This is now our main page
import './assets/styles/global.css';

// We've removed BrowserRouter, Routes, and Route

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {/* Home now contains all your sections */}
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;