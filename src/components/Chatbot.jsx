"use client"

import { useState, useEffect, useRef } from "react"
import { 
  FaRobot, 
  FaUser, 
  FaPaperPlane, 
  FaInfoCircle, 
  FaQuestionCircle, 
  FaShieldAlt, 
  FaLock, 
  FaExclamationTriangle,
  FaFingerprint,
  FaServer
} from "react-icons/fa"
import CyberSpinner from "./common/CyberSpinner/CyberSpinner"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    // Simulate system initialization with cybersecurity scan
    setTimeout(() => {
      setLoading(false)
      // Add welcome message with slight delay to simulate system boot
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            type: "bot",
            text: "SYSTEM INITIALIZED. Hello, I'm your Cybersecurity Assistant. I can assist with Indian cyber laws, security protocols, threat detection, and incident response procedures. How can I secure your digital presence today?",
            time: new Date(),
          },
        ])
      }, 300)
    }, 1500)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const triggerGlitchEffect = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 1000)
  }

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

    // Slight glitch effect when processing message
    triggerGlitchEffect()

    try {
      // Simulate AI response with varying timing for realism
      const responseTime = 800 + Math.random() * 1200
      setTimeout(() => {
        const botResponse = getBotResponse(input)
        const botMessage = {
          id: messages.length + 2,
          type: "bot",
          text: botResponse,
          time: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
        
        // Focus back on input after response
        inputRef.current?.focus()
      }, responseTime)
    } catch (error) {
      // Handle error with cybersecurity context
      setTimeout(() => {
        const errorMessage = {
          id: messages.length + 2,
          type: "bot",
          text: "ALERT: Communication protocol interrupted. Possible network intrusion detected. Reestablishing secure connection... Please resubmit your query through the encrypted channel.",
          time: new Date(),
          isError: true
        }
        setMessages((prev) => [...prev, errorMessage])
        setIsTyping(false)
      }, 1000)
    }
  }

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase()

    // Enhanced responses with cybersecurity formatting and terminology
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "IDENTITY VERIFIED. Greetings, user. Secure communication channel established. How may I assist with your cybersecurity concerns today?"
    } else if (lowerQuery.includes("cyber law") || lowerQuery.includes("law")) {
      return "LEGAL DATABASE ACCESSED.\n\nIndia's primary cybersecurity framework is the Information Technology Act, 2000 (IT Act), amended in 2008 to address modern cyber threats.\n\nKEY PROVISIONS:\n• Legal recognition for electronic documents and digital signatures\n• Definition and criminalization of various cybercrimes including hacking, data theft, and identity fraud\n• Provisions for data protection and privacy\n• Penalties for cyberterrorism and cyber fraud\n\nWould you like details on specific sections or recent amendments?"
    } else if (lowerQuery.includes("complaint") || lowerQuery.includes("report")) {
      return "INCIDENT RESPONSE PROTOCOL:\n\n1. DIGITAL REPORTING: Submit complaint on National Cyber Crime Reporting Portal (cybercrime.gov.in)\n2. PHYSICAL REPORTING: Visit local police station with evidence documentation\n3. SPECIALIZED UNITS: Contact cyber cell of state police for advanced threat response\n\nIMPORTANT: Preserve all digital evidence and maintain an incident timeline. Would you like me to guide you through the specific documentation requirements?"
    } else if (lowerQuery.includes("password") || lowerQuery.includes("secure password")) {
      return "ACCESS CONTROL ADVISORY:\n\nEffective password hygiene requires:\n\n1. Minimum 16 characters with entropy >75 bits\n2. Multi-layer character sets (uppercase, lowercase, numerals, special symbols)\n3. Zero use of personally identifiable information\n4. Avoidance of dictionary terms and common substitutions\n5. Unique credentials for each system access point\n6. Implementation of hardware-based or cryptographic password management\n7. Regular credential rotation every 60-90 days\n\nRecommended: Enable multi-factor authentication wherever possible."
    } else if (lowerQuery.includes("phishing") || lowerQuery.includes("scam")) {
      return "THREAT DETECTION ALERT: Phishing countermeasures activated.\n\nDEFENSE PROTOCOLS:\n• Verify sender cryptographic signatures before link interaction\n• Implement URI parsing and inspection before navigation\n• Apply zero-trust policy to all external communication channels\n• Deploy multi-layer authentication for sensitive operations\n• Maintain system integrity through continuous security patching\n• Enable advanced spam filtering with behavioral analysis\n\nWARNING: Social engineering attacks are becoming increasingly sophisticated. Would you like a briefing on the latest threat vectors?"
    } else if (lowerQuery.includes("encryption") || lowerQuery.includes("encrypt")) {
      return "ENCRYPTION PROTOCOLS BRIEFING:\n\nRecommended standards for data-at-rest: AES-256, ChaCha20-Poly1305\nRecommended standards for data-in-transit: TLS 1.3, Signal Protocol\n\nKEY PRINCIPLES:\n• Implement end-to-end encryption for all communications\n• Use forward secrecy to protect historical data\n• Deploy hardware security modules for key management\n• Consider homomorphic encryption for cloud processing\n• Quantum-resistant algorithms recommended for long-term storage\n\nNOTE: Encryption is only as strong as your key management strategy."
    } else if (lowerQuery.includes("vpn") || lowerQuery.includes("privacy")) {
      return "PRIVACY SHIELD PROTOCOLS:\n\nVPN SELECTION CRITERIA:\n• No-logs policy (verified by independent audits)\n• RAM-only servers with zero data persistence\n• Multi-hop configurations for enhanced anonymity\n• WireGuard or OpenVPN with strong ciphers\n• Jurisdiction outside 14-Eyes intelligence alliance\n\nADDITIONAL PRIVACY LAYERS:\n• Tor network for highest anonymity requirements\n• DNS-over-HTTPS to prevent DNS leakage\n• Browser hardening against fingerprinting\n• Use of ephemeral operating systems for sensitive operations"
    } else {
      return "QUERY ANALYSIS INCOMPLETE. Your request pattern doesn't match known security protocols in my database. Please reformulate your query regarding Indian cyber laws, security implementations, incident reporting procedures, or encryption methodologies."
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const renderSuggestions = () => {
    const suggestions = [
      { text: "What are India's cyber laws?", icon: <FaLock /> },
      { text: "How to file a cybercrime complaint?", icon: <FaShieldAlt /> },
      { text: "Advanced password security protocols", icon: <FaFingerprint /> },
      { text: "Latest phishing attack vectors", icon: <FaExclamationTriangle /> },
      { text: "Encryption best practices", icon: <FaServer /> },
    ]

    return (
      <div className="chat-suggestions">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-btn"
            onClick={() => {
              setInput(suggestion.text)
              inputRef.current?.focus()
            }}
          >
            {suggestion.icon}
            <span>{suggestion.text}</span>
          </button>
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading-container">
        <CyberSpinner size={60} />
        <p className="loading-text">Initializing Secure Environment...</p>
        <div className="security-scan-indicator">
          <div className="scan-progress"></div>
          <div className="scan-text">Scanning for threats: <span className="scan-percentage">78%</span></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`container py-8 ${isGlitching ? 'glitching' : ''}`}>
      <div className="page-header">
        <div className="container">
          <h1 className="glitch-text">CYBERSEC // ASSISTANT</h1>
          <p>Advanced threat intelligence and security protocol implementation</p>
          <div className="security-status">
            <span className="security-indicator secure"></span>
            <span className="security-level">SECURE CHANNEL ESTABLISHED</span>
          </div>
        </div>
      </div>

      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="chatbot-title">
            <FaRobot className="text-primary" />
            <span>CyberSec Assistant <span className="version">v3.7.21</span></span>
          </div>
          <div className="chatbot-status">
            <span className="status-indicator online"></span>
            <span>ENCRYPTED</span>
            <span className="encryption-protocol">AES-256</span>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type} ${message.isError ? 'error' : ''}`}>
              <div className="message-avatar">
                {message.type === "bot" ? <FaRobot className="avatar-icon" /> : <FaUser className="avatar-icon" />}
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{formatTime(message.time)}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">
                <FaRobot className="avatar-icon" />
              </div>
              <div className="message-content">
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

        {messages.length === 1 && renderSuggestions()}

        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            id="chat-input"
            ref={inputRef}
            type="text"
            placeholder="Enter security query..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
          />
          <button type="submit" disabled={isTyping || !input.trim()} aria-label="Send message">
            <FaPaperPlane />
          </button>
        </form>
      </div>

      <div className="chatbot-info mt-8">
        <div className="cyber-panel">
          <div className="panel-header">
            <h2>SYSTEM CAPABILITIES</h2>
            <div className="panel-status">ACTIVE</div>
          </div>
          
          <p className="system-description">
            CyberSec Assistant is a next-generation AI security system designed to provide real-time threat intelligence,
            vulnerability assessment, and security protocol implementation guidance for the Indian cybersecurity landscape.
          </p>

          <h3 className="module-header">ACTIVE SECURITY MODULES</h3>
          <ul className="feature-list">
            <li>
              <FaShieldAlt className="feature-icon" />
              <div>
                <h4>Advanced Threat Detection</h4>
                <p>Real-time analysis of emerging attack vectors and zero-day exploits</p>
              </div>
            </li>
            <li>
              <FaLock className="feature-icon" />
              <div>
                <h4>Regulatory Compliance</h4>
                <p>Comprehensive knowledge of Indian IT Act and global security frameworks</p>
              </div>
            </li>
            <li>
              <FaExclamationTriangle className="feature-icon" />
              <div>
                <h4>Incident Response</h4>
                <p>Step-by-step breach containment and evidence preservation protocols</p>
              </div>
            </li>
            <li>
              <FaServer className="feature-icon" />
              <div>
                <h4>Security Architecture</h4>
                <p>Zero-trust implementation strategies for network and data protection</p>
              </div>
            </li>
          </ul>
          
          <div className="system-footer">
            <div className="encryption-badge">
              <FaFingerprint className="badge-icon" />
              <span>END-TO-END ENCRYPTED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot