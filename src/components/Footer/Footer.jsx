import { useState, useEffect, memo } from "react";
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
  FaFingerprint,
  FaChevronRight,
  FaTerminal,
  FaExclamationTriangle,
  FaUserShield
} from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import Logo from "../../svg/logo.svg";
import "./Footer.css";

// Extracted reusable components for better organization
const SocialLinks = memo(() => (
  <div className="footer-social-links">
    {[
      { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
      { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
      { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
      { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
      { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" }
    ].map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social-link"
        aria-label={label}
      >
        <Icon />
      </a>
    ))}
  </div>
));

const FooterLinks = memo(({ title, icon: IconComponent, links }) => (
  <div className="footer-section">
    <h3 className="footer-section-title">
      <IconComponent className="footer-section-icon" /> {title}<span className="footer-cursor-blink">|</span>
    </h3>
    <ul className="footer-links">
      {links.map((link, index) => (
        <li key={index} className="footer-link-item">
          <a href={link.path} className="footer-link">
            <span className="footer-terminal-prefix">&gt;</span>{link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
));

const ContactInfo = memo(() => (
  <ul className="footer-contact-list">
    {[
      { icon: FaMapMarkerAlt, text: "Mumbai, India" },
      { icon: FaPhone, text: "+91 XXXX-XXXX-XX" },
      { icon: FaEnvelope, text: "contact@zerotrace.org" }
    ].map((item, index) => (
      <li key={index} className="footer-contact-item">
        <item.icon className="footer-contact-icon" />
        <span>{item.text}</span>
      </li>
    ))}
  </ul>
));

const EmergencyContacts = memo(() => (
  <div className="footer-emergency-grid">
    {[
      { icon: FaPhone, label: "Cyber Crime Helpline:", value: "1930", className: "footer-emergency-number" },
      { icon: FaPhone, label: "Emergency Services:", value: "112", className: "footer-emergency-number" },
      { icon: FaExclamationTriangle, label: "Report Online Fraud:", value: "cybercrime.gov.in", className: "footer-emergency-website" }
    ].map((item, index) => (
      <div key={index} className="footer-emergency-item">
        <item.icon className="footer-emergency-item-icon" />
        <span>{item.label} <span className={item.className}>{item.value}</span></span>
      </div>
    ))}
  </div>
));

const BinaryLine = memo(({ binaryContent }) => (
  <div className="footer-binary-text">
    <div className="footer-binary-content">{binaryContent}</div>
  </div>
));

// Main Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [binaryLine, setBinaryLine] = useState("");

  // Generate binary animation for the border - optimized to reduce renders
  useEffect(() => {
    const generateBinary = () => {
      return Array(64).fill(0).map(() => Math.random() > 0.5 ? "1" : "0").join("");
    };

    setBinaryLine(generateBinary());
    const interval = setInterval(() => {
      setBinaryLine(generateBinary());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Quick links data
  const quickLinks = [
    { path: "/", label: "Command_Home", icon: FaTerminal },
    { path: "/indian-laws", label: "Cyber_Laws", icon: FaShieldAlt },
    { path: "/complaint-guide", label: "Complaint_Guide", icon: FaExclamationTriangle },
    { path: "/tutorials", label: "Tutorials", icon: FaUserShield }
  ];

  // Resources data
  const resourceLinks = [
    { path: "/security-tools", label: "Security_Tools" },
    { path: "/security-checklist", label: "Security_Checklist" },
    { path: "/cyber-awareness-quiz", label: "Cyber_Awareness_Quiz" },
    { path: "/faq", label: "FAQ" },
    { path: "/about-us", label: "About_Us" }
  ];

  return (
    <footer className="footer-container">
      {/* Visual effects */}
      <div className="footer-scanline"></div>
      <div className="footer-binary-top"></div>
      <BinaryLine binaryContent={binaryLine} />
      <div className="footer-matrix-container"></div>
      <div className="footer-circuit-pattern"></div>

      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-branding">
              <div className="footer-logo-container">
                <img src={Logo} alt="ZeroTrace" className="footer-logo" />
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
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterLinks 
            title="Quick_Links" 
            icon={BiLockAlt} 
            links={quickLinks} 
          />

          {/* Resources */}
          <FooterLinks 
            title="Resources" 
            icon={FaUserShield} 
            links={resourceLinks} 
          />

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-section-title">
              <FaFingerprint className="footer-section-icon" /> Contact_Us<span className="footer-cursor-blink">|</span>
            </h3>
            <ContactInfo />
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="footer-emergency-section">
          <EmergencyContacts />
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="footer-terminal-prefix">&gt;</span> &copy; {currentYear} ZeroTrace 
            <span className="footer-cursor-inline">|</span> All rights reserved.
          </div>
          <div className="footer-legal-links">
            {["Privacy_Policy", "Terms_of_Service", "Sitemap"].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(/_/g, "-")}`} className="footer-legal-link">
                {item}
              </a>
            ))}
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