import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import courses from "../data/courses";
import { useAuth } from "../context/AuthContext";

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { pendingCourseId, enrollCourse, isLoggedIn } = useAuth();
  const courseId = state?.courseId || pendingCourseId;
  const course = courses.find((c) => c.id === courseId);
  const [processing, setProcessing] = useState(false);
  const [upiId, setUpiId] = useState("");

  useEffect(() => {
    if (!course) {
      // no course selected
    }
  }, [course]);

  if (!course) {
    return <div className="p-8 text-center text-gray-600">No course selected for payment.</div>;
  }

  if (!isLoggedIn) {
    return <div className="p-8 text-center text-gray-600">Please login to proceed to payment.</div>;
  }

  const handlePay = () => {
    if (!upiId) {
      alert("Please enter your UPI ID.");
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      enrollCourse(course.id);
      setProcessing(false);
      alert(`Payment successful via UPI (${upiId})! Course enrolled.`);
      navigate("/profile");
    }, 1200);
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="container px-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Checkout</h2>

          <div className="mt-6 border border-gray-200 p-6 rounded-lg shadow-sm bg-blue-50">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-lg text-blue-800">{course.title}</div>
                <div className="text-sm text-gray-600 mt-1">{course.short}</div>
              </div>
              <div className="font-bold text-blue-900 text-lg">₹{course.price}</div>
            </div>
          </div>

          {/* UPI Payment Section */}
          <div className="mt-8">
            <h3 className="font-semibold text-blue-900 text-lg mb-3">Pay via UPI</h3>
            <input
              type="text"
              placeholder="Enter UPI ID (example@okicici)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Card Payment Section */}
          <div className="mt-6">
            <h3 className="font-semibold text-blue-900 text-lg mb-3">Card Payment (Optional)</h3>
            <div className="space-y-4">
              <input
                placeholder="Card number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-4">
                <input
                  placeholder="MM/YY"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  placeholder="CVC"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button
              onClick={handlePay}
              disabled={processing}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-blue-600 transition"
            >
              {processing ? "Processing..." : `Pay ₹${course.price}`}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 px-6 py-3 border border-blue-500 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
