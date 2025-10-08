import React, { useState } from "react";
import { User, BookOpen, MessageSquare } from "lucide-react";

export default function Feedback() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="container px-8 max-w-xl mx-auto">
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50
                        transition-transform duration-500 transform translate-y-4 animate-slideIn">
          <h2 className="text-3xl font-extrabold text-blue-950">
            Leave <span className="text-blue-400">Feedback</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Share your thoughts and help us improve our courses.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                placeholder="Your Name"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           outline-none transition duration-300 ease-in-out hover:border-blue-300"
              />
            </div>

            {/* Course */}
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                placeholder="Course (optional)"
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           outline-none transition duration-300 ease-in-out hover:border-blue-300"
              />
            </div>

            {/* Rating */}
            <div className="relative">
              <label className="block text-gray-700 mb-1">Rate the Course:</label>
              <select
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           outline-none transition duration-300 ease-in-out hover:border-blue-300"
              >
                <option value="">Select Rating</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

            {/* Feedback Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                placeholder="Your Feedback"
                required
                rows="4"
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           outline-none transition duration-300 ease-in-out hover:border-blue-300"
              />
            </div>

            {/* Optional Attachment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload file (optional)</label>
              <input type="file" className="mt-1 block w-full text-sm text-gray-500" />
            </div>

            {/* Submit Button */}
            <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg
                               shadow-md transition transform hover:scale-105">
              Submit Feedback
            </button>

            {/* Success Message */}
            {sent && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 border border-green-200 text-sm
                              transition-opacity duration-500 opacity-100 animate-fadeIn">
                ✅ Thanks! Your feedback has been recorded.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
