"use client"

import { useEffect, useState, useRef } from "react"
import { FaExclamationTriangle, FaHome, FaSearch, FaShieldAlt, FaLock, FaServer, FaNetworkWired, FaTerminal } from "react-icons/fa"
import './NotFound.css';

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404")
  const [binaryStream, setBinaryStream] = useState("")
  const [errorLog, setErrorLog] = useState([])
  const [accessCode, setAccessCode] = useState("********")
  const [securityLevel, setSecurityLevel] = useState("HIGH")
  const containerRef = useRef(null)
  const matrixCanvasRef = useRef(null)
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const randomChars = "!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~"
      if (Math.random() > 0.7) {
        const glitched = "404".split("").map(char => 
          Math.random() > 0.3 ? char : randomChars[Math.floor(Math.random() * randomChars.length)]
        ).join("")
        setGlitchText(glitched)
        
        setTimeout(() => {
          setGlitchText("404")
        }, 150)
      }
    }, 300)
    
    const binaryInterval = setInterval(() => {
      let newBinary = ""
      for (let i = 0; i < 32; i++) {
        newBinary += Math.floor(Math.random() * 2)
      }
      setBinaryStream(newBinary)
    }, 100)
    
    const accessInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const chars = "ABCDEF0123456789"
        let newCode = ""
        for (let i = 0; i < 8; i++) {
          newCode += chars[Math.floor(Math.random() * chars.length)]
        }
        setAccessCode(newCode)
      }
    }, 1000)
    
    const securityInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        const levels = ["CRITICAL", "HIGH", "BREACH"]
        setSecurityLevel(levels[Math.floor(Math.random() * levels.length)])
      } else {
        setSecurityLevel("HIGH")
      }
    }, 2000)
    
    const errorMessages = [
      "ERROR: Page not found in database",
      "WARNING: Invalid route detected [0x8F2E]",
      "SECURITY: Access verification failed",
      "SYSTEM: Unable to locate requested resource",
      "TRACE: IP tracked and logged [PROTOCOL 7]",
      "ERROR: Navigation path corrupted",
      "WARN: Unauthorized access attempt detected",
      "CRITICAL: Endpoint corrupted or missing",
      "ALERT: Security scan initiated",
      "SYSTEM: Breach protocol activated"
    ]
    
    let currentLog = []
    const logInterval = setInterval(() => {
      if (currentLog.length < errorMessages.length) {
        currentLog = [...currentLog, errorMessages[currentLog.length]]
        setErrorLog([...currentLog])
      } else if (Math.random() > 0.7) {
        const randomIndex = Math.floor(Math.random() * errorMessages.length)
        const newMessage = `${errorMessages[randomIndex]} [${Math.floor(Math.random() * 1000).toString().padStart(4, '0')}]`
        currentLog.push(newMessage)
        setErrorLog([...currentLog.slice(-10)])
      }
    }, 700)
    
    if (matrixCanvasRef.current) {
      const canvas = matrixCanvasRef.current
      const ctx = canvas.getContext("2d")
      
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      const columns = Math.floor(canvas.width / 20)
      const drops = []
      
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100)
      }
      
      const matrix = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = "#00ff41"
        ctx.font = "15px monospace"
        
        for (let i = 0; i < drops.length; i++) {
          const text = Math.random() > 0.98 ? 
            "CRITICAL" : 
            Math.random() > 0.5 ? "0" : "1"
          
          ctx.fillText(text, i * 20, drops[i] * 20)
          
          if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
            drops[i] = 0
          }
          
          drops[i]++
        }
      }
      
      const matrixInterval = setInterval(matrix, 100)
      
      const handleResize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      
      window.addEventListener("resize", handleResize)
      
      return () => {
        clearInterval(glitchInterval)
        clearInterval(binaryInterval)
        clearInterval(logInterval)
        clearInterval(matrixInterval)
        clearInterval(accessInterval)
        clearInterval(securityInterval)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])
  
  return (
    <div className="nf-page">
      <canvas ref={matrixCanvasRef} className="nf-matrix-canvas"></canvas>
      
      <div className="nf-container">
        <div className="nf-header-bar">
          <div className="nf-header-item">
            <FaTerminal className="nf-small-icon" />
            <span>SECURITY ALERT</span>
          </div>
          <div className="nf-header-item">
            <span className="nf-code-text">ACCESS: {accessCode}</span>
          </div>
          <div className="nf-header-item">
            <span className={`nf-security-level nf-level-${securityLevel.toLowerCase()}`}>
              THREAT LEVEL: {securityLevel}
            </span>
          </div>
        </div>
        
        <div className="nf-panel">
          <div className="nf-binary-stream">{binaryStream}</div>
          
          <div className="nf-grid-container">
            <div className="nf-left-panel">
              <div className="nf-system-stats">
                <div className="nf-stat-item">
                  <FaNetworkWired className="nf-stat-icon" />
                  <div className="nf-stat-data">
                    <div className="nf-stat-label">NETWORK</div>
                    <div className="nf-stat-value">
                      DISCONNECTED
                      <div className="nf-progress-bar">
                        <div className="nf-progress-fill" style={{width: "23%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="nf-stat-item">
                  <FaServer className="nf-stat-icon" />
                  <div className="nf-stat-data">
                    <div className="nf-stat-label">SERVER</div>
                    <div className="nf-stat-value">
                      ERROR STATE
                      <div className="nf-progress-bar">
                        <div className="nf-progress-fill nf-error" style={{width: "67%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="nf-stat-item">
                  <FaLock className="nf-stat-icon" />
                  <div className="nf-stat-data">
                    <div className="nf-stat-label">SECURITY</div>
                    <div className="nf-stat-value">
                      COMPROMISED
                      <div className="nf-progress-bar">
                        <div className="nf-progress-fill nf-critical" style={{width: "89%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="nf-center-panel">
              <div className="nf-error-icon">
                <FaExclamationTriangle className="nf-warning-icon" />
              </div>
              
              <h1 className="nf-glitch-text">
                <span className="nf-glitch-text-before" aria-hidden="true">404</span>
                {glitchText}
                <span className="nf-glitch-text-after" aria-hidden="true">404</span>
              </h1>
              
              <div className="nf-glitch-line"></div>
              
              <h2 className="nf-subtitle">SYSTEM ERROR: PAGE NOT FOUND</h2>
              
              <p className="nf-error-message">
                The requested resource could not be located on this server.
                <br />
                <span className="nf-highlight">Access denied. Security protocols engaged.</span>
              </p>
            </div>
            
            <div className="nf-right-panel">
              <div className="nf-console">
                <div className="nf-console-header">
                  <span className="nf-console-title">SYSTEM LOG</span>
                  <div className="nf-console-controls">
                    <span className="nf-console-dot"></span>
                    <span className="nf-console-dot"></span>
                    <span className="nf-console-dot"></span>
                  </div>
                </div>
                <div className="nf-console-body">
                  {errorLog.map((log, index) => (
                    <div key={index} className="nf-log-entry">
                      <span className="nf-log-time">[{Math.floor(Math.random() * 24).toString().padStart(2, '0')}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}]</span>
                      <span className="nf-log-text">{log}</span>
                    </div>
                  ))}
                  <div className="nf-console-cursor"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="nf-action-panel">
            <div className="nf-action-buttons">
              <a href="/" className="nf-cyber-button">
                <span className="nf-button-icon"><FaHome /></span>
                <span className="nf-button-text">Return to Base</span>
              </a>
              <a href="/search" className="nf-cyber-button nf-outline">
                <span className="nf-button-icon"><FaSearch /></span>
                <span className="nf-button-text">Scan System</span>
              </a>
            </div>
            
            <div className="nf-security-badge">
              <div className="nf-badge-content">
                <FaShieldAlt className="nf-shield-icon" />
                <span>CYBERSECURITY PROTOCOL</span>
              </div>
              <div className="nf-badge-id">ID: CS-{Math.floor(Math.random() * 100000).toString().padStart(6, '0')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}