// src/components/TeamSection.jsx
import React, { useRef, useEffect, useState } from "react";
import teamMembers from "../data/TeamMembers";

export default function TeamSection() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= teamMembers.length) nextIndex = 0;
      setCurrentIndex(nextIndex);

      slider.scrollTo({
        left: nextIndex * slider.offsetWidth,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="team"
      className="py-16 bg-gray-50 bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-900 uppercase mb-12">
          MEET OUR TEAM
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth rounded-3xl gap-6 snap-x snap-mandatory scrollbar-hide"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 w-full snap-center p-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl">
                <div className="w-36 h-36 mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    {member.isLead && (
                    <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full font-semibold">
                      Team Lead
                    </span>
                  )}
              <p className="text-gray-600 text-sm">{member.role}</p>
                {member.experience && (
                  <p className="text-gray-500 text-sm mt-1">
                    {member.experience}+ years experience
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
