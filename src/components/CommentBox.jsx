import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full p-2 border rounded-lg"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </form>
      <div className="mt-4 space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox; 