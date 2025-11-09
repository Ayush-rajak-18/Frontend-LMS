import React from "react";

export default function CareerCard({ job }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <p className="mt-3 text-sm text-gray-500">
        📍 {job.location} • {job.type}
      </p>
    </div>
  );
}
