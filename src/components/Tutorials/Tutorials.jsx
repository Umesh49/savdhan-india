"use client"

import { useState, useEffect, useRef } from "react"
import { FaLock, FaShieldAlt, FaCode, FaUserSecret, FaServer, FaLaptopCode, FaPlay, FaSearch, FaTimes } from "react-icons/fa"
import CyberSpinner from "../common/CyberSpinner/CyberSpinner"
import { tutorialData } from "./youtube.js"

const Tutorials = () => {
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [tutorials, setTutorials] = useState([])
  const [activeVideo, setActiveVideo] = useState(null)
  const videoModalRef = useRef(null)

  useEffect(() => {
    // Simulate loading for a more realistic UX
    const timer = setTimeout(() => {
      setTutorials(tutorialData)
      setLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  
  useEffect(() => {
    // Close modal when clicking outside
    const handleClickOutside = (event) => {
      if (videoModalRef.current && !videoModalRef.current.contains(event.target)) {
        closeVideoModal()
      }
    }
    
    if (activeVideo) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeVideo])

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
        return <FaShieldAlt className="tutorial-icon-neon" />
      case "privacy":
        return <FaUserSecret className="tutorial-icon-neon" />
      case "coding":
        return <FaCode className="tutorial-icon-neon" />
      case "network":
        return <FaServer className="tutorial-icon-neon" />
      case "hacking":
        return <FaLaptopCode className="tutorial-icon-neon" />
      default:
        return <FaLock className="tutorial-icon-neon" />
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
  
  const openVideoModal = (tutorial) => {
    setActiveVideo(tutorial)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }
  
  const closeVideoModal = () => {
    setActiveVideo(null)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }

  if (loading) {
    return (
      <div className="tutorial-loading-container">
        <div className="tutorial-cyber-terminal">
          <CyberSpinner size={60} />
          <p className="tutorial-loading-text">Initializing security protocols...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="tutorial-container">
      <div className="tutorial-page-header">
        <div className="tutorial-header-content">
          <h1 className="tutorial-title">
            <span className="tutorial-title-prefix">&gt;_</span> Security Tutorials
          </h1>
          <p className="tutorial-subtitle">
            Master the art of cybersecurity with our comprehensive training modules
          </p>
        </div>
      </div>

      <div className="tutorial-cyber-panel">
        <div className="tutorial-search-filter">
          <FaSearch className="tutorial-search-icon" />
          <input
            type="text"
            placeholder="Search secure protocols..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tutorial-search-input"
          />
        </div>

        <div className="tutorial-category-filter">
          <div className="tutorial-category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tutorial-category-tab ${
                  selectedCategory === category.id ? "tutorial-category-active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredTutorials.length === 0 ? (
        <div className="tutorial-empty-state">
          <FaLaptopCode size={50} className="tutorial-empty-icon" />
          <h3 className="tutorial-empty-title">No security protocols found</h3>
          <p className="tutorial-empty-text">Adjust your search parameters and try again</p>
        </div>
      ) : (
        <div className="tutorial-grid">
          {filteredTutorials.map((tutorial) => (
            <div key={tutorial.id} className="tutorial-card">
              <div className="tutorial-image-container">
                <div className="tutorial-category-badge">
                  {getCategoryIcon(tutorial.category)}
                  <span className="tutorial-category-name">{tutorial.categoryName}</span>
                </div>
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title} 
                  className="tutorial-image"
                />
                <div className="tutorial-overlay">
                  <button 
                    className="tutorial-play-btn"
                    onClick={() => openVideoModal(tutorial)}
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
              <div className="tutorial-content">
                <h3 className="tutorial-card-title">{tutorial.title}</h3>
                <p className="tutorial-description">{tutorial.description}</p>
                <div className="tutorial-meta">
                  <span className="tutorial-duration">
                    <FaPlay className="tutorial-duration-icon" /> {tutorial.duration}
                  </span>
                  <span className="tutorial-level">{tutorial.level}</span>
                </div>
                <button 
                  className="tutorial-watch-btn"
                  onClick={() => openVideoModal(tutorial)}
                >
                  <FaPlay className="tutorial-btn-icon" /> Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeVideo && (
        <div className="tutorial-video-modal">
          <div ref={videoModalRef} className="tutorial-video-container">
            <div className="tutorial-modal-header">
              <h3 className="tutorial-modal-title">{activeVideo.title}</h3>
              <button 
                className="tutorial-close-btn"
                onClick={closeVideoModal}
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="tutorial-video-frame">
              <iframe 
                src={activeVideo.videoUrl} 
                title={activeVideo.title}
                className="tutorial-iframe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="tutorial-modal-footer">
              <p className="tutorial-modal-description">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom CSS for cybersecurity theme */}
      <style jsx>{`
        /* Global styles */
        .tutorial-container {
          padding: 2rem 5%;
          background-color: #000;
          color: #ddd;
          min-height: 100vh;
          font-family: 'Courier New', monospace;
        }
        
        /* Header styles */
        .tutorial-page-header {
          margin-bottom: 3rem;
          border-bottom: 2px solid #39ff14;
          padding-bottom: 1rem;
        }
        
        .tutorial-header-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .tutorial-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 0 0 5px #39ff14;
          animation: tutorialTextFlicker 3s infinite;
        }
        
        .tutorial-title-prefix {
          color: #39ff14;
        }
        
        .tutorial-subtitle {
          font-size: 1.2rem;
          color: #9e9e9e;
        }
        
        /* Loading styles */
        .tutorial-loading-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #000;
        }
        
        .tutorial-cyber-terminal {
          padding: 2rem;
          border: 2px solid #39ff14;
          box-shadow: 0 0 10px 1px #39ff14;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .tutorial-loading-text {
          color: #39ff14;
          margin-top: 1rem;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.5px;
        }
        
        /* Panel styles */
        .tutorial-cyber-panel {
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #111;
          border: 2px solid #39ff14;
          box-shadow: 0 0 10px 1px #39ff14;
          border-radius: 4px;
        }
        
        .tutorial-search-filter {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .tutorial-search-icon {
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          color: #39ff14;
        }
        
        .tutorial-search-input {
          width: 100%;
          padding: 0.5rem;
          padding-left: 2.5rem;
          background-color: #000;
          border: 2px solid #39ff14;
          color: #39ff14;
          outline: none;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
        }
        
        .tutorial-search-input:focus {
          box-shadow: 0 0 5px #39ff14;
        }
        
        .tutorial-category-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 0.5rem;
        }
        
        .tutorial-category-tab {
          padding: 0.5rem;
          font-size: 0.875rem;
          border: 1px solid #39ff14;
          border-radius: 4px;
          background-color: transparent;
          color: #39ff14;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tutorial-category-tab:hover {
          background-color: rgba(57, 255, 20, 0.2);
        }
        
        .tutorial-category-active {
          background-color: #39ff14;
          color: #000;
          font-weight: bold;
        }
        
        /* Empty state styles */
        .tutorial-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background-color: #111;
          border: 2px solid #39ff14;
          border-radius: 4px;
        }
        
        .tutorial-empty-icon {
          color: #39ff14;
          margin-bottom: 1rem;
        }
        
        .tutorial-empty-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #39ff14;
          margin-bottom: 0.5rem;
        }
        
        .tutorial-empty-text {
          color: #9e9e9e;
        }
        
        /* Tutorial grid styles */
        .tutorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .tutorial-card {
          background-color: #111;
          border: 2px solid #39ff14;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .tutorial-card:hover {
          box-shadow: 0 0 15px #39ff14;
          transform: translateY(-5px);
        }
        
        .tutorial-image-container {
          position: relative;
        }
        
        .tutorial-category-badge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          display: flex;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.8);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        
        .tutorial-icon-neon {
          color: #39ff14;
        }
        
        .tutorial-category-name {
          margin-left: 0.5rem;
          font-size: 0.75rem;
          color: #39ff14;
        }
        
        .tutorial-image {
          width: 100%;
          height: 12rem;
          object-fit: cover;
        }
        
        .tutorial-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tutorial-image-container:hover .tutorial-overlay {
          opacity: 1;
        }
        
        .tutorial-play-btn {
          padding: 1rem;
          border-radius: 50%;
          background-color: #39ff14;
          color: #000;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tutorial-play-btn:hover {
          background-color: rgba(57, 255, 20, 0.8);
          transform: scale(1.1);
        }
        
        .tutorial-content {
          padding: 1rem;
        }
        
        .tutorial-card-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #39ff14;
          margin-bottom: 0.5rem;
          font-family: 'Courier New', monospace;
        }
        
        .tutorial-description {
          color: #9e9e9e;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        
        .tutorial-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #6e6e6e;
          margin-bottom: 1rem;
        }
        
        .tutorial-duration {
          display: flex;
          align-items: center;
        }
        
        .tutorial-duration-icon {
          color: #39ff14;
          margin-right: 0.25rem;
        }
        
        .tutorial-level {
          padding: 0.25rem 0.5rem;
          background-color: #222;
          border-radius: 4px;
          color: #39ff14;
        }
        
        .tutorial-watch-btn {
          width: 100%;
          padding: 0.5rem;
          background-color: #39ff14;
          color: #000;
          font-weight: bold;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .tutorial-watch-btn:hover {
          background-color: rgba(57, 255, 20, 0.8);
        }
        
        .tutorial-btn-icon {
          margin-right: 0.5rem;
        }
        
        /* Video modal styles */
        .tutorial-video-modal {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .tutorial-video-container {
          width: 90%;
          max-width: 800px;
          background-color: #111;
          padding: 1rem;
          border: 2px solid #39ff14;
          border-radius: 4px;
        }
        
        .tutorial-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .tutorial-modal-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #39ff14;
        }
        
        .tutorial-close-btn {
          color: #39ff14;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .tutorial-close-btn:hover {
          color: #fff;
        }
        
        .tutorial-video-frame {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
        }
        
        .tutorial-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .tutorial-modal-footer {
          margin-top: 1rem;
        }
        
        .tutorial-modal-description {
          color: #9e9e9e;
          font-size: 0.875rem;
        }
        
        /* Animation */
        @keyframes tutorialTextFlicker {
          0% { text-shadow: 0 0 5px #39ff14; }
          2% { text-shadow: 0 0 15px #39ff14; }
          4% { text-shadow: 0 0 5px #39ff14; }
          50% { text-shadow: 0 0 5px #39ff14; }
          51% { text-shadow: 0 0 15px #39ff14; }
          52% { text-shadow: 0 0 5px #39ff14; }
          100% { text-shadow: 0 0 5px #39ff14; }
        }
        
        /* Media queries */
        @media (max-width: 768px) {
          .tutorial-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          
          .tutorial-title {
            font-size: 2rem;
          }
          
          .tutorial-category-tabs {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .tutorial-grid {
            grid-template-columns: 1fr;
          }
          
          .tutorial-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Tutorials