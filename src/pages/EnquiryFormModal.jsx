import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const EnquiryFormModal = () => {
  const [show, setShow] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-md rounded-3xl p-8  shadow-2xl animate-fadeInUp border border-gray-200"
       style={{
          background: "linear-gradient(to bottom left, #bddcffff, #f8dbecff)", 
        }}>
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold transition-colors"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">
           Enquiry Form
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="flex flex-col space-y-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all hover:shadow-md"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl p-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all hover:shadow-md"
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all hover:shadow-md"
            />
          </div>

                 <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded-xl p-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all hover:shadow-md resize-none"
            ></textarea>
          </div>

          <button className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 font-semibold">
            Send Enquiry
          </button>
        </form>
      </div>

         <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default EnquiryFormModal;
