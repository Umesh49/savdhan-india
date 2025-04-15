import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
  FaCode,
  FaShieldVirus,
  FaLockOpen
} from "react-icons/fa"
import { useTheme } from "../../contexts/ThemeContext"

const Footer = () => {
  const { darkMode, accentColor } = useTheme()
  const currentYear = new Date().getFullYear()
  const [binaryLine, setBinaryLine] = useState("")
  const [matrixEffect, setMatrixEffect] = useState([])

  // Generate binary animation for the top border
  useEffect(() => {
    const generateBinary = () => {
      let binary = ""
      for (let i = 0; i < 64; i++) {
        binary += Math.random() > 0.5 ? "1" : "0"
      }
      return binary
    }

    setBinaryLine(generateBinary())
    const interval = setInterval(() => {
      setBinaryLine(generateBinary())
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Generate matrix rain effect characters
  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデド";
    const columns = Math.floor(window.innerWidth / 20);
    const raindrops = [];
    
    for (let i = 0; i < columns; i++) {
      const speed = Math.random() * 2 + 0.5;
      const length = Math.floor(Math.random() * 10) + 3;
      const position = Math.floor(Math.random() * 100);
      const char = chars[Math.floor(Math.random() * chars.length)];
      
      raindrops.push({ position, speed, length, char });
    }
    
    setMatrixEffect(raindrops);
    
    // Add window resize handler for responsiveness
    const handleResize = () => {
      const newColumns = Math.floor(window.innerWidth / 20);
      const newRaindrops = [];
      
      for (let i = 0; i < newColumns; i++) {
        const speed = Math.random() * 2 + 0.5;
        const length = Math.floor(Math.random() * 10) + 3;
        const position = Math.floor(Math.random() * 100);
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        newRaindrops.push({ position, speed, length, char });
      }
      
      setMatrixEffect(newRaindrops);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get accent color based on theme context
  const getAccentColor = () => {
    switch(accentColor) {
      case 'blue':
        return 'text-blue-500';
      case 'purple':
        return 'text-purple-500';
      default:
        return 'text-green-500';
    }
  }

  const getAccentHoverColor = () => {
    switch(accentColor) {
      case 'blue':
        return 'hover:text-blue-400';
      case 'purple':
        return 'hover:text-purple-400';
      default:
        return 'hover:text-green-400';
    }
  }
  
  const getAccentBorderColor = () => {
    switch(accentColor) {
      case 'blue':
        return 'border-blue-500';
      case 'purple':
        return 'border-purple-500';
      default:
        return 'border-green-500';
    }
  }

  return (
    <footer className="relative mt-16 bg-black text-green-500 border-t border-green-500/30">
      {/* Matrix code line at top */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${getAccentBorderColor().replace('border', 'bg')}/80`}></div>
      <div className="absolute top-1 left-0 right-0 overflow-hidden h-6">
        <div className={`font-mono text-xs tracking-wider ${getAccentColor()} opacity-70 whitespace-nowrap overflow-hidden`}>
          {binaryLine}
        </div>
      </div>

      {/* Matrix rain effect - subtle in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {matrixEffect.map((drop, i) => (
          <div 
            key={i}
            className={`absolute ${getAccentColor()} font-mono text-lg animate-matrixRain`}
            style={{
              left: `${(i / matrixEffect.length) * 100}%`,
              animationDuration: `${drop.speed}s`,
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* Hexagonal grid background - subtle effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="hex-grid h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FaShieldAlt className={`text-2xl ${getAccentColor()}`} />
                <div className={`absolute inset-0 ${getAccentBorderColor().replace('border', 'bg')} rounded-full animate-ping opacity-20`}></div>
              </div>
              <h2 className={`text-xl font-bold font-mono ${getAccentColor()}`}>
                Savdhaan<span className="animate-pulse">_</span>India
              </h2>
            </div>
            <p className="text-sm text-green-400 font-mono leading-relaxed">
              Empowering Indians with cybersecurity knowledge and resources to stay safe in the digital world.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${getAccentHoverColor()} transition-colors duration-300 hover:scale-110 transform`}
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${getAccentHoverColor()} transition-colors duration-300 hover:scale-110 transform`}
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${getAccentHoverColor()} transition-colors duration-300 hover:scale-110 transform`}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${getAccentHoverColor()} transition-colors duration-300 hover:scale-110 transform`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${getAccentHoverColor()} transition-colors duration-300 hover:scale-110 transform`}
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${getAccentColor()} font-mono flex items-center`}>
              <FaLock className="mr-2" /> Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/indian-laws", label: "Cyber Laws" },
                { path: "/complaint-guide", label: "Complaint Guide" },
                { path: "/threat-map", label: "Threat Map" },
                { path: "/resources", label: "Resources" }
              ].map((link, index) => (
                <li key={index} className="transform transition-transform hover:translate-x-1">
                  <Link
                    to={link.path}
                    className={`text-sm text-green-400 ${getAccentHoverColor()} transition-colors duration-300 flex items-center font-mono`}
                  >
                    <FaChevronRight className="mr-2 text-xs opacity-70" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${getAccentColor()} font-mono flex items-center`}>
              <FaUserShield className="mr-2" /> Resources
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/security-tools", label: "Security Tools" },
                { path: "/security-checklist", label: "Security Checklist" },
                { path: "/cyber-awareness-quiz", label: "Cyber Awareness Quiz" },
                { path: "/faq", label: "FAQ" },
                { path: "/about-us", label: "About Us" }
              ].map((link, index) => (
                <li key={index} className="transform transition-transform hover:translate-x-1">
                  <Link
                    to={link.path}
                    className={`text-sm text-green-400 ${getAccentHoverColor()} transition-colors duration-300 flex items-center font-mono`}
                  >
                    <FaChevronRight className="mr-2 text-xs opacity-70" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${getAccentColor()} font-mono flex items-center`}>
              <FaFingerprint className="mr-2" /> Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-green-400 flex items-start font-mono group">
                <FaMapMarkerAlt className={`${getAccentColor()} mt-1 mr-3 group-hover:animate-bounce`} />
                <span>123 Cyber Security Bhawan,<br />New Delhi, India - 110001</span>
              </li>
              <li className="text-sm text-green-400 flex items-center font-mono group">
                <FaPhone className={`${getAccentColor()} mr-3 group-hover:animate-pulse`} />
                <span>+91 1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="text-sm text-green-400 flex items-center font-mono group">
                <FaEnvelope className={`${getAccentColor()} mr-3 group-hover:animate-pulse`} />
                <span>contact@savdhaanindia.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security badge section */}
        <div className="mt-12 py-4 border-t border-green-500/30">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-green-400">
            <div className="flex items-center bg-black/30 p-2 rounded border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
              <FaShieldAlt className={`mr-2 ${getAccentColor()}`} /> 
              <span className="font-mono">Protected by Cybersecurity Standards</span>
            </div>
            <div className="flex items-center bg-black/30 p-2 rounded border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
              <FaLock className={`mr-2 ${getAccentColor()}`} /> 
              <span className="font-mono">SSL Encrypted</span>
            </div>
            <div className="flex items-center bg-black/30 p-2 rounded border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
              <FaUserShield className={`mr-2 ${getAccentColor()}`} /> 
              <span className="font-mono">Privacy Focused</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-8 p-4 border border-red-500/30 rounded-md bg-red-500/5 backdrop-blur-sm">
          <div className="text-center">
            <div className="inline-block mb-2 relative">
              <FaShieldVirus className="text-red-500 text-2xl mx-auto" />
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <h4 className="text-red-500 font-mono font-bold mb-3 animate-pulse">EMERGENCY CYBER HELPLINES</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex justify-center items-center space-x-3 p-2 border border-red-500/20 rounded-md hover:bg-red-500/10 transition-all">
                <FaPhone className="text-red-500" />
                <span className="font-mono text-red-500">Cyber Crime Helpline: <span className="text-green-400">1930</span></span>
              </div>
              <div className="flex justify-center items-center space-x-3 p-2 border border-red-500/20 rounded-md hover:bg-red-500/10 transition-all">
                <FaPhone className="text-red-500" />
                <span className="font-mono text-red-500">Emergency Services: <span className="text-green-400">112</span></span>
              </div>
              <div className="flex justify-center items-center space-x-3 p-2 border border-red-500/20 rounded-md hover:bg-red-500/10 transition-all">
                <FaLockOpen className="text-red-500" />
                <span className="font-mono text-red-500">Report Online Fraud: <span className="text-green-400">cybercrime.gov.in</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-green-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-green-400 font-mono mb-4 md:mb-0">
              &copy; {currentYear} Savdhaan India <span className="animate-pulse inline-block">|</span> All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/privacy-policy"
                className={`text-sm text-green-400 ${getAccentHoverColor()} transition-colors duration-300 font-mono hover:underline`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className={`text-sm text-green-400 ${getAccentHoverColor()} transition-colors duration-300 font-mono hover:underline`}
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className={`text-sm text-green-400 ${getAccentHoverColor()} transition-colors duration-300 font-mono hover:underline`}
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Binary stream decoration at bottom */}
      <div className="overflow-hidden h-1 w-full bg-black">
        <div className={`text-xs ${getAccentColor()} font-mono animate-slideRightFast opacity-70`}>
          {binaryLine.split('').reverse().join('')}
        </div>
      </div>

      <style jsx>{`
        .hex-grid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E");
        }
        
        @keyframes matrixRain {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(1000%);
          }
        }
        
        .animate-matrixRain {
          animation: matrixRain 8s linear infinite;
        }
        
        .animate-slideRightFast {
          animation: slideRight 20s linear infinite;
        }
        
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  )
}

export default Footer