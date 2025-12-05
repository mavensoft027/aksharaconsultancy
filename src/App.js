import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // <-- HashRouter

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./light.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <Router>
        <Header theme={theme} setTheme={setTheme} />

        <main className={theme}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Hero />} /> {/* Redirect unknown routes to home */}
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
