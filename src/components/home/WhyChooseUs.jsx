import React, { useRef, useEffect } from "react";
import { 
  FaChalkboardTeacher, FaProjectDiagram, FaHandsHelping, 
  FaGraduationCap, FaLightbulb, FaUsers, FaRocket, FaRupeeSign 
} from "react-icons/fa";

import ExpertImg from "../pictures/expert.jpg";
import ProjectImg from "../pictures/project.jpg";
import SupportImg from "../pictures/support.jpg";
import GraduationImg from "../pictures/Graduation.png";
import LightbulbImg from "../pictures/lightbulb.png";
import UsersImg from "../pictures/User.png";
import RocketImg from "../pictures/Rocket.jpg";
import FeeImg from "../pictures/Fee.png";

export default function WhyChooseUs() {
  const scrollRef = useRef(null);

  const items = [
    { icon: FaChalkboardTeacher, title: "Expert Instructors", desc: "Learn from industry professionals.", bgImg: ExpertImg, gradient: "linear-gradient(45deg, #ff6b6b, #f06595)" },
    { icon: FaProjectDiagram, title: "Practical Projects", desc: "Work on real-world projects.", bgImg: ProjectImg, gradient: "linear-gradient(45deg, #6bc1ff, #00d4ff)" },
    { icon: FaHandsHelping, title: "24/7 Support", desc: "Get help anytime from mentors.", bgImg: SupportImg, gradient: "linear-gradient(45deg, #ffda6b, #ffc107)" },
    { icon: FaGraduationCap, title: "Career Guidance", desc: "Boost your career.", bgImg: GraduationImg, gradient: "linear-gradient(45deg, #6bffb3, #00c853)" },
    { icon: FaLightbulb, title: "Innovative Learning", desc: "Enhance creativity.", bgImg: LightbulbImg, gradient: "linear-gradient(45deg, #d46bff, #7e57c2)" },
    { icon: FaUsers, title: "Community Support", desc: "Connect globally.", bgImg: UsersImg, gradient: "linear-gradient(45deg, #ff8c42, #ff5722)" },
    { icon: FaRocket, title: "Fast Learning", desc: "Accelerate knowledge.", bgImg: RocketImg, gradient: "linear-gradient(45deg, #42a5f5, #1e88e5)" },
    { icon: FaRupeeSign, title: "Affordable Fees", desc: "Flexible pricing.", bgImg: FeeImg, gradient: "linear-gradient(45deg, #ff7043, #ff3d00)" },
  ];

   useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const card = container.querySelector("div > div"); 
      if (card) {
        const cardWidth = card.offsetWidth + 16; 
        container.scrollBy({ left: cardWidth, behavior: "smooth" });

        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - cardWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-200 via-blue-100 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12  tracking-widest text-blue-900 uppercase ">Why Choose Us</h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 cursor-grab active:cursor-grabbing scroll-smooth rounded-3xl scrollbar-hide"
        >
          {items.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-6 rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-1"
                style={{
                  minHeight: "250px",
                  backgroundImage: `url(${item.bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full bg-white/50 rounded-2xl animate-fadeIn">
                  <div
                    className="w-16 h-16 mb-4 flex items-center justify-center rounded-full shadow-lg text-white text-2xl"
                    style={{ background: item.gradient }}
                  >
                    <IconComponent />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.9);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
}
