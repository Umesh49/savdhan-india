"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"
import { 
  FaSun, FaMoon, FaBars, FaTimes, FaShieldAlt, 
  FaLock, FaUserShield, FaTerminal, FaUserSecret,
  FaAngleDown
} from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"
import Sidebar from "./Sidebar"

const Header = () => {
  const { darkMode, toggleDarkMode, accentColor } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const [binaryStream, setBinaryStream] = useState("")
  const profileMenuRef = useRef(null)

  // Track clicks outside profile menu to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }
    
    if (isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  // Generate binary stream effect
  useEffect(() => {
    const generateBinary = () => {
      let binary = ""
      for (let i = 0; i < 48; i++) {
        binary += Math.floor(Math.random() * 2)
      }
      setBinaryStream(binary)
    }
    
    generateBinary()
    const interval = setInterval(generateBinary, 300)
    return () => clearInterval(interval)
  }, [])

  // Animation for page transitions
  useEffect(() => {
    setAnimateHeader(true)
    const timer = setTimeout(() => setAnimateHeader(false), 1000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleLogout = () => {
    logout()
    setIsProfileMenuOpen(false)
    navigate("/")
  }

  // Get accent color class based on theme context
  const getAccentColorClass = () => {
    switch(accentColor) {
      case 'blue':
        return 'from-blue-400 to-blue-600';
      case 'purple':
        return 'from-purple-400 to-purple-600';
      default:
        return 'from-green-400 to-green-600';
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500">
      {/* Binary stream decoration */}
      <div className="overflow-hidden h-1 w-full bg-black">
        <div className="text-xs text-green-500 font-mono animate-slideLeftFast whitespace-nowrap">
          {binaryStream}
        </div>
      </div>
      
      {/* Main header */}
      <div className={`w-full transition-all duration-300 ${
        scrolled 
          ? "bg-black bg-opacity-90 backdrop-filter backdrop-blur-md shadow-lg shadow-green-500/10 py-2" 
          : "bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm py-3"
      } ${animateHeader ? "animate-slideDown" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left side: menu button & logo */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 text-green-500 hover:text-green-400 transition-colors focus:outline-none hover:bg-green-500/10 rounded-md"
                onClick={toggleSidebar}
                aria-label="Menu"
              >
                <FaTerminal className="text-xl" />
              </button>
              
              <Link to="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <FaShieldAlt className="text-green-500 text-xl transform transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${getAccentColorClass()} hidden sm:block`}>
                  Savdhaan India
                </span>
              </Link>
            </div>
            
            {/* Right side: auth buttons or profile */}
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-green-500 hover:text-green-400 transition-colors hover:bg-green-500/10 rounded-full"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              
              {isAuthenticated ? (
                <div className="relative" ref={profileMenuRef}>
                  <button 
                    className="flex items-center gap-2 px-3 py-2 text-green-500 border border-green-500/30 rounded-md hover:bg-green-500/10 transition-all"
                    onClick={toggleProfileMenu}
                  >
                    <FaUserSecret />
                    <span className="hidden sm:block">{user?.name || "Agent"}</span>
                    <FaAngleDown className={`transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 py-2 bg-black border border-green-500/30 shadow-lg shadow-green-500/20 rounded-md animate-fadeIn z-50 overflow-hidden">
                      <div className="px-4 py-2 border-b border-green-500/20 mb-1">
                        <p className="text-xs text-green-400 font-mono">Logged in as</p>
                        <p className="text-sm text-green-300 font-medium truncate">{user?.email || "user@example.com"}</p>
                      </div>
                      <Link 
                        to="/profile" 
                        className="flex items-center gap-2 px-4 py-2 text-green-500 hover:bg-green-500/10 transition-all"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <FaUserShield className="text-sm" />
                        <span>Profile</span>
                      </Link>
                      <Link 
                        to="/dashboard" 
                        className="flex items-center gap-2 px-4 py-2 text-green-500 hover:bg-green-500/10 transition-all"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <FaTerminal className="text-sm" />
                        <span>Dashboard</span>
                      </Link>
                      <div className="border-t border-green-500/20 my-1"></div>
                      <button 
                        onClick={handleLogout} 
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-500/10 transition-all"
                      >
                        <FaTimes className="text-sm" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link 
                    to="/login" 
                    className="px-3 py-1.5 text-green-500 border border-green-500/50 rounded-md hover:bg-green-500/10 transition-all hidden sm:block"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-3 py-1.5 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-all flex items-center gap-1"
                  >
                    <FaLock className="text-xs" />
                    <span>Register</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Binary stream decoration at bottom */}
      <div className="overflow-hidden h-1 w-full bg-black">
        <div className="text-xs text-green-500 font-mono animate-slideRightFast whitespace-nowrap">
          {binaryStream.split('').reverse().join('')}
        </div>
      </div>
    </header>
  )
}

export default Header