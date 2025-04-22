// ComplaintForm.jsx
import { useState } from "react";
import { FaExclamationTriangle, FaInfoCircle, FaCloudUploadAlt, FaCheck, FaExclamationCircle, FaLock, FaShieldAlt } from "react-icons/fa";
import './ComplaintForm.css';

function ComplaintForm() {
  const [step, setStep] = useState(1);
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
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: [...formData[name], ...Array.from(files)],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...formData.evidenceFiles];
    updatedFiles.splice(index, 1);
    setFormData({
      ...formData,
      evidenceFiles: updatedFiles,
    });
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Phone number should be 10 digits";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }

      if (!formData.idType) {
        newErrors.idType = "ID type is required";
      }

      if (!formData.idNumber.trim()) {
        newErrors.idNumber = "ID number is required";
      }
    } else if (stepNumber === 2) {
      if (!formData.incidentType) {
        newErrors.incidentType = "Incident type is required";
      }

      if (!formData.incidentDate) {
        newErrors.incidentDate = "Incident date is required";
      }

      if (!formData.incidentDescription.trim()) {
        newErrors.incidentDescription = "Incident description is required";
      } else if (formData.incidentDescription.trim().length < 50) {
        newErrors.incidentDescription = "Please provide a more detailed description (at least 50 characters)";
      }

      if (formData.financialLoss === "yes" && !formData.lossAmount.trim()) {
        newErrors.lossAmount = "Loss amount is required";
      }
    } else if (stepNumber === 3) {
      if (formData.suspectKnown === "yes") {
        if (!formData.suspectPlatform.trim()) {
          newErrors.suspectPlatform = "Platform or website is required";
        }
      }
    } else if (stepNumber === 4) {
      // No validation for evidence files as they are optional
    } else if (stepNumber === 5) {
      if (!formData.consent) {
        newErrors.consent = "You must consent to the processing of your data";
      }

      if (!formData.declaration) {
        newErrors.declaration = "You must declare that the information provided is true";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep(5)) {
      setIsSubmitting(true);

      try {
        // Mock API response (until a real API is used)
        setTimeout(() => {
          setSubmitResponse({
            success: true,
            message: "Your cybercrime report has been successfully submitted for investigation.",
            referenceNumber: `CYB-${Math.floor(100000 + Math.random() * 900000)}`
          });
          window.scrollTo(0, 0);
          setIsSubmitting(false);
        }, 2000);
      } catch (error) {
        setSubmitResponse({
          success: false,
          message: "There was an error submitting your complaint. Please try again later.",
        });
        setIsSubmitting(false);
      }
    }
  };

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
  ];

  const renderForm = () => {
    if (submitResponse) {
      return (
        <div className="submission-result">
          {submitResponse.success ? (
            <div className="success-message">
              <div className="success-header">
                <FaShieldAlt className="success-icon" />
                <h2>[ REPORT LOGGED ]</h2>
              </div>
              <div className="terminal-output">
                <p className="typing-effect">{submitResponse.message}</p>
                <div className="reference-number">
                  <p>// Reference ID:</p>
                  <h3>{submitResponse.referenceNumber}</h3>
                  <p className="note">// Save this reference ID for tracking your complaint</p>
                </div>
              </div>
              <div className="next-steps">
                <h3>// NEXT STEPS:</h3>
                <ol>
                  <li>Save or take a screenshot of this reference number</li>
                  <li>You will receive a confirmation email with these details</li>
                  <li>The cybercrime division will review your report</li>
                  <li>You may be contacted for additional information if required</li>
                </ol>
              </div>
              <div className="action-buttons">
                <a to="/" className="btn-primary">
                  Return to Dashboard
                </a>
                <a to="/contact" className="btn-secondary">
                  Contact Cyber Support
                </a>
              </div>
            </div>
          ) : (
            <div className="error-message">
              <div className="error-header">
                <FaExclamationCircle className="error-icon" />
                <h2>[ SUBMISSION FAILED ]</h2>
              </div>
              <div className="terminal-output">
                <p className="typing-effect error-text">{submitResponse.message}</p>
                <p className="error-code">Error code: 0x80072EE7</p>
              </div>
              <button className="btn-primary" onClick={() => setSubmitResponse(null)}>
                &lt; Retry Submission &gt;
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="form-progress">
          {[1, 2, 3, 4, 5].map((stepNum) => (
            <div 
              key={stepNum}
              className={`progress-step ${step >= stepNum ? "active" : ""} ${step > stepNum ? "completed" : ""}`}
            >
              <div className="step-number">{stepNum}</div>
              <div className="step-label">
                {stepNum === 1 && "User Identity"}
                {stepNum === 2 && "Incident Data"}
                {stepNum === 3 && "Threat Actor"}
                {stepNum === 4 && "Digital Evidence"}
                {stepNum === 5 && "Verification"}
              </div>
            </div>
          ))}
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="form-step">
            <div className="step-header">
              <FaLock className="step-icon" />
              <h2>User Identity</h2>
            </div>
            <p className="step-description">
              Enter your personal details for identification and secure communication.
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
                <span className="highlight">SECURE:</span> Your personal information is protected with military-grade encryption and will only be used for processing your complaint.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-primary" onClick={nextStep}>
                &lt; Next: Incident Data &gt;
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Incident Details */}
        {step === 2 && (
          <div className="form-step">
            <div className="step-header">
              <FaExclamationTriangle className="step-icon" />
              <h2>Incident Data</h2>
            </div>
            <p className="step-description">Provide detailed information about the cybercrime incident.</p>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="incidentType">
                  Attack Vector <span className="required">*</span>
                </label>
                <select
                  id="incidentType"
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleChange}
                  className={errors.incidentType ? "error" : ""}
                >
                  <option value="">Select Attack Type</option>
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
                  Incident Timestamp <span className="required">*</span>
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
                  Attack Details <span className="required">*</span>
                </label>
                <textarea
                  id="incidentDescription"
                  name="incidentDescription"
                  rows="6"
                  placeholder="Provide a detailed account of what happened, including sequence of events, websites/platforms involved, and any other relevant information."
                  value={formData.incidentDescription}
                  onChange={handleChange}
                  className={errors.incidentDescription ? "error" : ""}
                ></textarea>
                {errors.incidentDescription ? (
                  <span className="error-message">{errors.incidentDescription}</span>
                ) : (
                  <span className="help-text">Minimum 50 characters. Include specific details for forensic analysis.</span>
                )}
              </div>

              <div className="form-group">
                <label>Financial Breach?</label>
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
                    Breach Amount (in INR) <span className="required">*</span>
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
                <span className="highlight">CRITICAL:</span> For immediate financial fraud cases, contact your bank immediately and call the Cyber Crime Helpline at 1930.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                &lt; Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Threat Actor &gt;
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Suspect Information */}
        {step === 3 && (
          <div className="form-step">
            <div className="step-header">
              <FaExclamationCircle className="step-icon" />
              <h2>Threat Actor</h2>
            </div>
            <p className="step-description">
              Provide any information about the suspected threat actor(s).
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label>Do you have information about the threat actor?</label>
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
                    <label htmlFor="suspectName">Threat Actor Name/Handle</label>
                    <input
                      type="text"
                      id="suspectName"
                      name="suspectName"
                      value={formData.suspectName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="suspectContact">Threat Actor Contact Info</label>
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
                  Attack Vector/Platform {formData.suspectKnown === "yes" && <span className="required">*</span>}
                </label>
                <input
                  type="text"
                  id="suspectPlatform"
                  name="suspectPlatform"
                  placeholder="e.g., Facebook, WhatsApp, specific website URL, etc."
                  value={formData.suspectPlatform}
                  onChange={handleChange}
                  className={errors.suspectPlatform ? "error" : ""}
                />
                {errors.suspectPlatform && <span className="error-message">{errors.suspectPlatform}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="suspectDetails">Additional Threat Intelligence</label>
                <textarea
                  id="suspectDetails"
                  name="suspectDetails"
                  rows="4"
                  placeholder="User IDs, profile URLs, IP addresses, domains, email headers, or patterns of behavior."
                  value={formData.suspectDetails}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="note-box">
              <FaInfoCircle />
              <p>
                <span className="highlight">INFO:</span> Provide any details you have about the threat actor. Even partial information can help with the investigation.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                &lt; Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Digital Evidence &gt;
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Evidence */}
        {step === 4 && (
          <div className="form-step">
            <div className="step-header">
              <FaCloudUploadAlt className="step-icon" />
              <h2>Digital Evidence</h2>
            </div>
            <p className="step-description">Upload forensic evidence related to the cybercrime incident.</p>

            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="evidenceFiles">Upload Digital Evidence</label>
                <div className="file-upload-container">
                  <div className="file-upload-input">
                    <input type="file" id="evidenceFiles" name="evidenceFiles" multiple onChange={handleChange} />
                    <div className="file-upload-placeholder">
                      <FaCloudUploadAlt />
                      <p>[ DROP FILES OR CLICK TO BROWSE ]</p>
                      <span>Max 5 files, 10MB each (Screenshots, PDFs, logs, emails)</span>
                    </div>
                  </div>

                  {formData.evidenceFiles.length > 0 && (
                    <div className="uploaded-files">
                      <h4>// UPLOADED FILES [{formData.evidenceFiles.length}]</h4>
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
                <label htmlFor="additionalInfo">Additional Intelligence</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="4"
                  placeholder="Transaction IDs, reference numbers, sequence of events, method of attack, etc."
                  value={formData.additionalInfo}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="evidence-tips">
              <h3>// FORENSIC EVIDENCE TIPS:</h3>
              <ul>
                <li>Capture full screenshots with URL and timestamp visible</li>
                <li>Save emails with complete headers (File Properties)</li>
                <li>For financial fraud, include transaction IDs and statements</li>
                <li>Record all communication with the threat actor</li>
                <li>Document IP addresses, URLs, and suspicious file hashes if available</li>
              </ul>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                &lt; Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next: Verification &gt;
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Declaration */}
        {step === 5 && (
          <div className="form-step">
            <div className="step-header">
              <FaShieldAlt className="step-icon" />
              <h2>Verification</h2>
            </div>
            <p className="step-description">Review your submission and complete the declaration.</p>

            <div className="review-summary">
              <h3>// INCIDENT SUMMARY</h3>
              <div className="summary-item">
                <h4>&gt; Identity Verification</h4>
                <p>
                  <span className="label">User:</span> {formData.fullName}
                </p>
                <p>
                  <span className="label">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="label">Phone:</span> {formData.phone}
                </p>
              </div>

              <div className="summary-item">
                <h4>&gt; Incident Details</h4>
                <p>
                  <span className="label">Attack Type:</span>{" "}
                  {formData.incidentType.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </p>
                <p>
                  <span className="label">Date:</span> {formData.incidentDate}
                </p>
                <p>
                  <span className="label">Financial Breach:</span>{" "}
                  {formData.financialLoss === "yes" ? `Yes, ₹${formData.lossAmount}` : "No"}
                </p>
              </div>

              <div className="summary-item">
                <h4>&gt; Evidence Status</h4>
                <p>
                  <span className="label">Files Uploaded:</span> {formData.evidenceFiles.length}
                </p>
              </div>
            </div>

            <div className="declaration-section">
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
                  <span>
                    I consent to the processing of my personal data for investigating this cybercrime 
                    complaint. I understand my information may be shared with relevant law enforcement 
                    agencies involved in the investigation.
                  </span>
                </label>
                {errors.consent && <span className="error-message">{errors.consent}</span>}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} />
                  <span>
                    I declare that the information provided in this report is true and accurate to the best of 
                    my knowledge. I understand that providing false information may result in legal consequences.
                  </span>
                </label>
                {errors.declaration && <span className="error-message">{errors.declaration}</span>}
              </div>
            </div>

            <div className="warning-box">
              <FaExclamationTriangle />
              <p>
                <span className="highlight">WARNING:</span> Filing a false complaint is punishable under Section 182/211 of the Indian Penal Code.
              </p>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={prevStep}>
                &lt; Back
              </button>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "PROCESSING..." : "[ SUBMIT REPORT ]"}
              </button>
            </div>
          </div>
        )}
      </form>
    );
  };

  return (
    <div className="cyber-complaint-container">
      <section className="page-header">
        <div className="container">
          <h1>&lt; CYBERCRIME REPORTING PORTAL &gt;</h1>
          <div className="header-details">
            <p>
              <span className="blink">[</span> SECURE FORM <span className="blink">]</span> Report cybercrime incidents for investigation by authorized agencies.
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="cyber-panel complaint-panel">{renderForm()}</div>
        <div className="emergency-contact-section">
          <h3>// EMERGENCY PROTOCOLS</h3>
          <div className="emergency-grid">
            <div className="emergency-card">
              <h4>National Cyber Crime Portal</h4>
              <p>For all types of cybercrime reporting</p>
              <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Access Portal &gt;
              </a>
            </div>
            <div className="emergency-card">
              <h4>Cyber Crime Helpline</h4>
              <p>24/7 Emergency Response</p>
              <a href="tel:1930" className="btn-outline">
                Call 1930 &gt;
              </a>
            </div>
            <div className="emergency-card">
              <h4>Women & Children Help</h4>
              <p>For specialized assistance</p>
              <a href="tel:1098" className="btn-outline">
                Call 1098 &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;