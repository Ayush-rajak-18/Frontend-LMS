import React, { useState } from "react";
import courses from "../data/courses";
import CourseCard from "../components/courses/CourseCard";

export default function Courses() {
  const categories = ["All", "Web Development", "Networking", "Cloud", "DevOps", "Data Science", "Cyber Security"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All" ? courses : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-blue-100 to-white">
      <div className="container px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">Explore Our Courses</h2>
        <p className="text-center text-blue-800 mt-2 text-lg">
          Filter courses by category to find the right one for you.
        </p>

        {/* Category Tabs */}
        <div className="relative mt-10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 w-max mx-auto relative">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 text-lg font-medium whitespace-nowrap transition-colors duration-300
                  ${activeCategory === cat ? "text-blue-700" : "text-gray-600 hover:text-blue-500"}
                `}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {filteredCourses.map((course) => (
              <div key={course.id} className="transition-transform duration-300 hover:scale-105">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">No courses available in this category.</p>
        )}
      </div>
    </section>
  );
}
