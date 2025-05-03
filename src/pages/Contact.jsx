import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { GOOGLE_CLIENT_ID, API_BASE_URL } from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load Google Sign-In SDK
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsGoogleLoaded(true);
      initializeGoogleSignIn();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleSignIn,
        auto_select: true,
        cancel_on_tap_outside: true,
      });
    }
  };

  const handleGoogleSignIn = (response) => {
    const { credential } = response;
    const payload = JSON.parse(atob(credential.split(".")[1]));
    setUserEmail(payload.email);
    setIsAuthenticated(true);
    toast.success("Successfully signed in with Google!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required details.");
      return;
    }

    if (!isAuthenticated) {
      // Show Google Sign-In prompt
      if (window.google) {
        window.google.accounts.id.prompt();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          googleEmail: userEmail,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <p className="text-gray-600 font-poppins"></p>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-poppins mb-2">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-poppins mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-poppins mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            {isAuthenticated && (
              <div className="text-sm text-gray-600">
                Signed in as: {userEmail}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-poppins font-semibold ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : isAuthenticated ? "Send Message" : "Sign in with Google to Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 