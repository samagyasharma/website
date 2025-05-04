import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';
import paintingsData from '../data/paintings.json';

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

const paintings = [
  {
    id: 1,
    title: "Eyes Don't Lie",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: eyesDontLie,
  },
  {
    id: 2,
    title: "Lakeside",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: lakeside,
  },
  {
    id: 3,
    title: "Blooming Flowers",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: bloomingFlowers,
  },
  {
    id: 4,
    title: "Mystic Sky",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: mysticSky,
  },
  {
    id: 5,
    title: "Serene Landscape",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image1,
  },
  {
    id: 6,
    title: "Mountain View",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image2,
  },
  {
    id: 7,
    title: "Ocean Breeze",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image3,
  },
  {
    id: 8,
    title: "Forest Path",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image4,
  },
  {
    id: 9,
    title: "City Lights",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image5,
  },
  {
    id: 10,
    title: "Sunset Horizon",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image6,
  },
  {
    id: 11,
    title: "Urban Dreams",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image7,
  },
];

const ZoomedPainting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const painting = paintingsData.paintings.find(p => p.id === parseInt(id));

  useEffect(() => {
    // Simulate loading time for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = Math.min(Math.max(scale + (e.deltaY > 0 ? -0.1 : 0.1), 1), 3);
    setScale(newScale);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      
      if (this.lastDistance) {
        const scaleChange = distance / this.lastDistance;
        const newScale = Math.min(Math.max(scale * scaleChange, 1), 3);
        setScale(newScale);
      }
      
      this.lastDistance = distance;
    }
  };

  const handleTouchEnd = () => {
    this.lastDistance = null;
  };

  if (!painting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Painting not found</div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gray-100 flex flex-col"
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div 
          className={`relative transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease-out',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        >
          <img
            src={getImagePath(painting.painting_name)}
            alt={painting.painting_name}
            className="max-w-full max-h-[80vh] object-contain"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ZoomedPainting; 