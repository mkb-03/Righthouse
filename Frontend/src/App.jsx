import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./modules/core/navbar";
import { Home } from "./modules/pages/Home.jsx";
import { Portfolio } from "./modules/pages/portfolio";
import { AboutUs } from "./modules/pages/about-us";
import { Footer } from "./modules/core/footer";
import { FAQ } from "./modules/pages/faq";
import { Contact } from "./modules/pages/contact-us";
import { Service } from "./modules/pages/service";
import { SingleService } from "./modules/pages/single-service";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/service" element={<Service />} />
        <Route path="/single-service" element={<SingleService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
