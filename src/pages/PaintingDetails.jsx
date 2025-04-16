import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PaintingDetails = () => {
  const navigate = useNavigate();
  const { paintingId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  // This will be dynamic data later
  const paintingData = {
    title: "Whispers of the Forest",
    description: "A mesmerizing landscape capturing the essence of nature's tranquility. The painting features a serene forest scene with delicate light filtering through the trees, creating a magical atmosphere.",
    price: 1000,
    image: `/src/assets/images/image${paintingId}.png`
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ 
        background: 'linear-gradient(135deg, #ffd6e0 0%, #fef9c3 100%)',
      }}>
        <div className="text-3xl font-seasons">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #ffd6e0 0%, #fef9c3 100%)',
      padding: '64px 0'
    }}>
      <div style={{ paddingLeft: '300px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="w-full px-4">
            {/* Back button */}
            <button 
              onClick={() => navigate(-1)}
              className="mb-8 mr-16 cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-white/20 transition-colors"
              style={{ 
                color: '#4a1c40',
                fontSize: '24px',
                fontWeight: 'bold'
              }}
            >
              ←
            </button>

            {/* Painting Image */}
            <div 
              className="w-full max-w-[800px] mx-auto mb-12 cursor-pointer"
              onClick={() => navigate(`/painting/${paintingId}/zoom`)}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={paintingData.image}
                  alt={paintingData.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = '/src/assets/images/image1.png'; // Fallback image
                  }}
                />
              </div>
            </div>

            {/* Painting Details */}
            <div className="max-w-[800px] mx-auto space-y-8">
              <div className="relative flex items-center gap-2">
                <h1 className="text-5xl" style={{
                  fontFamily: "'Calligraffitti', cursive",
                  background: 'linear-gradient(45deg, #4a1c40, #862d59)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  display: 'inline-block'
                }}>
                  {paintingData.title}
                </h1>
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  style={{
                    width: '28px',
                    height: '28px',
                    marginTop: '8px',
                    marginLeft: '4px',
                    marginRight: '32px'
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="h-7 w-7"
                    style={{
                      fill: isLiked ? "#ff4d94" : "none",
                      stroke: "#ff4d94",
                      strokeWidth: 1.5
                    }}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              
              <p className="text-xl leading-relaxed">
                {paintingData.description}
              </p>

              <div className="text-2xl font-seasons">
                Artist: Samagya Sharma
              </div>

              <div className="text-3xl font-seasons">
                Price: Rs. {paintingData.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails; 