import React, { useRef, useEffect } from "react";
import { FaBullhorn, FaGift, FaTag, FaPlane, FaMoneyBillWave } from "react-icons/fa";
import offers from "../../data/offers";

export default function Offers() {
  const scrollRef = useRef(null);

  // icons cycle
  const icons = [FaGift, FaTag, FaPlane, FaMoneyBillWave, FaBullhorn];

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const slideInterval = setInterval(() => {
      const card = slider.querySelector("div"); 
      if (card) {
        const cardWidth = card.offsetWidth + 24; 
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });

        // Loop back to start
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - cardWidth
        ) {
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: "smooth" });
          }, 1000);
        }
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section
      id="offers"
      className="py-16 bg-gradient-to-r from-indigo-100 to-blue-100"
    >
      <div className="container px-6">
        <h3 className="text-3xl font-bold text-center flex items-center justify-center gap-2 text-indigo-900 uppercase">
          <FaBullhorn className="text-indigo-700 text-4xl" />
          Current Offers
        </h3>

        <div className="mt-10 relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide rounded-2xl scroll-smooth"
          >
            {offers.concat(offers).map((o, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[90%] sm:w-[48%] md:w-[32%] p-4 rounded-2xl 
                             bg-gradient-to-br from-white to-indigo-50 shadow-md 
                             hover:shadow-2xl transition-all border border-indigo-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-900 to-purple-600 text-white shadow">
                      <Icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-indigo-900 text-lg">
                        {o.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{o.desc}</p>
                    </div>
                  </div>

                  <div className="mt-4 text-sm font-semibold inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-2 rounded-lg shadow-md">
                    {o.code}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
