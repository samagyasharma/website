import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800">Contact Me</h1>
        <p className="text-xl text-gray-600 font-poppins">
          Get in touch for inquiries about artwork, commissions, or collaborations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 font-poppins">samagyasharma05@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 font-poppins">+91 9667965550</p>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600 font-poppins">Faridabad, Haryana</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-6">Social Media</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-poppins">Instagram:</span>
                <a href="#" className="text-pink-600 hover:text-pink-700 font-poppins">@samagyasharma</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-lora font-bold text-gray-800 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-poppins mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-poppins mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-poppins mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-poppins font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 