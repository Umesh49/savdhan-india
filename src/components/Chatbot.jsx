"use client"

import { useState, useEffect, useRef } from "react"
import { FaRobot, FaUser, FaPaperPlane, FaInfoCircle, FaQuestionCircle, FaShieldAlt, FaLock } from "react-icons/fa"
import CyberSpinner from "./common/CyberSpinner"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
      // Add welcome message
      setMessages([
        {
          id: 1,
          type: "bot",
          text: "Hello! I'm your Cybersecurity Assistant. How can I help you today? You can ask me about Indian cyber laws, complaint procedures, or cybersecurity tips.",
          time: new Date(),
        },
      ])
    }, 1500)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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

    try {
      // Simulate bot response
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
      }, 1500)
    } catch (error) {
      // Handle error
      setTimeout(() => {
        const errorMessage = {
          id: messages.length + 2,
          type: "bot",
          text: "I'm sorry, I'm having trouble processing your request right now. Please try again later.",
          time: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
        setIsTyping(false)
      }, 1000)
    }
  }

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "Hello! How can I assist you with cybersecurity today?"
    } else if (lowerQuery.includes("cyber law") || lowerQuery.includes("law")) {
      return "India's primary cybersecurity law is the Information Technology Act, 2000 (IT Act), which was amended in 2008. It provides legal recognition for electronic documents and digital signatures, and criminalizes various cyber offenses like hacking, data theft, and identity fraud. Would you like to know more about specific cyber laws?"
    } else if (lowerQuery.includes("complaint") || lowerQuery.includes("report")) {
      return "To file a cybercrime complaint in India, you can: 1) Report on the National Cyber Crime Reporting Portal at cybercrime.gov.in, 2) Visit your local police station, or 3) Contact the cyber cell of your state police. Would you like me to guide you through the complaint process?"
    } else if (lowerQuery.includes("password") || lowerQuery.includes("secure password")) {
      return "For a strong password: 1) Use at least 12 characters, 2) Mix uppercase, lowercase, numbers, and symbols, 3) Avoid personal information, 4) Don't use dictionary words, 5) Use a different password for each account, and 6) Consider using a password manager."
    } else if (lowerQuery.includes("phishing") || lowerQuery.includes("scam")) {
      return "To avoid phishing scams: 1) Don't click on suspicious links, 2) Check email sender addresses carefully, 3) Be wary of urgent requests, 4) Verify requests for personal information, 5) Use multi-factor authentication, and 6) Keep your software updated."
    } else {
      return "I'm not sure I understand your question. Could you please rephrase or ask about Indian cyber laws, complaint procedures, or cybersecurity tips?"
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const renderSuggestions = () => {
    const suggestions = [
      { text: "What are India's cyber laws?", icon: <FaLock /> },
      { text: "How to file a cybercrime complaint?", icon: <FaShieldAlt /> },
      { text: "Tips for creating secure passwords", icon: <FaInfoCircle /> },
      { text: "How to avoid phishing scams?", icon: <FaQuestionCircle /> },
    ]

    return (
      <div className="chat-suggestions">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-btn"
            onClick={() => {
              setInput(suggestion.text)
              // Focus on input after setting value
              document.getElementById("chat-input").focus()
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
        <p>Initializing Cyber Assistant...</p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="page-header">
        <div className="container">
          <h1 className="glitch-text">Cyber Assistant</h1>
          <p>Your AI-powered guide to cybersecurity and cyber laws in India</p>
        </div>
      </div>

      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="chatbot-title">
            <FaRobot className="text-primary" />
            <span>Cyber Assistant</span>
          </div>
          <div className="chatbot-status">
            <span className="status-indicator online"></span>
            <span>Online</span>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-avatar">{message.type === "bot" ? <FaRobot /> : <FaUser />}</div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{formatTime(message.time)}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">
                <FaRobot />
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
            type="text"
            placeholder="Type your message..."
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
          <h2>About Cyber Assistant</h2>
          <p>
            The Cyber Assistant is an AI-powered chatbot designed to help you navigate cybersecurity issues, understand
            Indian cyber laws, and learn how to protect yourself online.
          </p>

          <h3 className="mt-4">What can the Cyber Assistant help with?</h3>
          <ul className="feature-list">
            <li>
              <FaShieldAlt className="feature-icon" />
              <div>
                <h4>Cybersecurity Guidance</h4>
                <p>Get tips and best practices for staying safe online</p>
              </div>
            </li>
            <li>
              <FaLock className="feature-icon" />
              <div>
                <h4>Indian Cyber Laws</h4>
                <p>Learn about the legal framework governing cyberspace in India</p>
              </div>
            </li>
            <li>
              <FaInfoCircle className="feature-icon" />
              <div>
                <h4>Complaint Procedures</h4>
                <p>Understand how to report cybercrimes to the appropriate authorities</p>
              </div>
            </li>
            <li>
              <FaQuestionCircle className="feature-icon" />
              <div>
                <h4>Security Resources</h4>
                <p>Find helpful resources for various cybersecurity concerns</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Chatbot