import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import images
import eyesDontLie from "../assets/images/eyes-dont-lie.jpg";
import lakeside from "../assets/images/Lakeside.jpg";
import bloomingFlowers from "../assets/images/blooming-flowers.jpg";
import mysticSky from "../assets/images/mystic-sky.jpg";
import holi from "../assets/images/Holi.jpg";
import beagle from "../assets/images/Beagle.jpg";
import sunsetz from "../assets/images/Sunsetz.jpg";
import flowers from "../assets/images/Flowers.jpg";
import marilynMonroe from "../assets/images/marilyn-monroe.jpg";
import intoYourEyes from "../assets/images/into-your-eyes.jpg";

const paintings = [
  {
    id: 1,
    title: "Eyes Don't Lie",
    image: eyesDontLie,
  },
  {
    id: 2,
    title: "Lakeside",
    image: lakeside,
  },
  {
    id: 3,
    title: "Blooming Flowers",
    image: bloomingFlowers,
  },
  {
    id: 4,
    title: "Mystic Sky",
    image: mysticSky,
  },
  {
    id: 5,
    title: "Holi",
    image: holi,
  },
  {
    id: 6,
    title: "Beagle",
    image: beagle,
  },
  {
    id: 7,
    title: "Sunsetz",
    image: sunsetz,
  },
  {
    id: 8,
    title: "Flowers",
    image: flowers,
  },
  {
    id: 9,
    title: "Marilyn Monroe",
    image: marilynMonroe,
  },
  {
    id: 10,
    title: "Into Your Eyes",
    image: intoYourEyes,
  }
];

const ZoomedImageView = () => {
  const { paintingId } = useParams();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  const painting = paintings.find((p) => p.id === parseInt(paintingId));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;

    if (timeDiff < 300) { // Double right-click within 300ms
      setIsZoomed(!isZoomed);
    }

    setLastClickTime(currentTime);
  };

  if (!painting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-lora font-bold text-gray-800 mb-4">
          Painting not found
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-poppins"
        >
          Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-pink-lavender/90 backdrop-blur-sm animate-fade-in overflow-auto">
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-lg hover:bg-white transition-colors font-poppins shadow-lg"
        >
          Close
        </button>
      </div>

      <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-auto">
        <div
          className={`relative transition-transform duration-300 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          onContextMenu={handleContextMenu}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img
            src={painting.image}
            alt={painting.title}
            className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
            style={{ display: 'block', margin: 'auto' }}
          />
          {showInstructions && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-poppins text-gray-800 animate-fade-in-out">
              Double right-click to zoom
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ZoomedImageView; 