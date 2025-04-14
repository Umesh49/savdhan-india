"use client"

import { useState, useEffect } from "react"
import { FaSearch, FaDownload, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa"
import { fetchCyberLaws } from "../utils/api"

function IndianLaws() {
  const [laws, setLaws] = useState([])
  const [filteredLaws, setFilteredLaws] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedLaw, setExpandedLaw] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLaws = async () => {
      try {
        setIsLoading(true)
        const data = await fetchCyberLaws()
        setLaws(data)
        setFilteredLaws(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching laws:", error)
        setIsLoading(false)
      }
    }

    getLaws()
  }, [])

  useEffect(() => {
    // Filter laws based on search term and category
    const filtered = laws.filter((law) => {
      const matchesSearch =
        law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        law.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "All" || law.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    setFilteredLaws(filtered)
  }, [searchTerm, selectedCategory, laws])

  const toggleLawExpansion = (id) => {
    setExpandedLaw(expandedLaw === id ? null : id)
  }

  const categories = ["All", ...new Set(laws.map((law) => law.category))]

  return (
    <div className="indian-laws-page">
      <div className="page-header">
        <div className="container">
          <h1>Indian Cyber Laws</h1>
          <p>Comprehensive information on Indian cybersecurity laws, IT Acts, and legal resources.</p>
        </div>
      </div>

      <div className="container">
        <div className="search-filter-section" style={{ margin: "2rem 0" }}>
          <div className="cyber-panel">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ flex: "1 1 300px" }}>
                <div className="search-input" style={{ width: "100%" }}>
                  <FaSearch />
                  <input
                    type="text"
                    placeholder="Search laws..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ flex: "0 1 200px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="cyber-select"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "var(--bg-card)",
                    color: "var(--text-color)",
                    border: "1px solid var(--primary-color)",
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="cyber-panel" style={{ textAlign: "center", padding: "3rem" }}>
            <div className="loading-spinner"></div>
            <p className="terminal-text">Loading laws database...</p>
          </div>
        ) : filteredLaws.length === 0 ? (
          <div className="cyber-panel" style={{ textAlign: "center", padding: "3rem" }}>
            <p>No laws found matching your search criteria.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="laws-list">
            {filteredLaws.map((law) => (
              <div key={law.id} className="cyber-panel law-card" style={{ marginBottom: "1.5rem" }}>
                <div
                  className="law-header"
                  style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                  onClick={() => toggleLawExpansion(law.id)}
                >
                  <div>
                    <h2 style={{ marginBottom: "0.5rem" }}>{law.title}</h2>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <span className="law-category" style={{ color: "var(--primary-color)" }}>
                        {law.category}
                      </span>
                      <span className="law-year" style={{ color: "var(--gray-400)" }}>
                        Year: {law.year}
                      </span>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center" }}>
                    {expandedLaw === law.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {expandedLaw === law.id && (
                  <div className="law-content" style={{ marginTop: "1.5rem" }}>
                    <p>{law.description}</p>

                    <h3 style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>Key Sections</h3>
                    <div className="law-sections">
                      {law.sections.map((section) => (
                        <div key={section.id} className="law-section" style={{ marginBottom: "1rem" }}>
                          <h4 style={{ marginBottom: "0.5rem" }}>{section.title}</h4>
                          <p>{section.content}</p>
                        </div>
                      ))}
                    </div>

                    <div className="law-actions" style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                      <a href={law.pdfUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">
                        <FaDownload /> Download PDF
                      </a>
                      <a href={law.officialLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Official Source
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default IndianLaws
