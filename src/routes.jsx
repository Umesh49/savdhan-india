import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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
import Tutorials from "./components/Tutorials/Tutorials";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import PrivacyPolicy from "./components/StaticPages/PrivacyPolicy";
import TermsOfService from "./components/StaticPages/TermsOfService";
import NotFound from "./components/NotFound/NotFound";
import CyberSpinner from "./components/common/CyberSpinner/CyberSpinner.jsx";
import BreachExposureChecker from "./components/SecurityTools/Tools/BreachExposureChecker.jsx";
import BrowserFingerprinting from "./components/SecurityTools/Tools/BrowserFingerprinting.jsx";
import DnsLeakTester from "./components/SecurityTools/Tools/DnsLeakTester.jsx";
import FileEncryption from "./components/SecurityTools/Tools/FileEncryption.jsx";
import IpGeolocation from "./components/SecurityTools/Tools/IpGeolocation.jsx";
import IpReputationLookup from "./components/SecurityTools/Tools/IpReputationLookup.jsx";
import PasswordGenerator from "./components/SecurityTools/Tools/PasswordGenerator.jsx";
import PasswordStrengthMeter from "./components/SecurityTools/Tools/PasswordStrengthMeter.jsx";
import PrivacyPolicyAnalyzer from "./components/SecurityTools/Tools/PrivacyPolicyAnalyzer.jsx";
import PrivacyTester from "./components/SecurityTools/Tools/PrivacyTester.jsx";
import QrCodeGenerator from "./components/SecurityTools/Tools/QrCodeGenerator.jsx";
import SafeBrowsingCheck from "./components/SecurityTools/Tools/SafeBrowsingCheck.jsx";
import SecurityHeadersAudit from "./components/SecurityTools/Tools/SecurityHeadersAudit.jsx";
import SecurityNews from "./components/SecurityTools/Tools/SecurityNews.jsx";
import ThreatMap from "./components/SecurityTools/Tools/ThreatMap.jsx";
import UrlMalwareScanner from "./components/SecurityTools/Tools/UrlMalwareScanner.jsx";

export default function AppRoutes() {
  return (
    <Suspense fallback={<CyberSpinner />}>
      <Routes>
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
        <Route path="/breach-exposure-checker" element={<BreachExposureChecker />} />
        <Route path="/browser-fingerprinting" element={<BrowserFingerprinting />} />
        <Route path="/dns-leak-tester" element={<DnsLeakTester />} />
        <Route path="/file-encryption" element={<FileEncryption />} />
        <Route path="/ip-geolocation" element={<IpGeolocation />} />
        <Route path="/ip-reputation-lookup" element={<IpReputationLookup />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/password-strength-meter" element={<PasswordStrengthMeter />} />
        <Route path="/privacy-policy-analyzer" element={<PrivacyPolicyAnalyzer />} />
        <Route path="/privacy-tester" element={<PrivacyTester />} />
        <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
        <Route path="/safe-browsing-check" element={<SafeBrowsingCheck />} />
        <Route path="/security-headers-audit" element={<SecurityHeadersAudit />} />
        <Route path="/security-news" element={<SecurityNews />} />
        <Route path="/threat-map" element={<ThreatMap />} />
        <Route path="/url-malware-scanner" element={<UrlMalwareScanner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}