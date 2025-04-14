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
} from "react-icons/fa"
import { useTheme } from "../../contexts/ThemeContext"

const Footer = () => {
  const { darkMode } = useTheme()
  const currentYear = new Date().getFullYear()
  const [binaryLine, setBinaryLine] = useState("")

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

  return (
    <footer className="relative mt-16 bg-black text-green-500 border-t border-green-500">
      {/* Matrix code line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
      <div className="absolute top-1 left-0 right-0 overflow-hidden h-6">
        <div className="font-mono text-xs tracking-wider text-green-500 animate-pulse whitespace-nowrap overflow-hidden">
          {binaryLine}
        </div>
      </div>

      {/* Hexagonal grid background - subtle effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="hex-grid"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FaShieldAlt className="text-2xl text-green-500" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <h2 className="text-xl font-bold font-mono text-green-500">
                Savdhaan<span className="animate-pulse">_</span>India
              </h2>
            </div>
            <p className="text-sm text-green-400 font-mono">
              Empowering Indians with cybersecurity knowledge and resources to stay safe in the digital world.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500 font-mono flex items-center">
              <FaLock className="mr-2" /> Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/laws", label: "Cyber Laws" },
                { path: "/complaint-guide", label: "Complaint Guide" },
                { path: "/threat-map", label: "Threat Map" },
                { path: "/resources", label: "Resources" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center font-mono"
                  >
                    <span className="inline-block w-4">&gt;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500 font-mono flex items-center">
              <FaUserShield className="mr-2" /> Resources
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/security-tools", label: "Security Tools" },
                { path: "/security-checklist", label: "Security Checklist" },
                { path: "/quiz", label: "Cyber Awareness Quiz" },
                { path: "/faq", label: "FAQ" },
                { path: "/about", label: "About Us" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center font-mono"
                  >
                    <span className="inline-block w-4">&gt;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500 font-mono flex items-center">
              <FaFingerprint className="mr-2" /> Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-green-400 flex items-start font-mono">
                <FaMapMarkerAlt className="text-green-500 mt-1 mr-3" />
                <span>123 Cyber Security Bhawan,<br />New Delhi, India - 110001</span>
              </li>
              <li className="text-sm text-green-400 flex items-center font-mono">
                <FaPhone className="text-green-500 mr-3" />
                <span>+91 1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="text-sm text-green-400 flex items-center font-mono">
                <FaEnvelope className="text-green-500 mr-3" />
                <span>contact@savdhaanindia.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security badge section - New */}
        <div className="mt-8 py-4 border-t border-green-500 border-opacity-30">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-green-400">
            <div className="flex items-center">
              <FaShieldAlt className="mr-2" /> Protected by Cybersecurity Standards
            </div>
            <div className="flex items-center">
              <FaLock className="mr-2" /> SSL Encrypted
            </div>
            <div className="flex items-center">
              <FaUserShield className="mr-2" /> Privacy Focused
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-green-500 border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-green-400 font-mono">
              &copy; {currentYear} Savdhaan India. <span className="animate-pulse">|</span> All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center space-x-6">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 font-mono"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 font-mono"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sitemap"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 font-mono"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hex-grid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </footer>
  )
}

export default Footer