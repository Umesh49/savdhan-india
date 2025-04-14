"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  FaHome,
  FaBalanceScale,
  FaClipboardList,
  FaBook,
  FaShieldAlt,
  FaQuestionCircle,
  FaEnvelope,
  FaInfoCircle,
  FaGlobe,
  FaTools,
  FaGraduationCap,
  FaNewspaper,
  FaTimes,
  FaTerminal,
  FaLock,
  FaBug,
  FaExclamationTriangle
} from "react-icons/fa"

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation()
  const [typewriterText, setTypewriterText] = useState("")
  const terminalText = "// SYSTEM: SAVDHAAN INDIA TERMINAL v1.3.37"

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (window.innerWidth < 768 && isOpen) {
      toggleSidebar()
    }
  }, [location, isOpen, toggleSidebar])

  // Typewriter effect for terminal header
  useEffect(() => {
    if (!isOpen) {
      setTypewriterText("");
      return;
    }
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < terminalText.length) {
        setTypewriterText(prev => prev + terminalText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/indian-laws", label: "Indian Cyber Laws", icon: <FaBalanceScale /> },
    { path: "/complaint-guide", label: "Complaint Guide", icon: <FaClipboardList /> },
    { path: "/complaint-form", label: "File a Complaint", icon: <FaClipboardList /> },
    { path: "/resources", label: "Resources", icon: <FaBook /> },
    { path: "/security-tools", label: "Security Tools", icon: <FaTools /> },
    { path: "/cyber-awareness-quiz", label: "Cyber Quiz", icon: <FaGraduationCap /> },
    { path: "/threat-map", label: "Threat Map", icon: <FaGlobe /> },
    { path: "/security-checklist", label: "Security Checklist", icon: <FaShieldAlt /> },
    { path: "/updates", label: "Latest Updates", icon: <FaNewspaper /> },
    { path: "/faq", label: "FAQ", icon: <FaQuestionCircle /> },
    { path: "/contact", label: "Contact Us", icon: <FaEnvelope /> },
    { path: "/about-us", label: "About Us", icon: <FaInfoCircle /> },
  ]

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
        />
      )}
    
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-72 max-w-[80vw] bg-black border-r border-green-500/30 shadow-lg transform transition-transform duration-300 overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Terminal-style header */}
        <div className="p-4 border-b border-green-500/30 bg-black">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <button 
              className="text-green-500 hover:text-green-400 transition-colors"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="mt-4 font-mono text-green-500 h-6 flex items-center">
            <span className="blink-cursor">{typewriterText}</span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="h-[calc(100%-12rem)] overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-black scrollbar-thumb-rounded">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (item.path === location.pathname) {
                      e.preventDefault()
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-all group ${
                    location.pathname === item.path
                      ? "bg-green-500/20 text-green-400 border-l-2 border-green-500"
                      : "text-gray-400 hover:bg-green-500/10 hover:text-green-500"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <span className="ml-auto text-xs font-mono text-green-500">//active</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer with emergency contact */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-500/30 bg-black/80 backdrop-blur-sm">
          <div className="bg-black/80 border border-green-500/30 rounded-md p-3">
            <div className="flex items-center gap-2 mb-2 text-red-500">
              <FaExclamationTriangle />
              <h3 className="font-mono text-sm font-bold animate-pulse">EMERGENCY ACCESS</h3>
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-1">
                  <FaTerminal className="text-green-500" />
                  Cyber Crime Helpline:
                </span>
                <span className="font-mono text-green-500 font-bold">1930</span>
              </p>
              <p className="flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-1">
                  <FaExclamationTriangle className="text-red-500" />
                  Emergency:
                </span>
                <span className="font-mono text-green-500 font-bold">112</span>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar