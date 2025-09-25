import React from "react";

export default function VideoPDFPlayer({ pdfs }) {
  if (!pdfs || pdfs.length === 0) return null;

  return (
    <div className="mt-4 space-y-4">
      {pdfs.map((pdf, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-1">{pdf.title}</h3>
          <iframe
            src={pdf.url}
            title={pdf.title}
            width="100%"
            height="500px"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
