"use client"

import { useState, useEffect } from "react"
import { FaLock, FaShieldAlt, FaCode, FaUserSecret, FaServer, FaLaptopCode, FaPlay } from "react-icons/fa"
import CyberSpinner from "./common/CyberSpinner/CyberSpinner"

const Tutorials = () => {
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [tutorials, setTutorials] = useState([])

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTutorials(tutorialData)
      setLoading(false)
    }, 1500)
  }, [])

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryIcon = (category) => {
    switch (category) {
      case "security":
        return <FaShieldAlt className="text-primary" />
      case "privacy":
        return <FaUserSecret className="text-secondary" />
      case "coding":
        return <FaCode className="text-accent" />
      case "network":
        return <FaServer className="text-warning" />
      case "hacking":
        return <FaLaptopCode className="text-danger" />
      default:
        return <FaLock className="text-primary" />
    }
  }

  const categories = [
    { id: "all", name: "All Tutorials" },
    { id: "security", name: "Security Basics" },
    { id: "privacy", name: "Privacy Protection" },
    { id: "coding", name: "Secure Coding" },
    { id: "network", name: "Network Security" },
    { id: "hacking", name: "Ethical Hacking" },
  ]

  if (loading) {
    return (
      <div className="loading-container">
        <CyberSpinner size={60} />
        <p>Loading tutorials...</p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="page-header">
        <div className="container">
          <h1 className="glitch-text">Security Tutorials</h1>
          <p>Learn cybersecurity skills with our comprehensive tutorials</p>
        </div>
      </div>

      <div className="cyber-panel mb-8 tutorial-filters">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredTutorials.length === 0 ? (
        <div className="empty-state">
          <FaLaptopCode size={50} className="mb-4 text-primary" />
          <h3>No tutorials found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="tutorials-grid">
          {filteredTutorials.map((tutorial) => (
            <div key={tutorial.id} className="tutorial-card">
              <div className="tutorial-image">
                <div className="category-badge">
                  {getCategoryIcon(tutorial.category)}
                  <span>{tutorial.categoryName}</span>
                </div>
                <img src={tutorial.image || "/placeholder.svg"} alt={tutorial.title} />
                <div className="tutorial-overlay">
                  <button className="btn-play">
                    <FaPlay />
                  </button>
                </div>
              </div>
              <div className="tutorial-content">
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <div className="tutorial-meta">
                  <span className="tutorial-duration">{tutorial.duration}</span>
                  <span className="tutorial-level">{tutorial.level}</span>
                </div>
                <button className="btn-primary mt-4">Start Tutorial</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Mock data
const tutorialData = [
  {
    id: 1,
    title: "Securing Your Digital Identity",
    description: "Learn how to protect your online identity and personal information from cyber threats.",
    category: "privacy",
    categoryName: "Privacy Protection",
    image: "/placeholder.svg?height=200&width=350",
    duration: "45 min",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Introduction to Encryption",
    description: "Understand the basics of encryption and how it keeps your data safe from unauthorized access.",
    category: "security",
    categoryName: "Security Basics",
    image: "/placeholder.svg?height=200&width=350",
    duration: "60 min",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Secure Coding Practices",
    description: "Learn how to write code that is resistant to common security vulnerabilities and attacks.",
    category: "coding",
    categoryName: "Secure Coding",
    image: "/placeholder.svg?height=200&width=350",
    duration: "90 min",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Network Security Fundamentals",
    description: "Understand how to secure your network against unauthorized access and data breaches.",
    category: "network",
    categoryName: "Network Security",
    image: "/placeholder.svg?height=200&width=350",
    duration: "75 min",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Ethical Hacking Basics",
    description:
      "Learn the fundamentals of ethical hacking and penetration testing to identify security vulnerabilities.",
    category: "hacking",
    categoryName: "Ethical Hacking",
    image: "/placeholder.svg?height=200&width=350",
    duration: "120 min",
    level: "Advanced",
  },
  {
    id: 6,
    title: "Mobile Device Security",
    description: "Protect your smartphones and tablets from malware, phishing, and other mobile threats.",
    category: "security",
    categoryName: "Security Basics",
    image: "/placeholder.svg?height=200&width=350",
    duration: "50 min",
    level: "Beginner",
  },
]

export default Tutorials
