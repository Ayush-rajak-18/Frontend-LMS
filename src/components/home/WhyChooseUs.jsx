import React from "react";
import { FaChalkboardTeacher, FaProjectDiagram, FaHandsHelping } from "react-icons/fa";
import ExpertImg from "../pictures/expert.jpg";
import ProjectImg from "../pictures/project.jpg";
import SupportImg from "../pictures/support.jpg";

export default function WhyChooseUs() {
  const items = [
    { icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />, title: "Expert Instructors", desc: "Learn from industry professionals with years of experience.", bgImg: ExpertImg, direction: "left" },
    { icon: <FaProjectDiagram className="text-4xl text-green-600" />, title: "Practical Projects", desc: "Work on real-world projects to build your portfolio.", bgImg: ProjectImg, direction: "bottom" },
    { icon: <FaHandsHelping className="text-4xl text-purple-600" />, title: "24/7 Support", desc: "Get help anytime from mentors and community.", bgImg: SupportImg, direction: "right" },
  ];

  const getAnimationClass = (dir) => {
    switch(dir) {
      case "left": return "animate-slide-left";
      case "right": return "animate-slide-right";
      default: return "animate-slide-bottom";
    }
  };

  return (
    <section className="py-16" style={{ background: "linear-gradient(to bottom right, #d6d5efff, #eceafeff)" }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative p-4 rounded-xl overflow-hidden bg-white shadow-lg
                         hover:shadow-xl hover:-translate-y-2 transform transition duration-500
                         ${getAnimationClass(item.direction)}`}
              style={{
                backgroundImage: `url(${item.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                animationDelay: `${i * 200}ms`
              }}
            >
              <div className="relative z-10 bg-white/70 p-4 rounded-xl">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind + small keyframes for slide-in */}
      <style>
        {`
          .animate-slide-left { animation: slideLeft 0.7s ease-out forwards; }
          .animate-slide-right { animation: slideRight 0.7s ease-out forwards; }
          .animate-slide-bottom { animation: slideBottom 0.7s ease-out forwards; }

          @keyframes slideLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideBottom {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
