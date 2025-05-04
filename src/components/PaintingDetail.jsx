import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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

const PaintingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const painting = paintingsData.paintings.find(p => p.id === parseInt(id));

  if (!painting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Painting not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/paintings')}
          className="mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Back to Paintings
        </button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative group">
              <Link to={`/zoomed-painting/${id}`}>
                <img
                  src={getImagePath(painting.painting_name)}
                  alt={painting.painting_name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to zoom
                  </span>
                </div>
              </Link>
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold mb-4">{painting.painting_name}</h1>
              <p className="text-2xl text-gray-600 mb-6">Rs. {painting.price}</p>
              <p className="text-gray-700 mb-4">{painting.medium}</p>
              <p className="text-gray-700 mb-8">{painting.artist}</p>
              <button
                onClick={() => {
                  // Add to bag logic here
                  navigate('/order-confirmation');
                }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetail; 