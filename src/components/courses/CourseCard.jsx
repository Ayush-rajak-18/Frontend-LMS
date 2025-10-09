import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { isLoggedIn, openAuthModal, setPendingCourseId, enrollCourse } = useAuth();

  // Discounted Price Calculation
  const discount = course.discount || 0;
  const discountedPrice = discount
    ? Math.round(course.price - (course.price * discount) / 100)
    : course.price;

  const handleEnroll = () => {
    if (!isLoggedIn) {
      setPendingCourseId(course.id);
      openAuthModal("signin", course.id);
    } else {
      enrollCourse(course.id, discountedPrice);
      navigate("/payment", { state: { courseId: course.id, price: discountedPrice } });
    }
  };

  return (
    <div
      className={`relative flex flex-col bg-white rounded-xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl border ${
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
      <div className="w-full flex items-center justify-center bg-gray-50 rounded-t-xl">
        <img src={course.img} alt={course.title} className="w-full h-auto object-contain" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">{course.title}</h4>
        <p className="text-sm text-gray-600 mt-1 flex-1 line-clamp-3">{course.short}</p>

        {/* Info & Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">{course.level}</div>

            {/* Price */}
            {discount > 0 ? (
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-400 text-sm">₹{course.price}</span>
                  <span className="text-green-600 font-bold">₹{discountedPrice}</span>
                </div>
                <span className="text-red-500 text-xs font-semibold">({discount}% OFF)</span>
              </div>
            ) : (
              <div className="font-semibold text-gray-800">₹{course.price}</div>
            )}
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
              className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-900 transition"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
