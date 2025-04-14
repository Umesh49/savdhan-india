"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaClipboardList, FaExclamationTriangle, FaFileAlt, FaArrowRight, FaCheck, FaInfoCircle } from "react-icons/fa"

function ComplaintGuide() {
  const [activeTab, setActiveTab] = useState("process")

  const tabs = [
    { id: "process", label: "Complaint Process" },
    { id: "evidence", label: "Gathering Evidence" },
    { id: "authorities", label: "Reporting Authorities" },
    { id: "faq", label: "Common Questions" },
  ]

  return (
    <div className="complaint-guide-page">
      <div className="page-header">
        <div className="container">
          <h1>Cyber Crime Complaint Guide</h1>
          <p>Step-by-step guidance on filing cybercrime complaints with relevant authorities in India.</p>
        </div>
      </div>

      <div className="container">
        <div className="emergency-banner" style={{ marginTop: "2rem" }}>
          <div className="emergency-content">
            <h2>Cyber Crime Emergency?</h2>
            <p>Call the National Cyber Crime Helpline immediately:</p>
            <a href="tel:1930" className="emergency-number">
              1930
            </a>
            <span>or visit</span>
            <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="emergency-link">
              cybercrime.gov.in
            </a>
          </div>
        </div>

        <div className="tabs-container" style={{ marginTop: "2rem" }}>
          <div className="tabs-header" style={{ display: "flex", borderBottom: "1px solid var(--primary-color)" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "1rem 1.5rem",
                  backgroundColor: activeTab === tab.id ? "rgba(0, 255, 65, 0.1)" : "transparent",
                  color: activeTab === tab.id ? "var(--primary-color)" : "var(--text-color)",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "2px solid var(--primary-color)" : "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content" style={{ padding: "2rem 0" }}>
            {activeTab === "process" && (
              <div className="process-content">
                <div className="cyber-panel">
                  <h2 className="cyber-text">Complaint Filing Process</h2>
                  <p>
                    Filing a cybercrime complaint in India involves several steps. Follow this guide to ensure your
                    complaint is properly registered and processed.
                  </p>

                  <div className="steps-container" style={{ marginTop: "2rem" }}>
                    <div
                      className="step-card"
                      style={{ marginBottom: "1.5rem", position: "relative", paddingLeft: "3rem" }}
                    >
                      <div
                        className="step-number"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "2rem",
                          height: "2rem",
                          backgroundColor: "var(--primary-color)",
                          color: "var(--bg-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        1
                      </div>
                      <h3>Identify the Type of Cybercrime</h3>
                      <p>
                        Determine the nature of the cybercrime you've experienced (e.g., phishing, identity theft,
                        online fraud, cyberstalking, etc.).
                      </p>
                    </div>

                    <div
                      className="step-card"
                      style={{ marginBottom: "1.5rem", position: "relative", paddingLeft: "3rem" }}
                    >
                      <div
                        className="step-number"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "2rem",
                          height: "2rem",
                          backgroundColor: "var(--primary-color)",
                          color: "var(--bg-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        2
                      </div>
                      <h3>Gather Evidence</h3>
                      <p>
                        Collect and preserve all relevant evidence, including screenshots, emails, messages, transaction
                        details, and any other digital footprints.
                      </p>
                    </div>

                    <div
                      className="step-card"
                      style={{ marginBottom: "1.5rem", position: "relative", paddingLeft: "3rem" }}
                    >
                      <div
                        className="step-number"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "2rem",
                          height: "2rem",
                          backgroundColor: "var(--primary-color)",
                          color: "var(--bg-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </div>
                      <h3>Report Online</h3>
                      <p>
                        Visit the National Cyber Crime Reporting Portal at{" "}
                        <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">
                          cybercrime.gov.in
                        </a>{" "}
                        and file a complaint. You'll receive a reference number for tracking.
                      </p>
                    </div>

                    <div
                      className="step-card"
                      style={{ marginBottom: "1.5rem", position: "relative", paddingLeft: "3rem" }}
                    >
                      <div
                        className="step-number"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "2rem",
                          height: "2rem",
                          backgroundColor: "var(--primary-color)",
                          color: "var(--bg-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        4
                      </div>
                      <h3>Visit Local Police Station</h3>
                      <p>
                        For serious cybercrimes, visit your local police station to file a formal FIR (First Information
                        Report). Bring all evidence and the reference number from the online portal.
                      </p>
                    </div>

                    <div
                      className="step-card"
                      style={{ marginBottom: "1.5rem", position: "relative", paddingLeft: "3rem" }}
                    >
                      <div
                        className="step-number"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "2rem",
                          height: "2rem",
                          backgroundColor: "var(--primary-color)",
                          color: "var(--bg-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        5
                      </div>
                      <h3>Follow Up</h3>
                      <p>
                        Regularly follow up on your complaint using the reference number. Cooperate with investigating
                        officers and provide additional information if requested.
                      </p>
                    </div>
                  </div>

                  <div className="action-buttons" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <Link to="/complaint-form" className="btn-primary">
                      <FaFileAlt /> File a Complaint
                    </Link>
                    <button className="btn-secondary" onClick={() => setActiveTab("evidence")}>
                      Evidence Guide <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "evidence" && (
              <div className="evidence-content">
                <div className="cyber-panel">
                  <h2 className="cyber-text">Gathering Evidence</h2>
                  <p>
                    Proper evidence collection is crucial for cybercrime investigations. Follow these guidelines to
                    ensure you preserve digital evidence correctly.
                  </p>

                  <div className="evidence-types" style={{ marginTop: "2rem" }}>
                    <div
                      className="evidence-card"
                      style={{
                        marginBottom: "1.5rem",
                        borderLeft: "4px solid var(--primary-color)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      <h3>Screenshots and Screen Recordings</h3>
                      <p>
                        Capture screenshots or screen recordings of the incident, including URLs, timestamps, and any
                        relevant information visible on screen.
                      </p>
                      <ul style={{ listStyle: "disc", marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>Use built-in screenshot tools or specialized software</li>
                        <li>Ensure timestamps are visible when possible</li>
                        <li>Save files in common formats (PNG, JPG, MP4)</li>
                      </ul>
                    </div>

                    <div
                      className="evidence-card"
                      style={{
                        marginBottom: "1.5rem",
                        borderLeft: "4px solid var(--secondary-color)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      <h3>Emails and Messages</h3>
                      <p>
                        Preserve complete emails including headers, which contain valuable technical information about
                        the sender.
                      </p>
                      <ul style={{ listStyle: "disc", marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>Save emails as .eml or .msg files to preserve headers</li>
                        <li>Take screenshots of messages from social media or messaging apps</li>
                        <li>Document the date, time, and platform of communication</li>
                      </ul>
                    </div>

                    <div
                      className="evidence-card"
                      style={{
                        marginBottom: "1.5rem",
                        borderLeft: "4px solid var(--accent-color)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      <h3>Transaction Details</h3>
                      <p>
                        For financial cybercrimes, collect all transaction details, including bank statements, payment
                        confirmations, and receipts.
                      </p>
                      <ul style={{ listStyle: "disc", marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>Save bank statements showing fraudulent transactions</li>
                        <li>Document transaction IDs, dates, and amounts</li>
                        <li>Preserve any communication with the financial institution</li>
                      </ul>
                    </div>

                    <div
                      className="evidence-card"
                      style={{
                        marginBottom: "1.5rem",
                        borderLeft: "4px solid var(--warning-color)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      <h3>Digital Footprints</h3>
                      <p>
                        Collect IP addresses, device information, and any other technical data that might help identify
                        the perpetrator.
                      </p>
                      <ul style={{ listStyle: "disc", marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>Note down IP addresses from email headers or website logs</li>
                        <li>Record device information if available</li>
                        <li>Save any technical logs that might be relevant</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="evidence-warning"
                    style={{
                      marginTop: "2rem",
                      backgroundColor: "rgba(255, 0, 85, 0.1)",
                      padding: "1.5rem",
                      borderLeft: "4px solid var(--danger-color)",
                    }}
                  >
                    <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <FaExclamationTriangle /> Important Warning
                    </h3>
                    <p>
                      Do not delete any evidence, even after reporting. Law enforcement may need to examine the original
                      data. Keep multiple copies of all evidence in different secure locations.
                    </p>
                  </div>

                  <div className="action-buttons" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <button className="btn-secondary" onClick={() => setActiveTab("process")}>
                      <FaArrowRight style={{ transform: "rotate(180deg)" }} /> Back to Process
                    </button>
                    <button className="btn-primary" onClick={() => setActiveTab("authorities")}>
                      Reporting Authorities <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "authorities" && (
              <div className="authorities-content">
                <div className="cyber-panel">
                  <h2 className="cyber-text">Reporting Authorities</h2>
                  <p>
                    Different cybercrime incidents may require reporting to different authorities. Here's a guide to
                    help you determine where to report your specific case.
                  </p>

                  <div className="authorities-list" style={{ marginTop: "2rem" }}>
                    <div
                      className="authority-card"
                      style={{ marginBottom: "2rem", padding: "1.5rem", border: "1px solid var(--primary-color)" }}
                    >
                      <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaClipboardList /> National Cyber Crime Reporting Portal
                      </h3>
                      <p>
                        The official portal for reporting all types of cybercrimes in India. This should be your first
                        step for most cybercrime complaints.
                      </p>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>Website:</strong>{" "}
                        <a
                          href="https://cybercrime.gov.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cyber-text"
                        >
                          cybercrime.gov.in
                        </a>
                      </div>
                      <div>
                        <strong>Helpline:</strong>{" "}
                        <a href="tel:1930" className="cyber-text">
                          1930
                        </a>
                      </div>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>Best for:</strong> All types of cybercrimes including online financial fraud, social
                        media crimes, and online harassment.
                      </div>
                    </div>

                    <div
                      className="authority-card"
                      style={{ marginBottom: "2rem", padding: "1.5rem", border: "1px solid var(--secondary-color)" }}
                    >
                      <h3
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--secondary-color)",
                        }}
                      >
                        <FaClipboardList /> Local Police Station
                      </h3>
                      <p>
                        For serious cybercrimes, filing an FIR at your local police station is essential. They can
                        coordinate with cyber cells for investigation.
                      </p>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>How to find:</strong> Visit your nearest police station or call emergency number 100 for
                        guidance.
                      </div>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>Best for:</strong> Serious cybercrimes requiring immediate local intervention, cases
                        where you have substantial evidence.
                      </div>
                    </div>

                    <div
                      className="authority-card"
                      style={{ marginBottom: "2rem", padding: "1.5rem", border: "1px solid var(--accent-color)" }}
                    >
                      <h3
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-color)" }}
                      >
                        <FaClipboardList /> State Cyber Cells
                      </h3>
                      <p>Specialized units within state police departments dedicated to handling cybercrime cases.</p>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>How to find:</strong> Contact your state police headquarters or visit their official
                        website for cyber cell contact information.
                      </div>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>Best for:</strong> Complex cybercrimes requiring specialized investigation, cases
                        involving multiple jurisdictions within a state.
                      </div>
                    </div>

                    <div
                      className="authority-card"
                      style={{ marginBottom: "2rem", padding: "1.5rem", border: "1px solid var(--warning-color)" }}
                    >
                      <h3
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--warning-color)" }}
                      >
                        <FaClipboardList /> Financial Fraud Reporting
                      </h3>
                      <p>For financial cybercrimes, additional reporting to financial institutions is necessary.</p>
                      <div style={{ marginTop: "1rem" }}>
                        <strong>Steps:</strong>
                      </div>
                      <ul style={{ listStyle: "disc", marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>Contact your bank immediately to report fraudulent transactions</li>
                        <li>Call the cyber fraud helpline at 1930 within the Golden Hour (first 24 hours)</li>
                        <li>File a complaint on the National Cyber Crime Reporting Portal</li>
                      </ul>
                    </div>
                  </div>

                  <div className="action-buttons" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <button className="btn-secondary" onClick={() => setActiveTab("evidence")}>
                      <FaArrowRight style={{ transform: "rotate(180deg)" }} /> Back to Evidence
                    </button>
                    <button className="btn-primary" onClick={() => setActiveTab("faq")}>
                      Common Questions <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="faq-content">
                <div className="cyber-panel">
                  <h2 className="cyber-text">Common Questions</h2>
                  <p>Find answers to frequently asked questions about cybercrime reporting in India.</p>

                  <div className="faq-list" style={{ marginTop: "2rem" }}>
                    <div
                      className="faq-item"
                      style={{
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid var(--border-color)",
                        paddingBottom: "1.5rem",
                      }}
                    >
                      <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaInfoCircle /> What is the Golden Hour in cybercrime reporting?
                      </h3>
                      <p>
                        The Golden Hour refers to the first 24 hours after a cybercrime occurs, especially for financial
                        fraud. Reporting within this timeframe significantly increases the chances of recovering lost
                        funds as authorities can freeze suspicious transactions.
                      </p>
                    </div>

                    <div
                      className="faq-item"
                      style={{
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid var(--border-color)",
                        paddingBottom: "1.5rem",
                      }}
                    >
                      <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaInfoCircle /> Can I file a cybercrime complaint anonymously?
                      </h3>
                      <p>
                        While you can report certain cybercrimes anonymously on the National Cyber Crime Reporting
                        Portal, providing your contact details is recommended for effective investigation. For formal
                        FIRs at police stations, anonymous complaints are not accepted.
                      </p>
                    </div>

                    <div
                      className="faq-item"
                      style={{
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid var(--border-color)",
                        paddingBottom: "1.5rem",
                      }}
                    >
                      <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaInfoCircle /> What documents do I need to file a cybercrime complaint?
                      </h3>
                      <p>
                        You should have your identity proof (Aadhaar, PAN, or voter ID), contact details, and all
                        evidence related to the cybercrime (screenshots, emails, transaction details, etc.). For
                        financial fraud, bank statements showing the fraudulent transactions are essential.
                      </p>
                    </div>

                    <div
                      className="faq-item"
                      style={{
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid var(--border-color)",
                        paddingBottom: "1.5rem",
                      }}
                    >
                      <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaInfoCircle /> How long does it take to investigate a cybercrime complaint?
                      </h3>
                      <p>
                        The investigation timeline varies depending on the complexity of the case, available evidence,
                        and the workload of the investigating agency. Simple cases may be resolved in weeks, while
                        complex cases might take several months. Financial fraud cases reported within the Golden Hour
                        typically receive faster attention.
                      </p>
                    </div>

                    <div className="faq-item" style={{ marginBottom: "1.5rem" }}>
                      <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaInfoCircle /> Can I file a cybercrime complaint if the perpetrator is in another country?
                      </h3>
                      <p>
                        Yes, you can file a complaint in India even if the perpetrator is located in another country.
                        Indian law enforcement agencies can work with international agencies through Interpol and other
                        channels. However, international cases may take longer to investigate and resolve due to
                        jurisdictional complexities.
                      </p>
                    </div>
                  </div>

                  <div className="action-buttons" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <button className="btn-secondary" onClick={() => setActiveTab("authorities")}>
                      <FaArrowRight style={{ transform: "rotate(180deg)" }} /> Back to Authorities
                    </button>
                    <Link to="/complaint-form" className="btn-primary">
                      <FaFileAlt /> File a Complaint
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="additional-resources" style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <h2 className="section-title cyber-text">Additional Resources</h2>
          <div
            className="resources-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}
          >
            <div className="cyber-panel">
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FaCheck /> Complaint Checklist
              </h3>
              <p>
                A comprehensive checklist to ensure you have everything needed before filing a cybercrime complaint.
              </p>
              <Link to="/resources/complaint-checklist" className="btn-outline" style={{ marginTop: "1rem" }}>
                View Checklist
              </Link>
            </div>

            <div className="cyber-panel">
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FaFileAlt /> Sample Complaints
              </h3>
              <p>
                View sample complaint formats for different types of cybercrimes to help you draft your complaint
                effectively.
              </p>
              <Link to="/resources/sample-complaints" className="btn-outline" style={{ marginTop: "1rem" }}>
                View Samples
              </Link>
            </div>

            <div className="cyber-panel">
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FaClipboardList /> State-wise Contacts
              </h3>
              <p>Directory of cyber cells and specialized cybercrime units across different states in India.</p>
              <Link to="/resources/state-contacts" className="btn-outline" style={{ marginTop: "1rem" }}>
                View Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplaintGuide
