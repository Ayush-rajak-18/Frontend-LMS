import React from "react";
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-14 bg-gray-200 overflow-hidden">
      <div className="container px-6">
        <h3 className="text-2xl font-bold text-center">What students say</h3>
        <div className="mt-8 relative">
          <div className="flex animate-scroll space-x-6">
            {testimonials.concat(testimonials).map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 p-6 border rounded-lg bg-white/50"
              >
                {/* Name + Avatar */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="font-semibold">{t.name}</div>
                </div>

                <div className="text-xs text-gray-500">{t.role}</div>
                <p className="mt-4 text-gray-600">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
