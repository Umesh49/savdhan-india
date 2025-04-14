"use client"

import { useState, useEffect } from "react"
import { FaShieldAlt, FaExclamationTriangle, FaInfoCircle, FaCheck, FaTimes } from "react-icons/fa"

const alertTypes = {
  warning: {
    icon: <FaExclamationTriangle />,
    color: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-400/10"
  },
  danger: {
    icon: <FaExclamationTriangle />,
    color: "text-red-500",
    borderColor: "border-red-500",
    bgColor: "bg-red-500/10"
  },
  info: {
    icon: <FaInfoCircle />,
    color: "text-blue-400",
    borderColor: "border-blue-400",
    bgColor: "bg-blue-400/10"
  },
  success: {
    icon: <FaCheck />,
    color: "text-green-500",
    borderColor: "border-green-500",
    bgColor: "bg-green-500/10"
  }
}

function CyberAlert({ 
  type = "info", 
  title, 
  message, 
  autoClose = false, 
  duration = 5000,
  onClose
}) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(100)
  const [typewriterContent, setTypewriterContent] = useState("")
  const [typewriterDone, setTypewriterDone] = useState(false)
  
  const alertStyle = alertTypes[type] || alertTypes.info
  
  // Handle auto close
  useEffect(() => {
    if (!autoClose) return
    
    const timer = setTimeout(() => {
      handleClose()
    }, duration)
    
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(prev - (100 / (duration / 100)), 0))
    }, 100)
    
    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [autoClose, duration])
  
  // Typewriter effect for console-like experience
  useEffect(() => {
    if (!message) return
    
    let index = 0
    const timer = setInterval(() => {
      if (index < message.length) {
        setTypewriterContent(prev => prev + message.charAt(index))
        index++
      } else {
        clearInterval(timer)
        setTypewriterDone(true)
      }
    }, 30)
    
    return () => clearInterval(timer)
  }, [message])
  
  const handleClose = () => {
    setVisible(false)
    if (onClose) {
      setTimeout(() => {
        onClose()
      }, 300)
    }
  }
  
  if (!visible) return null
  
  return (
    <div 
      className={`relative flex flex-col w-full max-w-md overflow-hidden border ${alertStyle.borderColor} rounded-md backdrop-blur-sm animate-fadeIn ${alertStyle.bgColor}`}
    >
      {/* Alert Header */}
      <div className={`flex items-center justify-between p-3 border-b ${alertStyle.borderColor} font-mono`}>
        <div className="flex items-center gap-2">
          <span className={`${alertStyle.color}`}>
            {alertStyle.icon}
          </span>
          <span className={`text-sm uppercase font-bold ${alertStyle.color}`}>
            {title || type}
          </span>
        </div>
        <button 
          onClick={handleClose}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close alert"
        >
          <FaTimes size={14} />
        </button>
      </div>
      
      {/* Alert Body */}
      <div className="p-4 font-mono">
        <div className="flex gap-2">
          <div className={`${alertStyle.color} mt-1`}>
            <FaShieldAlt />
          </div>
          <div className="text-sm text-gray-200">
            {typewriterContent}
            {!typewriterDone && (
              <span className="inline-block w-2 h-4 ml-1 bg-green-500 animate-blink"></span>
            )}
          </div>
        </div>
      </div>
      
      {/* Progress bar for auto-close */}
      {autoClose && (
        <div className="h-1 w-full bg-black/50">
          <div 
            className={`h-full ${alertStyle.bgColor}`} 
            style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
          ></div>
        </div>
      )}
    </div>
  )
}

export default CyberAlert