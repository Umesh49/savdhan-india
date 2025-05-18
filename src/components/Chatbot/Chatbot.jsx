import { useState, useEffect, useRef, memo } from "react";
import {
  FaRobot,
  FaUser,
  FaPaperPlane,
  FaExclamationTriangle,
  FaNetworkWired,
  FaTerminal,
  FaGlobe,
} from "react-icons/fa";
import { RiRadarFill } from "react-icons/ri";
import CyberSpinner from "../common/CyberSpinner/CyberSpinner";
import "./Chatbot.css";

const Message = memo(({ message }) => {
  const formatTime = (date) => date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return (
    <div className={`chatbot-message ${message.type}`}>
      <div className="chatbot-message-avatar">
        {message.type === "bot" ? <FaRobot className="chatbot-avatar-icon" /> : <FaUser className="chatbot-avatar-icon" />}
      </div>
      <div className="chatbot-message-content">
        <div className="chatbot-message-text">{message.text}</div>
        <div className="chatbot-message-time">{formatTime(message.time)}</div>
      </div>
    </div>
  );
});

const ThreatItem = memo(({ breach }) => (
  <div className={`chatbot-threat-item severity-${breach.severity.toLowerCase()}`}>
    <div className="chatbot-threat-type">{breach.type}</div>
    <div className="chatbot-threat-source">{breach.source}</div>
    <div className="chatbot-threat-severity">{breach.severity}</div>
    <div className="chatbot-threat-time">{new Date(breach.timestamp).toLocaleTimeString()}</div>
  </div>
));

