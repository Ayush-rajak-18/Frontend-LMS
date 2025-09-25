import React from "react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md shadow-sm ${className}`}>
      {children}
    </button>
  );
}

// simple button mstyle model