import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [confirmedPaintings, setConfirmedPaintings] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Read confirmed paintings from localStorage
    const bag = JSON.parse(localStorage.getItem("bag") || "[]");
    const confirmed = JSON.parse(localStorage.getItem("confirmed") || "[]");
    // Only sum prices of confirmed paintings
    const confirmedPaintings = bag.filter(p => confirmed.includes(p.title));
    setConfirmedPaintings(confirmedPaintings);
    const sum = confirmedPaintings.reduce((acc, p) => {
      // Extract number from price string (e.g., "Rs. 3000")
      const price = parseInt((p.price || "").replace(/[^\d]/g, ""), 10) || 0;
      return acc + price;
    }, 0);
    setTotal(sum);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form values
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;

      // Create the paragraph
      const paragraph = `Name: ${name}\nPhone: ${phone}\nAddress: ${address}`;

      // Submit to Google Form
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdtzQpJHepevl6ebR0uXou9UbA4FCA092gt-HyIBXo_bTKbSg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `entry.644748385=${encodeURIComponent(paragraph)}`,
        }
      );

      // Show success message
      toast.success("Order confirmed successfully!");
      
      // Navigate to home page after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to confirm order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pb-12">
      <h1 className="text-4xl md:text-5xl font-lora font-bold text-center text-pink-700 mb-6">Order Confirmation</h1>
      <div className="text-2xl md:text-3xl font-poppins font-semibold text-gray-800 text-center bg-pink-50 rounded-xl px-8 py-4 shadow mb-8">
        Order Total: ₹{total}
      </div>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {confirmedPaintings.map((painting) => (
          <div key={painting.title} className="bg-pink-50 rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <img src={painting.image} alt={painting.title} className="w-full h-48 object-cover rounded-xl mb-4 shadow-md" />
            <div className="text-lg font-semibold font-poppins text-gray-800 mb-1 text-center">{painting.title}</div>
            <div className="text-base font-poppins text-pink-700 font-bold text-center">{painting.price}</div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 font-poppins text-base md:text-lg leading-relaxed mt-10 max-w-2xl mx-auto px-2">
        The details of your order will be given to the respective artists and you will be contacted on your given phone number and email ID on the availability of the painting and the feasibility of the delivery location. Further delivery charges may be applied.
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 flex flex-col gap-6 w-full">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-poppins mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-poppins mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 font-poppins mb-2">
            Delivery Address *
          </label>
          <textarea
            id="address"
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={address}
            onChange={e => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-poppins font-semibold ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Confirming..." : "Confirm Order"}
          </button>
        </div>
      </form>
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-100 text-pink-900 px-6 py-3 rounded-xl shadow-lg font-poppins text-lg z-50 animate-fade-in-out">
          {toastMsg}
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation; 