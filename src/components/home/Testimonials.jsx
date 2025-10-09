import React, { useRef, useEffect } from "react";
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const step = 1; // speed
    const interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0; // loop back
      } else {
        slider.scrollLeft += step;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    };

    const stopDrag = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const moveDrag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.2; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("mouseleave", stopDrag);
    slider.addEventListener("mouseup", stopDrag);
    slider.addEventListener("mousemove", moveDrag);

    slider.addEventListener("touchstart", startDrag);
    slider.addEventListener("touchend", stopDrag);
    slider.addEventListener("touchmove", moveDrag);

    return () => {
      slider.removeEventListener("mousedown", startDrag);
      slider.removeEventListener("mouseleave", stopDrag);
      slider.removeEventListener("mouseup", stopDrag);
      slider.removeEventListener("mousemove", moveDrag);

      slider.removeEventListener("touchstart", startDrag);
      slider.removeEventListener("touchend", stopDrag);
      slider.removeEventListener("touchmove", moveDrag);
    };
  }, []);

  return (
    <section className="py-14 bg-gray-200 overflow-hidden">
      <div className="container px-6">
        <h3 className="text-2xl font-bold tracking-widest text-blue-900 text-center uppercase">
          What students say
        </h3>
        <div
          ref={scrollRef}
          className="mt-8 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide cursor-grab"
        >
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 p-6 border rounded-lg bg-white shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="font-semibold">{t.name}</div>
              </div>

              <div className="text-xs text-gray-500">{t.role}</div>
              <p className="mt-4 text-gray-600">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
