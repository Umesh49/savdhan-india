"use client"

import { useState } from "react"
import { FaCalendarAlt, FaFileAlt, FaDownload, FaSearch, FaFilter } from "react-icons/fa"

// Mock resources data
const resourcesData = [
  {
    id: 1,
    title: "Understanding the IT Act, 2000",
    description:
      "A comprehensive guide to the Information Technology Act, 2000 and its amendments, explaining key provisions and penalties.",
    category: "Legal Guide",
    type: "PDF",
    date: "2023-05-15",
    image: "/assets/resources/it-act-guide.jpg",
  },
  {
    id: 2,
    title: "Phishing Attack Prevention",
    description:
      "Learn how to identify and protect yourself from phishing attacks with practical examples and prevention techniques.",
    category: "Security Guide",
    type: "PDF",
    date: "2023-06-22",
    image: "/assets/resources/phishing-prevention.jpg",
  },
  {
    id: 3,
    title: "Cybersecurity for Small Businesses",
    description:
      "Essential cybersecurity practices for small businesses to protect sensitive data and customer information.",
    category: "Business Guide",
    type: "PDF",
    date: "2023-04-10",
    image: "/assets/resources/business-security.jpg",
  },
  {
    id: 4,
    title: "Social Media Privacy Settings",
    description:
      "Step-by-step instructions for securing your privacy on major social media platforms like Facebook, Instagram, and Twitter.",
    category: "Tutorial",
    type: "Video",
    date: "2023-07-05",
    image: "/assets/resources/social-media-privacy.jpg",
  },
  {
    id: 5,
    title: "Secure Password Management",
    description:
      "Best practices for creating, storing, and managing strong passwords, including password manager recommendations.",
    category: "Security Guide",
    type: "PDF",
    date: "2023-03-18",
    image: "/assets/resources/password-management.jpg",
  },
  {
    id: 6,
    title: "Mobile Device Security",
    description: "Comprehensive guide to securing smartphones and tablets against common threats and vulnerabilities.",
    category: "Security Guide",
    type: "PDF",
    date: "2023-05-30",
    image: "/assets/resources/mobile-security.jpg",
  },
  {
    id: 7,
    title: "Ransomware Protection and Recovery",
    description: "Learn how to protect against ransomware attacks and steps to take if your system is compromised.",
    category: "Security Guide",
    type: "PDF",
    date: "2023-02-14",
    image: "/assets/resources/ransomware-protection.jpg",
  },
  {
    id: 8,
    title: "Online Banking Safety",
    description: "Essential security practices for safe online banking and financial transactions.",
    category: "Tutorial",
    type: "Video",
    date: "2023-06-08",
    image: "/assets/resources/banking-safety.jpg",
  },
  {
    id: 9,
    title: "Cyberbullying Prevention Guide",
    description:
      "Resources for parents and educators to identify, prevent, and address cyberbullying among children and teenagers.",
    category: "Social Guide",
    type: "PDF",
    date: "2023-04-25",
    image: "/assets/resources/cyberbullying.jpg",
  },
]

function Resources() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Get unique categories and types
  const categories = ["all", ...new Set(resourcesData.map((resource) => resource.category))]
  const types = ["all", ...new Set(resourcesData.map((resource) => resource.type))]

  // Filter resources based on search and filters
  const filteredResources = resourcesData.filter((resource) => {
    // Apply search filter
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Apply category filter
    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter

    // Apply type filter
    const matchesType = typeFilter === "all" || resource.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // Search is already handled by the filter function
  }

  return (
    <div className="resources-page">
      <section className="page-header">
        <div className="container">
          <h1>Cybersecurity Resources</h1>
          <p>Educational materials, guides, and tutorials to help you stay safe online.</p>
        </div>
      </section>

      <section className="container">
        <div className="search-filter-container" style={{ marginBottom: "2rem" }}>
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input">
              <FaSearch />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>

          <div className="filter-options">
            <div className="filter-group">
              <label htmlFor="category-filter">
                <FaFilter /> Category:
              </label>
              <select id="category-filter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="type-filter">Type:</label>
              <select id="type-filter" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="no-results" style={{ textAlign: "center", padding: "3rem 0" }}>
            <p>No resources found matching your criteria. Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="resources-grid">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-image">
                  <img src={resource.image || `/placeholder.svg?height=200&width=400`} alt={resource.title} />
                </div>
                <div className="resource-content">
                  <span className="resource-category">{resource.category}</span>
                  <h3>{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-meta">
                    <div className="resource-date">
                      <FaCalendarAlt />
                      <span>{new Date(resource.date).toLocaleDateString()}</span>
                    </div>
                    <div className="resource-type">
                      <FaFileAlt />
                      <span>{resource.type}</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <a href={`/resources/${resource.id}`} className="btn-primary btn-sm">
                      View Resource
                    </a>
                    <a href={`/resources/${resource.id}/download`} className="btn-outline btn-sm">
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Stay Updated with Latest Resources</h2>
            <p>Subscribe to our newsletter to receive the latest cybersecurity resources, guides, and updates.</p>
            <form className="newsletter-form" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{
                    flex: "1",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--border-radius)",
                    border: "1px solid var(--border-color)",
                  }}
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
