"use client"

import { useState, useEffect, useRef } from "react"
import { FaShieldAlt, FaLock, FaServer, FaGlobe, FaCode, FaFingerprint, FaTerminal, FaKey } from "react-icons/fa"
import { IoWarning } from "react-icons/io5"
import { RiRadarLine } from "react-icons/ri"

function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing system components...")
  const [scanningComplete, setScanningComplete] = useState(false)
  const [securityChecks, setSecurityChecks] = useState([])
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const hexGridRef = useRef(null)
  const matrixBackgroundRef = useRef(null)
  
  // Password validation - in real app would connect to auth service
  const correctPassword = "savdhaan"
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    setIsAuthenticating(true)
    setPasswordError("")
    
    // Simulate authentication delay
    setTimeout(() => {
      if (password === correctPassword) {
        setShowPasswordPrompt(false)
        startSystemInitialization()
      } else {
        setPasswordError("Access denied. Invalid credentials.")
        setIsAuthenticating(false)
      }
    }, 1500)
  }
  
  // Generate matrix digital rain effect
  useEffect(() => {
    if (!matrixBackgroundRef.current || !showPasswordPrompt) return
    
    const canvas = matrixBackgroundRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]|;:,.<>?/"
    const fontSize = 14
    const columns = canvas.width / fontSize
    
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100)
    }
    
    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = "#00ff41"
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }
    
    const matrixInterval = setInterval(drawMatrix, 50)
    
    return () => clearInterval(matrixInterval)
  }, [showPasswordPrompt])

  // Generate security check messages
  useEffect(() => {
    const checks = [
      { id: 1, text: "Securing network perimeter...", complete: false },
      { id: 2, text: "Initializing threat detection...", complete: false },
      { id: 3, text: "Loading cryptographic modules...", complete: false },
      { id: 4, text: "Verifying biometric signatures...", complete: false },
      { id: 5, text: "Establishing quantum-secure channels...", complete: false },
      { id: 6, text: "Generating zero-knowledge proofs...", complete: false },
    ]
    setSecurityChecks(checks)
  }, [])

  // Generate hex grid cells
  useEffect(() => {
    const generateHexGrid = () => {
      if (!hexGridRef.current) return
      hexGridRef.current.innerHTML = ""
      
      const numHexagons = 40
      for (let i = 0; i < numHexagons; i++) {
        const hex = document.createElement("div")
        hex.className = "hex-cell"
        hex.style.animationDelay = `${Math.random() * 5}s`
        hex.style.top = `${Math.random() * 100}%`
        hex.style.left = `${Math.random() * 100}%`
        hex.style.opacity = `${Math.random() * 0.5 + 0.1}`
        hexGridRef.current.appendChild(hex)
      }
    }

    if (!showPasswordPrompt) {
      generateHexGrid()
    }
  }, [showPasswordPrompt])

  // Main loading animation
  const startSystemInitialization = () => {
    const loadingTexts = [
      "Initializing system components...",
      "Establishing secure connection...",
      "Loading advanced security protocols...",
      "Scanning for potential threats...",
      "Deploying countermeasures...",
      "Launching Savdhaan India terminal..."
    ]

    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 1
      setProgress(currentProgress)

      // Update security checks at specific progress points
      if (currentProgress === 15) {
        setSecurityChecks(prev => 
          prev.map(check => check.id === 1 ? {...check, complete: true} : check)
        )
      }
      if (currentProgress === 30) {
        setSecurityChecks(prev => 
          prev.map(check => check.id === 2 ? {...check, complete: true} : check)
        )
      }
      if (currentProgress === 45) {
        setSecurityChecks(prev => 
          prev.map(check => check.id === 3 ? {...check, complete: true} : check)
        )
      }
      if (currentProgress === 60) {
        setSecurityChecks(prev => 
          prev.map(check => check.id === 4 ? {...check, complete: true} : check)
        )
      }
      if (currentProgress === 75) {
        setSecurityChecks(prev => 
          prev.map(check => check.id === 5 ? {...check, complete: true} : check)
        )
      }
      if (currentProgress === 90) {
        setSecurityChecks(prev => 
          prev.map(check => check.id === 6 ? {...check, complete: true} : check)
        )
      }

      // Update loading text
      if (currentProgress === 20) setLoadingText(loadingTexts[1])
      if (currentProgress === 40) setLoadingText(loadingTexts[2])
      if (currentProgress === 60) {
        setLoadingText(loadingTexts[3])
        setScanningComplete(true)
      }
      if (currentProgress === 80) setLoadingText(loadingTexts[4])
      if (currentProgress === 95) setLoadingText(loadingTexts[5])

      if (currentProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            onFinish()
          }, 1200)
        }, 800)
      }
    }, 40)
  }

  return (
    <div className={`splash-screen ${isExiting ? 'exiting' : ''}`}>
      {showPasswordPrompt ? (
        <>
          <canvas ref={matrixBackgroundRef} className="matrix-background"></canvas>
          
          <div className="auth-container">
            <div className="shield-icon auth-logo">
              <FaShieldAlt />
            </div>
            
            <h1 className="glitch-title" data-text="SAVDHAAN INDIA">
              SAVDHAAN INDIA
            </h1>
            <p className="tagline">ADVANCED CYBER SECURITY INITIATIVE</p>
            
            <form onSubmit={handlePasswordSubmit} className="password-form">
              <div className="form-header">
                <FaKey className="key-icon" />
                <span>AUTHENTICATION REQUIRED</span>
              </div>
              
              <div className="input-container">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code"
                  disabled={isAuthenticating}
                  autoFocus
                />
              </div>
              
              {passwordError && (
                <div className="error-message">
                  <IoWarning className="error-icon" />
                  {passwordError}
                </div>
              )}
              
              <button 
                type="submit" 
                className={`auth-button ${isAuthenticating ? 'authenticating' : ''}`}
                disabled={isAuthenticating || !password}
              >
                {isAuthenticating ? (
                  <>AUTHENTICATING <span className="auth-dots">...</span></>
                ) : (
                  <>AUTHORIZE ACCESS <FaTerminal /></>
                )}
              </button>
            </form>
          </div>
          
          <div className="binary-stream auth-stream">
            {Array(40)
              .fill()
              .map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="background-grid" ref={hexGridRef}></div>
          
          <div className="digital-noise"></div>
          
          <div className="splash-content">
            <div className="logo-container">
              <div className="shield-icon">
                <FaShieldAlt />
              </div>
              <div className="lock-icon">
                <FaLock />
              </div>
              <div className="radar-pulse">
                <RiRadarLine />
              </div>
            </div>

            <h1 className="glitch-title" data-text="SAVDHAAN INDIA">
              SAVDHAAN INDIA
            </h1>
            <p className="tagline">ADVANCED CYBER SECURITY INITIATIVE</p>

            <div className="system-status">
              <div className="status-row">
                <div className="status-icon">
                  <FaServer />
                </div>
                <div className="status-text">SYSTEM</div>
                <div className="status-indicator active">ONLINE</div>
              </div>
              <div className="status-row">
                <div className="status-icon">
                  <FaGlobe />
                </div>
                <div className="status-text">NETWORK</div>
                <div className="status-indicator active">SECURE</div>
              </div>
              <div className="status-row">
                <div className="status-icon">
                  <IoWarning />
                </div>
                <div className="status-text">THREATS</div>
                <div className="status-indicator scanning">SCANNING</div>
              </div>
              <div className="status-row">
                <div className="status-icon">
                  <FaFingerprint />
                </div>
                <div className="status-text">ACCESS</div>
                <div className="status-indicator active">VERIFIED</div>
              </div>
            </div>

            <div className="loading-container">
              <div className="loading-bar-container">
                <div className="loading-bar-track">
                  <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                  <div className="loading-glitch" style={{ left: `${progress}%` }}></div>
                </div>
              </div>

              <div className="loading-details">
                <p className="loading-text">{loadingText}</p>
                <p className="loading-percentage">{progress}%</p>
              </div>
            </div>

            <div className="security-checks">
              {securityChecks.map((check) => (
                <div key={check.id} className={`check-item ${check.complete ? 'complete' : ''}`}>
                  <div className="check-icon">
                    <FaCode className="pulse" />
                  </div>
                  <div className="check-text">{check.text}</div>
                  <div className="check-status">
                    {check.complete ? '[ COMPLETE ]' : '[ PENDING ]'}
                  </div>
                </div>
              ))}
            </div>

            <div className="binary-stream">
              {Array(25)
                .fill()
                .map((_, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                    {Math.random() > 0.7 
                      ? Math.random().toString(36).substring(2, 3) 
                      : Math.random() > 0.5 ? "1" : "0"}
                  </span>
                ))}
            </div>

            {scanningComplete && (
              <div className="scan-overlay">
                <div className="scan-line"></div>
              </div>
            )}
          </div>
        </>
      )}

      <style jsx>{`
        .splash-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #0a0e17;
          color: #d5ffe1;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: hidden;
          font-family: 'Courier New', monospace;
          transition: transform 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6),
                    opacity 0.8s ease;
        }
        
        .splash-screen.exiting {
          transform: scale(1.5);
          opacity: 0;
        }

        .matrix-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .auth-container {
          position: relative;
          z-index: 2;
          background-color: rgba(0, 0, 0, 0.8);
          padding: 3rem;
          border-radius: 8px;
          border: 1px solid rgba(0, 255, 65, 0.3);
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.2);
          max-width: 500px;
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(5px);
        }
        
        .auth-logo {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          animation: pulse 2s infinite, glow 3s infinite alternate;
        }
        
        .password-form {
          width: 100%;
          margin-top: 2rem;
        }
        
        .form-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
          color: #8effb5;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          border-bottom: 1px solid rgba(0, 255, 65, 0.3);
          padding-bottom: 0.5rem;
        }
        
        .key-icon {
          color: #00ff41;
        }
        
        .input-container {
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #00ff41;
        }
        
        .input-container input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 65, 0.4);
          border-radius: 4px;
          color: #00ff41;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
        }
        
        .input-container input:focus {
          outline: none;
          border-color: #00ff41;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
        }
        
        .input-container input:focus + .input-icon {
          animation: pulse 1.5s infinite;
        }
        
        .input-container input::placeholder {
          color: rgba(0, 255, 65, 0.5);
        }
        
        .error-message {
          color: #ff3e3e;
          background-color: rgba(255, 0, 0, 0.1);
          border: 1px solid rgba(255, 0, 0, 0.3);
          padding: 10px;
          margin-bottom: 1.5rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        .error-icon {
          color: #ff3e3e;
          animation: blink 1s infinite;
        }
        
        .auth-button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #003300, #006600);
          border: 1px solid rgba(0, 255, 65, 0.5);
          color: #00ff41;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 1rem;
          letter-spacing: 0.1em;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .auth-button:hover:not(:disabled) {
          background: linear-gradient(90deg, #004400, #008800);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.4);
        }
        
        .auth-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .auth-button.authenticating {
          background: linear-gradient(90deg, #004400, #008800);
        }
        
        .auth-dots {
          display: inline-block;
          width: 30px;
          text-align: left;
          animation: dotty 1.5s linear infinite;
        }
        
        .auth-stream {
          position: fixed;
          bottom: 30px;
          z-index: 3;
        }
        
        @keyframes dotty {
          0% { content: ''; }
          25% { content: '.'; }
          50% { content: '..'; }
          75% { content: '...'; }
          100% { content: ''; }
        }
        
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-3px, 0, 0); }
          40%, 60% { transform: translate3d(3px, 0, 0); }
        }

        .background-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .hex-cell {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: rgba(0, 255, 65, 0.03);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: pulse-hex 5s infinite;
          z-index: 1;
        }

        .digital-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          z-index: 2;
          pointer-events: none;
        }

        .splash-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          border-radius: 10px;
          background-color: rgba(10, 14, 23, 0.8);
          border: 1px solid rgba(0, 255, 65, 0.3);
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.2);
          backdrop-filter: blur(10px);
          max-width: 800px;
          width: 90%;
          z-index: 5;
          animation: fade-in 1s ease;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .logo-container {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .shield-icon {
          font-size: 4.5em;
          color: #00ff41;
          position: relative;
          z-index: 2;
          animation: pulse 2.5s infinite;
          opacity: 0.9;
        }

        .lock-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -40%);
          font-size: 1.8em;
          color: #fff;
          z-index: 3;
          animation: rotate 15s linear infinite, glow 2s infinite alternate;
        }

        .radar-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 8em;
          color: rgba(0, 255, 65, 0.15);
          animation: radar-spin 6s linear infinite;
          z-index: 1;
        }

        .glitch-title {
          position: relative;
          font-size: 3.2em;
          font-weight: bold;
          color: #fff;
          text-shadow: 0 0 5px #00ff41, 0 0 10px rgba(0, 255, 65, 0.5);
          margin-bottom: 0.5em;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: text-shadow-pulse 2s infinite alternate;
        }

        .glitch-title:before,
        .glitch-title:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          overflow: hidden;
        }

        .glitch-title:before {
          left: 2px;
          text-shadow: -2px 0 #ff00ff;
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }

        .glitch-title:after {
          left: -2px;
          text-shadow: 2px 0 #00ffff;
          animation: glitch-anim2 3.5s infinite linear alternate-reverse;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }

        .tagline {
          font-size: 1em;
          color: #8effb5;
          margin-bottom: 2em;
          letter-spacing: 0.15em;
          border-top: 1px solid rgba(0, 255, 65, 0.3);
          border-bottom: 1px solid rgba(0, 255, 65, 0.3);
          padding: 0.5em 2em;
        }

        .system-status {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          width: 100%;
          margin-bottom: 30px;
        }

        .status-row {
          display: flex;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(0, 255, 65, 0.2);
          padding: 8px 15px;
          border-radius: 4px;
        }

        .status-icon {
          margin-right: 10px;
          color: #00ff41;
          font-size: 1.2em;
        }

        .status-text {
          flex: 1;
          font-size: 0.8em;
          letter-spacing: 0.1em;
          color: #b3f0c4;
        }

        .status-indicator {
          font-size: 0.75em;
          font-weight: bold;
          letter-spacing: 0.1em;
          padding: 3px 8px;
          border-radius: 3px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .status-indicator.active {
          background-color: rgba(0, 255, 65, 0.2);
          color: #00ff41;
          animation: pulse 2s infinite;
        }

        .status-indicator.scanning {
          background-color: rgba(255, 204, 0, 0.2);
          color: #ffcc00;
          animation: blink 1s infinite;
        }

        .loading-container {
          width: 100%;
          margin-bottom: 20px;
        }

        .loading-bar-container {
          position: relative;
          width: 100%;
          margin-bottom: 15px;
        }

        .loading-bar-track {
          position: relative;
          height: 12px;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 65, 0.4);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.2) inset;
        }

        .loading-bar {
          height: 100%;
          background: linear-gradient(90deg, #00ff41, #39ff14);
          width: 0;
          border-radius: 6px;
          position: relative;
          transition: width 0.3s ease;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }

        .loading-bar:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.1) 10px,
            rgba(0, 0, 0, 0.1) 20px
          );
        }

        .loading-glitch {
          position: absolute;
          height: 100%;
          width: 4px;
          background-color: rgba(255, 255, 255, 0.9);
          top: 0;
          z-index: 3;
          filter: blur(1px);
          animation: glitch-flicker 0.3s infinite;
        }

        .loading-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .loading-text {
          font-size: 0.9em;
          color: #00ff41;
          flex: 1;
        }

        .loading-percentage {
          font-size: 1.2em;
          color: #fff;
          font-weight: bold;
          margin-left: 15px;
          text-shadow: 0 0 5px #00ff41;
        }

        .security-checks {
          width: 100%;
          max-height: 150px;
          overflow-y: auto;
          margin-bottom: 15px;
          scrollbar-width: thin;
          scrollbar-color: #00ff41 rgba(0, 0, 0, 0.2);
          padding-right: 5px;
        }

        .security-checks::-webkit-scrollbar {
          width: 5px;
        }

        .security-checks::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }

        .security-checks::-webkit-scrollbar-thumb {
          background: #00ff41;
        }

        .check-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          padding: 6px 10px;
          background-color: rgba(0, 0, 0, 0.3);
          border-left: 3px solid rgba(255, 255, 255, 0.2);
          font-size: 0.8em;
          transition: all 0.3s ease;
        }

        .check-item.complete {
            border-left-color: #00ff41;
            background-color: rgba(0, 255, 65, 0.1);
          }

          .check-icon {
            margin-right: 10px;
            color: #8effb5;
            font-size: 0.9em;
          }

          .check-item.complete .check-icon {
            color: #00ff41;
          }

          .check-text {
            flex: 1;
            color: #b3f0c4;
          }

          .check-status {
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0.6);
            margin-left: 10px;
          }

          .check-item.complete .check-status {
            color: #00ff41;
          }

          .check-item.complete .check-icon {
            animation: pulse 2s infinite;
          }

          .binary-stream {
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            overflow: hidden;
            height: 25px;
            font-family: monospace;
          }

          .binary-stream span {
            font-size: 0.9em;
            color: #00ff41;
            margin: 0 2px;
            animation: binary-fade 4s linear infinite;
            opacity: 0.6;
          }

          .scan-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none;
            overflow: hidden;
          }

          .scan-line {
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff41, #39ff14, transparent);
            box-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41;
            top: 0;
            animation: scan-down 3s ease-in-out infinite;
          }

          @keyframes pulse {
            0% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.7;
            }
          }

          @keyframes pulse-hex {
            0% {
              transform: scale(1);
              opacity: 0.03;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.05;
            }
            100% {
              transform: scale(1);
              opacity: 0.03;
            }
          }

          @keyframes rotate {
            from {
              transform: translate(-50%, -40%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -40%) rotate(360deg);
            }
          }

          @keyframes radar-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes glitch-anim {
            0% {
              clip: rect(42px, 9999px, 10px, 0);
              transform: skew(0.5deg);
            }
            10% {
              clip: rect(92px, 9999px, 40px, 0);
              transform: skew(-0.5deg);
            }
            20% {
              clip: rect(13px, 9999px, 41px, 0);
              transform: skew(0.8deg);
            }
            30% {
              clip: rect(80px, 9999px, 70px, 0);
              transform: skew(-0.8deg);
            }
            40% {
              clip: rect(80px, 9999px, 36px, 0);
              transform: skew(0.3deg);
            }
            50% {
              clip: rect(63px, 9999px, 62px, 0);
              transform: skew(-0.3deg);
            }
            60% {
              clip: rect(43px, 9999px, 85px, 0);
              transform: skew(0.5deg);
            }
            70% {
              clip: rect(44px, 9999px, 54px, 0);
              transform: skew(-0.5deg);
            }
            80% {
              clip: rect(12px, 9999px, 43px, 0);
              transform: skew(0.7deg);
            }
            90% {
              clip: rect(56px, 9999px, 33px, 0);
              transform: skew(-0.7deg);
            }
            100% {
              clip: rect(82px, 9999px, 75px, 0);
              transform: skew(0.5deg);
            }
          }

          @keyframes glitch-anim2 {
            0% {
              clip: rect(91px, 9999px, 73px, 0);
              transform: skew(0.5deg);
            }
            10% {
              clip: rect(45px, 9999px, 69px, 0);
              transform: skew(-0.5deg);
            }
            20% {
              clip: rect(75px, 9999px, 73px, 0);
              transform: skew(0.8deg);
            }
            30% {
              clip: rect(78px, 9999px, 45px, 0);
              transform: skew(-0.8deg);
            }
            40% {
              clip: rect(73px, 9999px, 23px, 0);
              transform: skew(0.3deg);
            }
            50% {
              clip: rect(71px, 9999px, 45px, 0);
              transform: skew(-0.3deg);
            }
            60% {
              clip: rect(93px, 9999px, 18px, 0);
              transform: skew(0.5deg);
            }
            70% {
              clip: rect(22px, 9999px, 43px, 0);
              transform: skew(-0.5deg);
            }
            80% {
              clip: rect(43px, 9999px, 32px, 0);
              transform: skew(0.7deg);
            }
            90% {
              clip: rect(40px, 9999px, 43px, 0);
              transform: skew(-0.7deg);
            }
            100% {
              clip: rect(82px, 9999px, 33px, 0);
              transform: skew(0.5deg);
            }
          }

          @keyframes text-shadow-pulse {
            0% {
              text-shadow: 0 0 5px #00ff41, 0 0 10px rgba(0, 255, 65, 0.5);
            }
            50% {
              text-shadow: 0 0 10px #00ff41, 0 0 20px rgba(0, 255, 65, 0.7);
            }
            100% {
              text-shadow: 0 0 5px #00ff41, 0 0 10px rgba(0, 255, 65, 0.5);
            }
          }

          @keyframes glow {
            from {
              filter: drop-shadow(0 0 2px #00ff41);
            }
            to {
              filter: drop-shadow(0 0 5px #00ff41);
            }
          }

          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes binary-fade {
            0%, 100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.6;
            }
          }

          @keyframes glitch-flicker {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes scan-down {
            0% {
              top: 0%;
            }
            100% {
              top: 100%;
            }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .splash-content {
              padding: 20px;
            }

            .glitch-title {
              font-size: 2.2em;
            }

            .system-status {
              grid-template-columns: 1fr;
            }
            
            .security-checks {
              max-height: 120px;
            }
            
            .auth-container {
              padding: 2rem;
            }
          }
        `}</style>
    </div>
  )
}

export default SplashScreen