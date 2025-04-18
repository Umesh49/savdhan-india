"use client"

import { useEffect, useState, useRef } from "react"
import { FaShieldAlt, FaLock, FaServer, FaUserShield } from "react-icons/fa"
import './LoadingSpinner.css'

export default function LoadingSpinner() {
  const [binaryStream, setBinaryStream] = useState("")
  const [loadingText, setLoadingText] = useState("System initializing...")
  const [securityTip, setSecurityTip] = useState("")
  const [progress, setProgress] = useState(0)
  const loadingRef = useRef(null)
  
  const securityTips = [
    "Use unique passwords for all accounts",
    "Enable two-factor authentication",
    "Keep your software updated",
    "Be careful with suspicious emails",
    "Use a password manager",
    "Check for HTTPS before entering sensitive information",
    "Back up your data regularly",
    "Use a VPN on public networks",
    "Monitor your accounts for suspicious activity",
    "Use encrypted communication when possible",
    "Disable unused services and accounts"
  ]
  
  useEffect(() => {
    const binaryInterval = setInterval(() => {
      let newBinary = ""
      for (let i = 0; i < 32; i++) {
        newBinary += Math.floor(Math.random() * 2)
      }
      setBinaryStream(newBinary)
    }, 50)
    
    const loadingTexts = [
      "System initializing...",
      "Establishing secure connection...",
      "Scanning for threats...",
      "Authenticating user...",
      "Decrypting data...",
      "Verifying integrity...",
      "Loading secure environment...",
      "Applying security protocols..."
    ]
    
    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length
      setLoadingText(loadingTexts[textIndex])
    }, 1000)
    
    const tipInterval = setInterval(() => {
      setSecurityTip(securityTips[Math.floor(Math.random() * securityTips.length)])
    }, 3000)
    
    setSecurityTip(securityTips[Math.floor(Math.random() * securityTips.length)])
    
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1
        return newProgress > 100 ? 0 : newProgress
      })
    }, 150)
    
    return () => {
      clearInterval(binaryInterval)
      clearInterval(textInterval)
      clearInterval(tipInterval)
      clearInterval(progressInterval)
    }
  }, [])
  
  return (
    <div className="savdhan-load-spin-container">
      <div className="savdhan-load-spin-binary-stream">{binaryStream}</div>
      
      <div className="savdhan-load-spin-icons-container">
        <div className={`savdhan-load-spin-icon-wrapper ${progress > 25 ? 'savdhan-load-spin-active' : ''}`}>
          <FaServer className="savdhan-load-spin-step-icon" />
        </div>
        <div className={`savdhan-load-spin-icon-wrapper ${progress > 50 ? 'savdhan-load-spin-active' : ''}`}>
          <FaUserShield className="savdhan-load-spin-step-icon" />
        </div>
        <div className={`savdhan-load-spin-icon-wrapper ${progress > 75 ? 'savdhan-load-spin-active' : ''}`}>
          <FaLock className="savdhan-load-spin-step-icon" />
        </div>
      </div>
      
      <div className="savdhan-load-spin-cyber-shield">
        <div className="savdhan-load-spin-shield-icon">
          <FaShieldAlt />
        </div>
        <div className="savdhan-load-spin-spinner-ring"></div>
        <div className="savdhan-load-spin-spinner-ring savdhan-load-spin-outer"></div>
      </div>
      
      <div className="savdhan-load-spin-loading-text">{loadingText}</div>
      
      <div className="savdhan-load-spin-progress-container">
        <div 
          className="savdhan-load-spin-progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
        <div className="savdhan-load-spin-progress-text">{progress}%</div>
      </div>
      
      <div className="savdhan-load-spin-security-tip">
        <FaLock className="savdhan-load-spin-tip-icon" />
        <span>{securityTip}</span>
      </div>
    </div>
  )
}