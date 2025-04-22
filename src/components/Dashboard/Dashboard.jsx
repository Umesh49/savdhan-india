"use client"

import { useState, useEffect } from "react"
import { FaClipboardList, FaExclamationTriangle, FaBook, FaNewspaper, FaUser, FaShieldAlt, FaLock, FaTerminal, FaBug } from "react-icons/fa"
import { dashboardData } from "./dashboard.js";
import './Dashboard.css';

function Dashboard() {
  const [complaints, setComplaints] = useState([])
  const [updates, setUpdates] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadData = () => {
      setIsLoading(true)
      
      try {
        setTimeout(() => {
          setComplaints(dashboardData.complaints || [])
          setUpdates(dashboardData.updates || [])
          setUser(dashboardData.user || { name: "Hacker", email: "elite.hacker@secure.net" })
          setIsLoading(false)
        }, 800)
      } catch (err) {
        console.error("Error loading dashboard data:", err)
        setError("Failed to decrypt dashboard data. Terminal connection reset.")
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const getStatusClass = (status) => {
    switch (status) {
      case "submitted":
        return "dash-status-submitted"
      case "under_review":
        return "dash-status-review"
      case "in_progress":
        return "dash-status-progress"
      case "resolved":
        return "dash-status-resolved"
      case "closed":
        return "dash-status-closed"
      case "rejected":
        return "dash-status-rejected"
      default:
        return ""
    }
  }

  const formatStatus = (status) => {
    return status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  return (
    <div className="dash-page">
      <section className="dash-header">
        <div className="dash-container">
          <div className="dash-header-content">
            <FaTerminal className="dash-terminal-icon" />
            <div>
              <h1>WELCOME_<span className="dash-user-highlight">{user?.name || "USER"}</span></h1>
              <p className="dash-subtitle">// Secure_Terminal_v2.5 - Monitoring and Incident Response System</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dash-content">
        <div className="dash-container">
          {isLoading ? (
            <div className="dash-loading-container">
              <div className="dash-loading-terminal">
                <div className="dash-scanning-text">
                  <p> Establishing secure connection...</p>
                  <p> Verifying credentials...</p>
                  <p> Decrypting user data...</p>
                  <p> Loading threat intelligence...</p>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="dash-error-container">
              <FaExclamationTriangle className="dash-error-icon" />
              <div className="dash-error-message">
                <p> ERROR: {error}</p>
                <p> RETRY_SEQUENCE_INITIATED</p>
              </div>
              <button className="dash-btn-primary" onClick={() => window.location.reload()}>
                RECONNECT
              </button>
            </div>
          ) : (
            <div className="dash-grid">
              <div className="dash-main">
                <div className="dash-card">
                  <div className="dash-card-header">
                    <h2>
                      <FaClipboardList /> INCIDENT_REPORTS
                    </h2>
                    <a to="/complaint-form" className="dash-btn-primary dash-btn-sm">
                      <FaBug /> NEW_REPORT
                    </a>
                  </div>

                  {complaints.length === 0 ? (
                    <div className="dash-empty-state">
                      <div className="dash-terminal-text">
                        <p>No security incidents reported</p>
                        <p> System is monitoring for threats</p>
                        <p> Ready to log new security breach</p>
                      </div>
                      <a to="/complaint-form" className="dash-btn-primary">
                        <FaTerminal /> REPORT_BREACH
                      </a>
                    </div>
                  ) : (
                    <div className="dash-complaints-list">
                      {complaints.map((complaint) => (
                        <div key={complaint._id} className="dash-complaint-item">
                          <div className="dash-complaint-header">
                            <h3>
                              {complaint.incidentDetails.incidentType
                                .replace(/_/g, " ")
                                .replace(/\b\w/g, (l) => l.toUpperCase())}
                            </h3>
                            <span className={`dash-complaint-status ${getStatusClass(complaint.status)}`}>
                              {formatStatus(complaint.status)}
                            </span>
                          </div>
                          <div className="dash-complaint-details">
                            <p>
                              <strong>ID:</strong> {complaint.referenceNumber}
                            </p>
                            <p>
                              <strong>TIMESTAMP:</strong> {new Date(complaint.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="dash-complaint-actions">
                            <a to={`/complaints/${complaint._id}`} className="dash-btn-outline dash-btn-sm">
                              VIEW_LOG
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="dash-card">
                  <div className="dash-card-header">
                    <h2>
                      <FaNewspaper /> THREAT_INTEL
                    </h2>
                  </div>

                  <div className="dash-updates-list">
                    {updates.map((update) => (
                      <div key={update._id} className="dash-update-item">
                        <div className="dash-update-date">{new Date(update.publishedAt).toLocaleDateString()}</div>
                        <h3>{update.title}</h3>
                        <p>{update.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dash-sidebar">
                <div className="dash-card dash-user-profile">
                  <div className="dash-user-avatar">
                    <FaUser />
                  </div>
                  <div className="dash-terminal-text dash-user-info">
                    <p> USER: {user?.name}</p>
                    <p> ACCESS: admin@{user?.email.split('@')[0]}</p>
                    <p> STATUS: active</p>
                  </div>
                  <div className="dash-profile-actions">
                    <a to="/profile" className="dash-btn-outline dash-btn-block">
                      <FaLock /> SECURITY_SETTINGS
                    </a>
                  </div>
                </div>

                <div className="dash-card dash-quick-links">
                  <h3>// QUICK_ACCESS</h3>
                  <ul>
                    <li>
                      <a to="/complaint-form">
                        <FaClipboardList /> REPORT_INCIDENT
                      </a>
                    </li>
                    <li>
                      <a to="/indian-laws">
                        <FaBook /> CYBER_LAWS
                      </a>
                    </li>
                    <li>
                      <a to="/tutorials">
                        <FaShieldAlt /> SECURITY_PROTOCOLS
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dash-card dash-emergency-contact">
                  <h3>// EMERGENCY_CHANNEL</h3>
                  <p>Cyber Crime Hotline:</p>
                  <a href="tel:1930" className="dash-emergency-number">
                    <FaTerminal /> 1930
                  </a>
                  <p>National Cyber Crime Portal:</p>
                  <a
                    href="https://cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dash-emergency-link"
                  >
                    <FaTerminal /> cybercrime.gov.in
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard