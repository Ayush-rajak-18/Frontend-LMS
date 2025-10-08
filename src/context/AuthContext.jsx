import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {name, username, email, phone, ...}
  const [enrolled, setEnrolled] = useState([]); // course ids
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("signin"); // 'signin' | 'signup'
  const [pendingCourseId, setPendingCourseId] = useState(null);

  // LOGIN
  const login = ({ name, username, email, phone }) => {
    setUser({ name, username, email, phone });
    setShowAuthModal(false);
  };

  // SIGNUP
  const signup = ({ name, username, email, phone }) => {
    setUser({ name, username, email, phone });
    setShowAuthModal(false);
  };

  // UPDATE USER (edit profile)
  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
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
        updateUser,  // added
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
