import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Menu, X } from "lucide-react";
import Logo from "../pictures/logo.png";

export default function Navbar() {
  const { isLoggedIn, user, logout, openAuthModal } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-medium" : "text-gray-700"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-medium" : "text-gray-700"
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-medium" : "text-gray-700"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/feedback"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-medium" : "text-gray-700"
        }
      >
        Feedback
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-100 shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="hidden sm:inline text-sm text-gray-600">
              Development • Cloud • Security • Data
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">{navLinks}</div>

        {/* Desktop Auth/Profile */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => openAuthModal("signin")}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => openAuthModal("signup")}
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="h-10 w-10 rounded-full bg-blue-300 text-white flex items-center justify-center font-semibold"
                title="Go to Profile"
              >
                {user.name[0]?.toUpperCase()}
              </button>
              <button
                onClick={() => logout()}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown with click-away close */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30" // overlay
          onClick={() => setMobileOpen(false)} // click outside closes menu
        >
          <div
            className="absolute top-0 right-0 w-64 bg-white/60 backdrop-blur-sm shadow-lg p-6 flex flex-col gap-4 rounded-l-xl h-full"
            onClick={(e) => e.stopPropagation()} // click inside doesn't close
          >
            <div className="flex flex-col gap-4">{navLinks}</div>

            {!isLoggedIn ? (
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    openAuthModal("signin");
                    setMobileOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    openAuthModal("signup");
                    setMobileOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
