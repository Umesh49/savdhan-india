import { useState, useEffect, useRef } from "react";
import { 
  FaSun, FaMoon, FaBars, FaTimes, FaLock, 
  FaUserSecret, FaAngleDown, FaCode, 
  FaExclamationTriangle, FaUserShield, FaTerminal 
} from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [binaryStream, setBinaryStream] = useState("");
  const [glitchText, setGlitchText] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const profileMenuRef = useRef(null);
  
  // Mock authentication state for demo
  const isAuthenticated = false;
  const user = { name: "Agent", email: "user@example.com" };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
      let binary = "";
      for (let i = 0; i < 48; i++) {
        binary += Math.floor(Math.random() * 2);
      }
      setBinaryStream(binary);
    };
    
    generateBinary();
    const interval = setInterval(generateBinary, 300);
    return () => clearInterval(interval);
  }, []);

  // Random glitch effect for the text
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 150);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Random alert banner
  useEffect(() => {
    const showRandomAlert = () => {
      setShowAlert(Math.random() > 0.7);
    };
    
    showRandomAlert();
    const alertInterval = setInterval(showRandomAlert, 10000);
    return () => clearInterval(alertInterval);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Mock logout function
    setIsProfileMenuOpen(false);
  };

  return (
    <header className={`head-main ${scrolled ? "head-main-scrolled" : ""}`}>
      {/* Binary stream decoration */}
      <div className="head-binary-stream head-binary-top">
        <div className="head-binary-text head-slide-left">
          {binaryStream}
        </div>
      </div>
      
      {/* Alert banner that occasionally appears */}
      {showAlert && (
        <div className="head-alert">
          <div className="head-alert-content">
            <FaExclamationTriangle className="head-alert-icon" />
            <span>⚠️ SECURITY ALERT: 28,721 cyber attacks detected in India today. Stay vigilant!</span>
          </div>
        </div>
      )}
      
      {/* Main header */}
      <div className={`head-wrapper ${scrolled ? "head-wrapper-scrolled" : ""}`}>
        <div className="head-container">
          <div className="head-content">
            {/* Left side: menu button & logo */}
            <div className="head-left">
              <button 
                className="head-menu-btn"
                onClick={toggleSidebar}
                aria-label="Menu"
              >
                <FaCode />
              </button>
              
              <a href="/" className="head-logo-link">
                {/* Logo SVG with effect */}
                <div className="head-logo-box">
                  <img 
                    src="/src/svg/logo.svg" 
                    alt="Savdhaan India Logo" 
                    className="head-logo-img"
                  />
                  <div className="head-logo-pulse"></div>
                </div>
                
                {/* Savdhaan India text with effects */}
                <div className="head-title-box">
                  <span className={`head-title ${glitchText ? 'head-title-glitch' : ''}`}>
                    Savdhaan India
                  </span>
                  
                  {/* Glitch effect layers */}
                  <span className={`head-title head-title-ghost1 ${glitchText ? 'head-shift1' : ''}`}>
                    Savdhaan India
                  </span>
                  
                  <span className={`head-title head-title-ghost2 ${glitchText ? 'head-shift2' : ''}`}>
                    Savdhaan India
                  </span>
                  
                  {/* Cursor blinking effect */}
                  <span className="head-cursor">_</span>
                </div>
              </a>
            </div>
            
            {/* Right side: auth buttons or profile */}
            <div className="head-right">
              <button 
                onClick={toggleDarkMode}
                className="head-theme-btn"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              
              {isAuthenticated ? (
                <div className="head-profile" ref={profileMenuRef}>
                  <button 
                    className="head-profile-btn"
                    onClick={toggleProfileMenu}
                  >
                    <FaUserSecret />
                    <span className="head-profile-name">{user?.name || "Agent"}</span>
                    <FaAngleDown className={`head-arrow ${isProfileMenuOpen ? 'head-arrow-up' : ''}`} />
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="head-dropdown">
                      <div className="head-dropdown-header">
                        <p className="head-dropdown-label">Logged in as</p>
                        <p className="head-dropdown-email">{user?.email || "user@example.com"}</p>
                      </div>
                      <a 
                        href="/profile" 
                        className="head-dropdown-item"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <FaUserShield className="head-dropdown-icon" />
                        <span>Profile</span>
                      </a>
                      <a 
                        href="/dashboard" 
                        className="head-dropdown-item"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <FaTerminal className="head-dropdown-icon" />
                        <span>Dashboard</span>
                      </a>
                      <div className="head-dropdown-divider"></div>
                      <button 
                        onClick={handleLogout} 
                        className="head-dropdown-item head-dropdown-danger"
                      >
                        <FaTimes className="head-dropdown-icon" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="head-auth">
                  <a href="/login" className="head-login">
                    Login
                  </a>
                  <a href="/register" className="head-register">
                    <FaLock className="head-btn-icon" />
                    <span>Register</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Simulated Sidebar for the example (implementation would be separate) */}
      {isSidebarOpen && (
        <div className="head-sidebar-overlay" onClick={toggleSidebar}>
          <div className="head-sidebar" onClick={e => e.stopPropagation()}>
            <div className="head-sidebar-header">
              <h2 className="head-sidebar-title">Navigation</h2>
              <button className="head-sidebar-close" onClick={toggleSidebar}>
                <FaTimes />
              </button>
            </div>
            <div className="head-sidebar-content">
              {/* Sidebar content would go here */}
              <p className="head-sidebar-text">Menu items would go here</p>
            </div>
          </div>
        </div>
      )}

      {/* Binary stream decoration at bottom */}
      <div className="head-binary-stream head-binary-bottom">
        <div className="head-binary-text head-slide-right">
          {binaryStream.split('').reverse().join('')}
        </div>
      </div>
    </header>
  );
};

export default Header;