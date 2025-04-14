"use client"

import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom" 
import { FaExclamationTriangle, FaHome, FaSearch, FaShieldAlt } from "react-icons/fa"

function NotFound() {
  const [glitchText, setGlitchText] = useState("404")
  const [binaryStream, setBinaryStream] = useState("")
  const [errorLog, setErrorLog] = useState([])
  const containerRef = useRef(null)
  
  useEffect(() => {
    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const randomChars = "!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~"
      if (Math.random() > 0.8) {
        // Temporary glitch the text
        const glitched = "404".split("").map(char => 
          Math.random() > 0.3 ? char : randomChars[Math.floor(Math.random() * randomChars.length)]
        ).join("")
        setGlitchText(glitched)
        
        // Reset after a short delay
        setTimeout(() => {
          setGlitchText("404")
        }, 200)
      }
    }, 500)
    
    // Binary stream effect
    const binaryInterval = setInterval(() => {
      let newBinary = ""
      for (let i = 0; i < 24; i++) {
        newBinary += Math.floor(Math.random() * 2)
      }
      setBinaryStream(newBinary)
    }, 100)
    
    // Fake error log
    const errorMessages = [
      "ERROR: Page not found in database",
      "WARNING: Invalid route detected",
      "SECURITY: Access verification failed",
      "SYSTEM: Unable to locate requested resource",
      "ERROR: Navigation path corrupted",
      "CRITICAL: Requested endpoint does not exist"
    ]
    
    let currentLog = []
    const logInterval = setInterval(() => {
      if (currentLog.length < errorMessages.length) {
        currentLog = [...currentLog, errorMessages[currentLog.length]]
        setErrorLog([...currentLog])
      }
    }, 700)
    
    // Matrix background effect
    if (containerRef.current) {
      const container = containerRef.current
      const createMatrixDrop = () => {
        const drop = document.createElement("div")
        drop.classList.add("matrix-drop")
        drop.style.left = `${Math.random() * 100}%`
        drop.style.animationDuration = `${Math.random() * 3 + 2}s`
        drop.textContent = Math.random() > 0.5 ? "0" : "1"
        container.appendChild(drop)
        
        // Remove after animation completes
        setTimeout(() => {
          if (drop && drop.parentNode === container) {
            container.removeChild(drop)
          }
        }, 5000)
      }
      
      // Create matrix drops at intervals
      const matrixInterval = setInterval(createMatrixDrop, 100)
      
      // Cleanup function
      return () => {
        clearInterval(glitchInterval)
        clearInterval(binaryInterval)
        clearInterval(logInterval)
        clearInterval(matrixInterval)
      }
    }
  }, [])
  
  return (
    <div className="not-found-page" ref={containerRef}>
      <div className="container">
        <div className="cyber-panel">
          <div className="binary-stream">{binaryStream}</div>
          
          <div className="error-icon">
            <FaExclamationTriangle className="warning-icon" />
          </div>
          
          <h1 className="cyber-text">{glitchText}</h1>
          <div className="glitch-line"></div>
          
          <h2 className="cyber-text">SYSTEM ERROR: PAGE NOT FOUND</h2>
          
          <div className="error-console">
            {errorLog.map((log, index) => (
              <div key={index} className="log-entry">
                <span className="log-time">[{Math.floor(Math.random() * 24).toString().padStart(2, '0')}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}]</span>
                <span className="log-text">{log}</span>
              </div>
            ))}
            <div className="console-cursor"></div>
          </div>
          
          <p className="error-message">The requested resource could not be located on this server. Access denied.</p>
          
          <div className="action-buttons">
            <Link to="/" className="cyber-button">
              <span className="button-icon"><FaHome /></span>
              <span className="button-text">Return to Base</span>
            </Link>
            <Link to="/search" className="cyber-button outline">
              <span className="button-icon"><FaSearch /></span>
              <span className="button-text">Scan System</span>
            </Link>
          </div>
          
          <div className="security-badge">
            <FaShieldAlt className="shield-icon" />
            <span>SAVDHAAN INDIA SECURITY PROTOCOL</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .not-found-page {
          min-height: 100vh;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
          overflow: hidden;
        }
        
        .container {
          width: 100%;
          max-width: 700px;
          position: relative;
          z-index: 10;
        }
        
        .matrix-drop {
          position: absolute;
          color: #00ff41;
          font-family: monospace;
          font-size: 14px;
          animation: matrix-fall linear forwards;
          opacity: 0.7;
        }
        
        .cyber-panel {
          background-color: rgba(0, 0, 0, 0.85);
          border: 2px solid #00ff41;
          border-radius: 4px;
          padding: 2rem;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 10px rgba(0, 255, 65, 0.2);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        
        .binary-stream {
          font-family: monospace;
          font-size: 0.8rem;
          color: #00ff41;
          opacity: 0.5;
          position: absolute;
          top: 10px;
          right: 10px;
          letter-spacing: 2px;
        }
        
        .error-icon {
          margin-bottom: 1rem;
        }
        
        .warning-icon {
          font-size: 4rem;
          color: #00ff41;
          animation: pulse 2s infinite;
        }
        
        .cyber-text {
          font-family: 'Orbitron', sans-serif;
          color: #00ff41;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.7);
          letter-spacing: 2px;
          margin: 0;
        }
        
        h1.cyber-text {
          font-size: 6rem;
          margin-bottom: 0;
          position: relative;
          font-weight: 700;
        }
        
        .glitch-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff41, transparent);
          margin: 1rem auto;
          width: 50%;
        }
        
        h2.cyber-text {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .error-console {
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 255, 65, 0.3);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 2rem;
          font-family: 'JetBrains Mono', monospace;
          color: #00ff41;
          font-size: 0.8rem;
          text-align: left;
          height: 120px;
          overflow: auto;
          position: relative;
        }
        
        .log-entry {
          margin-bottom: 0.5rem;
          display: flex;
          gap: 10px;
        }
        
        .log-time {
          opacity: 0.7;
        }
        
        .console-cursor {
          position: relative;
        }
        
        .console-cursor:after {
          content: "";
          display: inline-block;
          width: 8px;
          height: 16px;
          background-color: #00ff41;
          margin-left: 5px;
          animation: blink 1s infinite;
        }
        
        .error-message {
          color: rgba(0, 255, 65, 0.8);
          margin-bottom: 2rem;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .action-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .cyber-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #00ff41;
          color: #000;
          font-family: 'Orbitron', sans-serif;
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        
        .cyber-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }
        
        .cyber-button:hover:before {
          left: 100%;
        }
        
        .cyber-button:hover {
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);
          transform: translateY(-2px);
        }
        
        .cyber-button.outline {
          background-color: transparent;
          border: 1px solid #00ff41;
          color: #00ff41;
        }
        
        .cyber-button.outline:hover {
          background-color: rgba(0, 255, 65, 0.1);
        }
        
        .button-icon {
          display: flex;
          align-items: center;
        }
        
        .security-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(0, 255, 65, 0.6);
          font-size: 0.7rem;
          border-top: 1px dashed rgba(0, 255, 65, 0.3);
          padding-top: 1rem;
        }
        
        .shield-icon {
          font-size: 1rem;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100px); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .cyber-panel {
            padding: 1.5rem;
          }
          
          h1.cyber-text {
            font-size: 4rem;
          }
          
          h2.cyber-text {
            font-size: 1.2rem;
          }
          
          .warning-icon {
            font-size: 3rem;
          }
          
          .action-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .cyber-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default NotFound