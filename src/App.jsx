import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;