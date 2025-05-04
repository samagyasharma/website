import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import paintingsData from "../data/paintings.json";

const imageMap = {
  "Eyes Don't Lie": eyesDontLie,
  "Lakeside": lakeside,
  "Blooming Flowers": bloomingFlowers,
  "Mystic Sky": mysticSky,
  "Holi": holi,
  "Beagle": beagle,
  "Sunsetz": sunsetz,
  "Flowers": flowers,
  "Marilyn Monroe": marilynMonroe,
  "Into Your Eyes": intoYourEyes
};

const PaintingDetails = () => {
  const { paintingId } = useParams();
  const navigate = useNavigate();
  const [painting, setPainting] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [inBag, setInBag] = useState(false);

  useEffect(() => {
    const foundPainting = paintingsData.paintings.find((p) => p.id === parseInt(paintingId));
    if (foundPainting) {
      setPainting({
        ...foundPainting,
        image: imageMap[foundPainting.painting_name],
        price: `Rs. ${foundPainting.price}`
      });
    }
    setIsLoading(false);
  }, [paintingId]);

  useEffect(() => {
    if (painting) {
      const bag = JSON.parse(localStorage.getItem('bag') || '[]');
      setInBag(bag.some(item => item.title === painting.painting_name));
    }
  }, [painting]);

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
    <div className="min-h-screen pt-1 pb-12 px-4 sm:px-6 lg:px-8">
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
              alt={painting.painting_name}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800 animate-slide-up">
                {painting.painting_name}
              </h1>
            </div>
            <div className="flex justify-center mb-4">
              <button
                className={`px-8 py-3 font-poppins transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200 rounded-full shadow-md ${
                  inBag
                    ? 'bg-pink-200 text-pink-900 font-bold border-2 border-pink-600 hover:bg-pink-300 hover:border-pink-700'
                    : 'bg-pink-100 text-pink-800 font-semibold hover:scale-105 hover:shadow-lg'
                }`}
                onClick={() => {
                  if (inBag) {
                    navigate('/your-bag');
                  } else {
                    const bag = JSON.parse(localStorage.getItem('bag') || '[]');
                    if (!bag.some(item => item.title === painting.painting_name)) {
                      bag.push({
                        title: painting.painting_name,
                        image: painting.image,
                        price: painting.price
                      });
                      localStorage.setItem('bag', JSON.stringify(bag));
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 2500);
                      setInBag(true);
                    }
                  }
                }}
              >
                {inBag ? 'Go to Bag' : 'Add to Bag'}
              </button>
            </div>
            <div className="space-y-2 text-gray-600 font-poppins animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg">{painting.medium}</p>
              <p className="text-2xl font-semibold text-pink-600">{painting.price}</p>
            </div>

            <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
              {painting.description}
            </p>
          </div>
        </div>
        {showToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-100 text-pink-900 px-6 py-3 rounded-xl shadow-lg font-poppins text-lg z-50 animate-fade-in-out">
            Your Painting is added to Bag! Go to Bag to confirm your order !
          </div>
        )}
      </div>
    </div>
  );
};

export default PaintingDetails; 