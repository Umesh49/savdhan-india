import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/common/LoadingSpinner/LoadingSpinner";

// Lazy-loaded pages
const Home = lazy(() => import("./components/Home/Home"));
const IndianLaws = lazy(() => import("./components/IndianLaws/IndianLaws"));
const ComplaintGuide = lazy(() => import("./components/ComplaintGuide"));
const ComplaintForm = lazy(() => import("./components/ComplaintForm"));
const Resources = lazy(() => import("./components/Resources"));
// const SecurityTools = lazy(() =>
//   import("./components/SecurityTools/SecurityTools")
// );
const CyberAwarenessQuiz = lazy(() =>
  import("./components/Quiz/CyberAwarenessQuiz")
);
const ThreatMap = lazy(() => import("./components/ThreatMap"));
const SecurityChecklist = lazy(() => import("./components/SecurityChecklist"));
const FAQ = lazy(() => import("./components/FAQs/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const AboutUs = lazy(() => import("./components/About/AboutUs"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const Tutorials = lazy(() => import("./components/Tutorials"));
const Updates = lazy(() => import("./components/Updates"));
const Chatbot = lazy(() => import("./components/Chatbot"));
const PrivacyPolicy = lazy(() =>
  import("./components/StaticPages/PrivacyPolicy")
);
const TermsOfService = lazy(() =>
  import("./components/StaticPages/TermsOfService")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const ProtectedRoute = ({ children }) => {
  return children;
};

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/indian-laws" element={<IndianLaws />} />
        <Route path="/complaint-guide" element={<ComplaintGuide />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/resources" element={<Resources />} /> */}
        {/* <Route path="/security-tools" element={<SecurityTools />} /> */}
        {/* <Route path="/cyber-awareness-quiz" element={<CyberAwarenessQuiz />} /> */}
        {/* <Route path="/threat-map" element={<ThreatMap />} />
        <Route path="/security-checklist" element={<SecurityChecklist />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/updates" element={<Updates />} /> */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Unauthenticated */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
