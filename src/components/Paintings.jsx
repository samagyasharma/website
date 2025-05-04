import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';
import paintingsData from '../data/paintings.json';

const Paintings = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Paintings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paintingsData.paintings.map((painting) => (
            <div key={painting.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link to={`/paintings/${painting.id}`}>
                <div className="relative pb-[100%]">
                  <img
                    src={getImagePath(painting.painting_name)}
                    alt={painting.painting_name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{painting.painting_name}</h2>
                  <p className="text-gray-600 mb-2">Rs. {painting.price}</p>
                  <p className="text-gray-500">{painting.medium}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paintings; 