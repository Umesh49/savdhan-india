"use client"

import { useState, useEffect, useRef } from "react"
import { 
  FaRobot, 
  FaUser, 
  FaPaperPlane, 
  FaTimes, 
  FaShieldAlt, 
  FaLock,
  FaTerminal,
  FaFingerprint,
  FaSatelliteDish
} from "react-icons/fa"
import './Chatbot.css'

function ChatbotWidget({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "SECURE CONNECTION ESTABLISHED. Welcome to CyberShield Protocol v3.7. I'm your Cybersecurity Assistant. How can I assist with threat detection or security concerns today?",
      time: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [securityScan, setSecurityScan] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  
  // Simulate a security scan when first loading
  useEffect(() => {
    setSecurityScan(true)
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setSecurityScan(false)
          return 100
        }
        return prev + 5
      })
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input when chat is ready
  useEffect(() => {
    if (!securityScan) {
      inputRef.current?.focus()
    }
  }, [securityScan])
  
  // Add some terminal-like glitch effects randomly
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const terminalElement = document.querySelector('.chatbot-terminal')
      if (terminalElement && Math.random() < 0.2) {
        terminalElement.classList.add('glitch-effect')
        setTimeout(() => {
          terminalElement.classList.remove('glitch-effect')
        }, 200)
      }
    }, 3000)
    
    return () => clearInterval(glitchInterval)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: input,
      time: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      // Simulate brief security scan of user input
      setTimeout(() => {
        setSecurityScan(true)
        setScanProgress(0)
        
        const scanInterval = setInterval(() => {
          setScanProgress(prev => {
            if (prev >= 100) {
              clearInterval(scanInterval)
              setSecurityScan(false)
              return 100
            }
            return prev + 10
          })
        }, 50)
        
        // Get bot response
        setTimeout(async () => {
          try {
            const response = await getChatbotResponse(input)
            
            // Add bot message after a short delay to simulate thinking
            const botMessage = {
              id: messages.length + 2,
              type: "bot",
              text: response.data.message || getCyberResponse(input),
              time: new Date(),
            }
            setMessages((prev) => [...prev, botMessage])
            setIsTyping(false)
            inputRef.current?.focus()
          } catch (error) {
            // Fallback to local responses if API fails
            const botMessage = {
              id: messages.length + 2,
              type: "bot",
              text: getCyberResponse(input),
              time: new Date(),
            }
            setMessages((prev) => [...prev, botMessage])
            setIsTyping(false)
            inputRef.current?.focus()
          }
        }, 800)
      }, 300)
    } catch (error) {
      // Handle error with cybersecurity theming
      setTimeout(() => {
        const errorMessage = {
          id: messages.length + 2,
          type: "bot",
          text: "CONNECTION BREACH DETECTED. Secure channel compromised. Rerouting through encrypted backup systems... Please retry your command through the secure terminal.",
          time: new Date(),
          isError: true
        }
        setMessages((prev) => [...prev, errorMessage])
        setIsTyping(false)
        inputRef.current?.focus()
      }, 1000)
    }
  }

  // Fallback responses with cybersecurity theming
  const getCyberResponse = (query) => {
    const lowerQuery = query.toLowerCase()
    
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      return "IDENTITY VERIFIED. Secure communication channel active. How may I assist with your cybersecurity requirements today?"
    } else if (lowerQuery.includes("laws") || lowerQuery.includes("regulations")) {
      return "LEGAL DATABASE ACCESSED.\n\nIndia's primary cybersecurity framework is the Information Technology Act, 2000 (IT Act), amended in 2008.\n\nKEY PROVISIONS:\n• Data protection regulations\n• Cybercrime penalties\n• Digital signature validation protocols\n• Critical infrastructure safeguards\n\nWould you like specific section details?"
    } else if (lowerQuery.includes("password") || lowerQuery.includes("secure")) {
      return "PASSWORD SECURITY PROTOCOL:\n\n• Minimum 16 characters\n• Multi-factor authentication required\n• Implement special character encryption\n• Avoid personal identifiers\n• Use quantum-resistant algorithms where possible\n• Rotate credentials every 60 days"
    } else if (lowerQuery.includes("hack") || lowerQuery.includes("attack")) {
      return "THREAT INTELLIGENCE ACTIVATED. Common attack vectors identified:\n\n• Phishing campaigns targeting financial credentials\n• Ransomware deployment via macro-enabled documents\n• Zero-day exploits in legacy systems\n• API vulnerabilities in cloud infrastructure\n• Supply chain compromise techniques\n\nDEFENSIVE MEASURES RECOMMENDED."
    } else {
      return "ANALYZING QUERY PARAMETERS... Your request requires additional context for proper security analysis. Please specify your cybersecurity concern with more technical parameters or threat indicators."
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="chatbot-widget chatbot-terminal">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <FaTerminal className="terminal-icon" />
          <span>CyberShield Terminal</span>
          <span className="encryption-badge">
            <FaLock /> AES-256
          </span>
        </div>
        <div className="header-controls">
          <div className="connection-status">
            <span className="status-indicator"></span>
            <span className="status-text">SECURE</span>
          </div>
          <button className="close-chatbot" onClick={onClose} aria-label="Close chatbot">
            <FaTimes />
          </button>
        </div>
      </div>
      
      {securityScan && (
        <div className="security-scan-overlay">
          <div className="scan-container">
            <FaFingerprint className="scan-icon pulse" />
            <div className="scan-text">SCANNING USER ENVIRONMENT</div>
            <div className="scan-progress-bar">
              <div 
                className="scan-progress-fill" 
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>
            <div className="scan-details">
              {scanProgress < 50 ? 'Checking for intrusion attempts...' : 
               scanProgress < 80 ? 'Verifying encryption protocols...' : 
               'Establishing secure connection...'}
            </div>
          </div>
        </div>
      )}

      <div className="chatbot-messages">
        <div className="system-info">
          <FaSatelliteDish className="info-icon" />
          <span>SYSTEM ACTIVE • THREAT LEVEL: LOW</span>
        </div>
        
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.type} ${message.isError ? 'error-message' : ''}`}
          >
            <div className="message-avatar">
              {message.type === "bot" ? 
                <FaShieldAlt className="avatar-icon" /> : 
                <FaUser className="avatar-icon" />
              }
            </div>
            <div className="message-content">
              <div className="message-meta">
                <span className="message-author">
                  {message.type === "bot" ? "CyberShield" : "User"}
                </span>
                <span className="message-time">{formatTime(message.time)}</span>
              </div>
              <div className="message-text">
                {message.text.split('\n').map((line, i) => (
                  <div key={i} className="message-line">{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message bot">
            <div className="message-avatar">
              <FaShieldAlt className="avatar-icon" />
            </div>
            <div className="message-content">
              <div className="message-meta">
                <span className="message-author">CyberShield</span>
              </div>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form className="chatbot-input" onSubmit={handleSubmit}>
        <div className="input-prefix">
          <FaTerminal className="terminal-prompt" />
        </div>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter security command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isTyping || securityScan}
          className="terminal-input"
        />
        <button 
          type="submit" 
          disabled={isTyping || !input.trim() || securityScan} 
          aria-label="Send message"
          className="send-button"
        >
          <FaPaperPlane />
        </button>
      </form>
      
      <div className="chatbot-footer">
        <div className="encryption-notice">
          <FaFingerprint className="footer-icon" />
          <span>END-TO-END ENCRYPTED CHANNEL</span>
        </div>
      </div>
    </div>
  )
}

export default ChatbotWidget