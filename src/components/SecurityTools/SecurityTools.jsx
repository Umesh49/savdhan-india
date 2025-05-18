import { useState, useEffect, useRef } from "react"
import {
  Shield,
  Lock,
  Globe,
  Search,
  Lightbulb,
  ExternalLink,
  AlertTriangle,
  EyeOff,
  Key,
  FileText,
  Map,
  Server,
  Wifi,
  FileLock,
  UserCheck,
  ClipboardCheck,
  Terminal,
  ShieldCheck,
  Activity,
  Users,
  AlertCircle,
} from "lucide-react"
import "./SecurityTools.css"

const toolCategories = [
  {
    id: "password",
    name: "Password Tools",
    icon: <Lock size={24} />,
    description: "Tools for password management, generation and security assessment",
    color: "#00ffaa",
    tools: [
      {
        id: "password-generator",
        name: "Password Generator",
        description: "Generate strong, random passwords with custom parameters",
        icon: <Key size={18} />,
        path: "/password-generator",
      },
      {
        id: "password-strength",
        name: "Password Strength Meter",
        description: "Check the strength of your existing passwords",
        icon: <Shield size={18} />,
        path: "/password-strength-meter",
      },
    ],
  },
  {
    id: "privacy",
    name: "Privacy Protection",
    icon: <EyeOff size={24} />,
    description: "Tools to protect your privacy and check for data breaches",
    color: "#00cc88",
    tools: [
      {
        id: "breach-checker",
        name: "Breach Exposure Checker",
        description: "Check if your email or accounts have been compromised in data breaches",
        icon: <AlertTriangle size={18} />,
        path: "/breach-exposure-checker",
      },
      {
        id: "privacy-tester",
        name: "Privacy Tester",
        description: "Test your browser for privacy vulnerabilities",
        icon: <UserCheck size={18} />,
        path: "/privacy-tester",
      },
      {
        id: "browser-fingerprinting",
        name: "Browser Fingerprinting",
        description: "Check your browser's uniqueness and fingerprint",
        icon: <Terminal size={18} />,
        path: "/browser-fingerprinting",
      },
      {
        id: "privacy-policy",
        name: "Privacy Policy Analyzer",
        description: "Analyze website privacy policies for concerns",
        icon: <FileText size={18} />,
        path: "/privacy-policy-analyzer",
      },
    ],
  },
  {
    id: "network",
    name: "Network Security",
    icon: <Globe size={24} />,
    description: "Network scanning and analysis tools",
    color: "#33ffbb",
    tools: [
      {
        id: "ip-geolocation",
        name: "IP Geolocation",
        description: "Find geographic location of an IP address",
        icon: <Map size={18} />,
        path: "/ip-geolocation",
      },
      {
        id: "ip-reputation",
        name: "IP Reputation Lookup",
        description: "Check if an IP address is associated with malicious activity",
        icon: <Shield size={18} />,
        path: "/ip-reputation-lookup",
      },
      {
        id: "dns-leak",
        name: "DNS Leak Tester",
        description: "Test for DNS leaks that can expose your browsing",
        icon: <Wifi size={18} />,
        path: "/dns-leak-tester",
      },
    ],
  },
  {
    id: "web",
    name: "Web Security",
    icon: <Search size={24} />,
    description: "Tools to check website security and URL safety",
    color: "#ff3e00",
    tools: [
      {
        id: "safe-browsing",
        name: "Safe Browsing Check",
        description: "Check if a website is safe to visit",
        icon: <Shield size={18} />,
        path: "/safe-browsing-check",
      },
      {
        id: "security-headers",
        name: "Security Headers Audit",
        description: "Analyze website security headers",
        icon: <Server size={18} />,
        path: "/security-headers-audit",
      },
    ],
  },
  {
    id: "encryption",
    name: "Encryption Tools",
    icon: <Lock size={24} />,
    description: "File encryption and secure communication tools",
    color: "#ff7700",
    tools: [
      {
        id: "file-encryption",
        name: "File Encryption",
        description: "Encrypt and decrypt files securely",
        icon: <FileLock size={18} />,
        path: "/file-encryption",
      },
    ],
  },
  {
    id: "assessment",
    name: "Security Assessment",
    icon: <Lightbulb size={24} />,
    description: "Comprehensive security assessment and checklists",
    color: "#00ffaa",
    tools: [
      {
        id: "security-checklist",
        name: "Security Checklist",
        description: "Complete checklist to improve your security posture",
        icon: <ClipboardCheck size={18} />,
        path: "/security-checklist",
      },
    ],
  },
]

const securityStats = [
  {
    id: 1,
    value: "4.8M",
    label: "Threats Blocked",
    icon: <ShieldCheck size={24} color="#00ffaa" />,
  },
  {
    id: 2,
    value: "821K",
    label: "Protected Users",
    icon: <Users size={24} color="#33ffbb" />,
  },
  {
    id: 3,
    value: "32.7K",
    label: "Vulnerabilities Detected",
    icon: <AlertCircle size={24} color="#ff3e00" />,
  },
  {
    id: 4,
    value: "99.9%",
    label: "Uptime Reliability",
    icon: <Activity size={24} color="#ff7700" />,
  },
]

