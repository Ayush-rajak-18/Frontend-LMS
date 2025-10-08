import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function ContactPreview() {
  return (
    <section className="py-14 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container px-6 md:flex items-center gap-10">
        
        <div className="md:w-1/2 bg-white/50 rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl text-blue-900 font-bold uppercase ">Get in touch</h3>
          <p className="mt-2 text-gray-600">
            Have a question? Want a demo? Reach out and we'll reply within 24 hours.
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={20} className="text-blue-600" />
              <span>thetechdevsec@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={20} className="text-blue-600" />
              <span>+91 9336395934</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-900 transition"
          >
            Open Contact Form →
          </Link>
        </div>
      </div>
    </section>
  );
}
