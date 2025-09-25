import React from "react";
import SignUpForm from "../components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="py-20">
      <div className="container px-6 max-w-xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}