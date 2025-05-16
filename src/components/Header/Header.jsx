"use client"

import { useState, useEffect } from "react"
import './Header.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [binaryStream, setBinaryStream] = useState("")

  const terminalText = "// SYSTEM: ZEROTRACE_TERMINAL v3.1.45"
  const navItems = [
    { path: "/home", label: "Command Center" },
    { path: "/indian-laws", label: "Cyber Law Database" },
    { path: "/complaint-guide", label: "Incident Response" },
    { path: "/complaint-form", label: "Breach Report" },
    { path: "/resources", label: "Security Resources" },
    { path: "/security-tools", label: "Defense Arsenal" },
    { path: "/quiz", label: "Security Training" },
  ]

  // Generate binary stream effect
  useEffect(() => {
    const generateBinary = () => {
      const binary = Array(48).fill(0).map(() => Math.floor(Math.random() * 2)).join("")
      setBinaryStream(binary)
    }

    generateBinary()
    const interval = setInterval(generateBinary, 300)
    return () => clearInterval(interval)
  }, [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

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

  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="binary-stream binary-top">
          <div className="binary-text slide-left">{binaryStream}</div>
        </div>

        <div className="header-container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo">
              <div className="logo-box">
                <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="logo-pulse"></div>
              </div>
              <div className="title-box">
                <span className="title">ZeroTrace</span>
                <span className="cursor">_</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navItems.map((item, index) => (
                <a key={index} href={item.path} className="nav-link">
                  <span className="nav-text">{item.label}</span>
                  <span className="nav-link-line"></span>
                </a>
              ))}
            </nav>

            {/* Emergency Button */}
            <a href="/complaint-form" className="emergency-btn">
              <span className="emergency-icon">⚠️</span>
              <span>Report Incident</span>
            </a>
          </div>
        </div>

        <div className="binary-stream binary-bottom">
          <div className="binary-text slide-right">{binaryStream.split("").reverse().join("")}</div>
        </div>

        <div className="scan-line"></div>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        {/* Menu Toggle Button */}
        <button onClick={() => setIsOpen(true)} className="menu-toggle">
          <svg className="menu-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Logo */}
        <div className="mobile-logo">
          <svg className="shield-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6V12L16 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="app-title">ZeroTrace</span>
        </div>

        {/* Emergency Button for Mobile */}
        <a href="/complaint-form" className="mobile-emergency-btn">
          <span className="emergency-icon">⚠️</span>
        </a>
      </header>

      {/* Sidebar/Drawer for Mobile */}
      {isOpen && (
        <div className="sidebar-container">
          {/* Backdrop */}
          <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />

          {/* Sidebar */}
          <aside className="sidebar">
            {/* Terminal-style header */}
            <div className="sidebar-header">
              <div className="terminal-controls">
                <div className="terminal-dots">
                  <span className="terminal-dot terminal-dot-red"></span>
                  <span className="terminal-dot terminal-dot-yellow"></span>
                  <span className="terminal-dot terminal-dot-green"></span>
                </div>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <svg className="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="terminal-text">
                <span className="terminal-content">{typewriterText}</span>
                <span className="terminal-cursor"></span>
              </div>

              <div className="access-status">
                <span className="status-dot"></span>
                <span className="status-text">Secure Connection</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
              <ul className="nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <a href={item.path} className="nav-link-mobile">
                      <span className="nav-label">{item.label}</span>
                      <svg className="chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer with emergency contact */}
            <div className="sidebar-footer">
              <div className="emergency-box">
                <div className="emergency-header">
                  <svg className="emergency-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="emergency-title">Emergency Protocol</h3>
                </div>
                <div className="emergency-contacts">
                  <p className="emergency-contact">
                    <span className="emergency-label">Cyber Crime Helpline:</span>
                    <span className="emergency-number">1930</span>
                  </p>
                  <p className="emergency-contact">
                    <span className="emergency-label">Emergency:</span>
                    <span className="emergency-number">112</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Page content padding */}
      <div className="content-padding"></div>
    </>
  )
}

export default Navbar