import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { isLoggedIn, openAuthModal, setPendingCourseId, enrollCourse } = useAuth();

  const handleEnroll = () => {
    if (!isLoggedIn) {
      // Save course for after login
      setPendingCourseId(course.id);
      openAuthModal("signin", course.id);
    } else {
      // Enroll and go to payment
      enrollCourse(course.id);
      navigate("/payment", { state: { courseId: course.id } });
    }
  };

  return (
    <div className="bg-white/60 rounded-lg shadow p-6 flex flex-col">
      <img src={course.img} alt={course.title} className="rounded-md h-44 w-full object-cover mb-4" />
      <h4 className="font-semibold text-lg">{course.title}</h4>
      <p className="text-sm text-gray-600 mt-2 flex-1">{course.short}</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">{course.level}</div>
          <div className="font-semibold">₹{course.price}</div>
        </div>
        <div className="flex flex-col gap-2">
          <Link to={`/course/${course.id}`} className="px-3 py-2 border rounded-md text-sm">Details</Link>
          <button onClick={handleEnroll} className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">Enroll</button>
          {course.liveClassLink && isLoggedIn && (
            <button
              className="px-3 py-2 bg-green-600 text-white rounded-md text-sm"
              onClick={() => window.open(course.liveClassLink, "_blank")}
            >
              Join Live Class
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
