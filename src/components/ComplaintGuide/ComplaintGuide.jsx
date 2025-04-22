"use client"

import { useState } from "react"
import { FaClipboardList, FaExclamationTriangle, FaFileAlt, FaArrowRight, FaCheck, FaInfoCircle, FaShieldAlt, FaLock, FaServer } from "react-icons/fa"
import "./ComplaintGuide.css"

function ComplaintGuide() {
  const [activeTab, setActiveTab] = useState("process")

  const tabs = [
    { id: "process", label: "Complaint Process", icon: <FaClipboardList /> },
    { id: "evidence", label: "Gathering Evidence", icon: <FaFileAlt /> },
    { id: "authorities", label: "Reporting Authorities", icon: <FaServer /> },
    { id: "faq", label: "Common Questions", icon: <FaInfoCircle /> },
  ]

  return (
    <div className="complaint-guide-page">
      <div className="complaint-guide-header">
        <div className="complaint-guide-container">
          <h1><span className="complaint-guide-glitch">Cyber Crime</span> Complaint Guide</h1>
          <p className="complaint-guide-subtitle">Step-by-step guidance on filing cybercrime complaints with relevant authorities in India.</p>
        </div>
      </div>

      <div className="complaint-guide-container">
        <div className="complaint-guide-emergency-banner">
          <div className="complaint-guide-emergency-content">
            <div className="complaint-guide-emergency-icon">
              <FaExclamationTriangle />
            </div>
            <div className="complaint-guide-emergency-text">
              <h2>Cyber Crime Emergency?</h2>
              <p>Call the National Cyber Crime Helpline immediately:</p>
              <a href="tel:1930" className="complaint-guide-emergency-number">
                1930
              </a>
              <span>or visit</span>
              <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="complaint-guide-emergency-link">
                cybercrime.gov.in
              </a>
            </div>
          </div>
        </div>

        <div className="complaint-guide-tabs-container">
          <div className="complaint-guide-tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`complaint-guide-tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="complaint-guide-tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="complaint-guide-tab-content">
            {activeTab === "process" && (
              <div className="complaint-guide-process-content">
                <div className="complaint-guide-cyber-panel">
                  <h2 className="complaint-guide-section-title">
                    <FaClipboardList className="complaint-guide-section-icon" />
                    Complaint Filing Process
                  </h2>
                  <p>
                    Filing a cybercrime complaint in India involves several steps. Follow this guide to ensure your
                    complaint is properly registered and processed.
                  </p>

                  <div className="complaint-guide-steps-container">
                    <div className="complaint-guide-step-card">
                      <div className="complaint-guide-step-number">1</div>
                      <div className="complaint-guide-step-content">
                        <h3>Identify the Type of Cybercrime</h3>
                        <p>
                          Determine the nature of the cybercrime you've experienced (e.g., phishing, identity theft,
                          online fraud, cyberstalking, etc.).
                        </p>
                      </div>
                    </div>

                    <div className="complaint-guide-step-card">
                      <div className="complaint-guide-step-number">2</div>
                      <div className="complaint-guide-step-content">
                        <h3>Gather Evidence</h3>
                        <p>
                          Collect and preserve all relevant evidence, including screenshots, emails, messages, transaction
                          details, and any other digital footprints.
                        </p>
                      </div>
                    </div>

                    <div className="complaint-guide-step-card">
                      <div className="complaint-guide-step-number">3</div>
                      <div className="complaint-guide-step-content">
                        <h3>Report Online</h3>
                        <p>
                          Visit the National Cyber Crime Reporting Portal at{" "}
                          <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">
                            cybercrime.gov.in
                          </a>{" "}
                          and file a complaint. You'll receive a reference number for tracking.
                        </p>
                      </div>
                    </div>

                    <div className="complaint-guide-step-card">
                      <div className="complaint-guide-step-number">4</div>
                      <div className="complaint-guide-step-content">
                        <h3>Visit Local Police Station</h3>
                        <p>
                          For serious cybercrimes, visit your local police station to file a formal FIR (First Information
                          Report). Bring all evidence and the reference number from the online portal.
                        </p>
                      </div>
                    </div>

                    <div className="complaint-guide-step-card">
                      <div className="complaint-guide-step-number">5</div>
                      <div className="complaint-guide-step-content">
                        <h3>Follow Up</h3>
                        <p>
                          Regularly follow up on your complaint using the reference number. Cooperate with investigating
                          officers and provide additional information if requested.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="complaint-guide-action-buttons">
                    <a to="/complaint-form" className="complaint-guide-btn-primary">
                      <FaFileAlt /> File a Complaint
                    </a>
                    <button className="complaint-guide-btn-secondary" onClick={() => setActiveTab("evidence")}>
                      Evidence Guide <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "evidence" && (
              <div className="complaint-guide-evidence-content">
                <div className="complaint-guide-cyber-panel">
                  <h2 className="complaint-guide-section-title">
                    <FaFileAlt className="complaint-guide-section-icon" />
                    Gathering Evidence
                  </h2>
                  <p>
                    Proper evidence collection is crucial for cybercrime investigations. Follow these guidelines to
                    ensure you preserve digital evidence correctly.
                  </p>

                  <div className="complaint-guide-evidence-types">
                    <div className="complaint-guide-evidence-card primary">
                      <h3>Screenshots and Screen Recordings</h3>
                      <p>
                        Capture screenshots or screen recordings of the incident, including URLs, timestamps, and any
                        relevant information visible on screen.
                      </p>
                      <ul className="complaint-guide-evidence-list">
                        <li>Use built-in screenshot tools or specialized software</li>
                        <li>Ensure timestamps are visible when possible</li>
                        <li>Save files in common formats (PNG, JPG, MP4)</li>
                      </ul>
                    </div>

                    <div className="complaint-guide-evidence-card secondary">
                      <h3>Emails and Messages</h3>
                      <p>
                        Preserve complete emails including headers, which contain valuable technical information about
                        the sender.
                      </p>
                      <ul className="complaint-guide-evidence-list">
                        <li>Save emails as .eml or .msg files to preserve headers</li>
                        <li>Take screenshots of messages from social media or messaging apps</li>
                        <li>Document the date, time, and platform of communication</li>
                      </ul>
                    </div>

                    <div className="complaint-guide-evidence-card accent">
                      <h3>Transaction Details</h3>
                      <p>
                        For financial cybercrimes, collect all transaction details, including bank statements, payment
                        confirmations, and receipts.
                      </p>
                      <ul className="complaint-guide-evidence-list">
                        <li>Save bank statements showing fraudulent transactions</li>
                        <li>Document transaction IDs, dates, and amounts</li>
                        <li>Preserve any communication with the financial institution</li>
                      </ul>
                    </div>

                    <div className="complaint-guide-evidence-card warning">
                      <h3>Digital Footprints</h3>
                      <p>
                        Collect IP addresses, device information, and any other technical data that might help identify
                        the perpetrator.
                      </p>
                      <ul className="complaint-guide-evidence-list">
                        <li>Note down IP addresses from email headers or website logs</li>
                        <li>Record device information if available</li>
                        <li>Save any technical logs that might be relevant</li>
                      </ul>
                    </div>
                  </div>

                  <div className="complaint-guide-evidence-warning">
                    <h3><FaExclamationTriangle /> Important Warning</h3>
                    <p>
                      Do not delete any evidence, even after reporting. Law enforcement may need to examine the original
                      data. Keep multiple copies of all evidence in different secure locations.
                    </p>
                  </div>

                  <div className="complaint-guide-action-buttons">
                    <button className="complaint-guide-btn-secondary" onClick={() => setActiveTab("process")}>
                      <FaArrowRight className="icon-rotate" /> Back to Process
                    </button>
                    <button className="complaint-guide-btn-primary" onClick={() => setActiveTab("authorities")}>
                      Reporting Authorities <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "authorities" && (
              <div className="complaint-guide-authorities-content">
                <div className="complaint-guide-cyber-panel">
                  <h2 className="complaint-guide-section-title">
                    <FaServer className="complaint-guide-section-icon" />
                    Reporting Authorities
                  </h2>
                  <p>
                    Different cybercrime incidents may require reporting to different authorities. Here's a guide to
                    help you determine where to report your specific case.
                  </p>

                  <div className="complaint-guide-authorities-list">
                    <div className="complaint-guide-authority-card primary">
                      <h3><FaClipboardList /> National Cyber Crime Reporting Portal</h3>
                      <p>
                        The official portal for reporting all types of cybercrimes in India. This should be your first
                        step for most cybercrime complaints.
                      </p>
                      <div className="complaint-guide-authority-info">
                        <strong>Website:</strong>{" "}
                        <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">
                          cybercrime.gov.in
                        </a>
                      </div>
                      <div className="complaint-guide-authority-info">
                        <strong>Helpline:</strong>{" "}
                        <a href="tel:1930">
                          1930
                        </a>
                      </div>
                      <div className="complaint-guide-authority-info">
                        <strong>Best for:</strong> All types of cybercrimes including online financial fraud, social
                        media crimes, and online harassment.
                      </div>
                    </div>

                    <div className="complaint-guide-authority-card secondary">
                      <h3><FaLock /> Local Police Station</h3>
                      <p>
                        For serious cybercrimes, filing an FIR at your local police station is essential. They can
                        coordinate with cyber cells for investigation.
                      </p>
                      <div className="complaint-guide-authority-info">
                        <strong>How to find:</strong> Visit your nearest police station or call emergency number 100 for
                        guidance.
                      </div>
                      <div className="complaint-guide-authority-info">
                        <strong>Best for:</strong> Serious cybercrimes requiring immediate local intervention, cases
                        where you have substantial evidence.
                      </div>
                    </div>

                    <div className="complaint-guide-authority-card accent">
                      <h3><FaShieldAlt /> State Cyber Cells</h3>
                      <p>Specialized units within state police departments dedicated to handling cybercrime cases.</p>
                      <div className="complaint-guide-authority-info">
                        <strong>How to find:</strong> Contact your state police headquarters or visit their official
                        website for cyber cell contact information.
                      </div>
                      <div className="complaint-guide-authority-info">
                        <strong>Best for:</strong> Complex cybercrimes requiring specialized investigation, cases
                        involving multiple jurisdictions within a state.
                      </div>
                    </div>

                    <div className="complaint-guide-authority-card warning">
                      <h3><FaClipboardList /> Financial Fraud Reporting</h3>
                      <p>For financial cybercrimes, additional reporting to financial institutions is necessary.</p>
                      <div className="complaint-guide-authority-info">
                        <strong>Steps:</strong>
                      </div>
                      <ul className="complaint-guide-evidence-list">
                        <li>Contact your bank immediately to report fraudulent transactions</li>
                        <li>Call the cyber fraud helpline at 1930 within the Golden Hour (first 24 hours)</li>
                        <li>File a complaint on the National Cyber Crime Reporting Portal</li>
                      </ul>
                    </div>
                  </div>

                  <div className="complaint-guide-action-buttons">
                    <button className="complaint-guide-btn-secondary" onClick={() => setActiveTab("evidence")}>
                      <FaArrowRight className="icon-rotate" /> Back to Evidence
                    </button>
                    <button className="complaint-guide-btn-primary" onClick={() => setActiveTab("faq")}>
                      Common Questions <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="complaint-guide-faq-content">
                <div className="complaint-guide-cyber-panel">
                  <h2 className="complaint-guide-section-title">
                    <FaInfoCircle className="complaint-guide-section-icon" />
                    Common Questions
                  </h2>
                  <p>Find answers to frequently asked questions about cybercrime reporting in India.</p>

                  <div className="complaint-guide-faq-list">
                    <div className="complaint-guide-faq-item">
                      <h3><FaInfoCircle /> What is the Golden Hour in cybercrime reporting?</h3>
                      <p>
                        The Golden Hour refers to the first 24 hours after a cybercrime occurs, especially for financial
                        fraud. Reporting within this timeframe significantly increases the chances of recovering lost
                        funds as authorities can freeze suspicious transactions.
                      </p>
                    </div>

                    <div className="complaint-guide-faq-item">
                      <h3><FaInfoCircle /> Can I file a cybercrime complaint anonymously?</h3>
                      <p>
                        While you can report certain cybercrimes anonymously on the National Cyber Crime Reporting
                        Portal, providing your contact details is recommended for effective investigation. For formal
                        FIRs at police stations, anonymous complaints are not accepted.
                      </p>
                    </div>

                    <div className="complaint-guide-faq-item">
                      <h3><FaInfoCircle /> What documents do I need to file a cybercrime complaint?</h3>
                      <p>
                        You should have your identity proof (Aadhaar, PAN, or voter ID), contact details, and all
                        evidence related to the cybercrime (screenshots, emails, transaction details, etc.). For
                        financial fraud, bank statements showing the fraudulent transactions are essential.
                      </p>
                    </div>

                    <div className="complaint-guide-faq-item">
                      <h3><FaInfoCircle /> How long does it take to investigate a cybercrime complaint?</h3>
                      <p>
                        The investigation timeline varies depending on the complexity of the case, available evidence,
                        and the workload of the investigating agency. Simple cases may be resolved in weeks, while
                        complex cases might take several months. Financial fraud cases reported within the Golden Hour
                        typically receive faster attention.
                      </p>
                    </div>

                    <div className="complaint-guide-faq-item">
                      <h3><FaInfoCircle /> Can I file a cybercrime complaint if the perpetrator is in another country?</h3>
                      <p>
                        Yes, you can file a complaint in India even if the perpetrator is located in another country.
                        Indian law enforcement agencies can work with international agencies through Interpol and other
                        channels. However, international cases may take longer to investigate and resolve due to
                        jurisdictional complexities.
                      </p>
                    </div>
                  </div>

                  <div className="complaint-guide-action-buttons">
                    <button className="complaint-guide-btn-secondary" onClick={() => setActiveTab("authorities")}>
                      <FaArrowRight className="icon-rotate" /> Back to Authorities
                    </button>
                    <a to="/complaint-form" className="complaint-guide-btn-primary">
                      <FaFileAlt /> File a Complaint
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="complaint-guide-additional-resources">
          <h2 className="complaint-guide-section-title">Additional Resources</h2>
          <div className="complaint-guide-resources-grid">
            <div className="complaint-guide-resource-card">
              <div className="complaint-guide-resource-icon">
                <FaCheck />
              </div>
              <h3>Complaint Checklist</h3>
              <p>
                A comprehensive checklist to ensure you have everything needed before filing a cybercrime complaint.
              </p>
              <a to="/resources/complaint-checklist" className="complaint-guide-btn-outline">
                View Checklist
              </a>
            </div>

            <div className="complaint-guide-resource-card">
              <div className="complaint-guide-resource-icon">
                <FaFileAlt />
              </div>
              <h3>Sample Complaints</h3>
              <p>
                View sample complaint formats for different types of cybercrimes to help you draft your complaint
                effectively.
              </p>
              <a to="/resources/sample-complaints" className="complaint-guide-btn-outline">
                View Samples
              </a>
            </div>

            <div className="complaint-guide-resource-card">
              <div className="complaint-guide-resource-icon">
                <FaClipboardList />
              </div>
              <h3>State-wise Contacts</h3>
              <p>Directory of cyber cells and specialized cybercrime units across different states in India.</p>
              <a to="/resources/state-contacts" className="complaint-guide-btn-outline">
                View Directory
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplaintGuide