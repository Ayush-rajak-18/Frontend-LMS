import React from "react";

export default function ApplyForm({ role, onClose }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Apply for {role || "a Position"}
      </h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <input
          type="text"
          placeholder="LinkedIn / Portfolio URL"
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          placeholder="Why do you want to join us?"
          rows="3"
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>

        <div>
          <label className="block text-gray-700 mb-2">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            accept=".pdf"
            className="block w-full border border-gray-300 rounded-xl p-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold transition-all duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
