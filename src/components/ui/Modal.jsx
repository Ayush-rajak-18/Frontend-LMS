import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="w-full max-w-md mx-4 p-3 rounded-3xl relative flex flex-col"
        style={{
          background: "linear-gradient(to bottom left, #bddcffff, #f8dbecff)",
        }}
      >
    
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 shadow"
        >
          ✕
        </button>

       
        <div className="flex-1 w-full">{children}</div>
      </div>
    </div>
  );
}
 ////  popup page open close and children  page  style model  also signup and signin