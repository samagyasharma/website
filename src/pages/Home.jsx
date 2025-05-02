import React from "react";
import { Link } from "react-router-dom";

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
    title: "Morning Mist",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: image7,
  },
  {
    id: 12,
    title: "Heroic View",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: hero,
  },
];

const Home = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800">
          Welcome to My Art Gallery
        </h1>
        <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
          Explore a collection of original paintings that capture the beauty of nature and urban life.
          Each piece tells a unique story through colors and brushstrokes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paintings.map((painting) => (
          <Link
            key={painting.id}
            to={`/painting/${painting.id}`}
            className="group bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative aspect-square">
              <img
                src={painting.image}
                alt={painting.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-lora font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                {painting.title}
              </h2>
              <p className="text-gray-600 font-poppins text-sm">{painting.artist}</p>
              <p className="text-gray-600 font-poppins text-sm">{painting.medium}</p>
              <p className="text-pink-600 font-poppins font-semibold">{painting.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
