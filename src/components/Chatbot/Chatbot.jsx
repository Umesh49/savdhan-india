import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import { generateRuleBasedResponse } from "./cybersecurityData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactMarkdown from "react-markdown";

const CybersecurityChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      type: "bot",
      content: "ZeroBot ONLINE. I am your cybersecurity assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isUsingAI, setIsUsingAI] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const generateAIResponse = async (userInput, apiConfig) => {
    try {
      let response;
      if (apiConfig.provider === "openai") {
        response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiConfig.key}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: `You are ZeroBot, an AI cybersecurity assistant specializing in Indian cybersecurity laws, threats, and best practices. Use the provided data to inform responses where applicable. Be concise, accurate, and helpful. Provide structured and organized responses.`,
              },
              { role: "user", content: userInput },
            ],
            max_tokens: 500,
          }),
        });
      } else if (apiConfig.provider === "gemini") {
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiConfig.key}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are ZeroBot, a cybersecurity assistant specializing in Indian cybersecurity laws, threats, and best practices. Be concise, accurate, and helpful. Provide structured and organized responses. User query: ${userInput}`,
                    },
                  ],
                },
              ],
            }),
          }
        );
      } else if (apiConfig.provider === "xai") {
        response = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiConfig.key}`,
          },
          body: JSON.stringify({
            model: "grok-3",
            messages: [
              {
                role: "system",
                content: `You are ZeroBot, a cybersecurity assistant specializing in Indian cybersecurity laws, threats, and best practices. Be concise, accurate, and helpful. Provide structured and organized responses.`,
              },
              { role: "user", content: userInput },
            ],
            max_tokens: 500,
          }),
        });
      }

      const result = await response.json();
      if (apiConfig.provider === "openai") {
        if (result.error) throw new Error(result.error.message);
        return result.choices[0].message.content;
      } else if (apiConfig.provider === "gemini") {
        if (result.error) throw new Error(result.error.message);
        return result.candidates[0].content.parts[0].text;
      } else if (apiConfig.provider === "xai") {
        if (result.error) throw new Error(result.error.message);
        return result.choices[0].message.content;
      }
    } catch (error) {
      console.error(`Error with ${apiConfig.provider} API: ${error.message}`);
      return null;
    }
  };

  const enhanceWithFormatting = (text) => {
    let enhancedText = text;
    enhancedText = enhancedText.replace(/\*\*\*(.*?):/g, '* **$1**:');
    enhancedText = enhancedText.replace(/(\d+\.)(.*?):/g, '$1 **$2**:');
    
    const actionPhrases = [
      "use", "enable", "keep", "update", "be cautious", "avoid", "don't click", 
      "consider", "install", "verify", "report", "back up", "encrypt", "protect",
      "monitor", "secure", "review", "change", "create", "implement", "follow"
    ];
    
    // Format key cybersecurity terms with bold
    const securityTerms = [
      "password", "authentication", "MFA", "2FA", "security", "privacy", "malware", 
      "virus", "phishing", "ransomware", "encryption", "firewall", "VPN", "backup", 
      "cyber", "attack", "threat", "vulnerability", "data breach", "hacker", "trojan",
      "spyware", "keylogger", "DDoS", "social engineering", "identity theft", "DPDP Act",
      "digital rights", "cybercrime", "personal data", "sensitive information"
    ];
    
    // Add italics to action phrases
    actionPhrases.forEach(phrase => {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
      // Don't italicize if it's already in a markdown format
      enhancedText = enhancedText.replace(regex, (match) => {
        // Check if it's already part of a markdown formatting
        if (enhancedText.includes(`*${match}*`) || enhancedText.includes(`**${match}**`)) {
          return match;
        }
        return `*${match}*`;
      });
    });
    
    // Add bold to security terms
    securityTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      // Don't bold if it's already in a markdown format
      enhancedText = enhancedText.replace(regex, (match) => {
        // Check if it's already part of a markdown formatting
        if (enhancedText.includes(`*${match}*`) || enhancedText.includes(`**${match}**`)) {
          return match;
        }
        return `**${match}**`;
      });
    });
    
    // Improve list formatting
    enhancedText = enhancedText.replace(/(\d+\.\s)(?!\*\*)/g, '\n$1');
    
    // Make sure headings are properly formatted
    enhancedText = enhancedText.replace(/^([\w\s]+):$/gm, '## $1');
    
    return enhancedText;
  };

  const generateResponse = async (userInput) => {
    const input = userInput.toLowerCase();

    let response;
    
    if (isUsingAI) {
      const apiConfigs = [
        { provider: "openai", key: import.meta.env.VITE_OPENAI_API_KEY },
        { provider: "gemini", key: import.meta.env.VITE_GEMINI_API_KEY },
        { provider: "xai", key: import.meta.env.VITE_XAI_API_KEY },
      ];

      for (const [index, config] of apiConfigs.entries()) {
        if (config.key) {
          response = await generateAIResponse(userInput, config);
          if (response) {
            // Apply formatting enhancement to AI responses as well
            return enhanceWithFormatting(response);
          }
          toast.error(`Failed to get response from ${config.provider.toUpperCase()} API. Trying next API...`, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }

      toast.error("Unable to connect to any AI service. Using rule-based responses instead.", {
        position: "top-right",
        autoClose: 3000,
      });
      response = generateRuleBasedResponse(input);
    } else {
      response = generateRuleBasedResponse(input);
    }

    // Apply formatting to all responses
    return enhanceWithFormatting(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      setTimeout(async () => {
        const response = await generateResponse(input);

        const botMessage = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: response,
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 800 + Math.random() * 800);
    } catch (error) {
      console.error("Error generating response:", error);

      const errorMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "SYSTEM ERROR: Communication failure. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false);
      toast.error("System error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const showToast = (title, message, type = "info") => {
    const options = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    if (type === "error") {
      toast.error(`${title}: ${message}`, options);
    } else if (type === "success") {
      toast.success(`${title}: ${message}`, options);
    } else {
      toast.info(`${title}: ${message}`, options);
    }
  };

  const toggleAIMode = () => {
    const hasAnyApiKey =
      import.meta.env.VITE_OPENAI_API_KEY ||
      import.meta.env.VITE_GEMINI_API_KEY ||
      import.meta.env.VITE_XAI_API_KEY;

    if (!hasAnyApiKey) {
      showToast("API Key Missing", "Please add at least one API key to the environment variables.", "error");
      return;
    }

    setIsUsingAI(!isUsingAI);
    showToast(
      isUsingAI ? "AI Mode Deactivated" : "AI Mode Activated",
      isUsingAI ? "Using rule-based responses only." : "Now using AI services for responses.",
      isUsingAI ? "info" : "success"
    );
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-interface">
        <div className="chatbot-header">
          <div className="chatbot-title">
            <div className="chatbot-icon">🛡️</div>
            <div>
              <h3>ZEROBOT</h3>
              <div className="chatbot-status">SECURITY ASSISTANT</div>
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chatbot-message ${message.type === "user" ? "chatbot-user" : "chatbot-bot"}`}
            >
              <div className="chatbot-message-icon">
                {message.type === "user" ? "👤" : "🛡️"}
              </div>
              <div className="chatbot-message-content">
                <div className="chatbot-message-text">
                  {message.type === "bot" ? (
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-message chatbot-bot">
              <div className="chatbot-message-icon">🛡️</div>
              <div className="chatbot-message-content">
                <div className="chatbot-typing">
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
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your security query..."
            disabled={isTyping}
          />
          <button type="submit" disabled={isTyping || !input.trim()}>
            ➤
          </button>
        </form>

        <div className="chatbot-api-key">
          <button type="button" onClick={toggleAIMode} className="chatbot-api-button">
            {isUsingAI ? "Disable AI Mode" : "Enable AI Mode"}
          </button>
          <div className="chatbot-api-status">
            {isUsingAI ? "AI Mode: Active ✅" : "AI Mode: Inactive ⚠️"}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CybersecurityChatbot;