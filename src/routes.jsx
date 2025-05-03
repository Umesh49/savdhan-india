import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/common/LoadingSpinner/LoadingSpinner";
import Home from "./components/Home/Home";
import IndianLaws from "./components/IndianLaws/IndianLaws";
import ComplaintGuide from "./components/ComplaintGuide/ComplaintGuide.jsx";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm.jsx";
import SecurityTools from "./components/SecurityTools/SecurityTools";
import CyberAwarenessQuiz from "./components/Quiz/CyberAwarenessQuiz";
import QuizCategorySelector from "./components/Quiz/QuizCategorySelector";
import SecurityChecklist from "./components/SecurityChecklist/SecurityChecklist";
import FAQ from "./components/FAQs/FAQ";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/About/AboutUs";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Tutorials from "./components/Tutorials/Tutorials";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import PrivacyPolicy from "./components/StaticPages/PrivacyPolicy";
import TermsOfService from "./components/StaticPages/TermsOfService";
import NotFound from "./components/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/security-checklist" element={<SecurityChecklist />} />
        <Route path="/indian-laws" element={<IndianLaws />} />
        <Route path="/complaint-guide" element={<ComplaintGuide />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/security-tools" element={<SecurityTools />} />
        <Route path="/quiz" element={<QuizCategorySelector />} />
        <Route path="/quiz/:categoryId" element={<CyberAwarenessQuiz />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}