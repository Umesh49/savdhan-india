"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaExclamationTriangle, FaInfoCircle, FaCloudUploadAlt, FaCheck, FaExclamationCircle } from "react-icons/fa"
import { submitComplaint } from "../utils/api"

function ComplaintForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    address: "",
    idType: "",
    idNumber: "",

    // Incident Details
    incidentType: "",
    incidentDate: "",
    incidentDescription: "",
    financialLoss: "no",
    lossAmount: "",

    // Suspect Information
    suspectKnown: "no",
    suspectName: "",
    suspectContact: "",
    suspectPlatform: "",
    suspectDetails: "",

    // Evidence
    evidenceFiles: [],
    additionalInfo: "",

    // Consent and Declaration
    consent: false,
    declaration: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResponse, setSubmitResponse] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: [...formData[name], ...files],
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      })
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleRemoveFile = (index) => {
    const updatedFiles = [...formData.evidenceFiles]
    updatedFiles.splice(index, 1)
    setFormData({
      ...formData,
      evidenceFiles: updatedFiles,
    })
  }

  const validateStep = (stepNumber) => {
    const newErrors = {}

    if (stepNumber === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required"
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email is invalid"
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required"
      } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Phone number should be 10 digits"
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required"
      }

      if (!formData.idType) {
        newErrors.idType = "ID type is required"
      }

      if (!formData.idNumber.trim()) {
        newErrors.idNumber = "ID number is required"
      }
    } else if (stepNumber === 2) {
      if (!formData.incidentType) {
        newErrors.incidentType = "Incident type is required"
      }

      if (!formData.incidentDate) {
        newErrors.incidentDate = "Incident date is required"
      }

      if (!formData.incidentDescription.trim()) {
        newErrors.incidentDescription = "Incident description is required"
      } else if (formData.incidentDescription.trim().length < 50) {
        newErrors.incidentDescription = "Please provide a more detailed description (at least 50 characters)"
      }

      if (formData.financialLoss === "yes" && !formData.lossAmount.trim()) {
        newErrors.lossAmount = "Loss amount is required"
      }
    } else if (stepNumber === 3) {
      if (formData.suspectKnown === "yes") {
        if (!formData.suspectPlatform.trim()) {
          newErrors.suspectPlatform = "Platform or website is required"
        }
      }
    } else if (stepNumber === 4) {
      // No validation for evidence files as they are optional
    } else if (stepNumber === 5) {
      if (!formData.consent) {
        newErrors.consent = "You must consent to the processing of your data"
      }

      if (!formData.declaration) {
        newErrors.declaration = "You must declare that the information provided is true"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateStep(5)) {
      setIsSubmitting(true)

      try {
        const response = await submitComplaint(formData)
        setSubmitResponse(response)
        window.scrollTo(0, 0)
      } catch (error) {
        setSubmitResponse({
          success: false,
          message: "There was an error submitting your complaint. Please try again later.",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const incidentTypes = [
    "Financial Fraud",
    "Identity Theft",
    "Phishing/Spoofing",
    "Online Harassment/Bullying",
    "Hacking",
    "Data Breach",
    "Ransomware/Malware",
    "Social Media Crime",
    "Online Scam",
    "Unauthorized Access",
    "Other",
  ]

  const renderForm = () => {
    if (submitResponse) {
      return (
        <div className="submission-result">
          {submitResponse.success ? (
            <div className="success-message">
              <FaCheck className="success-icon" />
              <h2>Complaint Submitted Successfully</h2>
              <p>{submitResponse.message}</p>
              <div className="reference-number">
                <p>Your Reference Number:</p>
                <h3>{submitResponse.referenceNumber}</h3>
                <p className="note">Please save this reference number for tracking your complaint.</p>
              </div>
              <div className="next-steps">
                <h3>Next Steps:</h3>
                <ol>
                  <li>Save or take a screenshot of this reference number.</li>
                  <li>You will receive a confirmation email with these details.</li>
                  <li>The concerned authorities will review your complaint.</li>
                  <li>You may be contacted for additional information if required.</li>
                </ol>
              </div>
              <div className="action-buttons">
                <Link to="/" className="btn-primary">
                  Return to Home
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Support
                </Link>
              </div>
            </div>
          ) : (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" />
              <h2>Submission Failed</h2>
              <p>{submitResponse.message}</p>
              <button className="btn-primary" onClick={() => setSubmitResponse(null)}>
                Try Again
              </button>
            </div>
          )}
        </div>
      )
    }

    return (
      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="form-progress">
          <div className={`progress-step ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
            <div className="step-number">1</div>
            <div className="step-label">Personal Information</div>
          </div>
          <div className={`progress-step ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
            <div className="step-number">2</div>
            <div className="step-label">Incident Details</div>
          </div>
          <div className={`progress-step ${step >= 3 ? "active" : ""} ${step > 3 ? "completed" : ""}`}>
            <div className="step-number">3</div>
            <div className="step-label">Suspect Information</div>
          </div>
          <div className={`progress-step ${step >= 4 ? "active" : ""} ${step > 4 ? "completed" : ""}`}>
            <div className="step-number">4</div>
            <div className="step-label">Evidence</div>
          </div>
          <div className={`progress-step ${step >= 5 ? "active" : ""}`}>
            <div className="step-number">5</div>
            <div className="step-label">Declaration</div>
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="form-step">
            <h2>Personal Information</h2>
            <p className="step-description">
              Please provide your personal details for identification and contact purposes.
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
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
                <label htmlFor="phone">
                  Phone Number <span className="required">*</span>
                </label>
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
                <label htmlFor="address">
                  Address <span className="required">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? "error" : ""}
                ></textarea>
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="idType">
                  ID Type <span className="required">*</span>
                </label>
                <select
                  id="idType"
                  name="idType"
                  value={formData.idType}
                  onChange={handleChange}
                  className={errors.idType ? "error" : ""}
                >
                  <option value="">Select ID Type</option>
                  <option value="aadhaar">Aadhaar Card</option>
                  <option value="pan">PAN Card</option>
                  <option value="passport">Passport</option>
                  <option value="voter">Voter ID Card</option>
                  <option value="driving">Driving License</option>
                </select>
                {errors.idType && <span className="error-message">{errors.idType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="idNumber">
                  ID Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className={errors.idNumber ? "error" : ""}
                />
                {errors.idNumber && <span className="error-message">{errors.idNumber}</span>}
              </div>
            </div>

            <div className="note-box">
              <FaInfoCircle />
              <p>
                Your personal information is protected and will only be used for the purpose of processing your
                complaint.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Incident Details
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Incident Details */}
        {step === 2 && (
          <div className="form-step">
            <h2>Incident Details</h2>
            <p className="step-description">Please provide detailed information about the cybercrime incident.</p>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="incidentType">
                  Type of Cybercrime <span className="required">*</span>
                </label>
                <select
                  id="incidentType"
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleChange}
                  className={errors.incidentType ? "error" : ""}
                >
                  <option value="">Select Incident Type</option>
                  {incidentTypes.map((type) => (
                    <option key={type} value={type.toLowerCase().replace(/\s+/g, "_")}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.incidentType && <span className="error-message">{errors.incidentType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="incidentDate">
                  Date of Incident <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="incidentDate"
                  name="incidentDate"
                  max={new Date().toISOString().split("T")[0]}
                  value={formData.incidentDate}
                  onChange={handleChange}
                  className={errors.incidentDate ? "error" : ""}
                />
                {errors.incidentDate && <span className="error-message">{errors.incidentDate}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="incidentDescription">
                  Detailed Description of the Incident <span className="required">*</span>
                </label>
                <textarea
                  id="incidentDescription"
                  name="incidentDescription"
                  rows="6"
                  placeholder="Please provide a detailed account of what happened, including the sequence of events, websites or platforms involved, and any other relevant information."
                  value={formData.incidentDescription}
                  onChange={handleChange}
                  className={errors.incidentDescription ? "error" : ""}
                ></textarea>
                {errors.incidentDescription ? (
                  <span className="error-message">{errors.incidentDescription}</span>
                ) : (
                  <span className="help-text">Minimum 50 characters. Be as specific as possible.</span>
                )}
              </div>

              <div className="form-group">
                <label>Did you suffer any financial loss?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="financialLoss"
                      value="yes"
                      checked={formData.financialLoss === "yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="financialLoss"
                      value="no"
                      checked={formData.financialLoss === "no"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {formData.financialLoss === "yes" && (
                <div className="form-group">
                  <label htmlFor="lossAmount">
                    Approximate Loss Amount (in INR) <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="lossAmount"
                    name="lossAmount"
                    min="0"
                    value={formData.lossAmount}
                    onChange={handleChange}
                    className={errors.lossAmount ? "error" : ""}
                  />
                  {errors.lossAmount && <span className="error-message">{errors.lossAmount}</span>}
                </div>
              )}
            </div>

            <div className="warning-box">
              <FaExclamationTriangle />
              <p>
                For immediate financial fraud cases, it's recommended to contact your bank immediately and call the
                Cyber Crime Helpline at 1930.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Suspect Information
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Suspect Information */}
        {step === 3 && (
          <div className="form-step">
            <h2>Suspect Information</h2>
            <p className="step-description">
              Please provide any information you have about the suspected perpetrator(s).
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label>Do you know or suspect who committed this cybercrime?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="suspectKnown"
                      value="yes"
                      checked={formData.suspectKnown === "yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="suspectKnown"
                      value="no"
                      checked={formData.suspectKnown === "no"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {formData.suspectKnown === "yes" && (
                <>
                  <div className="form-group">
                    <label htmlFor="suspectName">Name of Suspect (if known)</label>
                    <input
                      type="text"
                      id="suspectName"
                      name="suspectName"
                      value={formData.suspectName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="suspectContact">Contact Information of Suspect (if known)</label>
                    <input
                      type="text"
                      id="suspectContact"
                      name="suspectContact"
                      placeholder="Phone, email, social media ID, etc."
                      value={formData.suspectContact}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div className="form-group full-width">
                <label htmlFor="suspectPlatform">
                  Website/Platform/App Involved {formData.suspectKnown === "yes" && <span className="required">*</span>}
                </label>
                <input
                  type="text"
                  id="suspectPlatform"
                  name="suspectPlatform"
                  placeholder="e.g., Facebook, WhatsApp, a specific website, etc."
                  value={formData.suspectPlatform}
                  onChange={handleChange}
                  className={errors.suspectPlatform ? "error" : ""}
                />
                {errors.suspectPlatform && <span className="error-message">{errors.suspectPlatform}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="suspectDetails">Additional Details About Suspect</label>
                <textarea
                  id="suspectDetails"
                  name="suspectDetails"
                  rows="4"
                  placeholder="Any other information about the suspect, such as user IDs, profile URLs, IP addresses, or patterns of behavior."
                  value={formData.suspectDetails}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="note-box">
              <FaInfoCircle />
              <p>
                It's okay if you don't have all information about the suspect. Provide whatever details you have
                available.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Evidence
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Evidence */}
        {step === 4 && (
          <div className="form-step">
            <h2>Evidence</h2>
            <p className="step-description">Please upload any evidence related to the cybercrime incident.</p>

            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="evidenceFiles">Upload Evidence Files</label>
                <div className="file-upload-container">
                  <div className="file-upload-input">
                    <input type="file" id="evidenceFiles" name="evidenceFiles" multiple onChange={handleChange} />
                    <div className="file-upload-placeholder">
                      <FaCloudUploadAlt />
                      <p>Drag & drop files here or click to browse</p>
                      <span>Max 5 files, 10MB each (Screenshots, PDFs, documents)</span>
                    </div>
                  </div>

                  {formData.evidenceFiles.length > 0 && (
                    <div className="uploaded-files">
                      <h4>Uploaded Files ({formData.evidenceFiles.length})</h4>
                      <ul>
                        {formData.evidenceFiles.map((file, index) => (
                          <li key={index}>
                            <span>
                              {file.name} ({Math.round(file.size / 1024)} KB)
                            </span>
                            <button type="button" onClick={() => handleRemoveFile(index)} aria-label="Remove file">
                              ×
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="4"
                  placeholder="Provide any additional information that may help in the investigation, such as transaction IDs, reference numbers, sequence of events, etc."
                  value={formData.additionalInfo}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="evidence-tips">
              <h3>Evidence Collection Tips:</h3>
              <ul>
                <li>Take screenshots of suspicious messages, websites, or social media posts</li>
                <li>Save copies of emails with complete headers</li>
                <li>For financial fraud, save transaction details and statements</li>
                <li>Document any communication with the suspect</li>
                <li>Note down dates and times of incidents</li>
              </ul>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Declaration
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Declaration */}
        {step === 5 && (
          <div className="form-step">
            <h2>Declaration and Consent</h2>
            <p className="step-description">Please review your information and complete the declaration.</p>

            <div className="review-summary">
              <h3>Complaint Summary</h3>
              <div className="summary-item">
                <h4>Personal Information</h4>
                <p>
                  <strong>Name:</strong> {formData.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
              </div>

              <div className="summary-item">
                <h4>Incident Details</h4>
                <p>
                  <strong>Type:</strong>{" "}
                  {formData.incidentType.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </p>
                <p>
                  <strong>Date:</strong> {formData.incidentDate}
                </p>
                <p>
                  <strong>Financial Loss:</strong>{" "}
                  {formData.financialLoss === "yes" ? `Yes, ₹${formData.lossAmount}` : "No"}
                </p>
              </div>

              <div className="summary-item">
                <h4>Evidence</h4>
                <p>
                  <strong>Files Uploaded:</strong> {formData.evidenceFiles.length}
                </p>
              </div>
            </div>

            <div className="declaration-section">
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
                  <span>
                    I consent to the processing of my personal data for the purpose of investigating this cybercrime
                    complaint. I understand that my information may be shared with relevant law enforcement agencies and
                    other necessary parties involved in the investigation.
                  </span>
                </label>
                {errors.consent && <span className="error-message">{errors.consent}</span>}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} />
                  <span>
                    I declare that the information provided in this complaint is true and correct to the best of my
                    knowledge and belief. I understand that providing false information may result in legal
                    consequences.
                  </span>
                </label>
                {errors.declaration && <span className="error-message">{errors.declaration}</span>}
              </div>
            </div>

            <div className="warning-box">
              <FaExclamationTriangle />
              <p>
                Filing a false complaint is punishable under Indian law. Please ensure all information provided is
                accurate.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Complaint"}
              </button>
            </div>
          </div>
        )}
      </form>
    )
  }

  return (
    <div className="complaint-form-page">
      <section className="page-header">
        <div className="container">
          <h1>Cybercrime Complaint Form</h1>
          <p>
            Use this form to report a cybercrime incident. Your information will be kept confidential and will only be
            used for investigation purposes.
          </p>
        </div>
      </section>
      <div className="container">
        <div className="cyber-panel complaint-panel">{renderForm()}</div>
        <div className="emergency-contact-section">
          <h3>Emergency Contacts</h3>
          <div className="emergency-grid">
            <div className="emergency-card">
              <h4>National Cyber Crime Reporting Portal</h4>
              <p>For reporting all types of cybercrimes</p>
              <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Visit Portal
              </a>
            </div>
            <div className="emergency-card">
              <h4>Cyber Crime Helpline</h4>
              <p>Toll-free number: 1930</p>
              <a href="tel:1930" className="btn-outline">
                Call Now
              </a>
            </div>
            <div className="emergency-card">
              <h4>Women Helpline</h4>
              <p>For women-specific cybercrimes</p>
              <a href="tel:1098" className="btn-outline">
                Call 1098
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplaintForm