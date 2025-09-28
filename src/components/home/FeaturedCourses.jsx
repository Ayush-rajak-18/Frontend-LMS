import React, { useRef, useEffect } from "react";
import courses from "../../data/courses";
import CourseCard from "../courses/CourseCard";

export default function FeaturedCourses() {
  const featured = courses.filter((c) => c.featured);
  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; 
      } else {
        scrollAmount += slider.clientWidth / 3; 
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000); 

    return () => clearInterval(slideInterval);
  }, []);

  if (featured.length === 0) return null;

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center font-bold tracking-widest text-blue-900  uppercase ">
          Latest From Courses
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Industry-focused courses with real projects.
        </p>

          <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto mt-10 snap-x snap-mandatory scrollbar-hide"
        >
          {featured.map((c) => (
            <div
              key={c.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 snap-start"
            >
              <CourseCard course={c} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 mb-6">
          <a
            href="/Courses"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md 
                       hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Explore All Courses →
          </a>
        </div>
      </div>
    </section>
  );
}
