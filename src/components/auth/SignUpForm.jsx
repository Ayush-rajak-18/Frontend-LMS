import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignUpForm() {
  const { signup, pendingCourseId, setPendingCourseId, closeAuthModal, openAuthModal } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(""); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!fullName.trim()) return setError("Enter full name"); 
    if (!username.trim()) return setError("Enter username");
    if (!email.includes("@")) return setError("Enter valid email");
    if (password.length < 4) return setError("Password too short");

    setLoading(true);
    setTimeout(() => {
      signup({ name: fullName, username, email, phone }); 
      setLoading(false);
      if (pendingCourseId) {
        navigate("/payment", { state: { courseId: pendingCourseId } });
        setPendingCourseId(null);
      } else {
        closeAuthModal();
        navigate("/profile");
      }
    }, 900);
  };

  const handleSocialSignup = (provider) => {
    setLoading(true);
    setTimeout(() => {
      signup({ name: provider + " User", email: `${provider.toLowerCase()}user@example.com` });
      setLoading(false);
      closeAuthModal();
      navigate("/profile");
    }, 900);
  };

  return (
    <div className="bg-white/10 p-6 rounded-2xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
         <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <div className="flex items-center gap-2 my-4">
        <hr className="flex-1 border-gray-300" />
        <span className="text-gray-400 text-sm">Or With</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => handleSocialSignup("Google")}
          className="flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50"
        >
          <FcGoogle size={20} /> Sign up with Google
        </button>
      </div>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <button
          onClick={() => {
            closeAuthModal();
            openAuthModal("signin");
          }}
          className="text-blue-500 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}
