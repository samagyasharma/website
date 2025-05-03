import React, { useEffect, useState } from "react";

const OrderConfirmation = () => {
  const [total, setTotal] = useState(0);
  const [confirmedPaintings, setConfirmedPaintings] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

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

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setToastMsg("Please fill Full Name");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }
    if (!phone.trim()) {
      setToastMsg("Please fill Phone Number");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }
    if (!address.trim()) {
      setToastMsg("Please fill Delivery Address");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }
    setToastMsg("Your order has been received! Thank you!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
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
      <form className="max-w-xl mx-auto mt-10 flex flex-col gap-6 w-full" onSubmit={handleConfirmOrder}>
        <input
          type="text"
          placeholder="Enter your full name"
          className="border border-gray-300 rounded-lg px-4 py-3 font-poppins text-base focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="border border-gray-300 rounded-lg px-4 py-3 font-poppins text-base focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <textarea
          rows={4}
          placeholder="Enter your delivery address"
          className="border border-gray-300 rounded-lg px-4 py-3 font-poppins text-base focus:outline-none focus:ring-2 focus:ring-pink-200 transition resize-none"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-pink-200 text-pink-900 font-poppins font-bold text-xl px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            Confirm Order
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