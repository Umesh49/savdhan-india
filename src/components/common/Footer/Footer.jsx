import { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaFingerprint,
  FaUserShield,
  FaChevronRight,
  FaTerminal,
  FaExclamationTriangle,
  FaBug,
  FaDatabase,
  FaVirus
} from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { GiFirewall, GiCyberEye, GiRadarSweep } from "react-icons/gi";
import Logo from "../../../svg/logo.svg";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [binaryLine, setBinaryLine] = useState("");
  const [terminalLines, setTerminalLines] = useState([]);
  const [hackingStatus, setHackingStatus] = useState({ 
    active: false, 
    progress: 0, 
    message: "" 
  });

  // Generate binary animation for the border
  useEffect(() => {
    const generateBinary = () => {
      let binary = "";
      for (let i = 0; i < 64; i++) {
        binary += Math.random() > 0.5 ? "1" : "0";
      }
      return binary;
    };

    setBinaryLine(generateBinary());
    const interval = setInterval(() => {
      setBinaryLine(generateBinary());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Simulate terminal activity
  useEffect(() => {
    const commands = [
      { text: "scanning network vulnerabilities...", delay: 1500 },
      { text: "identifying security protocols...", delay: 2000 },
      { text: "analyzing threat patterns...", delay: 2500 },
      { text: "updating firewall rules...", delay: 1800 },
      { text: "monitoring for suspicious activity...", delay: 2200 },
      { text: "encrypting secure channels...", delay: 2700 },
      { text: "patching known CVEs...", delay: 1900 },
      { text: "running intrusion detection system...", delay: 2100 }
    ];
    
    const executeCommand = (index = 0) => {
      if (index >= commands.length) index = 0;
      
      setTimeout(() => {
        setTerminalLines(prev => {
          const newLines = [...prev, commands[index].text];
          return newLines.length > 3 ? newLines.slice(-3) : newLines;
        });
        
        executeCommand((index + 1) % commands.length);
      }, commands[index].delay);
    };
    
    executeCommand();
  }, []);

  // Simulated security scan animation
  const simulateSecurityScan = () => {
    if (hackingStatus.active) return;
    
    setHackingStatus({ active: true, progress: 0, message: "Initializing security scan..." });
    
    const messages = [
      "Bypassing firewalls...",
      "Scanning for vulnerabilities...",
      "Detecting malware signatures...",
      "Analyzing network traffic...",
      "Securing endpoints...",
      "Implementing security protocols...",
      "Scan complete. System secured."
    ];
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHackingStatus({ active: false, progress: 0, message: "" });
        }, 2000);
      }
      
      const messageIndex = Math.min(Math.floor(progress / (100 / messages.length)), messages.length - 1);
      setHackingStatus({ 
        active: true, 
        progress, 
        message: messages[messageIndex] 
      });
    }, 400);
  };

  return (
    <footer className="footer-container">
      {/* Scanline effect */}
      <div className="footer-scanline"></div>
      
      {/* Binary code line at top */}
      <div className="footer-binary-top"></div>
      <div className="footer-binary-text">
        <div className="footer-binary-content">
          {binaryLine}
        </div>
      </div>

      {/* Matrix effect background */}
      <div className="footer-matrix-container"></div>

      {/* Circuit board pattern background */}
      <div className="footer-circuit-pattern"></div>

      <div className="footer-content">
        {/* Security terminal display - interactive element */}
        <div className="footer-terminal">
          <div className="footer-terminal-header">
            <div className="footer-terminal-title">
              <FaTerminal className="footer-terminal-icon" />
              <span>Security Terminal</span>
            </div>
            <div className="footer-terminal-buttons">
              <div className="footer-terminal-button footer-terminal-button-red"></div>
              <div className="footer-terminal-button footer-terminal-button-yellow"></div>
              <div className="footer-terminal-button footer-terminal-button-green"></div>
            </div>
          </div>
          
          <div className="footer-terminal-content">
            {terminalLines.map((line, idx) => (
              <div key={idx} className="footer-terminal-line">
                <span className="footer-terminal-prefix">&gt;</span>
                <span className="footer-terminal-command">{line}</span>
              </div>
            ))}
          </div>
          
          {/* Interactive security scan button */}
          <div className="footer-terminal-controls">
            <button 
              onClick={simulateSecurityScan}
              disabled={hackingStatus.active}
              className={`footer-scan-button ${hackingStatus.active ? 'footer-scan-button-active' : ''}`}
            >
              <FaShieldAlt className="footer-scan-icon" />
              {hackingStatus.active ? "SCANNING..." : "SCAN SYSTEM"}
            </button>
            
            {hackingStatus.active && (
              <div className="footer-scan-progress-container">
                <div className="footer-scan-message">{hackingStatus.message}</div>
                <div className="footer-scan-progress-bar">
                  <div 
                    className="footer-scan-progress-fill"
                    style={{ width: `${hackingStatus.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-branding">
              <div className="footer-logo-container">
                <img src={Logo} alt="Savdhaan India" className="footer-logo" />
                <div className="footer-logo-glow"></div>
              </div>
              <h2 className="footer-brand-name" data-text="Savdhaan_India">
                Savdhaan<span className="footer-cursor">_</span>India
              </h2>
            </div>
            <p className="footer-tagline">
              <span className="footer-terminal-prefix">&gt;</span> Protecting Indians in cyberspace with knowledge, tools and resources 
              to defend against digital threats.
            </p>
            <div className="footer-social-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">
              <BiLockAlt className="footer-section-icon" /> Quick_Links<span className="footer-cursor-blink">|</span>
            </h3>
            <ul className="footer-links">
              {[
                { path: "/", label: "Command_Home", icon: FaTerminal },
                { path: "/indian-laws", label: "Cyber_Laws", icon: FaShieldAlt },
                { path: "/complaint-guide", label: "Complaint_Guide", icon: FaExclamationTriangle },
                { path: "/threat-map", label: "Threat_Map", icon: GiRadarSweep },
                { path: "/resources", label: "Resources", icon: FaUserShield }
              ].map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a
                    href={link.path}
                    className="footer-link"
                  >
                    <span className="footer-terminal-prefix">&gt;</span>
                    <link.icon className="footer-link-icon" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-section-title">
              <FaUserShield className="footer-section-icon" /> Resources<span className="footer-cursor-blink">|</span>
            </h3>
            <ul className="footer-links">
              {[
                { path: "/security-tools", label: "Security_Tools" },
                { path: "/security-checklist", label: "Security_Checklist" },
                { path: "/cyber-awareness-quiz", label: "Cyber_Awareness_Quiz" },
                { path: "/faq", label: "FAQ" },
                { path: "/about-us", label: "About_Us" }
              ].map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a
                    href={link.path}
                    className="footer-link"
                  >
                    <span className="footer-terminal-prefix">&gt;</span>
                    <FaChevronRight className="footer-link-icon" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-section-title">
              <FaFingerprint className="footer-section-icon" /> Contact_Us<span className="footer-cursor-blink">|</span>
            </h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>123 Cyber Security Bhawan,<br />New Delhi, India - 110001</span>
              </li>
              <li className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <span>+91 1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <span>contact@savdhaanindia.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Threat Intelligence Section */}
        <div className="footer-threat-section">
          <h3 className="footer-threat-title">
            <GiRadarSweep className="footer-section-icon" /> Cyber Threat Intelligence<span className="footer-cursor-blink">|</span>
          </h3>
          <div className="footer-threat-grid">
            <div className="footer-threat-card">
              <FaBug className="footer-threat-icon" />
              <h4 className="footer-threat-card-title">Vulnerability Database</h4>
              <p className="footer-threat-card-text">Access the latest known CVEs and security patches</p>
            </div>
            <div className="footer-threat-card">
              <GiFirewall className="footer-threat-icon" />
              <h4 className="footer-threat-card-title">Firewall Configuration</h4>
              <p className="footer-threat-card-text">Best practices for securing your network perimeter</p>
            </div>
            <div className="footer-threat-card">
              <FaDatabase className="footer-threat-icon" />
              <h4 className="footer-threat-card-title">Data Protection</h4>
              <p className="footer-threat-card-text">Guidelines for securing sensitive information</p>
            </div>
            <div className="footer-threat-card">
              <GiCyberEye className="footer-threat-icon" />
              <h4 className="footer-threat-card-title">Threat Intelligence</h4>
              <p className="footer-threat-card-text">Real-time monitoring of emerging cyber threats</p>
            </div>
          </div>
        </div>

        {/* Security badge section */}
        <div className="footer-badge-section">
          <div className="footer-badge-container">
            <div className="footer-badge">
              <FaShieldAlt className="footer-badge-icon" /> 
              <span>Protected by Cybersecurity Standards</span>
            </div>
            <div className="footer-badge">
              <FaLock className="footer-badge-icon" /> 
              <span>SSL Encrypted</span>
            </div>
            <div className="footer-badge">
              <FaUserShield className="footer-badge-icon" /> 
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="footer-emergency-section">
          <div className="footer-emergency-header">
            <div className="footer-emergency-icon-container">
              <FaVirus className="footer-emergency-icon" />
              <div className="footer-emergency-icon-pulse"></div>
            </div>
            <h4 className="footer-emergency-title" data-text="EMERGENCY CYBER HELPLINES">
              EMERGENCY_CYBER_HELPLINES
            </h4>
          </div>
          <div className="footer-emergency-grid">
            <div className="footer-emergency-item">
              <FaPhone className="footer-emergency-item-icon" />
              <span>Cyber Crime Helpline: <span className="footer-emergency-number">1930</span></span>
            </div>
            <div className="footer-emergency-item">
              <FaPhone className="footer-emergency-item-icon" />
              <span>Emergency Services: <span className="footer-emergency-number">112</span></span>
            </div>
            <div className="footer-emergency-item">
              <FaExclamationTriangle className="footer-emergency-item-icon" />
              <span>Report Online Fraud: <span className="footer-emergency-website">cybercrime.gov.in</span></span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="footer-terminal-prefix">&gt;</span> &copy; {currentYear} Savdhaan India 
            <span className="footer-cursor-inline">|</span> All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="/privacy-policy" className="footer-legal-link">Privacy_Policy</a>
            <a href="/terms-of-service" className="footer-legal-link">Terms_of_Service</a>
            <a href="/sitemap" className="footer-legal-link">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Binary stream decoration at bottom */}
      <div className="footer-binary-bottom">
        <div className="footer-binary-content-bottom">
          {binaryLine.split('').reverse().join('')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;