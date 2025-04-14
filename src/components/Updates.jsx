"use client"

import { useState, useEffect } from "react"
import { FaExclamationTriangle, FaShieldAlt, FaBell, FaCalendarAlt, FaTag, FaSearch } from "react-icons/fa"
import CyberSpinner from "./common/CyberSpinner"

const Updates = () => {
  const [loading, setLoading] = useState(true)
  const [updates, setUpdates] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUpdates(updateData)
      setLoading(false)
    }, 1500)
  }, [])

  const filteredUpdates = updates.filter((update) => {
    const matchesCategory = selectedCategory === "all" || update.category === selectedCategory
    const matchesSearch =
      update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getSeverityClass = (severity) => {
    switch (severity) {
      case "critical":
        return "severity-critical"
      case "high":
        return "severity-high"
      case "medium":
        return "severity-medium"
      case "low":
        return "severity-low"
      default:
        return "severity-info"
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <CyberSpinner size={60} />
        <p>Loading security updates...</p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="page-header">
        <div className="container">
          <h1 className="glitch-text">Security Updates</h1>
          <p>Stay informed about the latest cybersecurity threats and advisories</p>
        </div>
      </div>

      <div className="cyber-panel mb-8">
        <div className="updates-filter">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filter">
            <button
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${selectedCategory === "threat" ? "active" : ""}`}
              onClick={() => setSelectedCategory("threat")}
            >
              Threats
            </button>
            <button
              className={`filter-btn ${selectedCategory === "vulnerability" ? "active" : ""}`}
              onClick={() => setSelectedCategory("vulnerability")}
            >
              Vulnerabilities
            </button>
            <button
              className={`filter-btn ${selectedCategory === "advisory" ? "active" : ""}`}
              onClick={() => setSelectedCategory("advisory")}
            >
              Advisories
            </button>
            <button
              className={`filter-btn ${selectedCategory === "news" ? "active" : ""}`}
              onClick={() => setSelectedCategory("news")}
            >
              News
            </button>
          </div>
        </div>
      </div>

      {filteredUpdates.length === 0 ? (
        <div className="empty-state">
          <FaBell size={50} className="mb-4 text-primary" />
          <h3>No updates found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="updates-list">
          {filteredUpdates.map((update) => (
            <div key={update.id} className="update-card">
              <div className={`update-severity ${getSeverityClass(update.severity)}`}>
                {update.severity === "critical" && <FaExclamationTriangle />}
                {update.severity !== "critical" && <FaShieldAlt />}
                <span>{update.severity}</span>
              </div>

              <div className="update-content">
                <h3>{update.title}</h3>
                <p>{update.description}</p>

                <div className="update-meta">
                  <div className="update-date">
                    <FaCalendarAlt />
                    <span>{update.date}</span>
                  </div>

                  <div className="update-category">
                    <FaTag />
                    <span>{update.categoryName}</span>
                  </div>
                </div>

                <div className="update-actions">
                  <button className="btn-primary">Read More</button>
                  {update.hasAction && <button className="btn-outline">Take Action</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Mock data
const updateData = [
  {
    id: 1,
    title: "Critical Vulnerability in Windows Operating System",
    description:
      "A critical vulnerability has been discovered in Windows that could allow remote code execution. Microsoft has released a patch to address this issue.",
    category: "vulnerability",
    categoryName: "Vulnerability",
    severity: "critical",
    date: "April 12, 2023",
    hasAction: true,
  },
  {
    id: 2,
    title: "New Ransomware Campaign Targeting Healthcare Sector",
    description:
      "A new ransomware campaign is targeting healthcare organizations in India. The attackers are using phishing emails with malicious attachments.",
    category: "threat",
    categoryName: "Threat Alert",
    severity: "high",
    date: "April 8, 2023",
    hasAction: true,
  },
  {
    id: 3,
    title: "Advisory: Secure Your Online Banking Transactions",
    description:
      "The Indian Cyber Security Agency has issued an advisory on securing online banking transactions amid rising fraud cases.",
    category: "advisory",
    categoryName: "Advisory",
    severity: "medium",
    date: "April 5, 2023",
    hasAction: false,
  },
  {
    id: 4,
    title: "Security Update for Popular Mobile Banking Apps",
    description:
      "Several popular mobile banking applications have released security updates to address vulnerabilities. Users are advised to update immediately.",
    category: "news",
    categoryName: "News",
    severity: "medium",
    date: "April 2, 2023",
    hasAction: true,
  },
  {
    id: 5,
    title: "Phishing Campaign Impersonating Income Tax Department",
    description:
      "A sophisticated phishing campaign is impersonating the Income Tax Department of India, sending fake tax refund emails to collect personal information.",
    category: "threat",
    categoryName: "Threat Alert",
    severity: "high",
    date: "March 28, 2023",
    hasAction: true,
  },
  {
    id: 6,
    title: "New Data Protection Bill Proposed in Parliament",
    description:
      "A new data protection bill has been proposed in the Indian Parliament that aims to strengthen privacy laws and data security measures.",
    category: "news",
    categoryName: "News",
    severity: "low",
    date: "March 25, 2023",
    hasAction: false,
  },
]

export default Updates