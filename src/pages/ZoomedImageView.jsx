import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ZoomedImageView = () => {
  const navigate = useNavigate();
  const { paintingId } = useParams();
  const [isZoomed, setIsZoomed] = useState(false);

  // This will be dynamic data later
  const paintingData = {
    title: "Whispers of the Forest",
    image: `/src/assets/images/image${paintingId}.png`
  };

  const handleDoubleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ 
        background: 'linear-gradient(135deg, #ffd6e0 0%, #fef9c3 100%)',
        padding: '64px 0'
      }}
    >
      <div className="relative w-full" style={{ paddingLeft: '300px' }}>
        {/* Back button and title */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center p-2 rounded-full hover:bg-white/20 transition-colors"
            style={{ 
              color: '#4a1c40',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            ←
          </button>
          <h1 
            className="text-4xl font-seasons"
            style={{
              background: 'linear-gradient(45deg, #4a1c40, #862d59)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              fontWeight: '400',
              letterSpacing: '0.05em'
            }}
          >
            {paintingData.title}
          </h1>
        </div>

        {/* Image container */}
        <div 
          className="flex justify-center cursor-pointer"
          onDoubleClick={handleDoubleClick}
        >
          <div 
            className="relative"
            style={{
              transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <img
              src={paintingData.image}
              alt={paintingData.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Zoom instructions */}
        <div className="absolute top-4 right-4 bg-white/80 rounded-full px-4 py-2 text-sm">
          {isZoomed ? 'Double click to zoom out' : 'Double click to zoom in'}
        </div>
      </div>
    </div>
  );
};

export default ZoomedImageView; 