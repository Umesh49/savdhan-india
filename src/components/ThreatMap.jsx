"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FaExclamationTriangle, FaShieldAlt, FaLock, FaUserSecret } from "react-icons/fa"
import { BiAnalyse } from "react-icons/bi"
import { MdSecurity } from "react-icons/md"
import CyberSpinner from "./common/CyberSpinner/CyberSpinner"
import { useTheme } from "../contexts/ThemeContext"
import { FaInfoCircle, FaUnlock } from "react-icons/fa"

const ThreatMap = () => {
  const { theme } = useTheme()
  const [threats, setThreats] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedThreat, setSelectedThreat] = useState(null)
  const [mapZoom, setMapZoom] = useState(1)
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [viewMode, setViewMode] = useState("map") // 'map' or 'list'
  const [filterType, setFilterType] = useState("all")
  const mapRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [animateMap, setAnimateMap] = useState(true)
  const [threatData, setThreatData] = useState({
    activeAttacks: 1243,
    topTarget: "Financial Sector",
    topAttackType: "Phishing",
    attacksToday: 5782,
    countries: [
      { name: "Maharashtra", attacks: 423, severity: "high" },
      { name: "Karnataka", attacks: 387, severity: "high" },
      { name: "Delhi", attacks: 356, severity: "high" },
      { name: "Tamil Nadu", attacks: 298, severity: "medium" },
      { name: "Telangana", attacks: 276, severity: "medium" },
      { name: "Gujarat", attacks: 245, severity: "medium" },
      { name: "Uttar Pradesh", attacks: 234, severity: "medium" },
      { name: "West Bengal", attacks: 187, severity: "low" },
      { name: "Kerala", attacks: 156, severity: "low" },
      { name: "Punjab", attacks: 134, severity: "low" },
    ],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [attackAnimation, setAttackAnimation] = useState({ active: false, x: 0, y: 0 })

  useEffect(() => {
    const fetchThreats = async () => {
      try {
        // Simulating API call with mock data
        setTimeout(() => {
          const mockThreats = [
            {
              id: 1,
              title: "Phishing Campaign Targeting Bank Customers",
              type: "phishing",
              severity: "high",
              location: "Mumbai, Maharashtra",
              date: "2023-11-15",
              description:
                "A sophisticated phishing campaign targeting customers of major Indian banks through fake KYC update emails.",
              coordinates: { x: 45, y: 48 },
            },
            {
              id: 2,
              title: "Ransomware Attack on Healthcare Provider",
              type: "ransomware",
              severity: "critical",
              location: "Bangalore, Karnataka",
              date: "2023-11-14",
              description:
                "A major hospital chain suffered a ransomware attack encrypting patient records and demanding cryptocurrency payment.",
              coordinates: { x: 42, y: 58 },
            },
            {
              id: 3,
              title: "Data Breach at E-commerce Platform",
              type: "data breach",
              severity: "high",
              location: "Delhi, NCR",
              date: "2023-11-13",
              description:
                "Personal information of approximately 500,000 users exposed in a data breach at a popular e-commerce platform.",
              coordinates: { x: 43, y: 35 },
            },
            {
              id: 4,
              title: "DDoS Attack on Government Website",
              type: "ddos",
              severity: "medium",
              location: "Chennai, Tamil Nadu",
              date: "2023-11-12",
              description:
                "A distributed denial-of-service attack temporarily brought down a government service portal.",
              coordinates: { x: 45, y: 65 },
            },
            {
              id: 5,
              title: "Malware Targeting Banking Apps",
              type: "malware",
              severity: "high",
              location: "Hyderabad, Telangana",
              date: "2023-11-11",
              description:
                "A new Android malware strain targeting banking applications to steal credentials and financial information.",
              coordinates: { x: 43, y: 55 },
            },
            {
              id: 6,
              title: "Credential Stuffing Attack on Media Platform",
              type: "hacking",
              severity: "medium",
              location: "Ahmedabad, Gujarat",
              date: "2023-11-10",
              description:
                "Attackers using previously leaked credentials to gain unauthorized access to user accounts on a streaming platform.",
              coordinates: { x: 35, y: 45 },
            },
            {
              id: 7,
              title: "Supply Chain Attack on Software Provider",
              type: "malware",
              severity: "critical",
              location: "Pune, Maharashtra",
              date: "2023-11-09",
              description:
                "A software supply chain attack compromised a widely used business application, potentially affecting thousands of organizations.",
              coordinates: { x: 42, y: 50 },
            },
            {
              id: 8,
              title: "Social Engineering Campaign Targeting Employees",
              type: "phishing",
              severity: "medium",
              location: "Kolkata, West Bengal",
              date: "2023-11-08",
              description:
                "A sophisticated social engineering campaign targeting employees of financial institutions through fake job offers.",
              coordinates: { x: 55, y: 45 },
            },
            {
              id: 9,
              title: "API Vulnerability Exploited at FinTech Company",
              type: "hacking",
              severity: "high",
              location: "Noida, Uttar Pradesh",
              date: "2023-11-07",
              description:
                "Attackers exploited an API vulnerability to access sensitive transaction data at a financial technology company.",
              coordinates: { x: 44, y: 34 },
            },
            {
              id: 10,
              title: "Cryptojacking Campaign Targeting Cloud Infrastructure",
              type: "malware",
              severity: "low",
              location: "Kochi, Kerala",
              date: "2023-11-06",
              description:
                "A cryptojacking campaign targeting misconfigured cloud instances to mine cryptocurrency using compromised resources.",
              coordinates: { x: 40, y: 70 },
            },
          ]
          setThreats(mockThreats)
          setLoading(false)
          setIsLoading(false)
        }, 1500)
      } catch (error) {
        console.error("Error fetching threat data:", error)
        setLoading(false)
        setIsLoading(false)
      }
    }

    fetchThreats()

    // Add zoom controls for map
    const handleWheel = (e) => {
      if (mapRef.current && viewMode === "map") {
        if (e.deltaY < 0) {
          setMapZoom((prev) => Math.min(prev + 0.1, 2))
        } else {
          setMapZoom((prev) => Math.max(prev - 0.1, 0.5))
        }
      }
    }

    window.addEventListener("wheel", handleWheel)
    return () => window.removeEventListener("wheel", handleWheel)
  }, [viewMode])

  // Simulate updating the active attacks counter
  useEffect(() => {
    if (!threatData) return

    const interval = setInterval(() => {
      setThreatData((prevData) => ({
        ...prevData,
        activeAttacks: prevData.activeAttacks + Math.floor(Math.random() * 5),
        attacksToday: prevData.attacksToday + Math.floor(Math.random() * 10),
      }))

      // Simulate random attack animation
      if (Math.random() > 0.7 && mapRef.current) {
        const mapRect = mapRef.current.getBoundingClientRect()
        setAttackAnimation({
          active: true,
          x: Math.random() * mapRect.width,
          y: Math.random() * mapRect.height,
        })

        setTimeout(() => {
          setAttackAnimation({ active: false, x: 0, y: 0 })
        }, 1000)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [threatData])

  const handleCountryClick = (country) => {
    setSelectedCountry(country)
  }

  const closeCountryDetails = () => {
    setSelectedCountry(null)
  }

  const handleMapMouseDown = (e) => {
    if (e.button === 0) {
      // Left mouse button
      setIsDragging(true)
      setDragStart({
        x: e.clientX - mapPosition.x,
        y: e.clientY - mapPosition.y,
      })
    }
  }

  const handleMapMouseMove = (e) => {
    if (isDragging) {
      setMapPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMapMouseUp = () => {
    setIsDragging(false)
  }

  const handleMapWheel = (e) => {
    e.preventDefault()
    const zoomSensitivity = 0.1
    const newZoom = e.deltaY > 0 ? Math.max(0.5, mapZoom - zoomSensitivity) : Math.min(2, mapZoom + zoomSensitivity)
    setMapZoom(newZoom)
  }

  const handleThreatClick = (threat) => {
    setSelectedThreat(threat)
  }

  const handleCloseDetails = () => {
    setSelectedThreat(null)
  }

  const resetMapView = () => {
    setMapZoom(1)
    setMapPosition({ x: 0, y: 0 })
  }

  const getThreatTypeColor = (type) => {
    switch (type) {
      case "Phishing":
        return "text-red-500"
      case "Malware":
        return "text-purple-500"
      case "Ransomware":
        return "text-orange-500"
      case "Data Breach":
        return "text-yellow-500"
      case "DDoS":
        return "text-blue-500"
      default:
        return "text-gray-500"
    }
  }

  const getThreatTypeIcon = (type) => {
    switch (type) {
      case "Phishing":
        return <FaUnlock className="mr-1" />
      case "Malware":
        return <FaExclamationTriangle className="mr-1" />
      case "Ransomware":
        return <FaLock className="mr-1" />
      case "Data Breach":
        return <FaInfoCircle className="mr-1" />
      case "DDoS":
        return <FaShieldAlt className="mr-1" />
      default:
        return <FaInfoCircle className="mr-1" />
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "var(--danger-color)"
      case "medium":
        return "var(--warning-color)"
      case "low":
        return "var(--success-color)"
      default:
        return "var(--gray-400)"
    }
  }

  const getAttackTypeData = () => {
    return [
      { type: "Phishing", percentage: 42, color: "var(--danger-color)" },
      { type: "Ransomware", percentage: 23, color: "var(--warning-color)" },
      { type: "DDoS", percentage: 15, color: "var(--secondary-color)" },
      { type: "Data Breach", percentage: 12, color: "var(--accent-color)" },
      { type: "Other", percentage: 8, color: "var(--gray-500)" },
    ]
  }

  const getIconForThreatType = (type) => {
    switch (type.toLowerCase()) {
      case "phishing":
        return <FaUserSecret className="text-red-500" />
      case "malware":
        return <FaExclamationTriangle className="text-yellow-500" />
      case "ransomware":
        return <FaLock className="text-purple-500" />
      case "data breach":
        return <BiAnalyse className="text-blue-500" />
      case "ddos":
        return <MdSecurity className="text-orange-500" />
      default:
        return <FaShieldAlt className="text-green-500" />
    }
  }

  const getThreatSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "rgba(255, 0, 0, 0.8)"
      case "high":
        return "rgba(255, 165, 0, 0.8)"
      case "medium":
        return "rgba(255, 255, 0, 0.7)"
      case "low":
        return "rgba(0, 255, 0, 0.6)"
      default:
        return "rgba(128, 128, 128, 0.5)"
    }
  }

  const handleFilterChange = (e) => {
    setFilterType(e.target.value)
  }

  const filteredThreats =
    filterType === "all" ? threats : threats.filter((threat) => threat.type.toLowerCase() === filterType.toLowerCase())

  const threatCounts = threats.reduce((acc, threat) => {
    acc[threat.type] = (acc[threat.type] || 0) + 1
    return acc
  }, {})

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <CyberSpinner />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="threat-map-container bg-gradient-to-br from-gray-900 to-blue-900 p-6 rounded-lg shadow-neon mb-10"
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h2
          className="text-3xl font-cyber text-cyan-400 glitch-text"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Cyber Threat Map <span className="text-red-500 blink">LIVE</span>
        </motion.h2>

        <div className="flex space-x-4">
          <select
            className="bg-gray-800 text-cyan-400 border border-cyan-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="all">All Threats</option>
            <option value="phishing">Phishing</option>
            <option value="malware">Malware</option>
            <option value="ransomware">Ransomware</option>
            <option value="data breach">Data Breach</option>
            <option value="ddos">DDoS</option>
          </select>

          <div className="flex border border-cyan-500 rounded-md overflow-hidden">
            <button
              className={`px-4 py-2 ${viewMode === "map" ? "bg-cyan-700 text-white" : "bg-gray-800 text-cyan-400"}`}
              onClick={() => setViewMode("map")}
            >
              Map View
            </button>
            <button
              className={`px-4 py-2 ${viewMode === "list" ? "bg-cyan-700 text-white" : "bg-gray-800 text-cyan-400"}`}
              onClick={() => setViewMode("list")}
            >
              List View
            </button>
          </div>
        </div>
      </div>

      {viewMode === "map" ? (
        <div className="relative h-[600px] border-2 border-cyan-600 rounded-lg overflow-hidden" ref={mapRef}>
          <div
            className="absolute inset-0 bg-india-map bg-no-repeat bg-contain bg-center transition-transform duration-300"
            style={{ transform: `scale(${mapZoom})` }}
          >
            {filteredThreats.map((threat, index) => (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  left: `${threat.coordinates.x}%`,
                  top: `${threat.coordinates.y}%`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.5 }}
                onClick={() => handleThreatClick(threat)}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setSelectedThreat(threat)}
                  onMouseLeave={() => setSelectedThreat(null)}
                >
                  <div
                    className="animate-ping absolute h-5 w-5 rounded-full"
                    style={{ backgroundColor: getThreatSeverityColor(threat.severity) }}
                  ></div>
                  <div className="relative flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 border-2 border-cyan-500">
                    {getIconForThreatType(threat.type)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedThreat && (
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-gray-900 bg-opacity-90 border border-cyan-500 rounded-lg p-4 text-white max-w-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{getIconForThreatType(selectedThreat.type)}</div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">{selectedThreat.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium mr-2">Severity:</span>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: getThreatSeverityColor(selectedThreat.severity) }}
                    >
                      {selectedThreat.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm mt-2">{selectedThreat.description}</p>
                  <div className="mt-2 text-sm">
                    <p>
                      <span className="text-cyan-400">Location:</span> {selectedThreat.location}
                    </p>
                    <p>
                      <span className="text-cyan-400">Type:</span> {selectedThreat.type}
                    </p>
                    <p>
                      <span className="text-cyan-400">Date:</span> {selectedThreat.date}
                    </p>
                  </div>
                  <div className="mt-3">
                    <button className="bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center border border-cyan-500"
              onClick={() => setMapZoom((prev) => Math.min(prev + 0.1, 2))}
            >
              +
            </button>
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center border border-cyan-500"
              onClick={() => setMapZoom((prev) => Math.max(prev - 0.1, 0.5))}
            >
              -
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          className="bg-gray-900 border-2 border-cyan-600 rounded-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredThreats.map((threat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 border border-cyan-500 rounded-lg p-4 hover:shadow-neon transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-1">{getIconForThreatType(threat.type)}</div>
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400">{threat.title}</h3>
                    <div className="flex items-center mt-1">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ backgroundColor: getThreatSeverityColor(threat.severity) }}
                      >
                        {threat.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 line-clamp-2">{threat.description}</p>
                    <div className="mt-2 text-xs text-gray-400">
                      <p>
                        {threat.location} • {threat.date}
                      </p>
                    </div>
                    <button className="mt-3 bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="mt-6 bg-gray-800 border border-cyan-500 rounded-lg p-4">
        <h3 className="text-xl font-cyber text-cyan-400 mb-3">Threat Intelligence Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 p-3 rounded-lg border border-cyan-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Threats</span>
              <span className="text-2xl font-bold text-red-500">{filteredThreats.length}</span>
            </div>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-cyan-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Critical Severity</span>
              <span className="text-2xl font-bold text-red-500">
                {filteredThreats.filter((t) => t.severity.toLowerCase() === "critical").length}
              </span>
            </div>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-cyan-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Most Common</span>
              <span className="text-xl font-bold text-yellow-500">Phishing</span>
            </div>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-cyan-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Threat Level</span>
              <span className="text-xl font-bold text-orange-500">Elevated</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes growWidth {
          from {
            width: 0;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ThreatMap
