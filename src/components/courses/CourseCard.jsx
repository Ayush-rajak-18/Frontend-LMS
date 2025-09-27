import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { isLoggedIn, openAuthModal, setPendingCourseId, enrollCourse } = useAuth();

  const handleEnroll = () => {
    if (!isLoggedIn) {
      setPendingCourseId(course.id);
      openAuthModal("signin", course.id);
    } else {
      enrollCourse(course.id);
      navigate("/payment", { state: { courseId: course.id } });
    }
  };

  return (
    <div
      className={`relative flex flex-col h-full bg-white rounded-xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl border ${
        course.featured ? "border-yellow-400" : "border-gray-300"
      }`}
    >
      {/* Trending Badge */}
      {course.featured && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          TRENDING
        </span>
      )}

      {/* Image */}
      <div className="h-36 w-full overflow-hidden rounded-t-xl">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">{course.title}</h4>
        <p className="text-sm text-gray-600 mt-1 flex-1 line-clamp-3">{course.short}</p>

        {/* Info & Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">{course.level}</div>
            <div className="font-semibold text-gray-800">₹{course.price}</div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to={`/course/${course.id}`}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Details
            </Link>
            <button
              onClick={handleEnroll}
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              Enroll
            </button>
            {course.liveClassLink && isLoggedIn && (
              <button
                className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition"
                onClick={() => window.open(course.liveClassLink, "_blank")}
              >
                Join Live Class
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
