import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #ffd6e0 0%, #fef9c3 100%)',
        minHeight: '100vh',
        padding: '64px 0'
      }}>
        <div style={{ paddingLeft: '300px' }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                <div className="relative" style={{ height: '200px' }}>
                  <h1 className="absolute top-0 left-0" style={{
                    background: 'linear-gradient(45deg, #4a1c40, #862d59)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    fontWeight: '400',
                    letterSpacing: '0.05em',
                  }}>
                    <span style={{ 
                      fontFamily: "'Grey Qo', cursive",
                      fontSize: '100px',
                      lineHeight: '0.8',
                      display: 'block'
                    }}>Samagya</span>
                    <span className="font-seasons" style={{
                      fontSize: '75px',
                      lineHeight: '0.8',
                      display: 'block'
                    }}>Sharma</span>
                  </h1>
                </div>
                <div className="mt-48 space-y-4">
                  <h2 className="text-2xl font-light">Welcome to my gallery</h2>
                  <p className="uppercase tracking-widest text-sm">STUDIO / TRADITIONAL ART</p>
                  <p className="text-xl mt-8">Buy any painting you like !</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/src/assets/images/hero.jpg"
                    alt="Artist Hand"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Art Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #fef9c3 0%, #fee2e2 100%)',
        padding: '64px 0'
      }}>
        <div style={{ paddingLeft: '300px' }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl font-seasons mb-12 px-4">My Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
              <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/1">
                  <img
                    src="/src/assets/images/image1.png"
                    alt="Artwork 1"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/2">
                  <img
                    src="/src/assets/images/image2.png"
                    alt="Artwork 2"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #fee2e2 0%, #fce7f3 100%)',
        padding: '64px 0'
      }}>
        <div style={{ paddingLeft: '300px' }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl font-seasons mb-12 px-4">Skills & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
              <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/3">
                  <img
                    src="/src/assets/images/image3.png"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div>
                <h3 className="text-3xl font-seasons mb-6">Traditional Art</h3>
                <p className="text-lg mb-6">
                  Specializing in traditional art forms with a focus on detailed
                  portraits and landscapes.
                </p>
                <ul className="space-y-3 text-lg">
                  <li>Oil Painting</li>
                  <li>Watercolor</li>
                  <li>Charcoal Drawing</li>
                  <li>Portrait Commission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #fce7f3 0%, #dbeafe 100%)',
        padding: '64px 0'
      }}>
        <div style={{ paddingLeft: '300px' }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl font-seasons mb-12 px-4">Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
              <div className="w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/4">
                  <img
                    src="/src/assets/images/image4.png"
                    alt="Selected Work 1"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/5">
                  <img
                    src="/src/assets/images/image5.png"
                    alt="Selected Work 2"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/6">
                  <img
                    src="/src/assets/images/image6.png"
                    alt="Selected Work 3"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #dbeafe 0%, #ffd6e0 100%)',
        padding: '64px 0'
      }}>
        <div style={{ paddingLeft: '300px' }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl font-seasons mb-12 px-4">Exhibitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
              <div className="w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <Link to="/painting/7">
                  <img
                    src="/src/assets/images/image7.png"
                    alt="Exhibition"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #ffd6e0 0%, #fef9c3 100%)',
        padding: '64px 0'
      }}>
        <div style={{ paddingLeft: '300px' }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl font-seasons mb-12 px-4">Get in Touch</h2>
            <div className="max-w-2xl space-y-8 text-xl px-4">
              <div className="border-b border-black pb-6 hover:border-opacity-50 transition-all">
                <p>Address: 123 Anywhere St., Any City</p>
              </div>
              <div className="border-b border-black pb-6 hover:border-opacity-50 transition-all">
                <p>Phone: 123-456-789</p>
              </div>
              <div className="border-b border-black pb-6 hover:border-opacity-50 transition-all">
                <p>Email: samagyasharma05@gmail.com</p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="font-seasons text-4xl">Samagya Sharma</p>
            </div>
          </div>
      </div>
      </section>
    </div>
  );
};

export default Home;
