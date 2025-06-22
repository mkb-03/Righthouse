import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./modules/core/navbar";
import { Home } from "./modules/pages/home";
import { Portfolio } from "./modules/pages/portfolio";
import { AboutUs } from "./modules/pages/about-us";
import { Footer } from "./modules/core/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
