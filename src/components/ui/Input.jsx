import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      {label && <label className="block text-sm mb-1">{label}</label>}
      <input {...props} className="w-full px-3 py-2 border rounded-md focus:outline-none" />
    </div>
  );
}

// simple input area model only frontnedd