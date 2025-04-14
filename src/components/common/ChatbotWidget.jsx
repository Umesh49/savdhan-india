"use client"

import { useState, useEffect, useRef } from "react"
import { FaRobot, FaUser, FaPaperPlane, FaTimes } from "react-icons/fa"
import { getChatbotResponse } from "../../utils/api"

function ChatbotWidget({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! I'm your Cybersecurity Assistant. How can I help you today? You can ask me about Indian cyber laws, complaint procedures, or cybersecurity tips.",
      time: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      // Get bot response
      const response = await getChatbotResponse(input)

      // Add bot message after a short delay to simulate thinking
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          type: "bot",
          text: response.data.message,
          time: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
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

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <FaRobot /> Cyber Assistant
        </div>
        <button className="close-chatbot" onClick={onClose} aria-label="Close chatbot">
          <FaTimes />
        </button>
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

      <form className="chatbot-input" onSubmit={handleSubmit}>
        <input
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
  )
}

export default ChatbotWidget
