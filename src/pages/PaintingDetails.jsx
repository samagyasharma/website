import React, { useEffect, useState } from "react";
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
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: eyesDontLie,
    description: "A captivating portrait that reveals the depth of human emotion through expressive eyes. The delicate watercolor technique brings out the subtle nuances of the subject's gaze.",
  },
  {
    id: 2,
    title: "Lakeside",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: lakeside,
    description: "A serene lakeside scene capturing the tranquility of nature. The gentle ripples and soft reflections create a peaceful atmosphere.",
  },
  {
    id: 3,
    title: "Blooming Flowers",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: bloomingFlowers,
    description: "A vibrant composition of flowers in full bloom, showcasing the delicate beauty of nature through soft watercolor strokes.",
  },
  {
    id: 4,
    title: "Mystic Sky",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: mysticSky,
    description: "An ethereal sky painting that captures the magical moments of twilight with its soft hues and dreamy atmosphere.",
  },
  {
    id: 5,
    title: "Serene Landscape",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image1,
    description: "A peaceful landscape that invites viewers to immerse themselves in the beauty of nature's tranquility.",
  },
  {
    id: 6,
    title: "Mountain View",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image2,
    description: "Majestic mountains captured in soft watercolor, showcasing the grandeur of nature's peaks.",
  },
  {
    id: 7,
    title: "Ocean Breeze",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image3,
    description: "The gentle movement of ocean waves brought to life through fluid watercolor techniques.",
  },
  {
    id: 8,
    title: "Forest Path",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image4,
    description: "A winding path through a mystical forest, inviting viewers to explore nature's hidden beauty.",
  },
  {
    id: 9,
    title: "City Lights",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image5,
    description: "Urban landscapes come alive with the glow of city lights, captured in delicate watercolor washes.",
  },
  {
    id: 10,
    title: "Sunset Horizon",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image6,
    description: "The magical colors of sunset painted with soft watercolor techniques, creating a dreamy atmosphere.",
  },
  {
    id: 11,
    title: "Morning Mist",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image7,
    description: "The ethereal beauty of morning mist captured in delicate watercolor washes.",
  },
  {
    id: 12,
    title: "Heroic View",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: hero,
    description: "A grand landscape that captures the heroic scale of nature's beauty through watercolor techniques.",
  },
];

const PaintingDetails = () => {
  const { paintingId } = useParams();
  const navigate = useNavigate();
  const [painting, setPainting] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const foundPainting = paintings.find((p) => p.id === parseInt(paintingId));
    setPainting(foundPainting);
    setIsLoading(false);
  }, [paintingId]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors"
          style={{ color: "#4a1c40" }}
        >
          ←
        </button>

        <div className="space-y-8 animate-fade-in">
          <div 
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-3/5 mx-auto cursor-pointer"
            onClick={() => navigate(`/painting/${paintingId}/zoom`)}
          >
            <img
              src={painting.image}
              alt={painting.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800 animate-slide-up">
                {painting.title}
              </h1>
              <button
                onClick={handleLikeClick}
                className="relative group"
                aria-label={isLiked ? "Unlike painting" : "Like painting"}
              >
                <svg
                  className={`w-8 h-8 transition-all duration-300 ${
                    isLiked ? "text-red-500" : "text-white"
                  }`}
                  viewBox="0 0 24 24"
                  fill={isLiked ? "currentColor" : "none"}
                  stroke={isLiked ? "currentColor" : "#4a1c40"}
                  strokeWidth="2"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {showPopup && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-poppins text-gray-800 animate-rise-up">
                    <div>Thank you</div>
                    <div>for liking my painting!</div>
                  </div>
                )}
              </button>
            </div>

            <div className="space-y-2 text-gray-600 font-poppins animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl">{painting.artist}</p>
              <p className="text-lg">{painting.medium}</p>
              <p className="text-2xl font-semibold text-pink-600">{painting.price}</p>
            </div>

            <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
              {painting.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails; 