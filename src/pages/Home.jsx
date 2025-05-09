import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
import backgroundImage from "../assets/images/background.jpg";

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
    title: "Holi",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: holi,
  },
  {
    id: 6,
    title: "Beagle",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: beagle,
  },
  {
    id: 7,
    title: "Sunsetz",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: sunsetz,
  },
  {
    id: 8,
    title: "Flowers",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: flowers,
  },
  {
    id: 9,
    title: "Marilyn Monroe",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: marilynMonroe,
  },
  {
    id: 10,
    title: "Into Your Eyes",
    artist: "Samagya Sharma",
    medium: "WaterColor",
    price: "Rs. 3000",
    image: intoYourEyes,
  }
];

const Home = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const revealCards = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-4");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new window.IntersectionObserver(revealCards, {
      threshold: 0.1,
    });
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full" style={{
      background: 'linear-gradient(90deg, #e0d5ff 0%, #e0d5ff min(20%, 140px), #fef3c7 min(20%, 140px), #fef3c7 60%, #fce7f3 100%)'
    }}>
      {/* Content Container */}
      <div className="w-full py-12 px-4 sm:px-8 lg:px-24">
        <div className="relative">
          {/* Cloud-like effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] h-[50vw] max-h-[400px] bg-white/80 rounded-full blur-3xl"></div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-5xl md:text-6xl font-normal text-black font-water-brush">Samagya</h1>
            <span className="text-5xl md:text-6xl font-normal text-black font-water-brush">   </span>
            <span className="text-5xl md:text-6xl font-normal text-black font-water-brush">   </span>
            <h1 className="text-5xl md:text-6xl font-normal text-black font-water-brush">Sharma</h1>
          </div>
          <h2 className="text-5xl md:text-6xl font-water-brush font-normal text-center mb-2 text-black" style={{ textShadow: 'none' }}>Art</h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in" style={{ 
            fontFamily: "'Homemade Apple', cursive",
            animationDelay: "0.2s"
          }}>
            Explore a collection of original paintings capturing a unique story through colors and brushstrokes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paintings.map((painting, idx) => (
            <Link
              to={`/painting/${painting.id}`}
              key={painting.id}
              ref={el => cardRefs.current[idx] = el}
              className={
                `bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 ease-in-out hover:scale-105 opacity-0 translate-y-4` +
                ` transition-all duration-700` +
                ` delay-` + idx * 100
              }
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative w-full">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Homemade Apple', cursive" }}>{painting.title}</h3>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="text-base text-gray-800 font-semibold" style={{ fontFamily: "'Homemade Apple', cursive" }}>{painting.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
