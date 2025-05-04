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
    <div className="relative min-h-screen w-full">
      <div className="w-full py-12 px-4 sm:px-8 lg:px-24">
        <h1 className="text-5xl md:text-6xl font-water-brush font-normal text-center mb-2">Samagya Sharma</h1>
        <h2 className="text-5xl md:text-6xl font-water-brush font-normal text-center mb-2">Art</h2>
        <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto text-center mb-8">
          Explore a collection of original paintings that capture the beauty of nature and urban life. Each piece tells a unique story through colors and brushstrokes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paintings.map((painting, idx) => (
            <Link
              to={`/painting/${painting.id}`}
              key={painting.id}
              ref={el => cardRefs.current[idx] = el}
              className={
                `bg-white/80 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 ease-in-out hover:scale-105 opacity-0 translate-y-4` +
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
                  <h2 className="font-lora font-bold text-lg text-white mb-1 drop-shadow-lg">{painting.title}</h2>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="font-poppins text-base text-gray-800 font-semibold">{painting.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
