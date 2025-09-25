import React, { useState } from "react";
import { Mail, User, Phone, BookOpen, MessageSquare } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-12 max-w-3xl mx-auto">
        <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-extrabold text-blue-950">
            Contact <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Fill out the form and we’ll connect with you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <BookOpen className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <select
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                >
                  <option value="">Interested For Course</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="devops">DevOps</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="fullstack">Full Stack Development</option>
                </select>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                placeholder="Your Message"
                required
                rows="4"
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-[1.02]">
              Send Message
            </button>

            {sent && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 border border-green-200 text-sm">
                ✅ Message sent — we'll contact you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
