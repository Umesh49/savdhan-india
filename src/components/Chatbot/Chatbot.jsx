"use client"

import { useState, useEffect, useRef } from "react"
import { 
  FaRobot, 
  FaUser, 
  FaPaperPlane, 
  FaInfoCircle, 
  FaShieldAlt, 
  FaLock, 
  FaExclamationTriangle,
  FaFingerprint,
  FaServer,
  FaRadiation,
  FaNetworkWired,
  FaTerminal,
  FaDatabase,
  FaMicrochip,
  FaGlobe,
  FaKey,
  FaShieldVirus,
  FaSatelliteDish
} from "react-icons/fa"
import { RiShieldKeyholeFill, RiRadarFill, RiVpnFill, RiFileCodeFill } from "react-icons/ri"
import { SiWebassembly, SiMatrix } from "react-icons/si"
import CyberSpinner from "../common/CyberSpinner/CyberSpinner"
import "./Chatbot.css"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [systemStatus, setSystemStatus] = useState("initializing")
  const [threatLevel, setThreatLevel] = useState("minimal")
  const [securityBreaches, setSecurityBreaches] = useState([])
  const [networkTraffic, setNetworkTraffic] = useState([])
  const [encryptionActive, setEncryptionActive] = useState(true)
  const [userAuthLevel, setUserAuthLevel] = useState("level-2")
  const [systemResources, setSystemResources] = useState({
    cpu: 32,
    memory: 78,
    encryption: 91,
    network: 65
  })
  
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const chatContainerRef = useRef(null)
  const matrixCanvasRef = useRef(null)

  // Matrix rain animation effect
  useEffect(() => {
    if (loading) return

    const canvas = matrixCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)
    
    // Generate random characters
    const chars = '01010101абвгдеёжзийклмنمحمدрщъыьэюя01010101'
    
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 10, 20, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#0f8'
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }
    
    const matrixInterval = setInterval(drawMatrix, 50)
    
    // Simulate changing system metrics
    const resourceInterval = setInterval(() => {
      setSystemResources(prev => ({
        cpu: Math.min(100, Math.max(10, prev.cpu + (Math.random() * 10) - 5)),
        memory: Math.min(100, Math.max(40, prev.memory + (Math.random() * 6) - 3)),
        encryption: Math.min(100, Math.max(85, prev.encryption + (Math.random() * 4) - 2)),
        network: Math.min(100, Math.max(30, prev.network + (Math.random() * 8) - 4))
      }))
    }, 2000)
    
    // Simulate network traffic
    const trafficInterval = setInterval(() => {
      const newTraffic = {
        id: Date.now(),
        protocol: ["TCP", "UDP", "HTTPS", "SSH", "DNS"][Math.floor(Math.random() * 5)],
        source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        destination: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        status: Math.random() > 0.95 ? "BLOCKED" : "ALLOWED",
        timestamp: new Date().toISOString()
      }
      
      setNetworkTraffic(prev => {
        const updated = [newTraffic, ...prev].slice(0, 8)
        
        // Randomly detect a threat
        if (Math.random() > 0.97) {
          const threatTypes = ["Port Scan", "XSS Attempt", "SQL Injection", "Brute Force", "Zero-Day Exploit"]
          const newThreat = {
            id: Date.now(),
            type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
            source: newTraffic.source,
            severity: Math.random() > 0.7 ? "HIGH" : Math.random() > 0.4 ? "MEDIUM" : "LOW",
            timestamp: new Date().toISOString()
          }
          
          setSecurityBreaches(prev => [newThreat, ...prev].slice(0, 5))
          
          // Glitch effect on threat detection
          triggerGlitchEffect()
          
          // Update threat level
          const threatLevels = ["minimal", "guarded", "elevated", "high", "severe"]
          const currentIndex = threatLevels.indexOf(threatLevel)
          const newIndex = Math.min(4, Math.max(0, currentIndex + (Math.random() > 0.5 ? 1 : -1)))
          setThreatLevel(threatLevels[newIndex])
        }
        
        return updated
      })
    }, 3000)
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearInterval(matrixInterval)
      clearInterval(resourceInterval)
      clearInterval(trafficInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [loading, threatLevel])

  useEffect(() => {
    // Simulate system initialization with cybersecurity scan
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval)
          return 100
        }
        return prev + Math.floor(Math.random() * 5) + 1
      })
    }, 100)

    // Simulate system initialization phases with cyber jargon
    setTimeout(() => setSystemStatus("scanning"), 500)
    setTimeout(() => setSystemStatus("securing"), 1500)
    setTimeout(() => setSystemStatus("connecting"), 2500)
    setTimeout(() => setSystemStatus("analyzing"), 3500)
    
    setTimeout(() => {
      clearInterval(scanInterval)
      setScanProgress(100)
      setLoading(false)
      setSystemStatus("online")
      
      // Add welcome message with slight delay to simulate system boot
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            type: "bot",
            text: "[SYSTEM PROTOCOL C-137] Quantum secure channel established. ACCESS GRANTED.\n\nWelcome to NEXUS-7 Cybersecurity Interface. I am your Advanced Defense Intelligence System.\n\nCapabilities:\n• Quantum-encrypted threat assessment\n• Neural network breach detection\n• Deep analysis of Indian cyber legislation frameworks\n• Adaptive countermeasure deployment\n\nHow shall I secure your digital perimeter today?",
            time: new Date(),
          },
        ])
      }, 300)
    }, 5000)

    // Full-screen setup
    document.body.classList.add('chatbot-fullscreen')
    
    return () => {
      clearInterval(scanInterval)
      document.body.classList.remove('chatbot-fullscreen')
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const triggerGlitchEffect = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 1200)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: input,
      time: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Slight glitch effect when processing message
    triggerGlitchEffect()

    try {
      // Simulate quantum data processing animation
      const processingTime = 800 + Math.random() * 1500
      setTimeout(() => {
        // Simulate occasional authentication check for sensitive queries
        const sensitiveTopics = ["vulnerability", "backdoor", "attack", "exploit", "hack"]
        const requiresAuth = sensitiveTopics.some(topic => input.toLowerCase().includes(topic))
        
        if (requiresAuth && Math.random() > 0.7) {
          // Create an authentication message
          const authMessage = {
            id: messages.length + 2,
            type: "bot",
            text: "IDENTITY VERIFICATION REQUIRED\n\nSecurity Protocol Delta-7 activated.\nScanning biometric signature...\nValidating quantum key...\nIdentity confirmed.\n\nAccess granted to restricted information protocols.",
            time: new Date(),
            isAuth: true
          }
          
          setMessages((prev) => [...prev, authMessage])
          
          // Add short delay before the real response
          setTimeout(() => {
            const botResponse = getBotResponse(input)
            const botMessage = {
              id: messages.length + 3,
              type: "bot", 
              text: botResponse,
              time: new Date(),
            }
            setMessages((prev) => [...prev, botMessage])
            setIsTyping(false)
            inputRef.current?.focus()
          }, 1500)
        } else {
          // Standard response
          const botResponse = getBotResponse(input)
          const botMessage = {
            id: messages.length + 2,
            type: "bot",
            text: botResponse,
            time: new Date(),
          }
          setMessages((prev) => [...prev, botMessage])
          setIsTyping(false)
          inputRef.current?.focus()
        }
      }, processingTime)
    } catch (error) {
      // Handle error with cybersecurity context
      setTimeout(() => {
        const errorMessage = {
          id: messages.length + 2,
          type: "bot",
          text: "[ALERT: ANOMALY DETECTED]\n\nSecurity protocol breach detected. Possible quantum interference in communication matrix. Deploying countermeasures...\n\nNEW CHANNEL ESTABLISHED. Please re-encrypt and transmit your query through the secured quantum tunnel.",
          time: new Date(),
          isError: true
        }
        setMessages((prev) => [...prev, errorMessage])
        setIsTyping(false)
        
        // Reset encryption status temporarily
        setEncryptionActive(false)
        setTimeout(() => setEncryptionActive(true), 3000)
      }, 1000)
    }
  }

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase()

    // Enhanced responses with cybersecurity formatting and terminology
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "[NEXUS PROTOCOL]: Identity signature authenticated.\n\nSecure quantum tunnel established with 4096-bit encryption. All communications are being protected by advanced neural firewall.\n\nCurrent threat assessment: Level " + (Math.floor(Math.random() * 3) + 1) + " (Managed).\n\nHow may I assist with your cybersecurity protocols today?"
    } else if (lowerQuery.includes("cyber law") || lowerQuery.includes("law") || lowerQuery.includes("legal")) {
      return "[LEGAL DATABASE QUANTUM ACCESS GRANTED]\n\nAnalyzing Indian Cyber Jurisdiction Framework...\n\nCORE LEGISLATION ARCHITECTURE:\n• Information Technology Act, 2000 (amended 2008)\n• Personal Data Protection Bill (PDPB) framework\n• Digital India Act initiative protocols\n• Indian Computer Emergency Response Team (CERT-In) guidelines\n\nKEY ENFORCEMENT VECTORS:\n• Section 43/66: Unauthorized digital access penalties (₹5 crore maximum)\n• Section 66F: Cyberterrorism countermeasures (life imprisonment threshold)\n• Section 69: Government interception and monitoring authorization protocols\n• Section 72: Breach of confidentiality and privacy enforcement mechanisms\n\nRecent judicial precedents suggest evolving interpretation of digital sovereignty principles. Would you like a deeper analysis of specific regulatory compliance requirements?"
    } else if (lowerQuery.includes("complaint") || lowerQuery.includes("report")) {
      return "[INCIDENT RESPONSE FRAMEWORK INITIALIZED]\n\nDeploying multi-tier reporting architecture...\n\nPRIMARY REPORTING VECTORS:\n1. DIGITAL: National Cyber Crime Reporting Portal (cybercrime.gov.in) - 24/7 monitoring active\n2. REMOTE: National Cyber Crime Helpline (1930) - Quantum-encrypted voice authentication\n3. PHYSICAL: Jurisdictional Police Station with Cyber Cell interface\n4. SPECIALIZED: State Cyber Cells and Regional CERTs for advanced threat response\n\nFORENSIC PRESERVATION PROTOCOL:\n• Implement immediate write-blockers on affected systems\n• Deploy memory capture tools before system power-down\n• Establish cryptographic hashes of all evidence artifacts\n• Maintain blockchain-verified chain of custody documentation\n• Generate timestamped logs with nonrepudiation mechanisms\n\nWould you require a specialized incident response template tailored to your security architecture?"
    } else if (lowerQuery.includes("password") || lowerQuery.includes("secure password")) {
      return "[AUTHENTICATION PROTOCOL ADVISORY]\n\nQuantum computing threat assessment: HIGH\nCurrent encryption vulnerability status: EVOLVING\n\nNEXT-GEN CREDENTIAL ARCHITECTURE:\n• Minimum entropy requirement: 128+ bits (equivalent to 20+ truly random characters)\n• Implementation of zero-knowledge proof mechanisms recommended\n• Hardware security modules (HSM) for critical key storage\n• Quantum-resistant algorithms for long-term sensitive data\n• Passphrase construction using Diceware or equivalent high-entropy methodologies\n\nMULTI-FACTOR DEPLOYMENT RECOMMENDATIONS:\n• FIDO2 compliant physical security keys as primary 2FA\n• Time-based one-time password (TOTP) as secondary backup\n• Biometric verification with liveness detection for critical systems\n• Location-based contextual authentication for anomaly detection\n\nMITIGATION STRATEGIES:\n• Zero-trust architecture implementation\n• Continuous authentication mechanisms\n• Password-less authentication framework where feasible\n• Regular audit of credential entropy using advanced statistical analysis"
    } else if (lowerQuery.includes("phishing") || lowerQuery.includes("scam")) {
      return "[THREAT INTELLIGENCE: PHISHING COUNTERMEASURES]\n\nActive threat landscape analysis complete.\n\nEMERGING ATTACK VECTORS:\n• Adversarial AI-generated spear phishing campaigns\n• Quantum-computing enabled cryptographic subversion\n• Deep-fake voice synthesis for executive impersonation\n• Supply chain compromise through trusted update channels\n• Zero-day exploit deployment through ephemeral infrastructure\n\nADVANCED DEFENSE GRID PROTOCOLS:\n• Neural-network enabled behavioral analysis for anomaly detection\n• DMARC/DKIM/SPF with enforced rejection policies\n• Real-time URL detonation in secure containment environments\n• AI-assisted contextual communication analysis\n• Hardware-based isolation of high-risk communication channels\n\nHUMAN FIREWALL AUGMENTATION:\n• Micro-learning security modules with spaced repetition\n• Simulated phishing campaigns with adaptive difficulty\n• Security behavior gamification and incentivization\n• Cognitive bias awareness training to counter social engineering\n\nWould you like me to generate a custom phishing simulation framework tailored to your organizational threat model?"
    } else if (lowerQuery.includes("encryption") || lowerQuery.includes("encrypt")) {
      return "[QUANTUM CRYPTOGRAPHY BRIEFING]\n\nDeploying post-quantum cryptographic analysis...\n\nCURRENT ENCRYPTION PARADIGMS:\n• Symmetric: AES-256-GCM, ChaCha20-Poly1305 (recommended for data-at-rest)\n• Asymmetric: RSA-4096, ECC P-521 (vulnerable to quantum attacks)\n• Hash Functions: SHA-3, BLAKE3 (current integrity verification standard)\n• Key Exchange: Quantum-resistant Kyber, NTRU, Saber implementations\n\nPOST-QUANTUM TRANSITION STRATEGY:\n• Hybrid cryptosystems implementing both traditional and PQC algorithms\n• Lattice-based cryptography for asymmetric operations\n• Hash-based signature schemes for non-repudiation requirements\n• Supersingular isogeny key encapsulation for forward secrecy\n\nENTERPRISE IMPLEMENTATION ARCHITECTURE:\n• Hardware security modules with quantum random number generation\n• Key ceremony protocols with multi-person authentication requirements\n• Cryptographic agility to enable algorithm transition without system redesign\n• Side-channel attack mitigations through constant-time implementations\n\nThreat horizon analysis indicates quantum computational advantage within 7-10 years. Recommend immediate cryptographic inventory and transition planning."
    } else if (lowerQuery.includes("vpn") || lowerQuery.includes("privacy")) {
      return "[PRIVACY SHIELD ARCHITECTURE: CLASSIFIED]\n\nDeploying anonymity analysis framework...\n\nPRIVACY ENHANCEMENT VECTOR ASSESSMENT:\n\nVPN SELECTION CRITERIA MATRIX:\n• Jurisdiction: Non-14 Eyes alliance location with strong legal protections\n• Technical Architecture: RAM-only server infrastructure with perfect forward secrecy\n• Protocol Security: WireGuard or OpenVPN with ChaCha20-Poly1305 cipher suite\n• Validation: Independent security audits with published results\n• Authentication: Multi-factor with hardware token support\n• Exit Node Security: Multi-hop configurations with distributed trust model\n\nADVANCED ANONYMITY FRAMEWORK:\n• Tor network integration with entry guards and controlled exit selection\n• DNS-over-HTTPS/DNS-over-TLS with validated non-logging resolvers\n• Traffic obfuscation through pluggable transports (snowflake, meek)\n• Browser fingerprint randomization with temporal rotation\n• Compartmentalized virtualization for strict separation of contexts\n• Time-zone and system clock synchronization for metadata anonymization\n\nREGULATORY COMPLIANCE NOTICE: Privacy-enhancing technologies must be deployed in accordance with applicable Indian legal frameworks. CERT-In logging requirements may apply to certain organizational contexts."
    } else if (lowerQuery.includes("hacking") || lowerQuery.includes("hack")) {
      return "[ETHICAL HACKING OPERATIONAL FRAMEWORK]\n\nAuthorization verification complete. Deploying adversarial methodology briefing...\n\nADVANCED PENETRATION TESTING METHODOLOGY:\n\n1. INTELLIGENCE GATHERING\n• Passive Reconnaissance: OSINT automation framework deployment\n• Active Scanning: Low-noise advanced fingerprinting techniques\n• Infrastructure Mapping: BGP analysis and autonomous system relationship modeling\n\n2. VULNERABILITY ANALYSIS\n• Static Application Security Testing (SAST) for source code analysis\n• Dynamic Application Security Testing (DAST) for runtime vulnerability discovery\n• API security assessment with schema validation and fuzzing techniques\n• Container security analysis for ephemeral infrastructure\n\n3. EXPLOITATION FRAMEWORK\n• Custom exploit development with anti-forensic capabilities\n• Supply chain compromise simulation through dependency analysis\n• Zero-day vulnerability research and responsible disclosure protocols\n• Social engineering campaigns with pretexting and psychological triggers\n\n4. POST-EXPLOITATION\n• Lateral movement techniques with credential harvesting minimization\n• Data exfiltration testing through covert channels\n• Persistence mechanism deployment with MITRE ATT&CK mapping\n• Command and control infrastructure with domain fronting capabilities\n\nLEGAL BOUNDARY CONDITIONS:\n• Explicit written authorization with defined scope limitations\n• Rules of engagement with prohibited actions clearly documented\n• Data handling requirements compliant with privacy regulations\n• Evidence preservation and secure destruction protocols\n\nRecommended certification pathways: OSCP, CRTP, OSWE, CREST and specialized Indian cybersecurity certifications by CERT-In."
    } else if (lowerQuery.includes("ai") || lowerQuery.includes("artificial intelligence")) {
      return "[AI SECURITY MATRIX: CLASSIFIED]\n\nDeploying artificial intelligence threat assessment...\n\nEMERGING AI THREAT LANDSCAPE:\n• Adversarial machine learning attacks targeting model integrity\n• Prompt injection vulnerabilities in large language models\n• Data poisoning campaigns against training pipelines\n• Model extraction attempts through API probing\n• Synthetic media (deepfakes) for identity fraud and disinformation\n\nDEFENSIVE COUNTERMEASURES:\n• Differential privacy implementation in training data processing\n• Adversarial training with automated red-teaming capabilities\n• Runtime monitoring of inference patterns for anomaly detection\n• Robust ML model validation with diverse test data\n• Explainability requirements for high-risk AI deployments\n\nSECURE AI DEPLOYMENT ARCHITECTURE:\n• Containerized isolation with privilege restrictions\n• Formal verification of critical AI components where feasible\n• Continuous monitoring for drift and poisoning indicators\n• Input sanitization and output filtering pipelines\n• Automated ethical boundary enforcement mechanisms\n\nREGULATORY CONSIDERATIONS:\n• Indian AI Strategy (NITI Aayog) compliance requirements\n• Responsible AI principles alignment (transparency, accountability)\n• AI audit trails for regulatory reporting and incident investigation\n• Privacy-by-design implementation in AI data processing\n\nRecommendation: Implement defense-in-depth strategy with human-in-the-loop verification for critical AI systems."
    } else if (lowerQuery.includes("ransomware") || lowerQuery.includes("malware")) {
      return "[MALWARE DEFENSE GRID ACTIVATED]\n\nDeploying threat intelligence feed...\n\nRANSOMWARE EVOLUTION ANALYSIS:\n• Current threat actors utilize double/triple extortion techniques\n• Supply chain compromise as primary initial access vector\n• Fileless malware with in-memory execution to evade detection\n• Living-off-the-land techniques leveraging legitimate system tools\n• Ransomware-as-a-Service (RaaS) lowering technical barriers to entry\n\nDEFENSIVE ARCHITECTURE:\n• Zero Trust implementation with least privilege enforcement\n• Application allowlisting with cryptographic verification\n• Network segmentation with strict east-west traffic controls\n• Immutable backups with offline/air-gapped components\n• Behavioral-based EDR with automated response playbooks\n\nINCIDENT RESPONSE PROTOCOL:\n• Immediate network isolation of affected systems\n• Memory acquisition before power-down for volatile forensics\n• Establishment of out-of-band communication channels\n• Activation of cyber insurance notification procedures\n• Engagement with law enforcement and CERT-In within mandatory timeframes\n\nRECOVERY FRAMEWORK:\n• Validated restoration procedures from secure backups\n• Clean machine deployment from golden images\n• Credential rotation and secret management refresh\n• Post-incident threat hunting to detect persistence mechanisms\n• Root cause analysis to address underlying vulnerabilities\n\nNOTE: Indian cybersecurity directives mandate reporting of ransomware incidents to CERT-In within 6 hours of detection."
    } else if (lowerQuery.includes("zero day") || lowerQuery.includes("vulnerability")) {
      return "[VULNERABILITY MANAGEMENT PROTOCOL: ACTIVATED]\n\nDeploying advanced threat analysis...\n\nZERO-DAY VULNERABILITY LANDSCAPE:\n• Current dark web market valuation: $0.5M-$2.5M per high-impact exploit\n• Nation-state stockpiling estimated at 100+ unpublished vulnerabilities\n• Critical infrastructure targeting increased 247% in past 12 months\n• Browser and supply chain vulnerabilities dominate current landscape\n• Average time-to-patch after disclosure: 97 days (high-severity vulnerabilities)\n\nDEFENSIVE POSTURE RECOMMENDATIONS:\n• Defense-in-depth architecture implementation\n• Attack surface reduction through service minimization\n• Virtual patching via WAF/RASP technologies\n• Behavior-based detection to identify exploitation attempts\n• Capability-based security models where applicable\n\nEXPLOITATION INDICATORS:\n• Unusual process creation chains and parent-child relationships\n• Memory allocation patterns outside established baselines\n• Unexpected privilege escalation or credential usage\n• Anomalous network traffic to uncommon destinations\n• System file modifications outside change control windows\n\nVULNERABILITY DISCLOSURE PROTOCOL:\n• Coordinated disclosure through established channels\n• CERT-In notification requirements compliance\n• Communication templates with appropriate technical detail\n• CVE registration process and CVSS scoring methodology\n• Exploitation proof-of-concept handling guidelines\n\nWould you like me to develop a custom vulnerability management framework aligned with your specific technology stack?"
    } else {
      return "[QUANTUM ANALYSIS COMPLETE]\n\nYour query doesn't align with my primary security protocols. Please reformulate your request regarding specific cybersecurity domains such as:\n\n• Indian cyber law frameworks\n• Advanced threat protection architectures\n• Vulnerability management methodologies\n• Encryption implementation strategies\n• Incident response protocols\n• Privacy-enhancing technologies\n• Ethical hacking frameworks\n• AI security considerations\n\nAlternatively, specify your security objective for a tailored response matrix."
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
  }

  const getThreatLevelClass = () => {
    switch(threatLevel) {
      case "severe": return "threat-severe"
      case "high": return "threat-high"
      case "elevated": return "threat-elevated"
      case "guarded": return "threat-guarded"
      default: return "threat-minimal"
    }
  }

  const renderSuggestions = () => {
    const suggestions = [
      { text: "Indian cyber law framework analysis", icon: <FaLock /> },
      { text: "How to file a cybercrime complaint?", icon: <FaShieldAlt /> },
      { text: "Quantum-resistant encryption protocols", icon: <FaKey /> },
      { text: "Latest AI-powered phishing vectors", icon: <FaExclamationTriangle /> },
      { text: "Zero-day vulnerability management", icon: <FaServer /> },
      { text: "Advanced ethical hacking methodology", icon: <FaTerminal /> },
    ]

    return (
      <div className="chatbot-suggestions">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="chatbot-suggestion-btn"
            onClick={() => {
              setInput(suggestion.text)
              inputRef.current?.focus()
            }}
          >
            {suggestion.icon}
            <span>{suggestion.text}</span>
          </button>
        ))}
      </div>
    )
  }

  const renderLoadingScreen = () => {
    return (
      <div className="chatbot-loading-container">
        <div className="chatbot-loading-content">
          <div className="chatbot-logo-container">
            <RiShieldKeyholeFill className="chatbot-logo" />
            <div className="chatbot-logo-pulse"></div>
          </div>
          
          <h1 className="chatbot-loading-title">NEXUS<span className="chatbot-divider">::</span>DEFENDER</h1>
          
          <div className="chatbot-spinner-container">
            <CyberSpinner size={100} />
          </div>
          
          <div className="chatbot-loading-status">
            <div className="chatbot-status-text">
              {systemStatus === "initializing" && "QUANTUM CORE INITIALIZATION"}
              {systemStatus === "scanning" && "NEURAL NETWORK VULNERABILITY SCAN"}
              {systemStatus === "securing" && "DEPLOYING CRYPTOGRAPHIC PROTOCOLS"}
              {systemStatus === "connecting" && "ESTABLISHING QUANTUM-SECURE CHANNELS"}
              {systemStatus === "analyzing" && "THREAT INTELLIGENCE MATRIX ANALYSIS"}
              {systemStatus === "online" && "DEFENSE GRID ONLINE"}
            </div>
          </div>
          
          <div className="chatbot-security-scan">
            <div className="chatbot-scan-progress-container">
              <div className="chatbot-scan-progress-bar" style={{ width: `${scanProgress}%` }}></div>
            </div>
            <div className="chatbot-scan-text">
              Security Matrix: <span className="chatbot-scan-percentage">{scanProgress}%</span>
            </div>
          </div>
          
          <div className="chatbot-loading-subsystems">
            {scanProgress > 20 && (
              <div className="chatbot-subsystem">
                <div className="chatbot-subsystem-status">
                  <span className="chatbot-status-dot active"></span>
                  <span>QUANTUM ENCRYPTION</span>
                </div>
                <div className="chatbot-subsystem-bar">
                  <div className="chatbot-subsystem-progress" style={{ width: `${Math.min(100, scanProgress * 1.2)}%` }}></div>
                </div>
              </div>
            )}
            
            {scanProgress > 40 && (
              <div className="chatbot-subsystem">
                <div className="chatbot-subsystem-status">
                  <span className="chatbot-status-dot active"></span>
                  <span>NEURAL DEFENSE GRID</span>
                </div>
                <div className="chatbot-subsystem-bar">
                  <div className="chatbot-subsystem-progress" style={{ width: `${Math.min(100, scanProgress * 1.1)}%` }}></div>
                </div>
              </div>
            )}
            
            {scanProgress > 60 && (
              <div className="chatbot-subsystem">
                <div className="chatbot-subsystem-status">
                  <span className="chatbot-status-dot active"></span>
                  <span>THREAT INTELLIGENCE</span>
                </div>
                <div className="chatbot-subsystem-bar">
                  <div className="chatbot-subsystem-progress" style={{ width: `${Math.min(100, scanProgress * 0.9)}%` }}></div></div>
              </div>
            )}
            
            {scanProgress > 80 && (
              <div className="chatbot-subsystem">
                <div className="chatbot-subsystem-status">
                  <span className="chatbot-status-dot active"></span>
                  <span>ZERO-DAY COUNTERMEASURES</span>
                </div>
                <div className="chatbot-subsystem-bar">
                  <div className="chatbot-subsystem-progress" style={{ width: `${Math.min(100, scanProgress * 0.8)}%` }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="chatbot-loading-footer">
          <div className="chatbot-security-tag">
            <FaShieldAlt className="chatbot-security-icon" />
            <span>QUANTUM CRYPTOGRAPHY ACTIVE</span>
          </div>
          <div className="chatbot-security-tag">
            <FaRadiation className="chatbot-security-icon" />
            <span>THREAT MATRIX DEPLOYED</span>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return renderLoadingScreen()
  }

  return (
    <div className={`chatbot-container-wrapper ${isGlitching ? 'chatbot-glitching' : ''}`} ref={chatContainerRef}>
      <canvas ref={matrixCanvasRef} className="matrix-background"></canvas>
      
      <div className="chatbot-header-wrapper">
        <div className="chatbot-header-content">
          <div className="chatbot-title-container">
            <RiShieldKeyholeFill className="chatbot-title-icon" />
            <h1 className="chatbot-title">NEXUS<span className="chatbot-divider">::</span>DEFENDER</h1>
          </div>
          
          <div className="chatbot-quantum-indicator">
            <div className="chatbot-quantum-wave"></div>
            <span>QUANTUM-SECURED</span>
          </div>
          
          <div className="chatbot-status-container">
            <div className="chatbot-status-indicator">
              <div className="chatbot-status-pulse"></div>
              <span className="chatbot-status-text">NEURAL GRID ACTIVE</span>
            </div>
            
            <div className="chatbot-encryption-badge">
              <FaLock className="chatbot-encryption-icon" />
              <span>{encryptionActive ? "ENCRYPTED" : "RECONNECTING..."}</span>
            </div>
            
            <div className={`chatbot-threat-level ${getThreatLevelClass()}`}>
              <FaExclamationTriangle className="chatbot-threat-icon" />
              <span>THREAT: {threatLevel.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chatbot-main">
        <div className="chatbot-messages-container">
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`chatbot-message ${message.type} 
                  ${message.isError ? 'chatbot-error' : ''} 
                  ${message.isAuth ? 'chatbot-auth' : ''}`}
              >
                <div className="chatbot-message-avatar">
                  {message.type === "bot" ? 
                    <FaRobot className="chatbot-avatar-icon" /> : 
                    <FaUser className="chatbot-avatar-icon" />
                  }
                </div>
                <div className="chatbot-message-content">
                  <div className="chatbot-message-text">{message.text}</div>
                  <div className="chatbot-message-time">
                    {formatTime(message.time)}
                    {message.type === "bot" && (
                      <span className="chatbot-message-encryption">
                        <FaKey className="chatbot-encryption-micro-icon" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message bot">
                <div className="chatbot-message-avatar">
                  <FaRobot className="chatbot-avatar-icon" />
                </div>
                <div className="chatbot-message-content">
                  <div className="chatbot-typing-indicator">
                    <div className="chatbot-quantum-processor">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="chatbot-quantum-text">QUANTUM PROCESSING</div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && renderSuggestions()}
        </div>

        <div className="chatbot-input-container">
          <div className="chatbot-input-status">
            <FaShieldAlt className="chatbot-input-status-icon" />
            <span className="chatbot-input-status-text">SECURE INPUT READY</span>
          </div>
          
          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <div className="chatbot-input-wrapper">
              <FaTerminal className="chatbot-input-icon" />
              <input
                id="chat-input"
                ref={inputRef}
                type="text"
                className="chatbot-input-field"
                placeholder="Enter security query via quantum channel..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
              />
              <div className="chatbot-input-scanner"></div>
            </div>
            <button 
              type="submit" 
              className="chatbot-submit-button" 
              disabled={isTyping || !input.trim()} 
              aria-label="Send message"
            >
              <div className="chatbot-submit-pulse"></div>
              <FaPaperPlane />
            </button>
          </form>
          
          <div className="chatbot-voice-indicators">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="chatbot-voice-bar"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="chatbot-info-panel">
        <div className="chatbot-panel-header">
          <h2>DEFENSE GRID STATUS</h2>
          <div className="chatbot-panel-status">
            <span className="chatbot-status-dot"></span>
            OPERATIONAL
          </div>
        </div>
        
        <div className="chatbot-panel-content">
          <div className="chatbot-system-stats">
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-label">QUANTUM CORE</div>
              <div className="chatbot-stat-bar">
                <div className="chatbot-stat-progress" style={{ width: `${systemResources.cpu}%` }}></div>
              </div>
              <div className="chatbot-stat-value">{Math.round(systemResources.cpu)}%</div>
            </div>
            
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-label">NEURAL NETWORK</div>
              <div className="chatbot-stat-bar">
                <div className="chatbot-stat-progress" style={{ width: `${systemResources.memory}%` }}></div>
              </div>
              <div className="chatbot-stat-value">{Math.round(systemResources.memory)}%</div>
            </div>
            
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-label">ENCRYPTION LEVEL</div>
              <div className="chatbot-stat-bar">
                <div className="chatbot-stat-progress" style={{ width: `${systemResources.encryption}%` }}></div>
              </div>
              <div className="chatbot-stat-value">{Math.round(systemResources.encryption)}%</div>
            </div>
            
            <div className="chatbot-stat-item">
              <div className="chatbot-stat-label">DEFENSE GRID</div>
              <div className="chatbot-stat-bar">
                <div className="chatbot-stat-progress" style={{ width: `${systemResources.network}%` }}></div>
              </div>
              <div className="chatbot-stat-value">{Math.round(systemResources.network)}%</div>
            </div>
          </div>
          
          <div className="chatbot-system-modules">
            <h3 className="chatbot-module-header">
              <FaNetworkWired className="chatbot-module-icon" />
              ACTIVE SECURITY MODULES
            </h3>
            
            <ul className="chatbot-feature-list">
              <li className="chatbot-feature-item">
                <RiRadarFill className="chatbot-feature-icon" />
                <div>
                  <h4>Quantum Threat Detection</h4>
                  <p>Neural-powered analysis of emerging attack vectors and zero-day exploits</p>
                </div>
              </li>
              <li className="chatbot-feature-item">
                <FaMicrochip className="chatbot-feature-icon" />
                <div>
                  <h4>Post-Quantum Cryptography</h4>
                  <p>Lattice-based encryption immune to quantum computational attacks</p>
                </div>
              </li>
              <li className="chatbot-feature-item">
                <RiVpnFill className="chatbot-feature-icon" />
                <div>
                  <h4>Zero-Trust Architecture</h4>
                  <p>Continuous verification of every digital transaction and entity</p>
                </div>
              </li>
              <li className="chatbot-feature-item">
                <FaDatabase className="chatbot-feature-icon" />
                <div>
                  <h4>Regulatory Compliance Matrix</h4>
                  <p>Real-time analysis of Indian IT Act and global security frameworks</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="chatbot-threat-intel">
            <h3 className="chatbot-module-header">
              <FaExclamationTriangle className="chatbot-module-icon" />
              THREAT INTELLIGENCE FEED
            </h3>
            
            <div className="chatbot-threat-list">
              {securityBreaches.map(breach => (
                <div key={breach.id} className={`chatbot-threat-item severity-${breach.severity.toLowerCase()}`}>
                  <div className="chatbot-threat-type">{breach.type}</div>
                  <div className="chatbot-threat-source">{breach.source}</div>
                  <div className="chatbot-threat-severity">{breach.severity}</div>
                  <div className="chatbot-threat-time">{new Date(breach.timestamp).toLocaleTimeString()}</div>
                </div>
              ))}
              
              {securityBreaches.length === 0 && (
                <div className="chatbot-no-threats">No active threats detected in current session</div>
              )}
            </div>
          </div>
          
          <div className="chatbot-network-traffic">
            <h3 className="chatbot-module-header">
              <FaGlobe className="chatbot-module-icon" />
              NETWORK TRAFFIC ANALYSIS
            </h3>
            
            <div className="chatbot-traffic-list">
              {networkTraffic.map(traffic => (
                <div key={traffic.id} className={`chatbot-traffic-item ${traffic.status === 'BLOCKED' ? 'traffic-blocked' : ''}`}>
                  <div className="chatbot-traffic-protocol">{traffic.protocol}</div>
                  <div className="chatbot-traffic-details">
                    <span className="chatbot-traffic-source">{traffic.source}</span>
                    <span className="chatbot-traffic-arrow">→</span>
                    <span className="chatbot-traffic-destination">{traffic.destination}</span>
                  </div>
                  <div className="chatbot-traffic-status">{traffic.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="chatbot-panel-footer">
          <div className="chatbot-user-auth">
            <FaFingerprint className="chatbot-badge-icon" />
            <span>AUTH LEVEL: {userAuthLevel.toUpperCase()}</span>
          </div>
          
          <div className="chatbot-system-info">
            <div className="chatbot-encryption-badge">
              <SiMatrix className="chatbot-badge-icon" />
              <span>QUANTUM-RESISTANT ENCRYPTION</span>
            </div>
            <div className="chatbot-version">NEXUS v4.9.217</div>
          </div>
        </div>
      </div>
      
      {/* Additional global HUD elements */}
      <div className="chatbot-global-hud">
        <div className="chatbot-hud-element chatbot-hud-top-left">
          <div className="chatbot-hud-indicator"></div>
          <span>NEURAL SCAN ACTIVE</span>
        </div>
        
        <div className="chatbot-hud-element chatbot-hud-top-right">
          <span className="chatbot-timestamp">{new Date().toLocaleTimeString()}</span>
          <div className="chatbot-hud-dots">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="chatbot-hud-dot"></div>
            ))}
          </div>
        </div>
        
        <div className="chatbot-hud-element chatbot-hud-bottom-left">
          <FaSatelliteDish className="chatbot-hud-icon" />
          <span>GLOBAL THREAT GRID CONNECTED</span>
        </div>
        
        <div className="chatbot-hud-element chatbot-hud-bottom-right">
          <span>CERT-IN PROTOCOL COMPLIANT</span>
          <RiFileCodeFill className="chatbot-hud-icon" />
        </div>
      </div>
    </div>
  )
}

export default Chatbot