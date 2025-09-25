import React from "react";
import courses from "../data/courses";
import CourseCard from "../components/courses/CourseCard";

export default function Courses() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-white">
      <div className="container px-6">
        <h2 className="text-3xl font-bold text-center">All Courses</h2>
        <p className="text-center text-gray-700 mt-2">
          Filter & explore our complete catalog.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
