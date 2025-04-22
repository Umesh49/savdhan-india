"use client"

import { useState, useEffect, useRef } from "react"
import { 
  FaLock, FaShieldAlt, FaGlobe, FaEye, FaEyeSlash, FaCheck, FaTimes,
  FaFingerprint, FaNetworkWired, FaKey, FaRandom, FaExclamationTriangle
} from "react-icons/fa"
import './SecurityTools.css';

function SecurityTools() {
  // Reference for matrix canvas container
  const matrixContainerRef = useRef(null);
  const canvasRef = useRef(null);

  // Create matrix effect on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    // Matrix characters
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const charArray = chars.split('');
    
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    
    // Initialize drops at random positions
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    // Drawing function
    function draw() {
      // Black semi-transparent BG to create fade effect
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Send drop back to top after it reaches bottom
        // Adding randomness to the reset
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Move drop
        drops[i]++;
      }
    }
    
    // Animation frame ID for cleanup
    let animationFrameId;
    
    // Animation loop using requestAnimationFrame instead of setInterval for better performance
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Resize canvas on window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="tools-page">
      {/* Matrix background */}
      <div className="matrix-code" ref={matrixContainerRef}>
        <canvas ref={canvasRef}></canvas>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>Cybersecurity Tools</h1>
          <p>Interactive tools to help you enhance your online security and privacy.</p>
        </div>
      </section>

      <section className="container">
        <div className="section-title">
          <h2>Our Security Tools</h2>
        </div>

        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaLock />
              </div>
              <h3>Password Strength Checker</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">
                Check the strength of your passwords to ensure they meet security standards.
              </p>
              <PasswordStrengthChecker />
            </div>
          </div>

          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaShieldAlt />
              </div>
              <h3>Security Checklist</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">A comprehensive checklist to improve your online security posture.</p>
              <div className="tool-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <FaCheck /> Account security recommendations
                  </li>
                  <li>
                    <FaCheck /> Device security best practices
                  </li>
                  <li>
                    <FaCheck /> Network security guidelines
                  </li>
                  <li>
                    <FaCheck /> Privacy protection tips
                  </li>
                </ul>
              </div>
              <div className="tool-actions">
                <a href="/security-checklist" className="btn-primary">
                  View Checklist
                </a>
              </div>
            </div>
          </div>

          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaGlobe />
              </div>
              <h3>Cyber Threat Map</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">
                Visualize real-time cyber threats and attacks happening around the world.
              </p>
              <div className="tool-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <FaCheck /> Real-time attack visualization
                  </li>
                  <li>
                    <FaCheck /> Threat type categorization
                  </li>
                  <li>
                    <FaCheck /> Geographic attack distribution
                  </li>
                  <li>
                    <FaCheck /> Trend analysis and statistics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Password Generator */}
          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaKey />
              </div>
              <h3>Secure Password Generator</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">
                Generate cryptographically secure passwords that are difficult to crack.
              </p>
              <PasswordGenerator />
            </div>
          </div>

          {/* Network Scanner */}
          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaNetworkWired />
              </div>
              <h3>Network Security Scanner</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">
                Scan your network for potential vulnerabilities and security issues.
              </p>
              <div className="tool-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <FaCheck /> Port scanning and detection
                  </li>
                  <li>
                    <FaCheck /> Device discovery and enumeration
                  </li>
                  <li>
                    <FaCheck /> Vulnerability identification
                  </li>
                  <li>
                    <FaCheck /> Security risk assessment
                  </li>
                </ul>
              </div>
              <div className="tool-actions">
                <a href="/network-scanner" className="btn-primary">
                  Launch Scanner
                </a>
              </div>
            </div>
          </div>

          {/* Data Breach Checker */}
          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaExclamationTriangle />
              </div>
              <h3>Data Breach Checker</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">
                Check if your email or accounts have been compromised in known data breaches.
              </p>
              <DataBreachChecker />
            </div>
          </div>

          {/* File Encryption Tool */}
          <div className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">
                <FaFingerprint />
              </div>
              <h3>File Encryption Tool</h3>
            </div>
            <div className="tool-content">
              <p className="tool-description">
                Encrypt and decrypt sensitive files with strong cryptographic algorithms.
              </p>
              <div className="tool-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <FaCheck /> AES-256 encryption
                  </li>
                  <li>
                    <FaCheck /> Password protection
                  </li>
                  <li>
                    <FaCheck /> Secure file deletion
                  </li>
                  <li>
                    <FaCheck /> Cross-platform compatibility
                  </li>
                </ul>
              </div>
              <div className="tool-actions">
                <a href="/encryption-tool" className="btn-primary">
                  Open Encryption Tool
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "3rem" }}>
        <div className="section-title">
          <h2>Live Cyber Threat Map</h2>
        </div>

        <div className="threat-map">
          <div className="map-container">
            <img
              src="/assets/threat-map.jpg"
              alt="Global Cyber Threat Map"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div className="map-overlay">
              <div className="map-legend">
                <h4>Threat Severity</h4>
                <div className="legend-item">
                  <div className="legend-color high"></div>
                  <span>High (DDoS, Ransomware)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color medium"></div>
                  <span>Medium (Phishing, Malware)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color low"></div>
                  <span>Low (Scanning, Probing)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-stats">
            <div className="map-stat">
              <h4>Active Attacks</h4>
              <p>1,243</p>
            </div>
            <div className="map-stat">
              <h4>Top Target</h4>
              <p>Financial</p>
            </div>
            <div className="map-stat">
              <h4>Top Attack Type</h4>
              <p>Phishing</p>
            </div>
            <div className="map-stat">
              <h4>Attacks Today</h4>
              <p>24,567</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "3rem" }}>
        <div className="section-title">
          <h2>Security News & Alerts</h2>
        </div>

        <div className="security-news">
          <div className="news-card">
            <div className="news-date">April 15, 2025</div>
            <h3>Critical Windows Vulnerability Discovered</h3>
            <p>
              Security researchers have identified a zero-day vulnerability affecting Windows systems. 
              The exploit allows attackers to gain system-level privileges.
            </p>
            <a href="/news/windows-vulnerability" className="news-link">Read More</a>
          </div>

          <div className="news-card">
            <div className="news-date">April 12, 2025</div>
            <h3>New Phishing Campaign Targets Banking Users</h3>
            <p>
              A sophisticated phishing operation is underway, using fake bank emails to steal 
              credentials and financial information from unsuspecting victims.
            </p>
            <a href="/news/banking-phishing" className="news-link">Read More</a>
          </div>

          <div className="news-card">
            <div className="news-date">April 10, 2025</div>
            <h3>Major Data Breach Affects 1.5M Users</h3>
            <p>
              A popular online service has disclosed a data breach affecting approximately 
              1.5 million user accounts. The stolen data includes emails and hashed passwords.
            </p>
            <a href="/news/major-data-breach" className="news-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  )
}

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const calculateStrength = (password) => {
    let strength = 0

    if (password.length >= 8) strength += 1
    if (password.length >= 12) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[a-z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    if (strength <= 2) return { score: "weak", percentage: 33 }
    if (strength <= 4) return { score: "medium", percentage: 66 }
    return { score: "strong", percentage: 100 }
  }

  const strength = calculateStrength(password)

  return (
    <div className="password-checker">
      <div className="password-input-group">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter a password to check"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="password-toggle" onClick={() => setShowPassword(!showPassword)} type="button">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="password-strength">
        <div className="strength-meter">
          <div className={`strength-fill ${strength.score}`} style={{ width: `${strength.percentage}%` }}></div>
        </div>
        <div className="strength-text">
          <span>Strength:</span>
          <span className={`strength-label ${strength.score}`}>
            {strength.score.charAt(0).toUpperCase() + strength.score.slice(1)}
          </span>
        </div>
      </div>

      <div className="password-feedback">
        <div className="feedback-item">
          {password.length >= 8 ? <FaCheck className="check" /> : <FaTimes className="times" />}
          <span>At least 8 characters long</span>
        </div>
        <div className="feedback-item">
          {password.length >= 12 ? <FaCheck className="check" /> : <FaTimes className="times" />}
          <span>At least 12 characters for stronger security</span>
        </div>
        <div className="feedback-item">
          {/[A-Z]/.test(password) ? <FaCheck className="check" /> : <FaTimes className="times" />}
          <span>Contains uppercase letters</span>
        </div>
        <div className="feedback-item">
          {/[a-z]/.test(password) ? <FaCheck className="check" /> : <FaTimes className="times" />}
          <span>Contains lowercase letters</span>
        </div>
        <div className="feedback-item">
          {/[0-9]/.test(password) ? <FaCheck className="check" /> : <FaTimes className="times" />}
          <span>Contains numbers</span>
        </div>
        <div className="feedback-item">
          {/[^A-Za-z0-9]/.test(password) ? <FaCheck className="check" /> : <FaTimes className="times" />}
          <span>Contains special characters</span>
        </div>
      </div>
    </div>
  )
}

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [generatedPassword, setGeneratedPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_-+=<>?/[]{}|"

    let allowedChars = ""
    if (includeUppercase) allowedChars += uppercaseChars
    if (includeLowercase) allowedChars += lowercaseChars
    if (includeNumbers) allowedChars += numberChars
    if (includeSymbols) allowedChars += symbolChars

    if (allowedChars === "") {
      setGeneratedPassword("Please select at least one character type")
      return
    }

    let password = ""
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length)
      password += allowedChars[randomIndex]
    }

    setGeneratedPassword(password)
  }

  const copyToClipboard = () => {
    if (generatedPassword && generatedPassword !== "Please select at least one character type") {
      navigator.clipboard.writeText(generatedPassword)
      alert("Password copied to clipboard!")
    }
  }

  return (
    <div className="password-generator">
      <div className="generator-controls">
        <div className="control-group">
          <label>Password Length: {passwordLength}</label>
          <input
            type="range"
            min="8"
            max="64"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          />
        </div>
        
        <div className="checkbox-group">
          <div className="control-group">
            <input
              type="checkbox"
              id="uppercase"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="uppercase">A-Z</label>
          </div>
          
          <div className="control-group">
            <input
              type="checkbox"
              id="lowercase"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <label htmlFor="lowercase">a-z</label>
          </div>
          
          <div className="control-group">
            <input
              type="checkbox"
              id="numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="numbers">0-9</label>
          </div>
          
          <div className="control-group">
            <input
              type="checkbox"
              id="symbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <label htmlFor="symbols">!@#$%</label>
          </div>
        </div>
        
        <button onClick={generatePassword} className="btn-primary generate-btn">
          <FaRandom /> Generate Password
        </button>
      </div>

      {generatedPassword && (
        <div className="generated-password-container">
          <div className="password-display">
            <input
              type={showPassword ? "text" : "password"}
              value={generatedPassword}
              readOnly
            />
            <button 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)} 
              type="button"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <button 
              className="copy-btn" 
              onClick={copyToClipboard} 
              type="button"
              disabled={!generatedPassword || generatedPassword === "Please select at least one character type"}
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function DataBreachChecker() {
  const [email, setEmail] = useState("")
  const [checkStatus, setCheckStatus] = useState(null)

  const checkBreaches = (e) => {
    e.preventDefault()
    // In a real app, this would call an API to check breach databases
    // This is just a simulation
    setCheckStatus({
      checking: true
    })
    
    setTimeout(() => {
      const foundBreaches = Math.random() > 0.5 ? [
        {
          name: "ExampleSite",
          date: "January 2023",
          affectedData: "Email, Username, Password (hashed)"
        },
        {
          name: "SocialMediaBreak",
          date: "October 2024",
          affectedData: "Email, Phone Number"
        }
      ] : []
      
      setCheckStatus({
        checking: false,
        breaches: foundBreaches,
        checked: true
      })
    }, 1500)
  }

  return (
    <div className="breach-checker">
      <form onSubmit={checkBreaches}>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="btn-primary">Check Breaches</button>
        </div>
      </form>

      {checkStatus && checkStatus.checking && (
        <div className="checking-status">
          <div className="loader"></div>
          <p>Scanning breach databases...</p>
        </div>
      )}

      {checkStatus && !checkStatus.checking && checkStatus.checked && (
        <div className="breach-results">
          {checkStatus.breaches.length === 0 ? (
            <div className="no-breaches">
              <FaCheck className="check-large" />
              <h4>Good news!</h4>
              <p>Your email was not found in any known data breaches.</p>
            </div>
          ) : (
            <div className="found-breaches">
              <FaExclamationTriangle className="warning-large" />
              <h4>Your email was found in {checkStatus.breaches.length} data breach{checkStatus.breaches.length > 1 ? "es" : ""}:</h4>
              <ul className="breach-list">
                {checkStatus.breaches.map((breach, index) => (
                  <li key={index} className="breach-item">
                    <div className="breach-header">
                      <strong>{breach.name}</strong>
                      <span className="breach-date">{breach.date}</span>
                    </div>
                    <div className="breach-details">
                      <p><strong>Compromised data:</strong> {breach.affectedData}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="security-advice">
                <h5>Recommended actions:</h5>
                <ul>
                  <li>Change your password on the affected sites immediately</li>
                  <li>Enable two-factor authentication where available</li>
                  <li>Consider using a password manager for unique passwords</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Add CSS for Matrix background
const matrixCss = `
/* Add these styles to your SecurityTools.css file */

.matrix-code {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  opacity: 0.15; /* Reduce opacity to make content more readable */
}

.matrix-code canvas {
  width: 100%;
  height: 100%;
}

/* Enhance tool cards to stand out against the matrix background */
.tool-card {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 255, 65, 0.15);
  border: 1px solid rgba(0, 255, 65, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 255, 65, 0.25);
}

/* Add a neon glow effect to buttons */
.btn-primary {
  border: 1px solid #00ff41;
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.8);
}

/* Matrix-themed header */
.page-header {
  background-color: rgba(10, 14, 23, 0.8);
  border-bottom: 2px solid #00ff41;
}

.page-header h1 {
  color: #00ff41;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
}

/* Matrix-themed section titles */
.section-title h2 {
  color: #333;
  border-bottom: 2px solid #00ff41;
  padding-bottom: 0.5rem;
}

/* Add a subtle glow to tool icons */
.tool-icon {
  color: #00ff41;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
}
`;

export default SecurityTools