import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaBug,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    incidentType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (
      formData.phone &&
      !/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Phone number should be 10 digits";
    }

    if (!formData.incidentType.trim()) {
      newErrors.incidentType = "Incident type is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Details are required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message =
        "Please provide at least 20 characters of information";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus({
          type: "success",
          message:
            "Your cybersecurity incident report has been submitted. Our security team will respond shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          incidentType: "",
          message: "",
        });
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message:
            "System error: Failed to send your report. Please try our emergency hotline.",
        });
      } finally {
        setIsSubmitting(false);

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    }
  };

  const emergencyContacts = [
    {
      title: "24/7 Cyber Emergency Hotline",
      phone: "1930",
      description:
        "Immediate assistance for active cyber attacks, data breaches, and ransomware incidents.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Cyber Threat Intelligence Center",
      phone: "1098",
      description:
        "Report suspicious activities, phishing attempts, and malware distribution.",
      icon: <FaUserSecret />,
    },
    {
      title: "Ransomware Response Unit",
      phone: "112",
      description:
        "Specialized team for ransomware attack response and recovery assistance.",
      icon: <FaLock />,
    },
    {
      title: "Vulnerability Disclosure Hotline",
      phone: "1800-11-4000",
      description:
        "For ethical hackers to report security vulnerabilities in government systems.",
      icon: <FaBug />,
    },
  ];

  const cyberSecurityTeams = [
    {
      name: "Critical Infrastructure Protection Team",
      address: "Cyber Defense Complex, Block C, Cyber City, New Delhi",
      phone: "011-29281111",
      email: "cipt@cert-in.org.in",
      specialty: "Protection of critical national infrastructure",
    },
    {
      name: "Financial Sector CERT",
      address: "FinTech Security Center, BKC, Mumbai",
      phone: "022-26598765",
      email: "fs-cert@rbi.net.in",
      specialty: "Banking and financial sector security incidents",
    },
    {
      name: "Advanced Persistent Threat Unit",
      address: "Cyber Intelligence Hub, Electronic City, Bangalore",
      phone: "080-49876543",
      email: "apt-response@cert-in.org.in",
      specialty: "Nation-state threat actors and APT groups",
    },
    {
      name: "Digital Forensics Laboratory",
      address: "Cyber Forensic Wing, CID Headquarters, Chennai",
      phone: "044-28441234",
      email: "digital-forensics@cbi.gov.in",
      specialty: "Evidence collection and attack attribution",
    },
    {
      name: "Malware Analysis Center",
      address: "Software Technology Park, Sector 62, Noida",
      phone: "0120-4567890",
      email: "malware@cert-in.org.in",
      specialty: "Reverse engineering and malware behavior analysis",
    },
    {
      name: "IoT Security Response Team",
      address: "C-DAC Innovation Park, Hinjewadi, Pune",
      phone: "020-66789012",
      email: "iot-cert@cdac.in",
      specialty: "Connected device vulnerabilities and exploits",
    },
  ];

  const incidentTypes = [
    "Phishing Attack",
    "Ransomware",
    "Data Breach",
    "DDoS Attack",
    "Account Compromise",
    "Malware Infection",
    "Social Engineering",
    "Identity Theft",
    "Cryptocurrency Scam",
    "Other Cyber Incident",
  ];

  return (
    <>
      <section className="savdhaan-contact-cyber-header">
        <div className="savdhaan-contact-container">
          <h1>&lt;/&gt; CyberShield Response Hub</h1>
          <p>
            Incident reporting, emergency contacts and cyber defense resources -
            Access time-critical support now.
          </p>
        </div>
      </section>

      <section className="savdhaan-contact-emergency-response-grid">
        <div className="savdhaan-contact-container">
          <h2>
            Emergency Cyber Response Units{" "}
            <span className="savdhaan-contact-blink-text">LIVE 24/7</span>
          </h2>
          <div className="savdhaan-contact-emergency-cards">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="savdhaan-contact-emergency-card">
                <div className="savdhaan-contact-card-icon">{contact.icon}</div>
                <h3>{contact.title}</h3>
                <a href={`tel:${contact.phone}`} className="savdhaan-contact-emergency-phone">
                  <FaPhone /> {contact.phone}
                </a>
                <p>{contact.description}</p>
              </div>
            ))}
          </div>
          <div className="savdhaan-contact-official-portal">
            <h3>&lt;/&gt; National Cyber Incident Response Portal</h3>
            <p>
              Submit detailed incident reports and track investigation status:
            </p>
            <a
              href="https://cybercrime.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="savdhaan-contact-portal-link"
            >
              cybercrime.gov.in <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </section>

      <section className="savdhaan-contact-contact-main">
        <div className="savdhaan-contact-container">
          <div className="savdhaan-contact-contact-grid">
            <div className="savdhaan-contact-contact-form-container">
              <h2>Report a Cyber Incident</h2>
              <p>
                Submit details of a cybersecurity incident for analysis and
                response:
              </p>

              <form className="savdhaan-contact-contact-form" onSubmit={handleSubmit}>
                <div className="savdhaan-contact-form-group">
                  <label htmlFor="name">
                    Full Name <span className="savdhaan-contact-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "savdhaan-contact-error" : ""}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className="savdhaan-contact-error-message">{errors.name}</span>
                  )}
                </div>

                <div className="savdhaan-contact-form-group">
                  <label htmlFor="email">
                    Email Address <span className="savdhaan-contact-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "savdhaan-contact-error" : ""}
                    placeholder="Your secure email"
                  />
                  {errors.email && (
                    <span className="savdhaan-contact-error-message">{errors.email}</span>
                  )}
                </div>

                <div className="savdhaan-contact-form-group">
                  <label htmlFor="phone">Secure Contact Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "savdhaan-contact-error" : ""}
                    placeholder="For urgent callbacks"
                  />
                  {errors.phone && (
                    <span className="savdhaan-contact-error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="savdhaan-contact-form-group">
                  <label htmlFor="incidentType">
                    Incident Type <span className="savdhaan-contact-required">*</span>
                  </label>
                  <select
                    id="incidentType"
                    name="incidentType"
                    value={formData.incidentType}
                    onChange={handleChange}
                    className={errors.incidentType ? "savdhaan-contact-error" : ""}
                  >
                    <option value="">-- Select Incident Type --</option>
                    {incidentTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.incidentType && (
                    <span className="savdhaan-contact-error-message">{errors.incidentType}</span>
                  )}
                </div>

                <div className="savdhaan-contact-form-group">
                  <label htmlFor="message">
                    Incident Details <span className="savdhaan-contact-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "savdhaan-contact-error" : ""}
                    placeholder="Describe the incident, including timestamps, affected systems, and observed indicators of compromise"
                  ></textarea>
                  {errors.message && (
                    <span className="savdhaan-contact-error-message">{errors.message}</span>
                  )}
                </div>

                <div className="savdhaan-contact-form-submit">
                  <button
                    type="submit"
                    className="savdhaan-contact-btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Encrypting & Sending..."
                      : "Submit Secure Report"}
                  </button>
                </div>

                {submitStatus && (
                  <div className={`savdhaan-contact-submit-status savdhaan-contact-${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            <div className="savdhaan-contact-contact-info">
              <h2>Secure Contact Channels</h2>
              <div className="savdhaan-contact-info-item">
                <FaEnvelope className="savdhaan-contact-info-icon" />
                <div>
                  <h3>Encrypted Email</h3>
                  <p>
                    <a href="mailto:incident-response@cyberdefense.gov.in">
                      incident-response@cyberdefense.gov.in
                    </a>
                  </p>
                  <p>
                    PGP Key fingerprint: 2A8F 9B15 F0C6 7E39 D5EB 76A5 5C6D A8F1
                    B2E0 3D47
                  </p>
                </div>
              </div>

              <div className="savdhaan-contact-info-item">
                <FaPhone className="savdhaan-contact-info-icon" />
                <div>
                  <h3>Secure Operations Center</h3>
                  <p>
                    <a href="tel:+918001803456">+91 800 180 3456</a>
                  </p>
                  <p>24/7 Security Operations Center - Always Monitored</p>
                </div>
              </div>

              <div className="savdhaan-contact-info-item">
                <FaMapMarkerAlt className="savdhaan-contact-info-icon" />
                <div>
                  <h3>CERT-In Headquarters</h3>
                  <p>
                    Indian Computer Emergency Response Team,
                    <br />
                    Ministry of Electronics & IT,
                    <br />
                    Electronics Niketan, 6 CGO Complex,
                    <br />
                    Lodhi Road, New Delhi - 110003
                  </p>
                </div>
              </div>

              <div className="savdhaan-contact-secure-note">
                <h3>Secure Communication Note</h3>
                <p>
                  For highly sensitive information, consider using our Signal
                  number or PGP-encrypted email. Do not share sensitive data via
                  unsecured channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="savdhaan-contact-specialized-teams">
        <div className="savdhaan-contact-container">
          <h2>Specialized Cyber Defense Units</h2>
          <p className="savdhaan-contact-section-description">
            Elite security teams with specialized expertise for specific cyber
            threats
          </p>

          <div className="savdhaan-contact-cyber-teams-grid">
            {cyberSecurityTeams.map((team, index) => (
              <div key={index} className="savdhaan-contact-cyber-team-card">
                <h3>{team.name}</h3>
                <div className="savdhaan-contact-team-specialty">
                  <span>Specialty:</span> {team.specialty}
                </div>
                <div className="savdhaan-contact-team-info">
                  <p>
                    <strong>Location:</strong> {team.address}
                  </p>
                  <p>
                    <strong>Secure Line:</strong>{" "}
                    <a href={`tel:${team.phone}`}>{team.phone}</a>
                  </p>
                  <p>
                    <strong>Contact:</strong>{" "}
                    <a href={`mailto:${team.email}`}>{team.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="savdhaan-contact-threat-intel">
        <div className="savdhaan-contact-container">
          <h2>Cyber Threat Intelligence Resources</h2>
          <div className="savdhaan-contact-intel-resources">
            <div className="savdhaan-contact-intel-resource-item">
              <h3>Vulnerability Database</h3>
              <p>
                Access the National Vulnerability Database to check for known
                security flaws:
                <a
                  href="https://nvd.nist.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nvd.nist.gov <FaExternalLinkAlt />
                </a>
              </p>
            </div>
            <div className="savdhaan-contact-intel-resource-item">
              <h3>Threat Intelligence Feeds</h3>
              <p>
                Subscribe to real-time threat intelligence alerts from the
                National Security Operations Center:
                <a
                  href="https://www.cert-in.org.in/alerts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cert-in.org.in/alerts <FaExternalLinkAlt />
                </a>
              </p>
            </div>
            <div className="savdhaan-contact-intel-resource-item">
              <h3>Secure File Analysis</h3>
              <p>
                Submit suspicious files for secure malware analysis:
                <a
                  href="https://www.virustotal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  virustotal.com <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="savdhaan-contact-security-faq">
        <div className="savdhaan-contact-container">
          <h2>Security Response FAQ</h2>
          <div className="savdhaan-contact-faq-grid">
            <div className="savdhaan-contact-faq-item">
              <h3>What constitutes a cyber emergency?</h3>
              <p>
                A cyber emergency involves active ransomware, data theft in
                progress, critical system compromise, DDoS attacks affecting
                essential services, or any breach that threatens personal safety
                or critical infrastructure.
              </p>
            </div>
            <div className="savdhaan-contact-faq-item">
              <h3>What information should I collect before reporting?</h3>
              <p>
                Gather timestamps of suspicious activity, affected system
                details (IPs, hostnames), unusual behaviors observed, error
                messages, suspicious files or emails, and any indicators of
                compromise like unusual network traffic.
              </p>
            </div>
            <div className="savdhaan-contact-faq-item">
              <h3>How quickly will I receive a response?</h3>
              <p>
                Critical incidents are triaged within 15 minutes. High-severity
                reports receive a response within 1 hour. Medium-severity cases
                within 4 hours, and other reports within 24 hours.
              </p>
            </div>
            <div className="savdhaan-contact-faq-item">
              <h3>Should I pay the ransom in a ransomware attack?</h3>
              <p>
                We strongly advise against paying ransoms. Contact our
                Ransomware Response Unit immediately for containment and
                recovery assistance. Many victims who pay never receive
                decryption keys or face repeated extortion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;