import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import ScrollTop from "./components/ui/ScrollTop";
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
import EnquiryFormModal from "./pages/EnquiryFormModal";

import AboutPage from "./pages/AboutPage"; 

// for slider ke liye its doesnt affect
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const { showAuthModal, authModalMode, closeAuthModal } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <ScrollTop /> 
    
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
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />

       <EnquiryFormModal />

      {/* Global Auth Modal */}
      <Modal isOpen={showAuthModal} onClose={closeAuthModal}>
        {authModalMode === "signin" ? <SignInForm /> : <SignUpForm />}
      </Modal>
    </div>
  );
}
