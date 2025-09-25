import React, { useState } from "react";

export default function CourseDetailTabs({ syllabus = [], projects = [], reviews = [] }) {
  const [tab, setTab] = useState("overview");

  return (
    <div>
      <div className="flex gap-3 border-b">
        <button onClick={() => setTab("overview")} className={`px-4 py-2 ${tab === "overview" ? "border-b-2 border-blue-600" : ""}`}>Overview</button>
        <button onClick={() => setTab("syllabus")} className={`px-4 py-2 ${tab === "syllabus" ? "border-b-2 border-blue-600" : ""}`}>Syllabus</button>
        <button onClick={() => setTab("projects")} className={`px-4 py-2 ${tab === "projects" ? "border-b-2 border-blue-600" : ""}`}>Projects</button>
        <button onClick={() => setTab("reviews")} className={`px-4 py-2 ${tab === "reviews" ? "border-b-2 border-blue-600" : ""}`}>Reviews</button>
      </div>

      <div className="mt-6">
        {tab === "overview" && <p className="text-gray-700">This course covers essential topics and hands-on projects to learn real skills.</p>}
        {tab === "syllabus" && (
          <ul className="list-disc list-inside text-gray-700">
            {syllabus.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        )}
        {tab === "projects" && (
          <ul className="list-disc list-inside text-gray-700">
            {projects.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        )}
        {tab === "reviews" && (
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="p-4 border rounded">
                <div className="font-semibold">{r.name} • {Array(r.rating).fill("★").join("")}</div>
                <div className="text-sm text-gray-700 mt-1">{r.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}