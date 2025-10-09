import React, { useState } from "react";

export default function CourseDetailTabs({ syllabus = [], projects = [], reviews = [] }) {
  const [tab, setTab] = useState("overview");
  const [openIndex, setOpenIndex] = useState(null); // for syllabus accordion

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "syllabus", label: "Syllabus" },
    { id: "projects", label: "Projects" },
    { id: "reviews", label: "Reviews" },
  ];

  const toggleSyllabus = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto gap-2 border-b border-gray-300 scrollbar-hide">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-shrink-0 px-4 py-2 font-medium transition-all duration-300
                        ${tab === t.id ? "border-b-4 border-blue-600 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tab === "overview" && (
          <div className="bg-white shadow rounded-lg p-6 text-gray-700">
            <p className="text-base sm:text-lg">
              This course covers essential topics and hands-on projects to help you learn real skills.
            </p>
          </div>
        )}

        {tab === "syllabus" && (
          <div className="space-y-2 mt-4">
            {syllabus.map((s, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleSyllabus(i)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 focus:outline-none"
                >
                  <span>{i + 1}. {s.title || s}</span>
                  <span className="text-blue-500">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="p-4 border-t border-gray-200 text-gray-700 text-sm sm:text-base">
                    {s.details || "No details available for this topic."}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "projects" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((p, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
                <span className="font-semibold text-gray-800">{i + 1}.</span> {p}
              </div>
            ))}
          </div>
        )}

        {tab === "reviews" && (
          <div className="space-y-4 mt-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">{r.name}</span>
                  <span className="text-yellow-500">{Array(r.rating).fill("★").join("")}</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scrollbar hide for mobile */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
}
