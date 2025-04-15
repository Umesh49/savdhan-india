"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { ThemeProvider } from "./contexts/ThemeContext"

// Components
import Header from "./components/common/Header"
import Sidebar from "./components/common/Sidebar"
import Footer from "./components/common/Footer"
import SplashScreen from "./components/common/SplashScreen"
import ChatbotWidget from "./components/common/ChatbotWidget"
import MatrixBackground from "./components/common/MatrixBackground"

// Routes
import AppRoutes from "./routes"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [showMainApp, setShowMainApp] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen)
  }

  const enterMainApp = () => {
    setShowMainApp(true)
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          {!showMainApp ? (
            <SplashScreen onEnter={enterMainApp} />
          ) : (
            <div className="app">
              <MatrixBackground />
              <Header toggleSidebar={toggleSidebar} />
              <div className="main-content">
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <main className={`content ${sidebarOpen ? "sidebar-active" : ""}`}>
                  <AppRoutes />
                  <Footer />
                </main>
              </div>
              {chatbotOpen && <ChatbotWidget closeChatbot={() => setChatbotOpen(false)} />}
              <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
                {chatbotOpen ? "Close Assistant" : "Cyber Assistant"}
              </button>
            </div>
          )}
        </Router>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App