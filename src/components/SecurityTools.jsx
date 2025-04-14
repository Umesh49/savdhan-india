"use client"

import { useState } from "react"
import { FaLock, FaShieldAlt, FaGlobe, FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa"

function SecurityTools() {
  return (
    <div className="tools-page">
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
              <div className="tool-actions">
                <a href="/threat-map" className="btn-primary">
                  View Threat Map
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

export default SecurityTools
