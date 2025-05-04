import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            Hi! I'm Samagya Sharma, an artist and a software engineer.
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-4">
              My Artistic Journey
            </h2>
            <p className="text-gray-600 font-poppins leading-relaxed">
              I work with watercolors, acrylics, and mixed media, allowing each piece to unfold in its own voice. Whether it's a soft landscape, a bold abstract, or a moment frozen in time — my art is inspired by nature, mood, memory, and human emotion.
            </p>
            <p className="text-gray-600 font-poppins leading-relaxed mt-4">
              I've been painting since childhood, and pursued Fine Arts through my school years and later pursued academic studies in engineering. Each brushstroke reflects both technical discipline and intuitive flow.
            </p>
          </section>

          <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-4">
              Exhibitions
            </h2>
            <ul className="space-y-2 text-gray-600 font-poppins">
              <li>• Participated in school-level annual art exhibitions in 11th and 12th grade</li>
              <li>• Presenting my work through this platform to share my growth and connect with fellow art lovers</li>
            </ul>
          </section>

          <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-4">
              Commissions
            </h2>
            <p className="text-gray-600 font-poppins leading-relaxed">
              I'm open to commissioned work! Whether you're looking for a custom piece or want to discuss a specific project, feel free to reach out. Let's create something beautiful together.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-poppins"
              >
                Contact Me
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 