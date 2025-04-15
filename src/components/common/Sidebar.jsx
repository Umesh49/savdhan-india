"use client"

import { useEffect, useState, useRef } from "react"
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
  FaExclamationTriangle,
  FaChevronRight
} from "react-icons/fa"

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation()
  const [typewriterText, setTypewriterText] = useState("")
  const terminalText = "// SYSTEM: SAVDHAAN INDIA TERMINAL v1.3.37"
  const sidebarRef = useRef(null)
  
  // Handle click outside to close sidebar on mobile
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth < 768) {
        toggleSidebar();
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

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
    }, 40);
    
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
          className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    
      <aside 
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-full w-72 max-w-[85vw] bg-black border-r border-green-500/30 shadow-lg shadow-green-500/10 transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Terminal-style header */}
        <div className="p-4 border-b border-green-500/30 bg-black/90">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <button 
              className="text-green-500 hover:text-green-400 transition-colors p-1.5 rounded-full hover:bg-green-500/10"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="mt-4 font-mono text-green-500 h-6 flex items-center">
            <span className="inline-block">{typewriterText}</span>
            <span className="ml-1 w-2 h-4 bg-green-500 animate-blink-cursor"></span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="h-[calc(100%-12rem)] overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (item.path === location.pathname) {
                        e.preventDefault()
                      }
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-all group relative ${
                      isActive
                        ? "bg-green-500/20 text-green-400 border-l-2 border-green-500"
                        : "text-gray-400 hover:bg-green-500/10 hover:text-green-500 hover:border-l hover:border-green-500/50"
                    }`}
                  >
                    <span className={`text-lg ${isActive ? 'text-green-500' : 'text-green-500/70'}`}>{item.icon}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto text-xs font-mono text-green-500 opacity-80">//active</span>
                    )}
                    {!isActive && (
                      <FaChevronRight className="ml-auto text-xs opacity-0 group-hover:opacity-50 transition-opacity" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Footer with emergency contact */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-500/30 bg-black/80 backdrop-blur-sm">
          <div className="bg-black/90 border border-red-500/50 rounded-md p-3 shadow-sm shadow-red-500/20">
            <div className="flex items-center gap-2 mb-2 text-red-500">
              <FaExclamationTriangle className="animate-pulse" />
              <h3 className="font-mono text-sm font-bold">EMERGENCY ACCESS</h3>
            </div>
            <div className="space-y-2">
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