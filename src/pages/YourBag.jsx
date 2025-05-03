import React, { useEffect, useState } from "react";
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
  { id: 1, title: "Eyes Don't Lie", price: "Rs. 3000", image: eyesDontLie },
  { id: 2, title: "Lakeside", price: "Rs. 3000", image: lakeside },
  { id: 3, title: "Blooming Flowers", price: "Rs. 3000", image: bloomingFlowers },
  { id: 4, title: "Mystic Sky", price: "Rs. 3000", image: mysticSky },
  { id: 5, title: "Serene Landscape", price: "Rs. 3000", image: image1 },
  { id: 6, title: "Mountain View", price: "Rs. 3000", image: image2 },
  { id: 7, title: "Ocean Breeze", price: "Rs. 3000", image: image3 },
  { id: 8, title: "Forest Path", price: "Rs. 3000", image: image4 },
  { id: 9, title: "City Lights", price: "Rs. 3000", image: image5 },
  { id: 10, title: "Sunset Horizon", price: "Rs. 3000", image: image6 },
  { id: 11, title: "Morning Mist", price: "Rs. 3000", image: image7 },
  { id: 12, title: "Heroic View", price: "Rs. 3000", image: hero },
];

const YourBag = () => {
  const [bag, setBag] = useState([]);
  const [confirmed, setConfirmed] = useState({});

  useEffect(() => {
    const bagItems = JSON.parse(localStorage.getItem("bag") || "[]");
    setBag(bagItems);
  }, []);

  const handleToggle = (title) => {
    setConfirmed((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-4xl md:text-5xl font-lora font-bold text-center mb-10">Your Bag</h1>
      <div className="space-y-8 max-w-3xl mx-auto mb-16">
        {bag.length === 0 && (
          <div className="text-center text-gray-500 text-lg">Your bag is empty.</div>
        )}
        {bag.map((painting) => (
          <div key={painting.title} className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6 gap-6">
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-xl font-semibold font-poppins text-gray-800 mb-2">{painting.title}</div>
              <div className="text-lg font-poppins text-pink-700 mb-4">{painting.price}</div>
              <label className="inline-flex items-center cursor-pointer select-none">
                <span className="mr-2 text-sm text-gray-600">Confirmed</span>
                <input
                  type="checkbox"
                  checked={!!confirmed[painting.title]}
                  onChange={() => handleToggle(painting.title)}
                  className="sr-only"
                />
                <span className={`w-10 h-6 flex items-center bg-pink-100 rounded-full p-1 duration-300 ease-in-out ${confirmed[painting.title] ? 'bg-pink-400' : ''}`}>
                  <span className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${confirmed[painting.title] ? 'translate-x-4' : ''}`}></span>
                </span>
              </label>
            </div>
            <img src={painting.image} alt={painting.title} className="w-32 h-32 object-cover rounded-xl shadow-md" />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-pink-200 text-pink-900 font-poppins font-bold text-xl px-12 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200">
          Order Confirmation
        </button>
      </div>
    </div>
  );
};

export default YourBag;
