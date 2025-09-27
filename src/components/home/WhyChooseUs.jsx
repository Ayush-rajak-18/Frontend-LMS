import React from "react";
import { 
  FaChalkboardTeacher, 
  FaProjectDiagram, 
  FaHandsHelping, 
  FaGraduationCap, 
  FaLightbulb, 
  FaUsers, 
  FaRocket, 
  FaRupeeSign 
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
  const items = [
    { icon: FaChalkboardTeacher, title: "Expert Instructors", desc: "Learn from industry professionals.", bgImg: ExpertImg, direction: "left", gradient: "linear-gradient(45deg, #ff6b6b, #f06595)" },
    { icon: FaProjectDiagram, title: "Practical Projects", desc: "Work on real-world projects.", bgImg: ProjectImg, direction: "bottom", gradient: "linear-gradient(45deg, #6bc1ff, #00d4ff)" },
    { icon: FaHandsHelping, title: "24/7 Support", desc: "Get help anytime from mentors.", bgImg: SupportImg, direction: "right", gradient: "linear-gradient(45deg, #ffda6b, #ffc107)" },
    { icon: FaGraduationCap, title: "Career Guidance", desc: "Boost your career.", bgImg: GraduationImg, direction: "left", gradient: "linear-gradient(45deg, #6bffb3, #00c853)" },
    { icon: FaLightbulb, title: "Innovative Learning", desc: "Enhance creativity.", bgImg: LightbulbImg, direction: "bottom", gradient: "linear-gradient(45deg, #d46bff, #7e57c2)" },
    { icon: FaUsers, title: "Community Support", desc: "Connect globally.", bgImg: UsersImg, direction: "right", gradient: "linear-gradient(45deg, #ff8c42, #ff5722)" },
    { icon: FaRocket, title: "Fast Learning", desc: "Accelerate knowledge.", bgImg: RocketImg, direction: "left", gradient: "linear-gradient(45deg, #42a5f5, #1e88e5)" },
    { icon: FaRupeeSign, title: "Affordable Fees", desc: "Flexible pricing.", bgImg: FeeImg, direction: "bottom", gradient: "linear-gradient(45deg, #ff7043, #ff3d00)" },
  ];

  const getAnimationClass = (dir) => {
    switch(dir){
      case "left": return "animate-slide-left";
      case "right": return "animate-slide-right";
      default: return "animate-slide-bottom";
    }
  };

  return (
    <section className="py-12" style={{ background: "linear-gradient(to bottom right, #a2ffcdff, #89ecfeff)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className={`relative p-3 rounded-xl overflow-hidden bg-white shadow-lg
                           hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-all duration-700
                           ${getAnimationClass(item.direction)}`}
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  animationDelay: `${i*150}ms`,
                  minHeight: "160px",
                  height: "auto"
                }}
              >
                <div className="relative z-10 p-3 flex flex-col items-center justify-start h-full bg-white/70 rounded-xl">
                  
                  {/* Colorful circular icon */}
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full shadow-lg text-white text-xl hover:scale-110 transition-transform duration-500"
                       style={{ background: item.gradient }}>
                    <IconComponent />
                  </div>

                  <h3 className="text-base sm:text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-[10px]">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>
        {`
          .animate-slide-left { animation: slideLeft 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; }
          .animate-slide-right { animation: slideRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; }
          .animate-slide-bottom { animation: slideBottom 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; }

          @keyframes slideLeft {
            0% { opacity:0; transform:translateX(-40px);}
            100%{ opacity:1; transform:translateX(0);}
          }
          @keyframes slideRight {
            0% { opacity:0; transform:translateX(40px);}
            100%{ opacity:1; transform:translateX(0);}
          }
          @keyframes slideBottom {
            0% { opacity:0; transform:translateY(40px);}
            100%{ opacity:1; transform:translateY(0);}
          }
        `}
      </style>
    </section>
  )
}