const SecurityTools = () => {
  const canvasRef = useRef(null)
  const matrixContainerRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = toolCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.tools.some(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = matrixContainerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight

    const fontSize = 16
    let columns = Math.floor(container.offsetWidth / fontSize)
    let drops = Array(columns).fill(1)

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(3, 8, 18, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ffaa"
      ctx.font = `${fontSize}px "Courier New", monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.floor(Math.random() * (126 - 33)))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    let animationFrameId

    const animate = () => {
      drawMatrix()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
      columns = Math.floor(container.offsetWidth / fontSize)
      drops = Array(columns).fill(1)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const adjustColorBrightness = (hex, percent) => {
    let r = Number.parseInt(hex.substring(1, 3), 16)
    let g = Number.parseInt(hex.substring(3, 5), 16)
    let b = Number.parseInt(hex.substring(5, 7), 16)

    r = Math.min(255, Math.round((r * (100 + percent)) / 100))
    g = Math.min(255, Math.round((g * (100 + percent)) / 100))
    b = Math.min(255, Math.round((b * (100 + percent)) / 100))

    const RR = r.toString(16).padStart(2, "0")
    const GG = g.toString(16).padStart(2, "0")
    const BB = b.toString(16).padStart(2, "0")

    return `#${RR}${GG}${BB}`
  }

  const getCategoryGradientStyle = (color) => {
    return {
      background: `linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -30)} 100%)`,
    }
  }

  const handleToolClick = (toolId, path) => {
    console.log(`Tool clicked: ${toolId}, navigating to: ${path}`)
    window.location.href = path
  }

  return (
    <div className="sec-tm-container">
      <div className="sec-tm-matrix-background" ref={matrixContainerRef}>
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className="sec-tm-content">
        <section className="sec-tm-header">
          <h1 className="sec-tm-title">
            <span className="sec-tm-title-prefix">&gt;</span>
            Cybersecurity Portal
          </h1>
          <p className="sec-tm-subtitle">
            Access our interactive security tools to enhance your online security and privacy in the digital age.
          </p>
        </section>

        <section className="sec-tm-search-section">
          <div className="sec-tm-search-container">
            <div className="sec-tm-search-input-group">
              <span className="sec-tm-search-icon">
                <Search size={18} />
              </span>
              <input
                type="text"
                className="sec-tm-search-input"
                placeholder="Search security tools and categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                name="security-search"
                id="security-search"
              />
              {searchQuery && (
                <button
                  className="sec-tm-search-clear-button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="sec-tm-stats-section">
          <div className="sec-tm-stats-container">
            {securityStats.map((stat) => (
              <div key={stat.id} className="sec-tm-stat-item">
                <div className="sec-tm-stat-icon">{stat.icon}</div>
                <div className="sec-tm-stat-value">{stat.value}</div>
                <div className="sec-tm-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec-tm-categories-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="sec-tm-category-card">
              <div
                className="sec-tm-category-card-inner"
                style={getCategoryGradientStyle(category.color)}
                // Removed onClick from category card inner
              >
                <div className="sec-tm-category-card-content">
                  <div>
                    <div className="sec-tm-category-icon-container">
                      <div className="sec-tm-category-icon" style={{ backgroundColor: `${category.color}33` }}>
                        {category.icon}
                      </div>
                      <h3 className="sec-tm-category-title">{category.name}</h3>
                    </div>
                    <p className="sec-tm-category-description">{category.description}</p>
                  </div>

                  <div className="sec-tm-card-tools">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.id}
                        className="sec-tm-tool-item"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleToolClick(tool.id, tool.path)
                        }}
                      >
                        <div className="sec-tm-tool-icon">{tool.icon}</div>
                        <div className="sec-tm-tool-info">
                          <div className="sec-tm-tool-name">{tool.name}</div>
                          <div className="sec-tm-tool-description">{tool.description}</div>
                        </div>
                        <ExternalLink size={14} className="sec-tm-tool-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="sec-tm-quick-access-section">
          <div className="sec-tm-section-container">
            <h2 className="sec-tm-section-title">Quick Access to Popular Tools</h2>
            <div className="sec-tm-quick-access-grid">
              {[
                {
                  id: "password-strength",
                  icon: <Shield size={24} />,
                  text: "Password Checker",
                  color: "#00ffaa",
                  path: "/password-strength-meter",
                },
                {
                  id: "breach-checker",
                  icon: <AlertTriangle size={24} />,
                  text: "Breach Checker",
                  color: "#00cc88",
                  path: "/breach-exposure-checker",
                },
                {
                  id: "safe-browsing",
                  icon: <Search size={24} />,
                  text: "URL Scanner",
                  color: "#33ffbb",
                  path: "/safe-browsing-check",
                },
                {
                  id: "password-generator",
                  icon: <Key size={24} />,
                  text: "Password Generator",
                  color: "#ff3e00",
                  path: "/password-generator",
                },
                {
                  id: "file-encryption",
                  icon: <FileLock size={24} />,
                  text: "File Encryption",
                  color: "#ff7700",
                  path: "/file-encryption",
                },
                {
                  id: "ip-geolocation",
                  icon: <Map size={24} />,
                  text: "IP Geolocation",
                  color: "#00ffaa",
                  path: "/ip-geolocation",
                },
                {
                  id: "dns-leak",
                  icon: <Wifi size={24} />,
                  text: "DNS Leak Test",
                  color: "#00cc88",
                  path: "/dns-leak-tester",
                },
                {
                  id: "privacy-tester",
                  icon: <UserCheck size={24} />,
                  text: "Privacy Tester",
                  color: "#33ffbb",
                  path: "/privacy-tester",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="sec-tm-quick-access-button"
                  onClick={() => handleToolClick(item.id, item.path)}
                  style={{
                    "--button-color": item.color,
                  }}
                >
                  <span className="sec-tm-quick-access-icon">{item.icon}</span>
                  <span className="sec-tm-quick-access-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SecurityTools