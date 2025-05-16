import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          
          {/* All other routes wrapped with the MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/*" element={<AppRoutes />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// MainLayout component to wrap all pages with header and footer
const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;