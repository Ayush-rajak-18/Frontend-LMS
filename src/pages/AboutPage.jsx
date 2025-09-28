// src/pages/AboutPage.jsx
import React from "react";
import TeamSection from "./TeamSection"; 
import AboutBg from "../assets/aboutbg.jpg"; 

export default function AboutPage() {
  return (
    <div>

           <div
        className="relative h-72 flex items-center justify-center"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative text-5xl font-bold text-white tracking-wider z-10">
          ABOUT US
        </h1>
      </div>

          <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          ABOUT <span className="text-blue-600">THE TECH DEVSEC</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          At THE TECH DEVSEC, we turn bold ideas into powerful digital realities. 
          Our mission: build smart, secure & flexible technology. Startups get strong digital foundations. 
          Enterprises get next-gen solutions for real-world success. 
          We value people & hands-on learning through internship programs. 
          At THE TECH DEVSEC, we don’t just build software—we build futures.
        </p>
      </div>

     
      <TeamSection />
    </div>
  );
}
