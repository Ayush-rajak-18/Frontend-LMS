// for global login  

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {name,email}
  const [enrolled, setEnrolled] = useState([]); // course ids
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("signin"); // 'signin' | 'signup'
  const [pendingCourseId, setPendingCourseId] = useState(null);

  const login = ({ name, email }) => {
    setUser({ name, email });
    setShowAuthModal(false);
  };

  const signup = ({ name, email }) => {
    setUser({ name, email });
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
    setEnrolled([]);
  };

  const enrollCourse = (courseId) => {
    setEnrolled((prev) => {
      if (!prev.includes(courseId)) return [...prev, courseId];
      return prev;
    });
    setPendingCourseId(null);
  };

  const openAuthModal = (mode = "signin", pendingCourse = null) => {
    setAuthModalMode(mode);
    setPendingCourseId(pendingCourse);
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setPendingCourseId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        enrolled,
        login,
        signup,
        logout,
        enrollCourse,
        showAuthModal,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        pendingCourseId,
        setPendingCourseId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

