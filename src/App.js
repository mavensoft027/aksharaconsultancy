import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./light.css";
import "./App.css";

function App() {
  // THEME STATE FIX ✔
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <Router>
        {/* Pass theme + setTheme to Header */}
        <Header theme={theme} setTheme={setTheme} />

        <main className={theme}>
          <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
