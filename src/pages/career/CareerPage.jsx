import React, { useState } from "react";
import { careerData } from "../../data/careerData";
import CareerCard from "./CareerCard";
import Modal from "../../components/ui/Modal";
import ApplyForm from "./ApplyModal";
import careerHero from "../../components/pictures/Graduation.png";


export default function CareerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleOpenModal = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRole("");
  };

  return (
    <section className="font-[Poppins] min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <img src={careerHero} alt="Career Opportunities" className="absolute inset-0 w-full h-full object-cover"/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero content */}
        <div className="relative z-10 text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            🚀 Build Your Future with 
            <span className="text-blue-300"> The Tech DevSec</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 animate-fadeInUp delay-200">
            Join a passionate team transforming online learning. We’re looking
            for innovators, creators, and learners like you.
          </p>
          
        </div>
      </div>

      {/* Job Listings Section */}
      <div
        id="jobs"
        className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {careerData.map((job, i) => (
          <div
            key={job.id}
            className="group bg-white/80 hover:bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200 p-8 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <CareerCard job={job} />
            <button
              onClick={() => handleOpenModal(job.title)}
              className="mt-6 bg-blue-700 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now →
            </button>
          </div>
        ))}
      </div>

      {/* Apply Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ApplyForm role={selectedRole} onClose={handleCloseModal} />
      </Modal>

      {/* Footer Text */}
      <div className="text-center py-12 text-gray-600">
        <p className="text-sm">
          🌱 Grow. Learn. Succeed — with{" "}
          <span className="font-semibold text-blue-700">The Tech DevSec.</span>
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
}