const TrafficItem = memo(({ traffic }) => (
  <div className={`chatbot-traffic-item ${traffic.status === "BLOCKED" ? "traffic-blocked" : ""}`}>
    <div className="chatbot-traffic-protocol">{traffic.protocol}</div>
    <div className="chatbot-traffic-details">
      <span className="chatbot-traffic-source">{traffic.source}</span>
      <span className="chatbot-traffic-arrow">→</span>
      <span className="chatbot-traffic-destination">{traffic.destination}</span>
    </div>
    <div className="chatbot-traffic-status">{traffic.status}</div>
  </div>
));

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const [threatLevel, setThreatLevel] = useState("minimal");
  const [securityBreaches, setSecurityBreaches] = useState([]);
  const [networkTraffic, setNetworkTraffic] = useState([]);
  const [systemResources, setSystemResources] = useState({
    cpu: 32,
    memory: 78,
    network: 65,
  });

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const matrixCanvasRef = useRef(null);
  const lastMessageCount = useRef(messages.length);

  useEffect(() => {
    // Simulate loading
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      setMessages([
        {
          id: 1,
          type: "bot",
          text: "[ZeroTrace] Secure channel established. Welcome to ZeroTrace Cybersecurity Interface.\n\nHow may I assist you today?",
          time: new Date(),
        },
      ]);
      document.body.style.overflow = "auto"; 
    }, 1500);

    // Matrix animation and system updates
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const chars = "01010101ZeroTrace01010101";

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(2, 6, 16, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ffaa";
      ctx.font = `${fontSize}px IBM Plex Mono, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) drops[i] = 0;
        drops[i]++;
      }
    };

    const matrixInterval = setInterval(drawMatrix, 120); // Optimized redraw

    const updateSystem = () => {
      setSystemResources((prev) => ({
        cpu: Math.min(100, Math.max(10, prev.cpu + Math.random() * 10 - 5)),
        memory: Math.min(100, Math.max(40, prev.memory + Math.random() * 6 - 3)),
        network: Math.min(100, Math.max(30, prev.network + Math.random() * 8 - 4)),
      }));

      const newTraffic = {
        id: Date.now(),
        protocol: ["TCP", "UDP", "HTTPS", "SSH"][Math.floor(Math.random() * 4)],
        source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(
          Math.random() * 255
        )}.${Math.floor(Math.random() * 255)}`,
        destination: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(
          Math.random() * 255
        )}.${Math.floor(Math.random() * 255)}`,
        status: Math.random() > 0.95 ? "BLOCKED" : "ALLOWED",
        timestamp: new Date().toISOString(),
      };

      setNetworkTraffic((prev) => {
        const updated = [newTraffic, ...prev].slice(0, 6);
        if (Math.random() > 0.98) {
          const threatTypes = ["Port Scan", "XSS Attempt", "SQL Injection"];
          const newThreat = {
            id: Date.now(),
            type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
            source: newTraffic.source,
            severity: Math.random() > 0.7 ? "HIGH" : Math.random() > 0.4 ? "MEDIUM" : "LOW",
            timestamp: new Date().toISOString(),
          };
          setSecurityBreaches((prev) => [newThreat, ...prev].slice(0, 4));
          const threatLevels = ["minimal", "guarded", "elevated", "high"];
          setThreatLevel(threatLevels[Math.min(3, threatLevels.indexOf(threatLevel) + (Math.random() > 0.5 ? 1 : -1))]);
        }
        return updated;
      });
    };

    const systemInterval = setInterval(updateSystem, 4000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    document.body.classList.add("chatbot-fullscreen");

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(matrixInterval);
      clearInterval(systemInterval);
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("chatbot-fullscreen");
      document.body.style.overflow = "auto";
    };
  }, []);

  // Scroll to bottom for new messages
  useEffect(() => {
    if (messages.length > lastMessageCount.current) {
      const container = messagesContainerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight; // Scroll to bottom
      }
      lastMessageCount.current = messages.length;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: input,
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "bot",
          text: botResponse,
          time: new Date(),
        },
      ]);
      setIsTyping(false);
      inputRef.current?.focus();
    }, 800);
  };

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      return "[ZeroTrace] Secure connection established.\n\nHow can I assist with your cybersecurity needs?";
    } else if (lowerQuery.includes("cyber law")) {
      return "[ZeroTrace] Indian Cyber Laws:\n• IT Act, 2000: Penalties up to ₹5 crore for cybercrimes.\n• Section 66F: Cyberterrorism, life imprisonment.\n• CERT-In: Mandatory incident reporting.\n\nNeed specific compliance details?";
    } else if (lowerQuery.includes("complaint")) {
      return "[ZeroTrace] Report cybercrimes:\n• Online: cybercrime.gov.in\n• Helpline: 1930\n• Local Cyber Cell\n\nPreserve evidence with hashes.\n\nNeed a reporting template?";
    } else if (lowerQuery.includes("password")) {
      return "[ZeroTrace] Password Best Practices:\n• 20+ characters, random\n• Use passphrases (Diceware)\n• Enable 2FA (FIDO2)\n\nNeed a password generator?";
    } else if (lowerQuery.includes("phishing")) {
      return "[ZeroTrace] Phishing Defense:\n• Enable DMARC/DKIM/SPF\n• Train staff with simulations\n• Deploy AI anomaly detection\n\nNeed a defense plan?";
    } else {
      return "[ZeroTrace] Please specify a topic:\n• Cyber laws\n• Threat protection\n• Incident reporting\n• Password security\n• Phishing defense";
    }
  };

  const getThreatLevelClass = () => {
    switch (threatLevel) {
      case "high": return "threat-high";
      case "elevated": return "threat-elevated";
      case "guarded": return "threat-guarded";
      default: return "threat-minimal";
    }
  };

  const renderSuggestions = () => {
    const suggestions = [
      { text: "Indian cyber law analysis", icon: <FaTerminal /> },
      { text: "File a cybercrime complaint", icon: <FaExclamationTriangle /> },
      { text: "Secure password practices", icon: <FaNetworkWired /> },
      { text: "Phishing defense strategies", icon: <FaGlobe /> },
    ];

    return (
      <div className="chatbot-suggestions">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="chatbot-suggestion-btn"
            onClick={() => {
              setInput(suggestion.text);
              inputRef.current?.focus();
            }}
          >
            {suggestion.icon}
            <span>{suggestion.text}</span>
          </button>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="chatbot-loading-container">
        <CyberSpinner size={80} />
      </div>
    );
  }

  return (
    <div className="chatbot-container-wrapper">
      <canvas ref={matrixCanvasRef} className="matrix-background"></canvas>
      <div className="chatbot-header-wrapper">
        <div className="chatbot-header-content">
          <div className="chatbot-title-container">
            <RiRadarFill className="chatbot-title-icon" />
            <h1 className="chatbot-title">Zero BoT</h1>
          </div>
          <div className="chatbot-status-container">
            <div className="chatbot-status-indicator">
              <div className="chatbot-status-pulse"></div>
              <span className="chatbot-status-text">ONLINE</span>
            </div>
            <div className={`chatbot-threat-level ${getThreatLevelClass()}`}>
              <FaExclamationTriangle className="chatbot-threat-icon" />
              <span>THREAT: {threatLevel.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="chatbot-content-wrapper">
        <div className="chatbot-main">
          <div className="chatbot-messages-container" ref={messagesContainerRef}>
            <div className="chatbot-messages">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="chatbot-message bot">
                  <div className="chatbot-message-avatar">
                    <FaRobot className="chatbot-avatar-icon" />
                  </div>
                  <div className="chatbot-message-content">
                    <div className="chatbot-typing-indicator">
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
          </div>
          <div className="chatbot-input-container">
            <form className="chatbot-input-form" onSubmit={handleSubmit}>
              <div className="chatbot-input-wrapper">
                <FaTerminal className="chatbot-input-icon" />
                <input
                  id="chat-input"
                  ref={inputRef}
                  type="text"
                  className="chatbot-input-field"
                  placeholder="Enter query..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                />
              </div>
              <button
                type="submit"
                className="chatbot-submit-button"
                disabled={isTyping || !input.trim()}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="chatbot-info-panel">
          <div className="chatbot-panel-header">
            <h2>SECURITY DASHBOARD</h2>
            <div className="chatbot-panel-status">
              <span className="chatbot-status-dot"></span>OPERATIONAL
            </div>
          </div>
          <div className="chatbot-panel-content">
            <div className="chatbot-system-stats">
              {[
                { label: "CPU", value: systemResources.cpu },
                { label: "MEMORY", value: systemResources.memory },
                { label: "NETWORK", value: systemResources.network },
              ].map((stat, index) => (
                <div key={index} className="chatbot-stat-item">
                  <div className="chatbot-stat-label">{stat.label}</div>
                  <div className="chatbot-stat-bar">
                    <div className="chatbot-stat-progress" style={{ width: `${stat.value}%` }}></div>
                  </div>
                  <div className="chatbot-stat-value">{Math.round(stat.value)}%</div>
                </div>
              ))}
            </div>
            <div className="chatbot-threat-intel">
              <h3 className="chatbot-module-header">
                <FaExclamationTriangle className="chatbot-module-icon" />
                THREAT FEED
              </h3>
              <div className="chatbot-threat-list">
                {securityBreaches.length === 0 ? (
                  <div className="chatbot-no-threats">No threats detected</div>
                ) : (
                  securityBreaches.map((breach) => (
                    <ThreatItem key={breach.id} breach={breach} />
                  ))
                )}
              </div>
            </div>
            <div className="chatbot-network-traffic">
              <h3 className="chatbot-module-header">
                <FaGlobe className="chatbot-module-icon" />
                NETWORK TRAFFIC
              </h3>
              <div className="chatbot-traffic-list">
                {networkTraffic.map((traffic) => (
                  <TrafficItem key={traffic.id} traffic={traffic} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;