import { useEffect, useState, useRef } from "react"
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
  FaExclamationTriangle,
  FaChevronRight,
  FaLock,
  FaNetworkWired,
  FaFingerprint
} from "react-icons/fa"

function Sidebar({ isOpen, toggleSidebar }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [typewriterText, setTypewriterText] = useState("")
  const terminalText = "// SYSTEM: CYBER_SHIELD TERMINAL v2.1.45"
  const sidebarRef = useRef(null)

  // Handle click outside to close sidebar on mobile
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth < 768) {
        toggleSidebar()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, toggleSidebar])

  // Update current path when URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
      if (window.innerWidth < 768 && isOpen) {
        toggleSidebar()
      }
    }

    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [isOpen, toggleSidebar])

  // Typewriter effect for terminal header
  useEffect(() => {
    if (!isOpen) {
      setTypewriterText("")
      return
    }

    let index = 0
    const timer = setInterval(() => {
      if (index < terminalText.length) {
        setTypewriterText((prev) => prev + terminalText.charAt(index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)

    return () => clearInterval(timer)
  }, [isOpen])

  const navItems = [
    { path: "/", label: "Command Center", icon: <FaHome /> },
    { path: "/indian-laws", label: "Cyber Law Database", icon: <FaBalanceScale /> },
    { path: "/complaint-guide", label: "Incident Response", icon: <FaClipboardList /> },
    { path: "/complaint-form", label: "Breach Report", icon: <FaFingerprint /> },
    { path: "/resources", label: "Security Resources", icon: <FaBook /> },
    { path: "/security-tools", label: "Defense Arsenal", icon: <FaTools /> },
    { path: "/cyber-awareness-quiz", label: "Security Training", icon: <FaGraduationCap /> },
    { path: "/security-checklist", label: "System Hardening", icon: <FaShieldAlt /> },
    { path: "/network", label: "Network Defense", icon: <FaNetworkWired /> },
    { path: "/encryption", label: "Encryption Tools", icon: <FaLock /> },
    { path: "/faq", label: "Knowledge Base", icon: <FaQuestionCircle /> },
    { path: "/contact", label: "Secure Comms", icon: <FaEnvelope /> },
    { path: "/about-us", label: "Mission Info", icon: <FaInfoCircle /> },
  ]

  const handleNavClick = (e, path) => {
    if (path === currentPath) {
      e.preventDefault()
    } else {
      setCurrentPath(path)
    }
  }

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="savdhaan-sidebar-backdrop"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        ref={sidebarRef}
        className={`savdhaan-sidebar ${isOpen ? "savdhaan-sidebar-open" : "savdhaan-sidebar-closed"}`}
      >
        {/* Terminal-style header with hexagon pattern */}
        <div className="savdhaan-sidebar-header">
          <div className="savdhaan-header-hexagon-pattern"></div>
          
          <div className="savdhaan-terminal-controls">
            <div className="savdhaan-terminal-dots">
              <span className="savdhaan-terminal-dot savdhaan-terminal-dot-red"></span>
              <span className="savdhaan-terminal-dot savdhaan-terminal-dot-yellow"></span>
              <span className="savdhaan-terminal-dot savdhaan-terminal-dot-green"></span>
            </div>
            <button
              className="savdhaan-close-btn"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <FaTimes />
            </button>
          </div>

          <div className="savdhaan-terminal-text">
            <span className="savdhaan-terminal-content">{typewriterText}</span>
            <span className="savdhaan-terminal-cursor"></span>
          </div>
          
          <div className="savdhaan-access-status">
            <span className="savdhaan-status-dot"></span>
            <span className="savdhaan-status-text">SECURE CONNECTION</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="savdhaan-sidebar-nav">
          <ul className="savdhaan-nav-list">
            {navItems.map((item) => {
              const isActive = currentPath === item.path
              return (
                <li key={item.path} className="savdhaan-nav-item">
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`savdhaan-nav-link ${isActive ? "savdhaan-nav-link-active" : ""}`}
                  >
                    <span className={`savdhaan-nav-icon ${isActive ? "savdhaan-nav-icon-active" : ""}`}>
                      {item.icon}
                    </span>
                    <span className="savdhaan-nav-label">{item.label}</span>
                    {isActive && (
                      <span className="savdhaan-active-indicator">
                        &gt;&gt; active
                      </span>
                    )}
                    {!isActive && (
                      <FaChevronRight className="savdhaan-chevron" />
                    )}
                    <span className="savdhaan-nav-glow"></span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer with emergency contact */}
        <div className="savdhaan-sidebar-footer">
          <div className="savdhaan-footer-scan-line"></div>
          <div className="savdhaan-emergency-box">
            <div className="savdhaan-emergency-header">
              <FaExclamationTriangle className="savdhaan-emergency-icon" />
              <h3 className="savdhaan-emergency-title">EMERGENCY PROTOCOL</h3>
            </div>
            <div className="savdhaan-emergency-contacts">
              <p className="savdhaan-emergency-contact">
                <span className="savdhaan-emergency-label">
                  <FaTerminal className="savdhaan-emergency-contact-icon" />
                  Cyber Crime Helpline:
                </span>
                <span className="savdhaan-emergency-number">1930</span>
              </p>
              <p className="savdhaan-emergency-contact">
                <span className="savdhaan-emergency-label">
                  <FaExclamationTriangle className="savdhaan-emergency-contact-icon savdhaan-emergency-contact-icon-red" />
                  Emergency:
                </span>
                <span className="savdhaan-emergency-number">112</span>
              </p>
            </div>
          </div>
        </div>
      </aside>

      <style>{`
        .savdhaan-sidebar-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(6px);
          z-index: 40;
          display: none;
        }
        
        @media (max-width: 767px) {
          .savdhaan-sidebar-backdrop {
            display: block;
          }
        }
        
        .savdhaan-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 50;
          height: 100%;
          width: 20rem;
          max-width: 85vw;
          background-color: #0a0e17;
          border-right: 2px solid rgba(0, 210, 255, 0.3);
          box-shadow: 0 0 25px rgba(0, 210, 255, 0.2);
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background-image: 
            linear-gradient(to bottom, rgba(9, 15, 26, 0.9), rgba(12, 20, 33, 0.9)),
            repeating-linear-gradient(0deg, rgba(0, 210, 255, 0.03) 0px, rgba(0, 210, 255, 0.03) 1px, transparent 1px, transparent 6px);
        }
        
        .savdhaan-sidebar::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d2ff, #3a7bd5);
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.7);
          z-index: 3;
        }
        
        .savdhaan-sidebar-open {
          transform: translateX(0);
        }
        
        .savdhaan-sidebar-closed {
          transform: translateX(-100%);
        }
        
        .savdhaan-sidebar-header {
          padding: 1.25rem 1rem;
          border-bottom: 1px solid rgba(0, 210, 255, 0.3);
          background-color: rgba(9, 15, 26, 0.95);
          position: relative;
          overflow: hidden;
        }
        
        .savdhaan-header-hexagon-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v20L30 55L5 40V20L30 5z' stroke='%2300d2ff' fill='none' stroke-width='1'/%3E%3C/svg%3E");
          background-size: 30px 30px;
          pointer-events: none;
        }
        
        .savdhaan-terminal-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        
        .savdhaan-terminal-dots {
          display: flex;
          gap: 0.5rem;
        }
        
        .savdhaan-terminal-dot {
          height: 0.75rem;
          width: 0.75rem;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
        }
        
        .savdhaan-terminal-dot-red {
          background: linear-gradient(135deg, #ff5f56, #d63031);
        }
        
        .savdhaan-terminal-dot-yellow {
          background: linear-gradient(135deg, #ffbd2e, #f39c12);
        }
        
        .savdhaan-terminal-dot-green {
          background: linear-gradient(135deg, #27c93f, #2ecc71);
        }
        
        .savdhaan-close-btn {
          color: #00d2ff;
          padding: 0.375rem;
          border-radius: 4px;
          transition: all 0.2s;
          background-color: rgba(0, 210, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.2);
        }
        
        .savdhaan-close-btn:hover {
          color: #ffffff;
          background-color: rgba(0, 210, 255, 0.2);
          box-shadow: 0 0 10px rgba(0, 210, 255, 0.3);
        }
        
        .savdhaan-terminal-text {
          margin-top: 1rem;
          font-family: 'Courier New', monospace;
          color: #00d2ff;
          height: 1.5rem;
          display: flex;
          align-items: center;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0, 210, 255, 0.5);
          letter-spacing: 0.05rem;
        }
        
        .savdhaan-terminal-cursor {
          margin-left: 0.25rem;
          width: 0.5rem;
          height: 1rem;
          background-color: #00d2ff;
          animation: blink-cursor 1s infinite;
          box-shadow: 0 0 10px rgba(0, 210, 255, 0.7);
        }
        
        .savdhaan-access-status {
          margin-top: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #7fecff;
        }
        
        .savdhaan-status-dot {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 50%;
          background-color: #00ff41;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
          animation: pulse-status 1.5s infinite;
        }
        
        .savdhaan-status-text {
          letter-spacing: 0.1rem;
          font-weight: bold;
        }
        
        @keyframes blink-cursor {
          0%, 49% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }
        
        @keyframes pulse-status {
          0% { opacity: 0.7; }
          50% { opacity: 1; box-shadow: 0 0 15px rgba(0, 255, 65, 0.9); }
          100% { opacity: 0.7; }
        }
        
        .savdhaan-sidebar-nav {
          height: calc(100% - 14rem);
          overflow-y: auto;
          padding: 1rem 0;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 210, 255, 0.3) transparent;
        }
        
        .savdhaan-sidebar-nav::-webkit-scrollbar {
          width: 5px;
        }
        
        .savdhaan-sidebar-nav::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        .savdhaan-sidebar-nav::-webkit-scrollbar-thumb {
          background-color: rgba(0, 210, 255, 0.3);
          border-radius: 20px;
        }
        
        .savdhaan-nav-list {
          padding: 0 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        
        .savdhaan-nav-item {
          list-style-type: none;
        }
        
        .savdhaan-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          transition: all 0.2s;
          color: #a0a0a0;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          border-left: 2px solid transparent;
        }
        
        .savdhaan-nav-link:hover {
          background-color: rgba(0, 210, 255, 0.1);
          color: #fff;
          border-left: 2px solid rgba(0, 210, 255, 0.5);
        }
        
        .savdhaan-nav-link-active {
          background-color: rgba(0, 210, 255, 0.15);
          color: #fff;
          border-left: 2px solid #00d2ff;
        }
        
        .savdhaan-nav-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        
        .savdhaan-nav-link:hover::before {
          transform: translateX(0);
        }
        
        .savdhaan-nav-link-active::before {
          transform: translateX(0);
        }
        
        .savdhaan-nav-glow {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background-color: rgba(0, 210, 255, 0);
          transition: all 0.3s;
          box-shadow: none;
        }
        
        .savdhaan-nav-link:hover .savdhaan-nav-glow {
          background-color: rgba(0, 210, 255, 0.8);
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.7);
        }
        
        .savdhaan-nav-link-active .savdhaan-nav-glow {
          background-color: rgba(0, 210, 255, 0.8);
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.7);
        }
        
        .savdhaan-nav-icon {
          font-size: 1.125rem;
          color: rgba(0, 210, 255, 0.7);
          transition: all 0.2s;
        }
        
        .savdhaan-nav-icon-active {
          color: #00d2ff;
          text-shadow: 0 0 8px rgba(0, 210, 255, 0.8);
        }
        
        .savdhaan-nav-link:hover .savdhaan-nav-icon {
          color: #00d2ff;
          transform: scale(1.1);
          text-shadow: 0 0 8px rgba(0, 210, 255, 0.8);
        }
        
        .savdhaan-active-indicator {
          margin-left: auto;
          font-size: 0.7rem;
          font-family: 'Courier New', monospace;
          color: #00d2ff;
          opacity: 0.9;
          font-weight: bold;
          letter-spacing: 0.05rem;
          text-shadow: 0 0 5px rgba(0, 210, 255, 0.8);
        }
        
        .savdhaan-chevron {
          margin-left: auto;
          font-size: 0.75rem;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          color: rgba(0, 210, 255, 0.7);
        }
        
        .savdhaan-nav-link:hover .savdhaan-chevron {
          opacity: 0.8;
          transform: translateX(3px);
        }
        
        .savdhaan-sidebar-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1rem;
          border-top: 1px solid rgba(0, 210, 255, 0.3);
          background-color: rgba(9, 15, 26, 0.95);
          backdrop-filter: blur(4px);
          position: relative;
        }
        
        .savdhaan-footer-scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.5), transparent);
          animation: scan-line 3s linear infinite;
        }
        
        @keyframes scan-line {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(120px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 0.7; }
        }
        
        .savdhaan-emergency-box {
          background-color: rgba(15, 23, 36, 0.95);
          border: 1px solid rgba(255, 0, 0, 0.5);
          border-radius: 4px;
          padding: 0.875rem;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }
        
        .savdhaan-emergency-box::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 0, 0, 0.1),
            rgba(255, 0, 0, 0.1) 10px,
            transparent 10px,
            transparent 20px
          );
          animation: rotate-bg 120s linear infinite;
          opacity: 0.1;
          pointer-events: none;
        }
        
        @keyframes rotate-bg {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .savdhaan-emergency-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: #ff3333;
          position: relative;
        }
        
        .savdhaan-emergency-icon {
          animation: pulse 1.5s infinite;
          font-size: 1.125rem;
          filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.7));
        }
        
        .savdhaan-emergency-title {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          font-weight: bold;
          letter-spacing: 0.05rem;
        }
        
        .savdhaan-emergency-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        
        .savdhaan-emergency-contact {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: white;
          background-color: rgba(255, 255, 255, 0.03);
          padding: 0.5rem;
          border-radius: 3px;
          border-left: 2px solid rgba(255, 0, 0, 0.5);
        }
        
        .savdhaan-emergency-label {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        
        .savdhaan-emergency-contact-icon {
          color: #00d2ff;
        }
        
        .savdhaan-emergency-contact-icon-red {
          color: #ff3333;
        }
        
        .savdhaan-emergency-number {
          font-family: 'Courier New', monospace;
          color: #00d2ff;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0, 210, 255, 0.5);
          letter-spacing: 0.1rem;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default Sidebar