"use client"

import { useState } from "react"
import {
  FaCheck,
  FaLock,
  FaUserShield,
  FaWifi,
  FaMobile,
  FaPrint,
  FaTerminal,
  FaServer,
  FaFingerprint,
  FaCode,
  FaVirus
} from "react-icons/fa"
import "./SecurityChecklist.css"

function SecurityChecklist() {
  const [checklist, setChecklist] = useState({
    passwords: [
      { id: "p1", text: "Implement complex password with symbols, numbers, and mixed case", checked: false },
      { id: "p2", text: "Enable MFA/2FA on all critical systems and accounts", checked: false },
      { id: "p3", text: "Deploy encrypted password vault for credential management", checked: false },
      { id: "p4", text: "Rotate authentication keys on 90-day schedule", checked: false },
      { id: "p5", text: "Enforce zero-knowledge password sharing protocol", checked: false },
    ],
    devices: [
      { id: "d1", text: "Patch systems with latest security updates within 24h of release", checked: false },
      { id: "d2", text: "Install next-gen endpoint protection with behavioral analysis", checked: false },
      { id: "d3", text: "Activate full-disk encryption on all endpoints", checked: false },
      { id: "d4", text: "Configure automated offsite encrypted backups", checked: false },
      { id: "d5", text: "Implement biometric authentication where available", checked: false },
    ],
    online: [
      { id: "o1", text: "Scan all incoming communications for malicious payloads", checked: false },
      { id: "o2", text: "Verify SSL/TLS certificate validity before data transmission", checked: false },
      { id: "o3", text: "Route sensitive traffic through encrypted VPN tunnels", checked: false },
      { id: "o4", text: "Conduct regular OSINT assessment of digital footprint", checked: false },
      { id: "o5", text: "Implement data minimization strategies for all online activities", checked: false },
    ],
    financial: [
      { id: "f1", text: "Enable real-time transaction monitoring with anomaly detection", checked: false },
      { id: "f2", text: "Configure push notifications for all account activities", checked: false },
      { id: "f3", text: "Use virtual cards with transaction limits for online purchases", checked: false },
      { id: "f4", text: "Establish secure out-of-band verification for sensitive operations", checked: false },
      { id: "f5", text: "Verify applications with security audits before financial use", checked: false },
    ],
    mobile: [
      { id: "m1", text: "Verify app signatures and publisher reputation before installation", checked: false },
      { id: "m2", text: "Review and restrict application permissions using least-privilege model", checked: false },
      { id: "m3", text: "Disable unused wireless protocols to minimize attack surface", checked: false },
      { id: "m4", text: "Configure remote data wipe capabilities for device compromise", checked: false },
      { id: "m5", text: "Perform regular security audits of installed applications", checked: false },
    ],
  })

  const handleCheckItem = (category, id) => {
    setChecklist({
      ...checklist,
      [category]: checklist[category].map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    })
  }

  const calculateProgress = (category) => {
    const totalItems = checklist[category].length
    const checkedItems = checklist[category].filter((item) => item.checked).length
    return (checkedItems / totalItems) * 100
  }

  const calculateTotalProgress = () => {
    const allItems = Object.values(checklist).flat()
    const totalItems = allItems.length
    const checkedItems = allItems.filter((item) => item.checked).length
    return (checkedItems / totalItems) * 100
  }

  const totalProgress = calculateTotalProgress()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="security-checklist-container">
      <section className="security-checklist-header">
        <div className="security-checklist-header-content">
          <div className="security-checklist-terminal-text">
            <span className="security-checklist-command-prompt">root@secure-system:~$ </span>
            <span className="security-checklist-command-text">./run cybersecurity_assessment.sh</span>
          </div>
          <h1>SECURITY PROTOCOL <span className="security-checklist-blink">_</span></h1>
          <p>Initiate security verification sequence to harden system defenses against advanced persistent threats.</p>
        </div>
      </section>

      <section className="security-checklist-dashboard">
        <div className="security-checklist-panel">
          <div className="security-checklist-panel-header">
            <h2><FaTerminal className="security-checklist-icon" /> SECURITY STATUS MONITOR</h2>
            <button className="security-checklist-button" onClick={handlePrint}>
              <FaPrint /> EXPORT LOG
            </button>
          </div>

          <div className="security-checklist-progress-tracker">
            <div className="security-checklist-progress-header">
              <span>SYSTEM HARDENING PROGRESS</span>
              <span className="security-checklist-progress-percentage">{Math.round(totalProgress)}%</span>
            </div>
            <div className="security-checklist-progress-bar">
              <div
                className="security-checklist-progress-fill"
                style={{
                  width: `${totalProgress}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="security-checklist-metrics">
            <div className="security-checklist-metric-card">
              <FaLock className="security-checklist-metric-icon" />
              <h3>ACCESS CONTROL</h3>
              <div className="security-checklist-metric-value">{Math.round(calculateProgress("passwords"))}%</div>
            </div>

            <div className="security-checklist-metric-card">
              <FaUserShield className="security-checklist-metric-icon" />
              <h3>ENDPOINT SECURITY</h3>
              <div className="security-checklist-metric-value">{Math.round(calculateProgress("devices"))}%</div>
            </div>

            <div className="security-checklist-metric-card">
              <FaWifi className="security-checklist-metric-icon" />
              <h3>NETWORK DEFENSE</h3>
              <div className="security-checklist-metric-value">{Math.round(calculateProgress("online"))}%</div>
            </div>

            <div className="security-checklist-metric-card">
              <FaFingerprint className="security-checklist-metric-icon" />
              <h3>FINANCIAL SHIELD</h3>
              <div className="security-checklist-metric-value">{Math.round(calculateProgress("financial"))}%</div>
            </div>

            <div className="security-checklist-metric-card">
              <FaMobile className="security-checklist-metric-icon" />
              <h3>MOBILE HARDENING</h3>
              <div className="security-checklist-metric-value">{Math.round(calculateProgress("mobile"))}%</div>
            </div>
          </div>
        </div>

        <div className="security-checklist-panel">
          <h2><FaLock className="security-checklist-icon" /> ACCESS CONTROL PROTOCOL</h2>

          <div className="security-checklist-category-progress">
            <div className="security-checklist-progress-header">
              <span>PROTOCOL COMPLIANCE</span>
              <span className="security-checklist-progress-percentage">{Math.round(calculateProgress("passwords"))}%</span>
            </div>
            <div className="security-checklist-progress-bar">
              <div
                className="security-checklist-progress-fill"
                style={{
                  width: `${calculateProgress("passwords")}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="security-checklist-task-list">
            {checklist.passwords.map((item) => (
              <div key={item.id} className="security-checklist-task-item">
                <div
                  className={`security-checklist-task-checkbox ${item.checked ? "checked" : ""}`}
                  onClick={() => handleCheckItem("passwords", item.id)}
                >
                  {item.checked && <FaCheck />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="security-checklist-panel">
          <h2><FaUserShield className="security-checklist-icon" /> ENDPOINT DEFENSE SYSTEM</h2>

          <div className="security-checklist-category-progress">
            <div className="security-checklist-progress-header">
              <span>PROTOCOL COMPLIANCE</span>
              <span className="security-checklist-progress-percentage">{Math.round(calculateProgress("devices"))}%</span>
            </div>
            <div className="security-checklist-progress-bar">
              <div
                className="security-checklist-progress-fill"
                style={{
                  width: `${calculateProgress("devices")}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="security-checklist-task-list">
            {checklist.devices.map((item) => (
              <div key={item.id} className="security-checklist-task-item">
                <div
                  className={`security-checklist-task-checkbox ${item.checked ? "checked" : ""}`}
                  onClick={() => handleCheckItem("devices", item.id)}
                >
                  {item.checked && <FaCheck />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="security-checklist-panel">
          <h2><FaWifi className="security-checklist-icon" /> NETWORK DEFENSE PERIMETER</h2>

          <div className="security-checklist-category-progress">
            <div className="security-checklist-progress-header">
              <span>PROTOCOL COMPLIANCE</span>
              <span className="security-checklist-progress-percentage">{Math.round(calculateProgress("online"))}%</span>
            </div>
            <div className="security-checklist-progress-bar">
              <div
                className="security-checklist-progress-fill"
                style={{
                  width: `${calculateProgress("online")}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="security-checklist-task-list">
            {checklist.online.map((item) => (
              <div key={item.id} className="security-checklist-task-item">
                <div
                  className={`security-checklist-task-checkbox ${item.checked ? "checked" : ""}`}
                  onClick={() => handleCheckItem("online", item.id)}
                >
                  {item.checked && <FaCheck />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="security-checklist-panel">
          <h2><FaFingerprint className="security-checklist-icon" /> FINANCIAL DATA SECURITY</h2>

          <div className="security-checklist-category-progress">
            <div className="security-checklist-progress-header">
              <span>PROTOCOL COMPLIANCE</span>
              <span className="security-checklist-progress-percentage">{Math.round(calculateProgress("financial"))}%</span>
            </div>
            <div className="security-checklist-progress-bar">
              <div
                className="security-checklist-progress-fill"
                style={{
                  width: `${calculateProgress("financial")}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="security-checklist-task-list">
            {checklist.financial.map((item) => (
              <div key={item.id} className="security-checklist-task-item">
                <div
                  className={`security-checklist-task-checkbox ${item.checked ? "checked" : ""}`}
                  onClick={() => handleCheckItem("financial", item.id)}
                >
                  {item.checked && <FaCheck />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="security-checklist-panel">
          <h2><FaMobile className="security-checklist-icon" /> MOBILE SECURITY PROTOCOL</h2>

          <div className="security-checklist-category-progress">
            <div className="security-checklist-progress-header">
              <span>PROTOCOL COMPLIANCE</span>
              <span className="security-checklist-progress-percentage">{Math.round(calculateProgress("mobile"))}%</span>
            </div>
            <div className="security-checklist-progress-bar">
              <div
                className="security-checklist-progress-fill"
                style={{
                  width: `${calculateProgress("mobile")}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="security-checklist-task-list">
            {checklist.mobile.map((item) => (
              <div key={item.id} className="security-checklist-task-item">
                <div
                  className={`security-checklist-task-checkbox ${item.checked ? "checked" : ""}`}
                  onClick={() => handleCheckItem("mobile", item.id)}
                >
                  {item.checked && <FaCheck />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="security-checklist-alert-panel">
          <FaServer className="security-checklist-alert-icon" />
          <div>
            <h3>THREAT INTELLIGENCE FEED</h3>
            <p>
              Subscribe to receive real-time security advisories and zero-day vulnerability alerts.
            </p>
            <div className="security-checklist-alert-input-group">
              <input
                type="email"
                placeholder="Enter encryption key (email)"
                className="security-checklist-input"
              />
              <button className="security-checklist-button">ACTIVATE FEED</button>
            </div>
          </div>
        </div>
      </section>

      <section className="security-checklist-cta">
        <div className="security-checklist-cta-container">
          <div className="security-checklist-cta-content">
            <h2>ELEVATE DEFENSE CAPABILITIES</h2>
            <p>Access advanced security tools and training to counter evolving digital threats.</p>
            <div className="security-checklist-cta-buttons">
              <a href="/security-tools" className="security-checklist-button-primary">
                <FaVirus /> SECURITY TOOLKIT
              </a>
              <a href="/cyber-awareness-quiz" className="security-checklist-button-secondary">
                <FaCode /> SECURITY ASSESSMENT
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityChecklist