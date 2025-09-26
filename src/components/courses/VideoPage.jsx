import React, { useState } from "react";
import VideoPDFPlayer from "./VideoPDFPlayer";
import courses from "../../data/courses";

export default function VideoPage({ courseId, goBack }) {
  const course = courses.find(c => c.id === courseId);

  if (!course) return <p className="text-center mt-20 text-red-500 font-semibold">Course not found</p>;

  // Combine videos and PDFs
  const allLessons = [
    ...(course.videos.map(v => ({ ...v, type: "video" })) || []),
    ...(course.pdfs.map(p => ({ ...p, type: "pdf" })) || [])
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLesson = allLessons[selectedIndex];

  const goNext = () => {
    if (selectedIndex < allLessons.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  const goPrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 overflow-auto py-6 px-4 sm:px-6 md:px-8">
      <div className="mx-auto bg-white w-full md:w-4/5 lg:w-3/4 rounded-xl shadow-xl flex flex-col-reverse md:flex-row gap-6 overflow-hidden">

        {/* Playlist */}
        <aside className="md:w-1/4 bg-gray-50 p-4 flex flex-col rounded-b-xl md:rounded-l-xl md:rounded-b-none border-t md:border-t-0 md:border-r border-gray-200">
          <h2 className="text-lg font-bold mb-3 text-gray-800 truncate">{course.title} Lessons</h2>

          <div className="flex-1 overflow-y-auto space-y-2 max-h-[250px] md:max-h-none">
            {allLessons.map((lesson, idx) => (
              <button
                key={idx}
                className={`w-full text-left p-2 rounded transition-colors duration-200 text-sm md:text-base truncate ${
                  selectedIndex === idx
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => setSelectedIndex(idx)}
              >
                {lesson.type === "video" ? "🎬" : "📄"} {lesson.title}
              </button>
            ))}
          </div>

          <button
            className="mt-4 w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition-colors duration-200 text-sm md:text-base"
            onClick={goBack}
          >
            ⬅ Back
          </button>
        </aside>

        {/* Main Player */}
        <section className="md:w-3/4 bg-white p-4 flex flex-col rounded-t-xl md:rounded-r-xl md:rounded-t-none gap-4">
          {/* Video */}
          {selectedLesson?.type === "video" && selectedLesson.url && (
            <>
              <h2 className="text-lg md:text-2xl font-bold mb-2 text-gray-800 truncate">{selectedLesson.title}</h2>
              <div className="w-full h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] rounded overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src={selectedLesson.url.includes("watch?v=")
                    ? selectedLesson.url.replace("watch?v=", "embed/")
                    : selectedLesson.url
                  }
                  title={selectedLesson.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </>
          )}

          {/* PDF */}
          {selectedLesson?.type === "pdf" && selectedLesson.url && (
            <VideoPDFPlayer pdfs={[selectedLesson]} />
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-2">
            <button
              className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition ${
                selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={goPrev}
              disabled={selectedIndex === 0}
            >
              ⬅ Previous
            </button>
            <button
              className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition ${
                selectedIndex === allLessons.length - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={goNext}
              disabled={selectedIndex === allLessons.length - 1}
            >
              Next ➡
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
