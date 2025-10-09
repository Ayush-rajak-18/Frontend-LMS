import React, { useState } from "react";

export default function SyllabusAccordion({ syllabus }) {
  const [openUnitIndex, setOpenUnitIndex] = useState(null);
  const [openTopicIndex, setOpenTopicIndex] = useState({}); // {unitIndex: topicIndex}

  const toggleUnit = (idx) => {
    setOpenUnitIndex(openUnitIndex === idx ? null : idx);
  };

  const toggleTopic = (unitIdx, topicIdx) => {
    setOpenTopicIndex((prev) => ({
      ...prev,
      [unitIdx]: prev[unitIdx] === topicIdx ? null : topicIdx,
    }));
  };

  return (
    <div className="space-y-3">
      {syllabus.map((unit, uIdx) => (
        <div key={uIdx} className="border rounded-lg bg-white shadow-sm overflow-hidden">
          {/* Unit header */}
          <button
            onClick={() => toggleUnit(uIdx)}
            className="w-full flex justify-between items-center p-3 font-medium text-gray-800 hover:bg-blue-50"
          >
            <span>{unit.title}</span>
            <span className="text-xl">{openUnitIndex === uIdx ? "−" : "+"}</span>
          </button>

          {/* Topics */}
          {openUnitIndex === uIdx && (
            <div className="p-3 border-t space-y-2">
              {unit.topics.map((topic, tIdx) => (
                <div key={tIdx} className="border-b last:border-none">
                  <button
                    onClick={() => toggleTopic(uIdx, tIdx)}
                    className="w-full flex justify-between items-center py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <span>{topic.name}</span>
                    <span className="text-lg">{openTopicIndex[uIdx] === tIdx ? "−" : "+"}</span>
                  </button>
                  {openTopicIndex[uIdx] === tIdx && (
                    <div className="p-2 text-gray-600 text-sm bg-gray-50">{topic.details}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
