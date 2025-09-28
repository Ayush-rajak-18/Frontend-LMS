// src/pages/AboutSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProjectImg from "../components/pictures/project.jpg"; // <-- Make sure image is here

export default function AboutSection() {
  return (
    <section
      id="home-about"
      className="py-24 bg-gradient-to-r from-purple-50 via-blue-50 to-green-50"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            WELCOME TO <span className="text-blue-600">THE TECH DEVSEC</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            At THE TECH DEVSEC, we turn bold ideas into powerful digital realities. 
            Build smart, secure & flexible technology. Startups get strong foundations, enterprises get full digital transformation.
          </p>

          <Link
            to="/about" // <-- Navigates to AboutPage
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg
                       hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            READ MORE →
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={ProjectImg}
            alt="About THE TECH DEVSEC"
            className="rounded-xl w-full h-auto object-cover max-h-96 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
