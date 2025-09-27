// only for fronted use  signin form outer model 
import React from "react";
import SignInForm from "../components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="py-20">
      <div className="container px-6 max-w-xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow">
          
          <SignInForm />
        </div>
      </div>
    </div>
  );
}