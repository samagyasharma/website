import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourBag from "./pages/YourBag";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import PaintingDetails from "./pages/PaintingDetails";
import ZoomedImageView from "./pages/ZoomedImageView";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-pink-lavender">
        <div className="backdrop-blur-sm">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/your-bag" element={<YourBag />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/painting/:paintingId" element={<PaintingDetails />} />
              <Route path="/painting/:paintingId/zoom" element={<ZoomedImageView />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
