import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

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

      // Get confirmed paintings details
      const bag = JSON.parse(localStorage.getItem("bag") || "[]");
      const confirmed = JSON.parse(localStorage.getItem("confirmed") || "[]");
      const confirmedPaintings = bag.filter(p => confirmed.includes(p.title));

      // Create the paragraph with all details
      const paintingsDetails = confirmedPaintings.map(p => 
        `- ${p.title} (${p.price})`
      ).join('\n');

      const paragraph = `Name: ${name}
Phone: ${phone}
Address: ${address}

Order Details:
${paintingsDetails}

Total: ₹${total}`;

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

      // Store order details for modal
      setOrderDetails({
        name,
        phone,
        address,
        paintings: confirmedPaintings,
        total
      });

      // Clear confirmed items from bag
      const updatedBag = bag.filter(painting => !confirmed.includes(painting.title));
      localStorage.setItem("bag", JSON.stringify(updatedBag));
      localStorage.removeItem("confirmed");

      // Show success modal
      setShowSuccessModal(true);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to confirm order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pb-12">
      {/* Success Modal */}
      {showSuccessModal && orderDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-xl animate-fade-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-lora font-bold text-pink-700 mb-4">
                Thank you for your order!
              </h2>
              <p className="text-gray-600 font-poppins">
                Your order has been successfully placed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-pink-50/50 rounded-xl p-6">
                <h3 className="text-xl font-lora font-semibold text-gray-800 mb-4">
                  Order Details
                </h3>
                <div className="space-y-3 text-gray-700 font-poppins">
                  <p><span className="font-semibold">Name:</span> {orderDetails.name}</p>
                  <p><span className="font-semibold">Phone:</span> {orderDetails.phone}</p>
                  <p><span className="font-semibold">Address:</span> {orderDetails.address}</p>
                </div>
              </div>

              <div className="bg-pink-50/50 rounded-xl p-6">
                <h3 className="text-xl font-lora font-semibold text-gray-800 mb-4">
                  Selected Paintings
                </h3>
                <ul className="space-y-2 text-gray-700 font-poppins">
                  {orderDetails.paintings.map((painting, index) => (
                    <li key={index}>• {painting.title} – {painting.price}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-pink-200">
                  <p className="text-lg font-semibold text-gray-800">
                    Total: ₹{orderDetails.total}
                  </p>
                </div>
              </div>

              <div className="text-center text-gray-600 font-poppins">
                <p className="mb-4">
                  If there is any discrepancy in the order or the details filled, please feel free to contact me!
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-poppins"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Original Form Content */}
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
        You will be contacted on your given phone number and email ID on the availability of the painting and the feasibility of the delivery location. Further delivery charges may be applied.
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