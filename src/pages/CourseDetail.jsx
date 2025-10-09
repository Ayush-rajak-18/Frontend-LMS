import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../data/courses";
import CourseDetailTabs from "../components/courses/CourseDetailTabs";
import VideoPDFPlayer from "../components/courses/VideoPDFPlayer";
import { useAuth } from "../context/AuthContext";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const navigate = useNavigate();
  const { isLoggedIn, openAuthModal, setPendingCourseId } = useAuth();

  if (!course) return <div className="p-8">Course not found</div>;

  const discount = course.discount || 0;
  const discountedPrice = discount
    ? Math.round(course.price - (course.price * discount) / 100)
    : course.price;

  const handleEnroll = () => {
    if (!isLoggedIn) {
      setPendingCourseId(course.id);
      openAuthModal("signin", course.id);
    } else {
      navigate("/payment", { state: { courseId: course.id } });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col py-16">
      <div className="container px-6 flex-1 flex flex-col md:flex-row gap-8">
        {/* Left/Main Section */}
        <div className="md:flex-1 flex flex-col space-y-6 relative">
          {course.featured && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
              TRENDING
            </span>
          )}

          <img
            src={course.img}
            alt={course.title}
            className="rounded-md w-full object-cover shadow-md"
          />

          <h2 className="text-3xl font-bold text-gray-800">{course.title}</h2>
          <p className="text-gray-600">{course.short}</p>

          <CourseDetailTabs
            course={course}
            syllabus={course.syllabus}
            projects={course.projects}
            reviews={course.reviews}
          />

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <VideoPDFPlayer
              videos={course.videos}
              pdfs={course.pdfs}
              className="flex-1"
            />
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="md:w-96 bg-gradient-to-b from-blue-200 to-white p-6 rounded-lg shadow-lg space-y-4 border border-gray-200 flex-shrink-0">
          {/* Price Section */}
          <div className="flex flex-col gap-1">
            {discount > 0 ? (
              <>
                <span className="line-through text-gray-400 text-lg">₹{course.price}</span>
                <span className="text-green-600 font-bold text-xl">₹{discountedPrice}</span>
                <span className="text-red-500 text-xs font-semibold">({discount}% OFF)</span>
              </>
            ) : (
              <span className="font-bold text-blue-900 text-xl">₹{course.price}</span>
            )}
          </div>

          <div className="text-sm text-gray-700">{course.duration} • {course.level}</div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleEnroll}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Enroll Now
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-2 border rounded hover:bg-gray-50 transition"
            >
              Contact Support
            </button>
          </div>

          <div className="text-sm text-gray-700 mt-6">
            <div className="font-semibold">What's included</div>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Live classes</li>
              <li>Lifetime access to recordings (2 years)</li>
              <li>Projects & assignments</li>
              <li>PDF resources</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
