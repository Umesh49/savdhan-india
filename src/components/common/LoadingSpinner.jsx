"use client"

import { useEffect, useState, useRef } from "react"
import { FaShieldAlt, FaLock } from "react-icons/fa"

function LoadingSpinner() {
  const [binaryStream, setBinaryStream] = useState("")
  const [loadingText, setLoadingText] = useState("System initializing...")
  const [securityTip, setSecurityTip] = useState("")
  const loadingRef = useRef(null)
  
  const securityTips = [
    "Use unique passwords for all accounts",
    "Enable two-factor authentication",
    "Keep your software updated",
    "Be careful with suspicious emails",
    "Use a password manager",
    "Check for HTTPS before entering sensitive information",
    "Back up your data regularly",
    "Use a VPN on public networks"
  ]
  
  useEffect(() => {
    // Binary stream animation
    const binaryInterval = setInterval(() => {
      let newBinary = ""
      for (let i = 0; i < 32; i++) {
        newBinary += Math.floor(Math.random() * 2)
      }
      setBinaryStream(newBinary)
    }, 100)
    
    // Loading text animation
    const loadingTexts = [
      "System initializing...",
      "Establishing secure connection...",
      "Scanning for threats...",
      "Authenticating user...",
      "Decrypting data...",
      "Loading secure environment..."
    ]
    
    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length
      setLoadingText(loadingTexts[textIndex])
    }, 2000)
    
    // Random security tip
    setSecurityTip(securityTips[Math.floor(Math.random() * securityTips.length)])
    
    // Cleanup
    return () => {
      clearInterval(binaryInterval)
      clearInterval(textInterval)
    }
  }, [])
  
  return (
    <div className="loading-container">
      <div className="binary-stream">{binaryStream}</div>
      
      <div className="cyber-shield">
        <div className="shield-icon">
          <FaShieldAlt />
        </div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring outer"></div>
      </div>
      
      <div className="loading-text">{loadingText}</div>
      
      <div className="security-tip">
        <FaLock className="tip-icon" />
        <span>{securityTip}</span>
      </div>
      
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          padding: 2rem;
          background-color: rgba(0, 0, 0, 0.85);
          border: 1px solid #00ff41;
          border-radius: 4px;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
          position: relative;
          overflow: hidden;
        }
        
        .binary-stream {
          font-family: monospace;
          font-size: 0.8rem;
          color: #00ff41;
          opacity: 0.7;
          position: absolute;
          top: 10px;
          width: 100%;
          text-align: center;
          letter-spacing: 2px;
        }
        
        .cyber-shield {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
        }
        
        .shield-icon {
          font-size: 2.5rem;
          color: #00ff41;
          z-index: 2;
          animation: pulse 2s infinite;
        }
        
        .spinner-ring {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid transparent;
          border-top-color: #00ff41;
          border-radius: 50%;
          animation: rotate 1.5s linear infinite;
        }
        
        .spinner-ring.outer {
          width: 75px;
          height: 75px;
          border: 1px solid transparent;
          border-bottom-color: rgba(0, 255, 65, 0.5);
          animation: rotate 2s linear infinite reverse;
        }
        
        .loading-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          color: #00ff41;
          margin: 1rem 0;
          text-align: center;
          min-height: 28px;
          position: relative;
        }
        
        .loading-text:after {
          content: "";
          display: inline-block;
          width: 8px;
          height: 16px;
          background-color: #00ff41;
          margin-left: 5px;
          animation: blink 1s infinite;
        }
        
        .security-tip {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: rgba(0, 255, 65, 0.8);
          margin-top: 1rem;
          max-width: 300px;
          text-align: center;
          padding: 0.5rem;
          border: 1px dashed rgba(0, 255, 65, 0.3);
          border-radius: 4px;
        }
        
        .tip-icon {
          flex-shrink: 0;
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
        
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .loading-container {
            min-height: 250px;
            padding: 1.5rem;
          }
          
          .cyber-shield {
            width: 60px;
            height: 60px;
          }
          
          .shield-icon {
            font-size: 2rem;
          }
          
          .spinner-ring {
            width: 50px;
            height: 50px;
          }
          
          .spinner-ring.outer {
            width: 65px;
            height: 65px;
          }
          
          .loading-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner