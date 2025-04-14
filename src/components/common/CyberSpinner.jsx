"use client"
import { useState, useEffect } from "react"
import { FaShieldAlt, FaLock, FaExclamationTriangle } from "react-icons/fa"
import { useTheme } from "../contexts/ThemeContext"

function CyberSpinner({ size = "medium", text = "Securing data...", showBinary = true }) {
  const { colors, accentColor } = useTheme()
  const [binaryStream, setBinaryStream] = useState("")
  const [currentIcon, setCurrentIcon] = useState(0)
  
  // Icon rotation
  const securityIcons = [
    <FaShieldAlt key="shield" />,
    <FaLock key="lock" />,
    <FaExclamationTriangle key="warning" />
  ]

  // Size classes
  const sizeClass = 
    size === "small" ? "small" : 
    size === "large" ? "large" : 
    "medium"

  // Generate random binary stream
  useEffect(() => {
    if (showBinary) {
      const generateBinary = () => {
        let binary = ""
        const length = size === "small" ? 12 : size === "large" ? 32 : 24
        for (let i = 0; i < length; i++) {
          binary += Math.round(Math.random()) === 1 ? "1" : "0"
        }
        setBinaryStream(binary)
      }

      // Initial binary
      generateBinary()

      // Update binary every second
      const interval = setInterval(generateBinary, 1000)
      return () => clearInterval(interval)
    }
  }, [size, showBinary])

  // Rotate icons
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % securityIcons.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Get primary color based on accent selection
  const getMainColor = () => {
    switch(accentColor) {
      case "blue": return "#0cebff"
      case "purple": return "#ff00ff"
      default: return "#00ff41" // Green default
    }
  }

  return (
    <div className="cyber-spinner-container">
      <div className={`cyber-spinner ${sizeClass}`}>
        <div className="spinner-icon">
          {securityIcons[currentIcon]}
        </div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring outer"></div>
        <div className="spinner-glow"></div>
      </div>
      
      {text && <div className="spinner-text">{text}</div>}
      
      {showBinary && <div className="binary-stream">{binaryStream}</div>}

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
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .cyber-spinner.small {
          width: 40px;
          height: 40px;
        }
        
        .cyber-spinner.large {
          width: 100px;
          height: 100px;
        }
        
        .spinner-icon {
          font-size: 1.5rem;
          color: ${getMainColor()};
          z-index: 2;
          animation: pulse 2s infinite;
        }
        
        .cyber-spinner.small .spinner-icon {
          font-size: 1rem;
        }
        
        .cyber-spinner.large .spinner-icon {
          font-size: 2.5rem;
        }
        
        .spinner-ring {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid transparent;
          border-top-color: ${getMainColor()};
          border-radius: 50%;
          animation: rotate 1.5s linear infinite;
        }
        
        .cyber-spinner.small .spinner-ring {
          width: 25px;
          height: 25px;
          border-width: 1px;
        }
        
        .cyber-spinner.large .spinner-ring {
          width: 70px;
          height: 70px;
          border-width: 3px;
        }
        
        .spinner-ring.outer {
          width: 55px;
          height: 55px;
          border: 1px solid transparent;
          border-bottom-color: ${getMainColor()}80; /* 50% opacity */
          animation: rotate 2s linear infinite reverse;
        }
        
        .cyber-spinner.small .spinner-ring.outer {
          width: 35px;
          height: 35px;
        }
        
        .cyber-spinner.large .spinner-ring.outer {
          width: 90px;
          height: 90px;
          border-width: 2px;
        }
        
        .spinner-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: 0 0 15px ${getMainColor()}50, 0 0 30px ${getMainColor()}30;
          animation: pulse 2s infinite alternate;
        }

        .spinner-text {
          margin-top: 1rem;
          font-family: 'JetBrains Mono', monospace;
          color: ${getMainColor()};
          font-size: 0.9rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: flicker 3s linear infinite;
        }
        
        .binary-stream {
          margin-top: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: ${getMainColor()}aa; /* 67% opacity */
          letter-spacing: 2px;
          text-align: center;
          max-width: 100%;
          overflow: hidden;
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
        
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: 1;
          }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.8;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .cyber-spinner.large {
            width: 80px;
            height: 80px;
          }
          
          .cyber-spinner.large .spinner-icon {
            font-size: 2rem;
          }
          
          .cyber-spinner.large .spinner-ring {
            width: 60px;
            height: 60px;
          }
          
          .cyber-spinner.large .spinner-ring.outer {
            width: 75px;
            height: 75px;
          }
          
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