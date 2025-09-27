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
  const [showCommentId, setShowCommentId] = useState(null);
  const [tempComment, setTempComment] = useState("");
  const [tempRating, setTempRating] = useState(0);

  const handleChange = (e) => setProfileData({ ...profileData, [e.target.name]: e.target.value });
  const handleSave = () => { updateUser(profileData); setIsEditing(false); };

  const handleCommentSubmit = (courseId) => {
    const updatedComments = { ...(user.comments || {}), [courseId]: tempComment };
    const updatedRatings = { ...(user.ratings || {}), [courseId]: tempRating };
    updateUser({ ...user, comments: updatedComments, ratings: updatedRatings });
    setShowCommentId(null);
  };

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
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
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
                <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold">Save</button>
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 font-semibold">Cancel</button>
              </div>
            </div>
          )}
        </div>

       {/* Stats Cards */}
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto py-4 px-1">
             <div className="flex-none md:flex-auto w-64 md:w-auto bg-white p-4 rounded-lg shadow hover:shadow-xl transition flex items-center gap-3">
              <div className="text-blue-600 text-3xl">
                📚
              </div>
              <div>
                <div className="text-gray-500 text-sm">Enrolled Courses</div>
                <div className="text-2xl font-bold text-blue-800">{enrolled.length}</div>
              </div>
            </div>
            <div className="flex-none md:flex-auto w-64 md:w-auto bg-white p-4 rounded-lg shadow hover:shadow-xl transition flex items-center gap-3">
              <div className="text-green-500 text-3xl">
                📈
              </div>
              <div>
                <div className="text-gray-500 text-sm">Average Progress</div>
                <div className="text-2xl font-bold text-green-700">
                  {enrolled.length > 0 ? `${Math.round(enrolled.reduce((sum, id) => sum + (user?.progress?.[id] || 0), 0) / enrolled.length)}%` : "0%"}
                </div>
              </div>
            </div>
            <div className="flex-none md:flex-auto w-64 md:w-auto bg-white p-4 rounded-lg shadow hover:shadow-xl transition flex items-center gap-3">
              <div className="text-yellow-500 text-3xl">
                🏆
              </div>
              <div>
                <div className="text-gray-500 text-sm">Certificates Earned</div>
                <div className="text-2xl font-bold text-yellow-700">{user?.certificates?.length || 0}</div>
              </div>
            </div>
          </div>

        {/* Enrolled Courses */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Your Enrolled Courses</h3>
          {enrolled.length === 0 ? (
            <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolled.map(id => {
                const course = courses.find(c => c.id === id);
                if (!course) return null;
                const progressPercent = user?.progress?.[id] || 0;
                const attendancePercent = user?.attendance?.[id] || 0;
                const savedComment = user?.comments?.[id] || "";
                const savedRating = user?.ratings?.[id] || 0;

                return (
                  <div key={id} className="bg-white shadow-lg rounded-xl p-5 flex flex-col hover:shadow-2xl transition duration-300">
                    <img src={course.img} alt={course.title} className="w-full h-44 object-cover rounded-md"/>
                    <h4 className="mt-3 font-semibold text-lg text-gray-900">{course.title}</h4>
                    <p className="text-gray-600 text-sm">{course.short}</p>

                    {/* Progress & Attendance */}
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm mb-1"><span>Progress</span><span>{progressPercent}%</span></div>
                      <div className="w-full bg-gray-200 h-2 rounded-full"><div className="bg-blue-600 h-2 rounded-full" style={{width:`${progressPercent}%`}}></div></div>
                      <div className="flex justify-between text-sm mb-1"><span>Attendance</span><span>{attendancePercent}%</span></div>
                      <div className="w-full bg-gray-200 h-2 rounded-full"><div className="bg-green-600 h-2 rounded-full" style={{width:`${attendancePercent}%`}}></div></div>
                    </div>

                    {/* Buttons Row */}
                    <div className="mt-4 flex gap-2">
                      <button onClick={()=>setOpenCourseId(course.id)} className="flex-1 px-3 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 shadow transition">Watch Full</button>
                      <button onClick={() => { setShowCommentId(showCommentId===id?null:id); setTempComment(savedComment); setTempRating(savedRating); }} 
                        className="flex-1 px-3 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-yellow-600 shadow transition">
                        {savedComment||savedRating>0 ? "Edit Feedback" : "Give Feedback"}
                      </button>
                    </div>

                    {/* Live Class Info */}
                    <div className="mt-3 flex justify-between items-center bg-gray-50 p-2 rounded text-sm font-semibold text-gray-700">
                      <span>Live Class:</span>
                      {course.liveClassTime?.type === "scheduled" && <span>{course.liveClassTime.date} • {course.liveClassTime.time} <a href={course.liveClassLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-green-600 underline font-bold">Join</a></span>}
                      {course.liveClassTime?.type === "always" && <span>Always Available <a href={course.liveClassLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-green-600 underline font-bold">Join</a></span>}
                      {course.liveClassTime?.type === "none" && <span>No Live Class Scheduled</span>}
                    </div>

                    {/* Comment Section */}
                    {showCommentId===id && (
                      <div className="mt-2 p-2 border rounded bg-gray-100 space-y-2">
                        <textarea value={tempComment} onChange={(e)=>setTempComment(e.target.value)} placeholder="Write your comment" className="w-full p-2 border bg-white/50 rounded text-sm"/>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(star=>(
                            <button key={star} onClick={()=>setTempRating(star)} className={`text-xl ${tempRating>=star?"text-yellow-400":"text-gray-400"} hover:text-yellow-500 transition`}>★</button>
                          ))}
                        </div>
                        <button onClick={()=>handleCommentSubmit(course.id)} className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition font-semibold">Save</button>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Certificates */}
        {user?.certificates?.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Your Certificates</h3>
            <div className="flex flex-wrap gap-4">
              {user.certificates.map((c, idx) => (
                <div key={idx} className="bg-gray-100 p-3 rounded-lg text-center w-40">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-500">{c.date}</div>
                  <button onClick={() => window.open(c.pdfLink, "_blank")} className="mt-2 px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Download</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* VideoPage Modal */}
      {openCourseId && (
        <VideoPage courseId={openCourseId} goBack={() => setOpenCourseId(null)} />
      )}
    </div>
  );
}
