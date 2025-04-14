"use client"

import { useState } from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number should be 10 digits"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully. We will get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "Failed to send your message. Please try again later.",
        })
      } finally {
        setIsSubmitting(false)

        // Clear status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    }
  }

  const emergencyContacts = [
    {
      title: "National Cyber Crime Helpline",
      phone: "1930",
      description: "For reporting any cybercrime incident or seeking immediate assistance.",
    },
    {
      title: "Women Helpline",
      phone: "1091",
      description: "For women facing online harassment, threats, or any other cyber crimes.",
    },
    {
      title: "National Emergency Number",
      phone: "112",
      description: "For emergency situations requiring immediate response.",
    },
  ]

  const cyberCellContacts = [
    {
      city: "Delhi",
      address: "Cyber Cell, Crime Branch, Police Station, Kamla Market, New Delhi",
      phone: "011-23490000",
      email: "cybercell-delhi@nic.in",
    },
    {
      city: "Mumbai",
      address: "Cyber Crime Investigation Cell, Mumbai Police Headquarters, Mumbai",
      phone: "022-22620111",
      email: "cybercell.mumbai@mahapolice.gov.in",
    },
    {
      city: "Bangalore",
      address: "Cyber Crime Police Station, CID Headquarters, Carlton House, Bangalore",
      phone: "080-22094498",
      email: "cybercrime.blr@ksp.gov.in",
    },
    {
      city: "Chennai",
      address: "Cyber Crime Wing, CID Complex, Egmore, Chennai",
      phone: "044-28447777",
      email: "cybercell.chennai@tn.gov.in",
    },
  ]

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team or find emergency contact information for cybercrime incidents.</p>
        </div>
      </section>

      <section className="emergency-contacts">
        <div className="container">
          <h2>Emergency Cybercrime Contacts</h2>
          <div className="emergency-cards">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="emergency-card">
                <h3>{contact.title}</h3>
                <a href={`tel:${contact.phone}`} className="emergency-phone">
                  <FaPhone /> {contact.phone}
                </a>
                <p>{contact.description}</p>
              </div>
            ))}
          </div>
          <div className="official-portal">
            <h3>National Cyber Crime Reporting Portal</h3>
            <p>Report cybercrimes online through the official government portal:</p>
            <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="portal-link">
              cybercrime.gov.in <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>Have questions, feedback, or need assistance? Fill out the form below:</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {submitStatus && <div className={`submit-status ${submitStatus.type}`}>{submitStatus.message}</div>}
              </form>
            </div>

            <div className="contact-info">
              <h2>Our Contact Information</h2>
              <div className="info-item">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:contact@savdhaanindia.gov.in">contact@savdhaanindia.gov.in</a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <FaPhone />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+911234567890">+91 123 456 7890</a>
                  </p>
                  <p>Monday to Friday, 9 AM - 6 PM</p>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Address</h3>
                  <p>
                    Savdhaan India Headquarters,
                    <br />
                    Cyber Security Complex,
                    <br />
                    MG Road, New Delhi - 110001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cyber-cells">
        <div className="container">
          <h2>Specialized Cyber Cells</h2>
          <p className="section-description">Contact information for specialized cyber cells in major Indian cities.</p>

          <div className="cyber-cells-grid">
            {cyberCellContacts.map((cell, index) => (
              <div key={index} className="cyber-cell-card">
                <h3>{cell.city} Cyber Cell</h3>
                <div className="cell-info">
                  <p>
                    <strong>Address:</strong> {cell.address}
                  </p>
                  <p>
                    <strong>Phone:</strong> <a href={`tel:${cell.phone}`}>{cell.phone}</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${cell.email}`}>{cell.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="note">
            <p>
              <strong>Note:</strong> This is not an exhaustive list. Contact information for cyber cells in other cities
              can be found on their respective police department websites.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-preview">
        <div className="container">
          <h2>Frequently Asked Contact Questions</h2>
          <div className="faq-preview-grid">
            <div className="faq-preview-item">
              <h3>How long does it take to get a response?</h3>
              <p>
                We aim to respond to all inquiries within 48 hours on business days. For urgent matters, please use the
                emergency contact numbers provided above.
              </p>
            </div>
            <div className="faq-preview-item">
              <h3>Can I file a cybercrime complaint through this website?</h3>
              <p>
                This website provides guidance and a form to help you prepare your complaint, but for official filing,
                you should use the National Cyber Crime Reporting Portal or contact your local police station.
              </p>
            </div>
            <div className="faq-preview-item">
              <h3>What information should I provide when reporting a cybercrime?</h3>
              <p>
                You should provide your personal details, a detailed description of the incident, any available evidence
                (screenshots, emails, etc.), and information about the suspect if available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
