import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import CommentBox from "../components/CommentBox";

const PaintingDetail = () => {
  const { name } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    const fetchPainting = async () => {
      const q = query(collection(db, "webPaintings"), where("name", "==", name));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setPainting(snapshot.docs[0].data());
      }
    };
    fetchPainting();
  }, [name]);

  if (!painting) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={painting.image}
        alt={painting.name}
        className="w-full rounded-xl object-contain mb-4 hover:scale-105 transition-transform duration-500"
      />
      <div className="font-poppins text-base text-gray-800 font-semibold text-center mb-2">{painting.name}</div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-pink-100 text-pink-800 font-poppins font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
        >
          Add to Bag
        </button>
      </div>
      <p className="text-gray-700">{painting.medium}</p>
      <p className="font-semibold text-purple-600 mt-1">₹{painting.price}</p>
      <CommentBox paintingId={painting.name} />
    </div>
  );
};

export default PaintingDetail;
