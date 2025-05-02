import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import images
import eyesDontLie from "../assets/images/Eyes Don't Lie.jpeg";
import lakeside from "../assets/images/Lakeside.jpeg";
import bloomingFlowers from "../assets/images/Blooming Flowers.jpeg";
import mysticSky from "../assets/images/Mystic Sky.jpeg";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import hero from "../assets/images/hero.jpg";

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
    title: "Serene Landscape",
    image: image1,
  },
  {
    id: 6,
    title: "Mountain View",
    image: image2,
  },
  {
    id: 7,
    title: "Ocean Breeze",
    image: image3,
  },
  {
    id: 8,
    title: "Forest Path",
    image: image4,
  },
  {
    id: 9,
    title: "City Lights",
    image: image5,
  },
  {
    id: 10,
    title: "Sunset Horizon",
    image: image6,
  },
  {
    id: 11,
    title: "Morning Mist",
    image: image7,
  },
  {
    id: 12,
    title: "Heroic View",
    image: hero,
  },
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