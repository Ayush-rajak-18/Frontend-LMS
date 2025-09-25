import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignInForm() {
  const {
    login,
    enrollCourse,
    pendingCourseId,
    setPendingCourseId,
    closeAuthModal,
  } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forgotMode, setForgotMode] = useState(false); 
  const [success, setSuccess] = useState("");

  // SignIn handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) return setError("Enter valid email");
    if (password.length < 4) return setError("Password too short");

    setLoading(true);
    setTimeout(() => {
      login({ name: email.split("@")[0], email });
      setLoading(false);

      if (pendingCourseId) {
        enrollCourse(pendingCourseId);
        navigate("/payment", { state: { courseId: pendingCourseId } });
        setPendingCourseId(null);
      } else {
        closeAuthModal();
        navigate("/profile");
      }
    }, 900);
  };

  // Forgot Password handler
  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.includes("@")) return setError("Enter valid email");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(`Reset link sent to ${email}`);
      setEmail(""); // clear input
    }, 900);
  };

  // Social login
  const handleSocialLogin = (provider) => {
    setLoading(true);
    setTimeout(() => {
      login({ name: provider + " User", email: `${provider.toLowerCase()}user@example.com` });
      setLoading(false);

      if (pendingCourseId) {
        enrollCourse(pendingCourseId);
        navigate("/payment", { state: { courseId: pendingCourseId } });
        setPendingCourseId(null);
      } else {
        closeAuthModal();
        navigate("/profile");
      }
    }, 900);
  };

  return (
    <div className="bg-white/10 p-6 rounded-2xl w-full max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-2">
        {forgotMode ? "Forgot Password 🔒" : "Welcome Back 👋"}
      </h2>

      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

      <form
        onSubmit={forgotMode ? handleForgotPassword : handleSubmit}
        className="flex flex-col gap-3"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {!forgotMode && (
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        <button
          type="button"
          className="text-blue-500 text-sm hover:underline text-left"
          onClick={() => {
            setError("");
            setSuccess("");
            setForgotMode(!forgotMode);
          }}
        >
          {forgotMode ? "Back to Login" : "Forgot Password?"}
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? (forgotMode ? "Sending..." : "Signing In...") : forgotMode ? "Send Reset Link" : "Login"}
        </button>
      </form>

      {!forgotMode && (
        <>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">Or With</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50"
            >
              <FcGoogle size={20} /> Login with Google
            </button>
          </div>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </>
      )}
    </div>
  );
}
