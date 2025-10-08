import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBg from "../pictures/techhuman.jpg"; // hero background
import CoursePreview from "../pictures/coding.gif"; // course preview image

export default function Hero() {
  return (
    <section
      className="py-20 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="container px-6 flex flex-col md:flex-row items-center gap-10 bg-black/20 p-6 rounded-xl">
        {/* Left Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Hack → Build → Secure → Deploy with{" "}
            <span className="text-red-600">practical projects</span>
          </h1>
          <p className="mt-4 text-gray-100 max-w-xl">
            Development, Cybersecurity, Cloud, Networking, Data Science & DevOps—hands-on projects, live classes, and career-ready training.
          </p>
        </motion.div>

        {/* Right Course Preview */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="bg-white/35 rounded-xl border-1 border-red-900 shadow-lg p-4 w-full max-w-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.img
              src={CoursePreview}
              alt="Course Preview"
              className="w-full h-64 md:h-40 rounded-md border-1 border-red-900 object-cover"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="mt-4">
              <motion.h3
                className="text-black font-semibold"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Featured: Zero to Hero
              </motion.h3>
              <motion.p
                className="text-sm text-gray-900 mt-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
               All-in-One Tech Learning Platform.
              </motion.p>
              <motion.div
                className="mt-4 flex gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/courses"
                  className="px-4 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition"
                >
                  View Courses
                </Link>
                <a
                  href="/Contact"
                  className="px-4 py-2 rounded-md bg-blue-700 font-semibold hover:bg-blue-900 transition"
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 