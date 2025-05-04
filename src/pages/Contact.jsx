import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { GOOGLE_CLIENT_ID, API_BASE_URL } from "../config";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-lora font-bold text-gray-800 mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            Let's connect and create something beautiful together!
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <div className="space-y-4 text-gray-600 font-poppins">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:samagyasharma05@gmail.com"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  samagyasharma05@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/samagya.sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  @samagya.sharma
                </a>
              </p>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-lora font-bold text-gray-800 mb-4">
              Commission Inquiries
            </h2>
            <p className="text-gray-600 font-poppins leading-relaxed">
              Interested in a custom piece? Feel free to reach out through email or Instagram. I'm always excited to discuss new projects and bring your artistic vision to life.
            </p>
          </section>

          <div className="text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-poppins"
            >
              Back to Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 