import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import courses from "../data/courses";
import VideoPage from "../components/courses/VideoPage";

export default function Profile() {
  const { user, enrolled, updateUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const [openCourseId, setOpenCourseId] = useState(null);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateUser(profileData);
    setIsEditing(false);
  };

  // Mock upcoming live classes
  const upcomingLiveClasses = enrolled
    .map((id) => {
      const c = courses.find((course) => course.id === id);
      if (!c || !c.liveClassLink) return null;
      return { id: c.id, title: c.title, link: c.liveClassLink, date: "25 Sep 2025", time: "6:00 PM" };
    })
    .filter(Boolean);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 space-y-8">

        {/* Profile Header */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {!isEditing ? (
            <>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-blue-900">Hi, {user?.name || "Student"}</h2>
                <p className="text-gray-600">Username: {user?.username}</p>
                <p className="text-gray-600">Email: {user?.email}</p>
                <p className="text-gray-600">Phone: {user?.phone}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <div className="w-full max-w-md space-y-3">
              {["name", "username", "email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block mb-1 font-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={profileData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-gray-500 text-sm">Enrolled Courses</div>
            <div className="text-2xl font-bold text-blue-800">{enrolled.length}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-gray-500 text-sm">Total Progress</div>
            <div className="text-2xl font-bold text-blue-800">
              {enrolled.length > 0 ? `${Math.round(
                enrolled.reduce((sum, id) => sum + (user?.progress?.[id] || 0), 0) / enrolled.length
              )}%` : "0%"}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-gray-500 text-sm">Certificates Earned</div>
            <div className="text-2xl font-bold text-blue-800">{
              user?.certificates?.length || 0
            }</div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Your Enrolled Courses</h3>
          {enrolled.length === 0 ? (
            <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolled.map((id) => {
                const course = courses.find((c) => c.id === id);
                if (!course) return null;
                const progressPercent = user?.progress?.[id] || 0;
                return (
                  <div key={id} className="bg-white shadow rounded-lg p-4 flex flex-col">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded"
                    />
                    <h4 className="mt-2 font-semibold">{course.title}</h4>
                    <p className="text-gray-600 text-sm">{course.short}</p>

                    {/* Progress */}
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Progress: {progressPercent}%</p>

                    {/* Watch Full */}
                    <button
                      onClick={() => setOpenCourseId(course.id)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Watch Full
                    </button>

                    {/* Join Live Class */}
                    {course.liveClassLink && (
                      <button
                        onClick={() => window.open(course.liveClassLink, "_blank")}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Join Live Class
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Upcoming Live Classes */}
        {upcomingLiveClasses.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Upcoming Live Classes</h3>
            <ul className="space-y-2">
              {upcomingLiveClasses.map((c) => (
                <li key={c.id} className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-gray-500">{c.date} • {c.time}</div>
                  </div>
                  <button
                    onClick={() => window.open(c.link, "_blank")}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                  >
                    Join Now
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certificates / Badges */}
        {user?.certificates?.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Your Certificates</h3>
            <div className="flex flex-wrap gap-4">
              {user.certificates.map((c, idx) => (
                <div key={idx} className="bg-gray-100 p-3 rounded-lg text-center w-40">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-500">{c.date}</div>
                  <button
                    onClick={() => window.open(c.pdfLink, "_blank")}
                    className="mt-2 px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* VideoPage Modal */}
      {openCourseId && (
        <VideoPage
          courseId={openCourseId}
          goBack={() => setOpenCourseId(null)}
        />
      )}
    </div>
  );
}
