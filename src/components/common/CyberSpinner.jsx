"use client"
import { useState, useEffect, useMemo } from "react"
import { FaShieldAlt, FaLock, FaExclamationTriangle, FaFingerprint, FaKey, FaUserShield } from "react-icons/fa"

function CyberSpinner({ size = "medium", text = "Securing data...", showBinary = true, variant = "green" }) {
  const [binaryStream, setBinaryStream] = useState("")
  const [currentIcon, setCurrentIcon] = useState(0)
  
  // Enhanced icon set for cybersecurity theme
  const securityIcons = [
    <FaShieldAlt key="shield" />,
    <FaLock key="lock" />,
    <FaFingerprint key="fingerprint" />,
    <FaKey key="key" />,
    <FaUserShield key="usershield" />,
    <FaExclamationTriangle key="warning" />
  ]

  // Size configuration
  const sizeConfig = useMemo(() => {
    switch(size) {
      case "small":
        return { 
          spinner: 40, 
          icon: "1rem", 
          ringInner: 25, 
          ringOuter: 35, 
          binaryLength: 12,
          borderWidth: 1
        }
      case "large":
        return { 
          spinner: 100, 
          icon: "2.5rem", 
          ringInner: 70, 
          ringOuter: 90, 
          binaryLength: 32,
          borderWidth: 3
        }
      default: // medium
        return { 
          spinner: 60, 
          icon: "1.5rem", 
          ringInner: 40, 
          ringOuter: 55, 
          binaryLength: 24,
          borderWidth: 2
        }
    }
  }, [size])

  // Color themes
  const colorThemes = useMemo(() => ({
    green: {
      main: "#00ff41",
      glow: "rgba(0, 255, 65, 0.7)",
      secondary: "rgba(0, 200, 50, 0.8)"
    },
    blue: {
      main: "#0cebff",
      glow: "rgba(12, 235, 255, 0.7)",
      secondary: "rgba(0, 119, 255, 0.8)"
    },
    purple: {
      main: "#ff00ff",
      glow: "rgba(255, 0, 255, 0.7)",
      secondary: "rgba(200, 0, 200, 0.8)"
    },
    red: {
      main: "#ff0055",
      glow: "rgba(255, 0, 85, 0.7)",
      secondary: "rgba(200, 0, 50, 0.8)"
    }
  }), [])

  const colors = colorThemes[variant] || colorThemes.green

  // Generate binary stream with enhanced patterns
  useEffect(() => {
    if (showBinary) {
      const generateBinary = () => {
        let binary = ""
        // Create patterns in the binary (not just random)
        for (let i = 0; i < sizeConfig.binaryLength; i++) {
          if (i % 8 === 0 && Math.random() > 0.5) {
            // Add common binary patterns occasionally
            const patterns = ["101", "110", "010", "001", "111", "000"]
            binary += patterns[Math.floor(Math.random() * patterns.length)]
            i += 2 // Skip next two iterations
          } else {
            binary += Math.round(Math.random()) === 1 ? "1" : "0"
          }
        }
        setBinaryStream(binary)
      }

      generateBinary()
      const interval = setInterval(generateBinary, 800)
      return () => clearInterval(interval)
    }
  }, [showBinary, sizeConfig.binaryLength])

  // Rotate icons with variable timing
  useEffect(() => {
    // Randomize the interval a bit for more dynamic feel
    const interval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % securityIcons.length)
    }, 2000 + Math.random() * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="cyber-spinner-container">
      <div className="cyber-spinner">
        <div className="spinner-icon">
          {securityIcons[currentIcon]}
        </div>
        <div className="spinner-ring inner"></div>
        <div className="spinner-ring outer"></div>
        <div className="spinner-glow"></div>
        
        {/* Add cyber scanline effect */}
        <div className="spinner-scanline"></div>
      </div>
      
      {text && <div className="spinner-text">{text}</div>}
      
      {showBinary && (
        <div className="binary-stream">
          <span className="highlight">{binaryStream.substring(0, 3)}</span>
          {binaryStream.substring(3)}
        </div>
      )}

      <style jsx>{`
        .cyber-spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .cyber-spinner {
          position: relative;
          width: ${sizeConfig.spinner}px;
          height: ${sizeConfig.spinner}px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .spinner-icon {
          font-size: ${sizeConfig.icon};
          color: ${colors.main};
          z-index: 2;
          animation: pulse 2s infinite;
          filter: drop-shadow(0 0 5px ${colors.glow});
        }
        
        .spinner-ring {
          position: absolute;
          border-radius: 50%;
          animation: rotate 2s linear infinite;
        }
        
        .spinner-ring.inner {
          width: ${sizeConfig.ringInner}px;
          height: ${sizeConfig.ringInner}px;
          border: ${sizeConfig.borderWidth}px solid transparent;
          border-top-color: ${colors.main};
          border-right-color: ${colors.main}60;
        }
        
        .spinner-ring.outer {
          width: ${sizeConfig.ringOuter}px;
          height: ${sizeConfig.ringOuter}px;
          border: ${Math.max(1, sizeConfig.borderWidth - 1)}px solid transparent;
          border-bottom-color: ${colors.secondary};
          border-left-color: ${colors.secondary}60;
          animation: rotate 3s linear infinite reverse;
        }
        
        .spinner-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: 0 0 15px ${colors.glow}50, 0 0 30px ${colors.glow}30;
          animation: pulse 2s infinite alternate;
        }
        
        .spinner-scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: ${colors.main}80;
          animation: scanline 2s linear infinite;
          opacity: 0.7;
        }

        .spinner-text {
          margin-top: 1rem;
          font-family: 'JetBrains Mono', monospace;
          color: ${colors.main};
          font-size: 0.9rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: flicker 4s linear infinite;
          position: relative;
        }
        
        .spinner-text::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -15px;
          width: 8px;
          height: 2px;
          background-color: ${colors.main};
          animation: blink 1s infinite;
        }
        
        .spinner-text::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -15px;
          width: 8px;
          height: 2px;
          background-color: ${colors.main};
          animation: blink 1s infinite reverse;
        }
        
        .binary-stream {
          margin-top: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: ${colors.secondary};
          letter-spacing: 2px;
          text-align: center;
          max-width: 100%;
          overflow: hidden;
        }
        
        .binary-stream .highlight {
          color: ${colors.main};
          text-shadow: 0 0 5px ${colors.glow};
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-50%); opacity: 0.5; }
          50% { transform: translateY(50%); opacity: 1; }
          100% { transform: translateY(150%); opacity: 0.5; }
        }
        
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.8;
          }
        }
        
        @keyframes blink {
          0%, 49% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .binary-stream {
            max-width: 90vw;
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  )
}

export default CyberSpinner