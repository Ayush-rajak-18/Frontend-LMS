import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";


export default function FAQ() {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer Frontend, Backend, Full Stack, Security, Networking, and Cloud Computing courses."
    },
    {
      question: "Do I get a certificate after completion?",
      answer: "Yes! Every course you complete comes with a verified certificate."
    },
    {
      question: "Can I access the content after the course ends?",
      answer: "Absolutely. You get lifetime access to all course materials."
    },
    {
      question: "Do you provide job assistance?",
      answer: "Yes, our mentorship program includes guidance and interview prep for jobs."
    },
    {
      question: "What is the refund policy?",
      answer: "You can request a full refund within 7 days of enrollment if unsatisfied."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-tr from-gray-100 to-blue-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg bg-white/40 shadow hover:shadow-lg transition"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-4 focus:outline-none"
              >
                <span className="font-semibold text-black-700">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUpIcon className="w-6 h-6 text-blue-500" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-blue-500" />
                )}
              </button>
              {openIndex === i && (
                <div className="p-4 border-t border-gray-200 text-gray-900">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
