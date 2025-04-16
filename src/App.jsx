import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourBag from "./pages/YourBag";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import PaintingDetails from "./pages/PaintingDetails";
import ZoomedImageView from "./pages/ZoomedImageView";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/your-bag" element={<YourBag />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/painting/:paintingId" element={<PaintingDetails />} />
            <Route path="/painting/:paintingId/zoom" element={<ZoomedImageView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
