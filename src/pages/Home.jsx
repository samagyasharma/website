import React, { useRef, useEffect, useState } from "react";
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

const AnimatedBackground = () => (
  <>
    <div className="fixed inset-0 -z-10 animate-gradient-move" style={{
      background: 'linear-gradient(to bottom, #ffcce0, #e6ccff)',
      backgroundSize: '200% 200%',
      animation: 'gradientMove 10s ease-in-out infinite',
    }} />
    {/* Animated SVG Brush Stroke */}
    <svg
      className="fixed left-1/2 top-1/4 -translate-x-1/2 -z-10 opacity-30 animate-brush-float pointer-events-none"
      width="400" height="120" viewBox="0 0 400 120" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'blur(2px)' }}
    >
      <path d="M20 60 Q 200 10 380 60 Q 200 110 20 60 Z" fill="#e6ccff" />
      <path d="M40 70 Q 200 30 360 70 Q 200 100 40 70 Z" fill="#ffcce0" />
    </svg>
    <style>{`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-move {
        animation: gradientMove 10s ease-in-out infinite;
      }
      @keyframes brushFloat {
        0%, 100% { transform: translate(-50%, 0) scale(1); }
        50% { transform: translate(-50%, 20px) scale(1.03); }
      }
      .animate-brush-float {
        animation: brushFloat 8s ease-in-out infinite;
      }
    `}</style>
  </>
);

const MovingBlobsBackground = () => (
  <>
    {/* Light Yellow Blob 1 */}
    <div
      className="fixed top-[-8rem] left-[-8rem] w-[28rem] h-[28rem] rounded-full opacity-50 blur-3xl animate-blob-move1 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 60% 40%, #fffbe6 80%, transparent 100%)', zIndex: 0 }}
    />
    {/* Light Yellow Blob 2 */}
    <div
      className="fixed bottom-[-10rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full opacity-50 blur-3xl animate-blob-move2 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 40% 60%, #fffbe6 80%, transparent 100%)', zIndex: 0 }}
    />
    {/* Light Yellow Blob 3 */}
    <div
      className="fixed top-1/2 left-[-10rem] w-[24rem] h-[24rem] rounded-full opacity-40 blur-3xl animate-blob-move3 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 50%, #fffbe6 80%, transparent 100%)', zIndex: 0 }}
    />
    {/* Light Yellow Blob 4 */}
    <div
      className="fixed bottom-[-8rem] left-1/3 w-[20rem] h-[20rem] rounded-full opacity-40 blur-3xl animate-blob-move4 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 50%, #fffbe6 80%, transparent 100%)', zIndex: 0 }}
    />
  </>
);

// Animated Signature Component
const AnimatedSignature = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem('signatureShown')) {
      setShow(true);
      sessionStorage.setItem('signatureShown', 'true');
    }
  }, []);
  if (!show) return null;
  return (
    <div style={{ position: 'relative', width: '100%', height: 100, marginBottom: -40, zIndex: 10 }} id="signature-wrapper">
      <svg
        id="signature"
        viewBox="0 0 600 100"
        width="100%"
        height="100"
        style={{ display: 'block', margin: '0 auto', position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 10 }}
      >
        <text
          x="50%"
          y="70"
          textAnchor="middle"
          fill="#111"
          stroke="#e88db4"
          strokeWidth="1.5"
          fontSize="60"
          fontFamily="'Caveat', cursive"
          fontWeight="700"
          transform="rotate(-3 300 50)"
          className="signature-path"
        >
          Samagya Sharma
        </text>
      </svg>
      <style>{`
        .signature-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: writeText 4s ease forwards;
        }
        @keyframes writeText {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

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
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <MovingBlobsBackground />
      <AnimatedSignature />
      <div className="container mx-auto py-12 px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-lora font-bold text-center mb-2">Art Gallery</h1>
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
                  <div className="font-poppins text-sm text-gray-200 drop-shadow-lg">{painting.artist}</div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="font-poppins text-xs text-gray-500 mb-1">{painting.medium}</div>
                <div className="font-poppins text-base text-pink-700 font-semibold">{painting.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
