import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import YourBag from "./pages/YourBag";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaintingDetails from "./pages/PaintingDetails";
import ZoomedImageView from "./pages/ZoomedImageView";
import OrderConfirmation from "./pages/OrderConfirmation";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <div className="backdrop-blur-sm w-full">
          <Navbar />
          <main className="w-full px-0 py-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/your-bag" element={<YourBag />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/painting/:paintingId" element={<PaintingDetails />} />
              <Route path="/painting/:paintingId/zoom" element={<ZoomedImageView />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
        <Toaster position="top-center" />
      </div>
    </Router>
  );
};

export default App;
