import React from "react";
import courses from "../data/courses";
import CourseCard from "../components/courses/CourseCard";

export default function Courses() {
  // Categories list
  const categories = ["Web Development", "Networking", "Cloud", "DevOps", "Programming"];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-white">
      <div className="container px-6">
        <h2 className="text-3xl font-bold text-center">All Courses</h2>
        <p className="text-center text-gray-700 mt-2">
          Browse courses by category and explore our complete catalog.
        </p>

        {categories.map((cat) => (
          <div key={cat} className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">{cat}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {courses
                .filter((c) => c.category === cat)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
