import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-lora font-bold hover:text-pink-600 transition-colors" style={{ color: "#4a2c6d" }}>
              Art Gallery
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className={`text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-poppins transition-colors ${location.pathname === "/" ? "bg-pink-100 text-pink-700" : ""}`}
              >
                Gallery
              </Link>
              <Link
                to="/your-bag"
                className={`text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-poppins transition-colors ${location.pathname === "/your-bag" ? "bg-pink-100 text-pink-700" : ""}`}
              >
                Your Bag
              </Link>
              <Link
                to="/about"
                className={`text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-poppins transition-colors ${location.pathname === "/about" ? "bg-pink-100 text-pink-700" : ""}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-poppins transition-colors ${location.pathname === "/contact" ? "bg-pink-100 text-pink-700" : ""}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-poppins text-gray-600 hover:text-pink-600 hover:bg-gray-50 ${location.pathname === "/" ? "bg-pink-100 text-pink-700" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/your-bag"
              className={`block px-3 py-2 rounded-md text-base font-poppins text-gray-600 hover:text-pink-600 hover:bg-gray-50 ${location.pathname === "/your-bag" ? "bg-pink-100 text-pink-700" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Your Bag
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-poppins text-gray-600 hover:text-pink-600 hover:bg-gray-50 ${location.pathname === "/about" ? "bg-pink-100 text-pink-700" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-poppins text-gray-600 hover:text-pink-600 hover:bg-gray-50 ${location.pathname === "/contact" ? "bg-pink-100 text-pink-700" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
