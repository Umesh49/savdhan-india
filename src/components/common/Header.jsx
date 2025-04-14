"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"
import { 
  FaSun, FaMoon, FaBars, FaTimes, FaShieldAlt, 
  FaLock, FaUserShield, FaTerminal, FaUserSecret 
} from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"
import Sidebar from "./Sidebar"

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const [binaryStream, setBinaryStream] = useState("")

  // Generate binary stream effect
  useEffect(() => {
    const generateBinary = () => {
      let binary = ""
      for (let i = 0; i < 32; i++) {
        binary += Math.floor(Math.random() * 2)
      }
      setBinaryStream(binary)
    }
    
    const interval = setInterval(generateBinary, 300)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setAnimateHeader(true)
    const timer = setTimeout(() => setAnimateHeader(false), 1000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500">
      {/* Binary stream decoration */}
      <div className="overflow-hidden h-1 w-full bg-black">
        <div className="text-xs text-green-500 font-mono animate-slideLeftFast">
          {binaryStream}
        </div>
      </div>
      
      {/* Main header */}
      <div className={`w-full ${
        scrolled 
          ? "bg-black bg-opacity-80 backdrop-filter backdrop-blur-md shadow-lg shadow-green-500/20" 
          : "bg-black bg-opacity-50"
      } ${animateHeader ? "animate-slideDown" : ""}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Left side: menu button & logo */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 text-green-500 hover:text-green-400 transition-colors focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Menu"
              >
                <FaTerminal className="text-xl" />
              </button>
              
              <Link to="/" className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500 animate-pulse text-xl" />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 hidden sm:block">
                  Savdhaan India
                </span>
              </Link>
            </div>
            
            {/* Right side: auth buttons or profile */}
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-green-500 hover:text-green-400 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    className="flex items-center gap-2 px-3 py-2 text-green-500 border border-green-500/30 rounded hover:bg-green-500/10 transition-all"
                    onClick={toggleProfileMenu}
                  >
                    <FaUserSecret />
                    <span className="hidden sm:block">{user?.name || "Agent"}</span>
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 py-2 bg-black border border-green-500/30 shadow-lg shadow-green-500/20 rounded-md animate-fadeIn z-50">
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
                        onClick={() => {
                          handleLogout();
                          setIsProfileMenuOpen(false);
                        }} 
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
                    className="px-3 py-1.5 text-green-500 border border-green-500/50 rounded hover:bg-green-500/10 transition-all hidden sm:block"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-3 py-1.5 bg-green-500 text-black font-medium rounded hover:bg-green-400 transition-all"
                  >
                    Register
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
        <div className="text-xs text-green-500 font-mono animate-slideRightFast">
          {binaryStream.split('').reverse().join('')}
        </div>
      </div>
    </header>
  )
}

export default Header