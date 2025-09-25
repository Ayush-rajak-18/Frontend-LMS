import React, { useState } from "react";
import VideoPDFPlayer from "./VideoPDFPlayer";
import courses from "../../data/courses";

export default function VideoPage({ courseId, goBack }) {
  const course = courses.find(c => c.id === courseId);
  const [selectedLesson, setSelectedLesson] = useState(
    course?.videos?.[0] ? { ...course.videos[0], type: "video" } : null
  );

  if (!course) return <p>Course not found</p>;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-start overflow-auto pt-16">
      <div className="bg-white w-full md:w-4/5 lg:w-3/4 p-6 rounded-lg relative max-h-[95vh] overflow-y-auto flex flex-col md:flex-row gap-6">
        
        {/* Side Panel Playlist */}
        <div className="md:w-1/4 bg-gray-100 p-4 rounded shadow h-fit">
          <h2 className="text-lg font-bold mb-4">{course.title} Lessons</h2>
          <ul className="space-y-2">
            {course.videos.map((v, idx) => (
              <li key={idx}>
                <button
                  className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                    selectedLesson?.url === v.url ? "bg-gray-300 font-bold" : ""
                  }`}
                  onClick={() => setSelectedLesson({ ...v, type: "video" })}
                >
                  {v.title}
                </button>
              </li>
            ))}
          </ul>

          {course.pdfs.map((pdf, idx) => (
            <button
              key={idx}
              className="w-full text-left p-2 mt-2 rounded hover:bg-gray-200"
              onClick={() => setSelectedLesson({ ...pdf, type: "pdf" })}
            >
              {pdf.title} (PDF)
            </button>
          ))}

          <button
            className="mt-4 w-full bg-gray-400 text-white px-3 py-2 rounded hover:bg-gray-500"
            onClick={goBack}
          >
            Back
          </button>
        </div>

        {/* Main Player */}
        <div className="md:w-3/4 bg-white p-4 rounded shadow flex flex-col">
          {selectedLesson && selectedLesson.type === "video" && (
            <>
              <h2 className="text-xl font-bold mb-2">{selectedLesson.title}</h2>
              <iframe
                className="w-full h-[60vh] md:h-[70vh]"
                src={selectedLesson.url.replace("watch?v=", "embed/")}
                title={selectedLesson.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </>
          )}
          {selectedLesson && selectedLesson.type === "pdf" && (
            <VideoPDFPlayer pdfs={[selectedLesson]} />
          )}
        </div>

      </div>
    </div>
  );
}
