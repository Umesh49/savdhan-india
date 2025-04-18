import React, { useState, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import ChatbotWidget from "./components/common/ChatbotWidget";
import MatrixBackground from "./components/common/MatrixBackground";

import SplashScreenAuth from "./components/SplashScreen/SplashScreenAuth";
import SplashScreenLoad from "./components/SplashScreen/SplashScreenLoad";

import AppRoutes from "./routes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const toggleChatbot = useCallback(() => {
    setChatbotOpen((prev) => !prev);
  }, []);

  return (
      <ThemeProvider>
        {!isAuthenticated ? (
          <SplashScreenAuth onAuthSuccess={() => setIsAuthenticated(true)} />
        ) : !isLoaded ? (
          <SplashScreenLoad onFinish={() => setIsLoaded(true)} />
        ) : (
          <Router>
            <div className="app">
              <MatrixBackground />

              <Header toggleSidebar={toggleSidebar} />

              <div className="main-content">
                <Sidebar
                  isOpen={sidebarOpen}
                  toggleSidebar={toggleSidebar}
                />

                <main
                  className={`content ${
                    sidebarOpen ? "sidebar-active" : ""
                  }`}
                >
                  <AppRoutes />
                  <Footer />
                </main>
              </div>

              {chatbotOpen && (
                <ChatbotWidget closeChatbot={toggleChatbot} />
              )}

              <button
                className="chatbot-toggle-btn"
                onClick={toggleChatbot}
              >
                {chatbotOpen ? "Close Assistant" : "Cyber Assistant"}
              </button>
            </div>
          </Router>
        )}
      </ThemeProvider>
  );
}

export default App;