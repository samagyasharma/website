import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  { id: 1, title: "Eyes Don't Lie", price: "Rs. 3000", image: eyesDontLie },
  { id: 2, title: "Lakeside", price: "Rs. 3000", image: lakeside },
  { id: 3, title: "Blooming Flowers", price: "Rs. 3000", image: bloomingFlowers },
  { id: 4, title: "Mystic Sky", price: "Rs. 3000", image: mysticSky },
  { id: 5, title: "Holi", price: "Rs. 3000", image: holi },
  { id: 6, title: "Beagle", price: "Rs. 3000", image: beagle },
  { id: 7, title: "Sunsetz", price: "Rs. 3000", image: sunsetz },
  { id: 8, title: "Flowers", price: "Rs. 3000", image: flowers },
  { id: 9, title: "Marilyn Monroe", price: "Rs. 3000", image: marilynMonroe },
  { id: 10, title: "Into Your Eyes", price: "Rs. 3000", image: intoYourEyes }
];

const YourBag = () => {
  const [bag, setBag] = useState([]);
  const [confirmed, setConfirmed] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const bagItems = JSON.parse(localStorage.getItem("bag") || "[]");
    setBag(bagItems);
  }, []);

  const handleToggle = (title) => {
    setConfirmed((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleRemove = (title) => {
    const newBag = bag.filter((item) => item.title !== title);
    setBag(newBag);
    localStorage.setItem("bag", JSON.stringify(newBag));
  };

  const isAnyConfirmed = bag.some((item) => confirmed[item.title]);
  const isButtonDisabled = bag.length === 0 || !isAnyConfirmed;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-4xl md:text-5xl font-lora font-bold text-center mb-6">Your Bag</h1>
      <p className="text-center text-gray-500 font-poppins text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto px-2">
        The details of your order will be given to the respective artists and you will be contacted. No payment required now.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto mb-16">
        {bag.length === 0 && (
          <div className="text-center text-gray-500 text-lg">Your bag is empty.</div>
        )}
        {bag.map((painting) => (
          <div key={painting.title} className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6 gap-6 relative">
            <button
              onClick={() => handleRemove(painting.title)}
              className="w-8 h-8 flex items-center justify-center border border-red-400 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-200 mr-4 self-center leading-none p-0"
              title="Remove"
              style={{ flexShrink: 0 }}
            >
              <span className="text-2xl font-bold flex items-center justify-center w-full h-full leading-none mt-[-2px]">×</span>
            </button>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-xl font-semibold font-poppins text-gray-800 mb-2">{painting.title}</div>
              <div className="text-lg font-poppins text-pink-700 mb-4">{painting.price}</div>
              <label className="inline-flex items-center cursor-pointer select-none">
                <span className="mr-2 text-sm text-gray-600">Confirm</span>
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
        <button
          className={`bg-pink-200 text-pink-900 font-poppins font-bold text-xl px-12 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:bg-pink-200' : ''}`}
          disabled={isButtonDisabled}
          onClick={() => {
            if (!isButtonDisabled) {
              const confirmedTitles = bag.filter(item => confirmed[item.title]).map(item => item.title);
              localStorage.setItem("confirmed", JSON.stringify(confirmedTitles));
              navigate('/order-confirmation');
            }
          }}
        >
          Order Confirmation
        </button>
      </div>
    </div>
  );
};

export default YourBag;
