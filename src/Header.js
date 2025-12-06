import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'; 

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header>
      <div className="nav wrap">
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="My Image" />

          </div>
          <div>
            <h1>Akshara Consultancy</h1>
            <p>Hiring • Real Estate • Insurance</p>
          </div>
        </div>

        <nav>
          <ul className={mobileOpen ? "active" : ""}>
            <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link></li>
            {/* <li><Link to="/candidates" onClick={() => setMobileOpen(false)}>Candidates</Link></li> */}
            <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            <li>
              {/* <button className="theme-btn" onClick={toggleTheme}>
                {isDark ? "☀️" : "🌙"}
              </button> */}
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
        {/* <Link to="/candidates" onClick={() => setMobileOpen(false)}>Candidates</Link> */}
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
         {/* <button className="theme-btn" onClick={toggleTheme}>
                {isDark ? "☀️" : "🌙"}
              </button> */}
      </div>
    </header>
  );
};

export default Header;
