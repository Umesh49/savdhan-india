import { useState, useEffect, useRef } from "react";
import {
  FaShieldAlt,
  FaBook,
  FaClipboardList,
  FaMapMarkedAlt,
  FaTools,
  FaUserSecret,
  FaLock,
  FaSatelliteDish,
  FaVirus,
  FaNetworkWired,
  FaExclamationTriangle,
  FaServer,
} from "react-icons/fa";
import {
  RiAlarmWarningLine,
  RiShieldKeyholeLine,
  RiCodeSSlashLine
} from "react-icons/ri";
import { GiBiohazard, GiFirewall } from "react-icons/gi";
import { SiHackaday } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { MdOutlineRadar } from "react-icons/md";
import MatrixBackground from "../common/MatrixBackground.jsx";
import CyberSpinner from "../common/CyberSpinner/CyberSpinner.jsx";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [threatLevel, setThreatLevel] = useState("Elevated");
  const [threatData, setThreatData] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef({});

  // Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Register all sections for observation
    const sections = [
      'hero-section',
      'threat-dashboard',
      'stats-section',
      'services-section',
      'cta-section',
      'terminal-section'
    ];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        sectionsRef.current[section] = element;
      }
    });

    return () => {
      sections.forEach(section => {
        const element = sectionsRef.current[section];
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  useEffect(() => {
    // Simulate loading data with Promise for better error handling
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1200));

        const mockStats = {
          activeCases: 1243,
          resolvedComplaints: 892,
          ongoingInvestigations: 351,
          securityAlerts: 17,
          dataBreaches: 23,
          vulnerabilitiesDetected: 89,
        };

        const mockThreatData = {
          malwareDetections: 578,
          phishingAttempts: 892,
          ddosAttacks: 42,
          zerodays: 3,
          lastUpdated: new Date().toLocaleTimeString(),
        };

        setStats(mockStats);
        setThreatData(mockThreatData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Implement fallback data if needed
      }
    };

    fetchData();

    // Set up interval for "real-time" updates
    const threatUpdateInterval = setInterval(() => {
      if (!loading) {
        // Update threat level randomly to simulate changing conditions
        const levels = ["Low", "Moderate", "Elevated", "High", "Severe"];
        const newLevel = levels[Math.floor(Math.random() * levels.length)];
        setThreatLevel(newLevel);

        // Update one random stat to simulate live data
        if (stats && threatData) {
          const newThreatData = { ...threatData };
          const keys = Object.keys(newThreatData);
          const randomKey = keys[Math.floor(Math.random() * (keys.length - 1))]; // Exclude lastUpdated
          newThreatData[randomKey] = Math.max(
            0,
            newThreatData[randomKey] + Math.floor(Math.random() * 7) - 3
          );
          newThreatData.lastUpdated = new Date().toLocaleTimeString();
          setThreatData(newThreatData);
        }
      }
    }, 15000);

    return () => {
      clearInterval(threatUpdateInterval);
    };
  }, [loading, stats, threatData]);

  const services = [
    {
      id: 1,
      title: "Cyber Laws",
      description: "Understand Indian IT Act and cybercrime legal framework",
      icon: <FaBook className="feature-icon" />,
      link: "/laws",
      color: "blue",
    },
    {
      id: 2,
      title: "Incident Response",
      description: "Step-by-step procedures for handling security incidents",
      icon: <FaExclamationTriangle className="feature-icon" />,
      link: "/incident-response",
      color: "red",
    },
    {
      id: 3,
      title: "Threat Map",
      description: "Real-time threat visualization across global networks",
      icon: <FaMapMarkedAlt className="feature-icon" />,
      link: "/threat-map",
      color: "purple",
    },
    {
      id: 4,
      title: "Security Toolkit",
      description: "Open-source tools for vulnerability assessment",
      icon: <FaTools className="feature-icon" />,
      link: "/security-tools",
      color: "green",
    },
    {
      id: 5,
      title: "Vulnerability DB",
      description: "Searchable repository of known CVEs and exploits",
      icon: <GiBiohazard className="feature-icon" />,
      link: "/vulnerabilities",
      color: "orange",
    },
    {
      id: 6,
      title: "Penetration Testing",
      description: "Ethical hacking methodologies and best practices",
      icon: <RiCodeSSlashLine className="feature-icon" />,
      link: "/pentest-guide",
      color: "cyan",
    },
    {
      id: 7,
      title: "Encryption Tools",
      description: "Guides to implement strong cryptographic solutions",
      icon: <FaLock className="feature-icon" />,
      link: "/encryption",
      color: "yellow",
    },
    {
      id: 8,
      title: "SOC Training",
      description: "Security Operations Center analyst training materials",
      icon: <FaNetworkWired className="feature-icon" />,
      link: "/soc-training",
      color: "magenta",
    },
  ];

  const renderThreatLevelIndicator = () => {
    const levelColors = {
      Low: "green",
      Moderate: "blue",
      Elevated: "orange",
      High: "red",
      Severe: "purple",
    };

    return (
      <div className={`threat-level-indicator ${levelColors[threatLevel]}`}>
        <div className="threat-level-content">
          <div className="threat-level-icon">
            <RiShieldKeyholeLine />
          </div>
          <div className="threat-level-text">
            <p className="threat-level-label">Current Threat Level</p>
            <h3 className="threat-level-value">{threatLevel}</h3>
          </div>
        </div>
        <div className="threat-level-pulse"></div>
      </div>
    );
  };

  const terminalLines = [
    { type: 'prompt', content: 'sudo initiate --security-scan' },
    { type: 'output', content: 'Scanning network for vulnerabilities...' },
    { type: 'output', content: `Found ${stats?.vulnerabilitiesDetected || '??'} potential vulnerabilities.` },
    { type: 'output', content: `Current threat level: ${threatLevel.toUpperCase()}` },
    { type: 'output', content: 'Tracking malicious IP addresses...' },
    { type: 'output', content: 'Firewall rules updated. Deploying countermeasures.' },
    { type: 'prompt', content: '' } // Empty prompt for cursor
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <CyberSpinner />
        <p className="loading-text">Establishing secure connection...</p>
        <div className="loading-progress">
          <div className="loading-bar"></div>
        </div>
        <div className="loading-details">
          <p>Verifying user credentials...</p>
          <p>Scanning network perimeter...</p>
          <p>Encrypting connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="matrix-background">
        <MatrixBackground speed={1.2} density={1.2} colorVariant="cyber" />
      </div>
      
      <div className="cyber-grid-overlay"></div>

      {/* Hero Section */}
      <section id="hero-section" className={`hero-section ${isVisible['hero-section'] ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="logo-container">
            <SiHackaday className="logo-icon pulse" />
            <div className="logo-glow"></div>
          </div>
          <h1 className="hero-title neon-text glitch" data-text="Savdhaan India">Savdhaan India</h1>
          <p className="hero-subtitle">
            <span className="typing-text">Cybersecurity command center for threat intelligence and digital defense</span>
          </p>
          <div className="cyber-line"></div>
          <div className="hero-buttons">
            <a to="/incident-response" className="cyber-button primary">
              <FaExclamationTriangle /> <span>Report Incident</span>
              <div className="button-glow"></div>
            </a>
            <a to="/threat-intelligence" className="cyber-button secondary">
              <FaSatelliteDish /> <span>Threat Intelligence</span>
              <div className="button-glow"></div>
            </a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="cyber-circle"></div>
          <div className="cyber-hexagon"></div>
        </div>
      </section>

      {/* Threat Dashboard */}
      <section id="threat-dashboard" className={`threat-dashboard ${isVisible['threat-dashboard'] ? 'visible' : ''}`}>
        <div className="dashboard-header">
          <div className="dashboard-title-container">
            <GiFirewall className="dashboard-icon" />
            <h2 className="dashboard-title">Threat Intelligence Dashboard</h2>
          </div>
          <div className="dashboard-status">
            <div className="status-indicator active"></div>
            <p className="dashboard-update">Last updated: {threatData.lastUpdated}</p>
          </div>
        </div>

        <div className="dashboard-grid">
          {renderThreatLevelIndicator()}

          <div className="threat-metrics">
            <div className="metric-item">
              <FaVirus className="metric-icon" />
              <div className="metric-content">
                <span className="metric-value counter">{threatData.malwareDetections}</span>
                <span className="metric-label">Malware Detections</span>
              </div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: `${Math.min(100, (threatData.malwareDetections / 1000) * 100)}%` }}></div>
              </div>
            </div>

            <div className="metric-item">
              <FaUserSecret className="metric-icon" />
              <div className="metric-content">
                <span className="metric-value counter">{threatData.phishingAttempts}</span>
                <span className="metric-label">Phishing Attempts</span>
              </div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: `${Math.min(100, (threatData.phishingAttempts / 1000) * 100)}%` }}></div>
              </div>
            </div>

            <div className="metric-item">
              <FaNetworkWired className="metric-icon" />
              <div className="metric-content">
                <span className="metric-value counter">{threatData.ddosAttacks}</span>
                <span className="metric-label">DDoS Attacks</span>
              </div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: `${Math.min(100, (threatData.ddosAttacks / 100) * 100)}%` }}></div>
              </div>
            </div>

            <div className="metric-item alert">
              <GiBiohazard className="metric-icon" />
              <div className="metric-content">
                <span className="metric-value counter">{threatData.zerodays}</span>
                <span className="metric-label">Zero-day Exploits</span>
              </div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: `${Math.min(100, (threatData.zerodays / 5) * 100)}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-radar">
          <div className="radar-container">
            <div className="radar-sweep"></div>
            <div className="radar-dot" style={{ top: '30%', left: '40%' }}></div>
            <div className="radar-dot" style={{ top: '60%', left: '70%' }}></div>
            <div className="radar-dot" style={{ top: '20%', left: '80%' }}></div>
            <div className="radar-dot large" style={{ top: '75%', left: '25%' }}></div>
          </div>
          <div className="radar-stats">
            <MdOutlineRadar className="radar-icon" />
            <div className="radar-info">
              <h4>Threat Detection Radar</h4>
              <p>Active threats identified: <span className="highlight">{stats.securityAlerts}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className={`stats-section ${isVisible['stats-section'] ? 'visible' : ''}`}>
        <div className="stats-header">
          <h2 className="stats-title"><FaServer /> Security Metrics</h2>
          <div className="stats-line"></div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-icon">
              <RiAlarmWarningLine />
            </div>
            <h3 className="stat-number counter">{stats.activeCases}</h3>
            <p className="stat-label">Active Cases</p>
            <div className="stat-glow"></div>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">
              <FaClipboardList />
            </div>
            <h3 className="stat-number counter">{stats.resolvedComplaints}</h3>
            <p className="stat-label">Resolved Incidents</p>
            <div className="stat-glow"></div>
          </div>

          <div className="stat-card purple">
            <div className="stat-icon">
              <FaUserSecret />
            </div>
            <h3 className="stat-number counter">{stats.ongoingInvestigations}</h3>
            <p className="stat-label">Active Investigations</p>
            <div className="stat-glow"></div>
          </div>

          <div className="stat-card red">
            <div className="stat-icon">
              <GiBiohazard />
            </div>
            <h3 className="stat-number counter">{stats.vulnerabilitiesDetected}</h3>
            <p className="stat-label">Vulnerabilities</p>
            <div className="stat-glow"></div>
          </div>
        </div>
        
        <div className="binary-decoration">
          <TbBinaryTree className="binary-icon" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className={`services-section ${isVisible['services-section'] ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Cybersecurity Services</h2>
          <p className="section-subtitle">
            Advanced defense tools and resources for digital warfare
          </p>
          <div className="section-underline"></div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <a
              to={service.link}
              key={service.id}
              className={`service-card ${service.color}`}
            >
              <div className={`service-icon-wrapper ${service.color}`}>
                {service.icon}
                <div className="service-icon-glow"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect"></div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className={`cta-section ${isVisible['cta-section'] ? 'visible' : ''}`}>
        <div className="cta-decoration">
          <div className="cta-circuit-left"></div>
          <div className="cta-circuit-right"></div>
        </div>
        
        <div className="cta-content">
          <h2 className="cta-title">Secure Your Digital Perimeter</h2>
          <p className="cta-subtitle">
            Join India's elite cybersecurity force. Gain access to classified
            threat intelligence, advanced defensive tools, and training in
            offensive security techniques.
          </p>
          <div className="cta-buttons">
            <a to="/register" className="cyber-button glow-button">
              <FaLock /> <span>Create Secure Account</span>
              <div className="button-glow"></div>
            </a>
            <a to="/training" className="cyber-button outline-button">
              <FaUserSecret /> <span>Access Training Portal</span>
              <div className="button-glow"></div>
            </a>
          </div>
        </div>
        
        <div className="cyber-badge">
          <div className="badge-icon">
            <FaShieldAlt />
          </div>
          <div className="badge-text">Certified Security</div>
        </div>
      </section>

      {/* Terminal Section */}
      <section id="terminal-section" className={`terminal-section ${isVisible['terminal-section'] ? 'visible' : ''}`}>
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">savdhaan@cybersec:~$</span>
        </div>
        <div className="terminal-body">
          {terminalLines.map((line, index) => (
            <div key={index} className="terminal-line">
              {line.type === 'prompt' ? (
                <>
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">{line.content}</span>
                  {line.content === '' && <span className="terminal-cursor">_</span>}
                </>
              ) : (
                <span className="terminal-output">{line.content}</span>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <div className="corner-decorations">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </div>
  );
};

export default Home;