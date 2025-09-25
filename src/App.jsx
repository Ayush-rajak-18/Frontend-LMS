import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import ScrollToTop from "./components/ui/ScrolltoTop";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import Profile from "./pages/Profile";
import VideoPage from "./components/courses/VideoPage";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import { useAuth } from "./context/AuthContext";
import Modal from "./components/ui/Modal";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";



export default function App() {
  const { showAuthModal, authModalMode, closeAuthModal } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/video/:courseId/:videoIndex" element={<VideoPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Auth Modal */}
      <Modal isOpen={showAuthModal} onClose={closeAuthModal}>
        {authModalMode === "signin" ? <SignInForm /> : <SignUpForm />}
      </Modal>
    </div>
  );
}
   
