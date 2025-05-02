import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800">About the Artist</h1>
        <p className="text-xl text-gray-600 font-poppins">
          Samagya Sharma - Capturing emotions through colors and brushstrokes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed font-poppins">
            Welcome to my artistic journey. I am a passionate artist specializing in various mediums,
            including watercolor, acrylic, and oil painting. My work is inspired by the beauty of
            nature, the complexity of human emotions, and the vibrant energy of urban life.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            Each piece I create is a unique expression of my perspective and experiences. I believe
            that art has the power to connect people, evoke emotions, and tell stories that words
            cannot express.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            My artistic process involves careful observation, emotional connection, and technical
            precision. I strive to create works that not only please the eye but also touch the
            soul.
          </p>
        </div>
        <div className="relative">
          <img
            src="/artist-profile.jpg"
            alt="Samagya Sharma"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-lora font-bold text-gray-800 text-center">Artistic Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Education</h3>
            <p className="text-gray-600 font-poppins">
              Formal training in fine arts with a focus on traditional techniques and contemporary
              expression.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Exhibitions</h3>
            <p className="text-gray-600 font-poppins">
              Featured in various local and national exhibitions, showcasing diverse collections of
              work.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Commissions</h3>
            <p className="text-gray-600 font-poppins">
              Available for custom artwork and private commissions, creating unique pieces for
              collectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
