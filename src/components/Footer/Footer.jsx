import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [binaryStream, setBinaryStream] = useState("");

  useEffect(() => {
    const generateBinary = () => {
      const binary = Array(48)
        .fill(0)
        .map(() => Math.floor(Math.random() * 2))
        .join("");
      setBinaryStream(binary);
    };

    generateBinary();
    const interval = setInterval(generateBinary, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/home", label: "Home" },
    { path: "/indian-laws", label: "Indian Cyber Laws" },
    { path: "/complaint-guide", label: "Complaint Guide" },
    { path: "/complaint-form", label: "File a Complaint" },
    { path: "/case-study", label: "Case Studies" },
    { path: "/chatbot", label: "Chatbot" },
  ];

  const resourceLinks = [
    { path: "/security-checklist", label: "Security Checklist" },
    { path: "/tutorials", label: "Tutorials" },
    { path: "/security-tools", label: "Security Tools" },
    { path: "/quiz", label: "Cybersecurity Quiz" },
    { path: "/security-news", label: "Security News" },
    { path: "/threat-stats", label: "Threat Statistics" },
  ];

  const policyLinks = [
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/terms-of-service", label: "Terms of Service" },
    { path: "/about", label: "About Us" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="foot-footer">
      <div className="foot-binary-stream foot-binary-top">
        <div className="foot-binary-text">{binaryStream}</div>
      </div>

      <div className="foot-circuit-pattern"></div>
      <div className="foot-grid-overlay"></div>

      <div className="foot-footer-container">
        <div className="foot-footer-content">
          <div className="foot-footer-grid">
            <div className="foot-footer-section">
              <div className="foot-footer-brand">
                <div className="foot-logo-box">
                  <img src="/logo.svg" alt="ZeroTrace Logo" />
                  <div className="foot-logo-pulse"></div>
                </div>
                <div className="foot-title-box">
                  <span
                    className="foot-title foot-glitch-text"
                    data-text="ZeroTrace"
                  >
                    ZeroTrace
                  </span>
                </div>
              </div>
              <p className="foot-footer-tagline">
                <span className="foot-terminal-prefix">&gt;</span> Protecting
                Indians in cyberspace with knowledge, tools and resources to
                defend against digital threats.
              </p>
              <div className="foot-social-links">
                <a
                  href="https://twitter.com"
                  className="foot-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M4.23 3H9.1l3.28 4.77L15.93 3h4.88l-6.71 8.39L21 21h-4.93l-3.58-5.21L8.53 21H3.63l7.09-8.88L4.23 3Zm2.02 1.41l5.36 7.8L5.87 19.6h1.88l5.5-6.52L18.2 19.6h1.93l-5.74-8.25 5.31-6.95h-1.87l-5.13 6.08L7.02 4.41H6.25Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  className="foot-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="foot-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  className="foot-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      fill="currentColor"
                    />
                    <path d="M6 9H2V21H6V9Z" fill="currentColor" />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="foot-footer-section">
              <h3 className="foot-footer-title">
                <svg
                  className="foot-footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 11V7C7 5.93913 7.42143 4.92172 8.17157 4.17157C8.92172 3.42143 9.93913 3 11 3H13C14.0609 3 15.0783 3.42143 15.8284 4.17157C16.5786 4.92172 17 5.93913 17 7V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="foot-section-text">Quick Links</span>
                <span className="foot-section-highlight"></span>
              </h3>
              <ul className="foot-footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index} className="foot-footer-link-item">
                    <a href={link.path} className="foot-footer-link">
                      <span className="foot-terminal-prefix">&gt;</span>
                      <span className="foot-link-text">{link.label}</span>
                      <span className="foot-link-hover-effect"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="foot-footer-section">
              <h3 className="foot-footer-title">
                <svg
                  className="foot-footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="foot-section-text">Resources</span>
                <span className="foot-section-highlight"></span>
              </h3>
              <ul className="foot-footer-links">
                {resourceLinks.map((link, index) => (
                  <li key={index} className="foot-footer-link-item">
                    <a href={link.path} className="foot-footer-link">
                      <span className="foot-terminal-prefix">&gt;</span>
                      <span className="foot-link-text">{link.label}</span>
                      <span className="foot-link-hover-effect"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="foot-footer-section">
              <h3 className="foot-footer-title">
                <svg
                  className="foot-footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4496 21.7889 20.9592 21.4142 21.3343C21.0396 21.7093 20.5304 21.92 20 21.92C18.68 21.92 17.2 21.65 15.92 21.13C13.86 20.32 12.07 19.05 10.61 17.59C9.14997 16.13 7.87997 14.34 7.07997 12.29C6.54997 11 6.28997 9.53 6.28997 8.21C6.28997 7.67956 6.50064 7.17029 6.87572 6.79569C7.2508 6.42109 7.76012 6.21 8.28997 6.21H11.29C11.7353 6.20979 12.1659 6.3576 12.5052 6.63137C12.8446 6.90515 13.0711 7.28793 13.14 7.71C13.28 8.53 13.5 9.33 13.81 10.08C13.9448 10.3823 13.9844 10.7178 13.9244 11.0406C13.8644 11.3634 13.7079 11.6575 13.48 11.89L12.28 13.09C13.57 14.68 15.32 16.43 16.91 17.72L18.11 16.52C18.3425 16.2921 18.6366 16.1356 18.9594 16.0756C19.2822 16.0156 19.6177 16.0552 19.92 16.19C20.6713 16.4993 21.474 16.7214 22.29 16.86C22.7165 16.9309 23.1034 17.161 23.3791 17.5054C23.6549 17.8498 23.8017 18.2862 23.8 18.73L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="foot-section-text">Contact Us</span>
                <span className="foot-section-highlight"></span>
              </h3>
              <ul className="foot-footer-contact">
                <li className="foot-footer-contact-item">
                  <svg
                    className="foot-footer-contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="foot-contact-text">Mumbai, India</span>
                </li>
                <li className="foot-footer-contact-item">
                  <svg
                    className="foot-footer-contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V19.92C22 20.4496 21.7889 20.9592 21.4142 21.3343C21.0396 21.7093 20.5304 21.92 20 21.92C18.68 21.92 17.2 21.65 15.92 21.13C13.86 20.32 12.07 19.05 10.61 17.59C9.14997 16.13 7.87997 14.34 7.07997 12.29C6.54997 11 6.28997 9.53 6.28997 8.21C6.28997 7.67956 6.50064 7.17029 6.87572 6.79569C7.2508 6.42109 7.76012 6.21 8.28997 6.21H11.29C11.7353 6.20979 12.1659 6.3576 12.5052 6.63137C12.8446 6.90515 13.0711 7.28793 13.14 7.71C13.28 8.53 13.5 9.33 13.81 10.08C13.9448 10.3823 13.9844 10.7178 13.9244 11.0406C13.8644 11.3634 13.7079 11.6575 13.48 11.89L12.28 13.09C13.57 14.68 15.32 16.43 16.91 17.72L18.11 16.52C18.3425 16.2921 18.6366 16.1356 18.9594 16.0756C19.2822 16.0156 19.6177 16.0552 19.92 16.19C20.6713 16.4993 21.474 16.7214 22.29 16.86C22.7165 16.9309 23.1034 17.161 23.3791 17.5054C23.6549 17.8498 23.8017 18.2862 23.8 18.73L22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="foot-contact-text">+91 XXXX-XXXX-XX</span>
                </li>
                <li className="foot-footer-contact-item">
                  <svg
                    className="foot-footer-contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="foot-contact-text">
                    contact@zerotrace.org
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-emergency-section">
            <div className="foot-emergency-grid">
              <div className="foot-emergency-item">
                <svg
                  className="foot-emergency-item-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4496 21.7889 20.9592 21.4142 21.3343C21.0396 21.7093 20.5304 21.92 20 21.92C18.68 21.92 17.2 21.65 15.92 21.13C13.86 20.32 12.07 19.05 10.61 17.59C9.14997 16.13 7.87997 14.34 7.07997 12.29C6.54997 11 6.28997 9.53 6.28997 8.21C6.28997 7.67956 6.50064 7.17029 6.87572 6.79569C7.2508 6.42109 7.76012 6.21 8.28997 6.21H11.29C11.7353 6.20979 12.1659 6.3576 12.5052 6.63137C12.8446 6.90515 13.0711 7.28793 13.14 7.71C13.28 8.53 13.5 9.33 13.81 10.08C13.9448 10.3823 13.9844 10.7178 13.9244 11.0406C13.8644 11.3634 13.7079 11.6575 13.48 11.89L12.28 13.09C13.57 14.68 15.32 16.43 16.91 17.72L18.11 16.52C18.3425 16.2921 18.6366 16.1356 18.9594 16.0756C19.2822 16.0156 19.6177 16.0552 19.92 16.19C20.6713 16.4993 21.474 16.7214 22.29 16.86C22.7165 16.9309 23.1034 17.161 23.3791 17.5054C23.6549 17.8498 23.8017 18.2862 23.8 18.73L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="foot-emergency-label">
                  Cyber Crime Helpline:{" "}
                  <a href="tel:1930" className="foot-emergency-number">
                    1930
                  </a>
                </span>
                <div className="foot-emergency-pulse"></div>
              </div>
              <div className="foot-emergency-item">
                <svg
                  className="foot-emergency-item-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4496 21.7889 20.9592 21.4142 21.3343C21.0396 21.7093 20.5304 21.92 20 21.92C18.68 21.92 17.2 21.65 15.92 21.13C13.86 20.32 12.07 19.05 10.61 17.59C9.14997 16.13 7.87997 14.34 7.07997 12.29C6.54997 11 6.28997 9.53 6.28997 8.21C6.28997 7.67956 6.50064 7.17029 6.87572 6.79569C7.2508 6.42109 7.76012 6.21 8.28997 6.21H11.29C11.7353 6.20979 12.1659 6.3576 12.5052 6.63137C12.8446 6.90515 13.0711 7.28793 13.14 7.71C13.28 8.53 13.5 9.33 13.81 10.08C13.9448 10.3823 13.9844 10.7178 13.9244 11.0406C13.8644 11.3634 13.7079 11.6575 13.48 11.89L12.28 13.09C13.57 14.68 15.32 16.43 16.91 17.72L18.11 16.52C18.3425 16.2921 18.6366 16.1356 18.9594 16.0756C19.2822 16.0156 19.6177 16.0552 19.92 16.19C20.6713 16.4993 21.474 16.7214 22.29 16.86C22.7165 16.9309 23.1034 17.161 23.3791 17.5054C23.6549 17.8498 23.8017 18.2862 23.8 18.73L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="foot-emergency-label">
                  Emergency Services:{" "}
                  <a href="tel:112" className="foot-emergency-number">
                    112
                  </a>
                </span>
                <div className="foot-emergency-pulse"></div>
              </div>
              <div className="foot-emergency-item">
                <svg
                  className="foot-emergency-item-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="foot-emergency-label">
                  Report Online Fraud:{" "}
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foot-emergency-website"
                  >
                    cybercrime.gov.in
                  </a>
                </span>
                <div className="foot-emergency-pulse"></div>
              </div>
            </div>
          </div>

          <div className="foot-footer-bottom">
            <div className="foot-footer-copyright">
              <span className="foot-terminal-prefix">&gt;</span> &copy;{" "}
              {currentYear} ZeroTrace{" "}
              <span className="foot-footer-divider">|</span> All rights
              reserved.
            </div>
            <div className="foot-footer-legal-links">
              {policyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="foot-footer-legal-link"
                >
                  {link.label}
                  <span className="foot-link-hover-line"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="foot-binary-stream foot-binary-bottom">
        <div className="foot-binary-text foot-binary-reverse">
          {binaryStream.split("").reverse().join("")}
        </div>
      </div>

      <div className="foot-scan-line"></div>
    </footer>
  );
};

export default Footer;
