import React from "react";
import { Link } from "react-router-dom";
import HeroBg from "../pictures/tech-bg.jpg"; // hero background
import CoursePreview from "../pictures/devsecops.jpg"; // course preview image

export default function Hero() {
  return (
    <section
      className="py-20 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="container px-6 flex flex-col md:flex-row items-center gap-10 bg-black/20 p-6 rounded-xl">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Development & Security with{" "}
            <span className="text-red-600">practical projects</span>
          </h1>
          <p className="mt-4 text-gray-100 max-w-xl">
            Live classes, recordings, projects, and interview prep to land your first job.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/courses"
              className="px-5 py-3 rounded-lg font-semibold text-black bg-green-400 hover:bg-green-500 transition"
            >
              Explore Courses
            </Link>
            <a
              href="#offers"
              className="px-5 py-3 border rounded-lg bg-blue-400 text-black font-semibold"
            >
              View Offers
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white/93 rounded-xl shadow-lg p-4 w-full http://localhost:5173/courses max-w-md">
            <img
              src={CoursePreview}
              alt="Course Preview"
              className="w-full h-64 md:h-40 rounded-md object-cover"
            />
            <div className="mt-4">
              <h3 className="text-black font-semibold">Featured: Zero to Hero</h3>
              <p className="text-sm text-gray-900 mt-2">
                Hands-on course covering Development, Security and Cloud.
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  to="/courses"
                  className="px-4 py-2 rounded-md font-semibold text-white bg-green-500 hover:bg-green-600 transition"
                >
                  View Courses
                </Link>
                <a
                  href="/Contact"
                  className="px-4 py-2 border rounded-md  bg-blue-500 font-semibold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
