import React from "react";
import courses from "../../data/courses";
import CourseCard from "../courses/CourseCard";

export default function FeaturedCourses() {
  const featured = courses.filter((c) => c.featured);
  return (
   <section
  id="courses"
  className="py-16 bg-gradient-to-r from-gray-100 to-gray-100"
>
  <div className="container mx-auto px-6">
    
      <h2 className="text-3xl text-center font-bold">Featured Courses</h2>
      <p className="mt-2  text-center text-gray-600">
        Industry-focused courses with real projects.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {featured.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
   
    </div>
  </div>
</section>

  );
}