import React from "react";
import { FaHeart, FaShare } from "react-icons/fa";

const PaintingCard = ({ painting }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-square relative">
        <img
          src={painting?.imageUrl || "https://source.unsplash.com/random/400x400/?minimal,art"}
          alt={painting?.title || "Artwork"}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#ff1966] transition-colors">
              <FaHeart size={20} />
            </button>
            <button className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#ff1966] transition-colors">
              <FaShare size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {painting?.title || "Untitled Artwork"}
        </h3>
        <p className="text-sm text-gray-500">
          {painting?.artist || "Unknown Artist"}
        </p>
        {painting?.price && (
          <p className="mt-2 text-sm font-medium text-[#ff1966]">
            ${painting.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaintingCard; 