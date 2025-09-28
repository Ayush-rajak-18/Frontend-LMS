import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "../pictures/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container px-6 py-12 grid md:grid-cols-3 gap-8">
      
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className=" h-18 object-contain" />
            <h3 className="text-white text-xl font-bold"></h3>
          </div>
          <p className="mt-3 text-sm">
            Practical courses to build real skills. Live classes, projects & placement guidance.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-sky-400 hover:text-sky-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-pink-500 hover:text-pink-400"><FaInstagram size={24} /></a>
            <a href="#" className="text-blue-700 hover:text-blue-600"><FaLinkedin size={24} /></a>
            <a href="#" className="text-red-600 hover:text-red-500"><FaYoutube size={24} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/feedback" className="hover:text-white">Feedback</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Subscribe</h4>
          <p className="text-sm mt-2">Get updates about new batches & offers.</p>
          <form className="mt-3 flex">
            <input
              className="p-2 rounded-l-md bg-white/90 w-full text-black focus:outline-none"
              placeholder="Email address"
            />
            <button className="px-3 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition">Join</button>
          </form>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} TheTech Devsec • All rights reserved
      </div>
    </footer>
  );
} 