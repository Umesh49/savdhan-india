import React, { useState, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Header/Sidebar";
import Footer from "./components/Footer/Footer";
import ChatbotWidget from "./components/common/ChatbotWidget";
import MatrixBackground from "./components/common/MatrixBackground";

import AppRoutes from "./routes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const toggleChatbot = useCallback(() => {
    setChatbotOpen((prev) => !prev);
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true, 
        v7_relativeSplatPath: true
      }}
    >
      <div className="app">
        <MatrixBackground />
        
        <Header toggleSidebar={toggleSidebar} />
        
        <div className="main-content">
          <Sidebar
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          
          <main
            className={`content ${sidebarOpen ? "sidebar-active" : ""}`}
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
  );
}

export default App;