import React from "react";
import offers from "../../data/offers";

export default function Offers() {
  return (
    <section id="offers" className="py-14 bg-gradient-to-r from-indigo-50 to-white overflow-hidden">
      <div className="container px-6">
        <h3 className="text-2xl font-bold text-center">Current Offers</h3>

        <div className="mt-8 relative">
          {/* Animated wrapper */}
          <div className="flex animate-scroll space-x-6">
            {offers.concat(offers).map((o, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-96 p-6 rounded-xl bg-gradient-to-br from-indigo-100 via-white to-yellow-50 shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-indigo-900">{o.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{o.desc}</p>
                  </div>
                  <div className="text-sm bg-indigo-600 text-white px-3 py-2 rounded-md shadow-md">
                    {o.code}
                  </div>
                </div>
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
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
