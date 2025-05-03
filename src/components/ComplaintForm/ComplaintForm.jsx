import { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCloudUploadAlt,
  FaCheck,
  FaRedo,
} from "react-icons/fa";
import "./ComplaintForm.css";

// OTP Modal Component
const OtpModal = ({ otp, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <FaLock className="modal-icon" />
          <h3>OTP Verification</h3>
        </div>
        <div className="modal-body">
          <p>Your One-Time Password (OTP) is:</p>
          <div className="otp-display">
            {otp.split("").map((digit, index) => (
              <div key={index} className="otp-digit">
                {digit}
              </div>
            ))}
          </div>
          <p className="otp-note">
            This OTP is valid for 10 minutes. Please enter this code in the OTP
            field.
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Captcha Generator Component
const CaptchaGenerator = ({ onCaptchaGenerated }) => {
  const [captchaText, setCaptchaText] = useState("");

  const generateCaptcha = () => {
    const canvas = document.getElementById("captchaCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Generate random string
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setCaptchaText(text);
    onCaptchaGenerated(text);

    // Draw text
    ctx.font = "bold 24px monospace";
    ctx.fillStyle = "#00ff41";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add noise and distortion
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.3})`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 3,
        Math.random() * 3
      );
    }

    // Draw each character with slight rotation
    for (let i = 0; i < text.length; i++) {
      ctx.save();
      ctx.translate(20 + i * 25, canvas.height / 2);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    // Add lines
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(0, 255, 65, ${Math.random() * 0.5})`;
      ctx.lineWidth = 1;
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="captcha-container">
      <canvas
        id="captchaCanvas"
        width={180}
        height={60}
        className="captcha-canvas"
      />
      <button
        type="button"
        className="captcha-refresh"
        onClick={generateCaptcha}
        aria-label="Refresh captcha"
      >
        <FaRedo />
      </button>
    </div>
  );
};

// Login Form Component
const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    loginId: "",
    mobileNo: "",
    otp: "",
    captchaInput: "",
  });
  const [errors, setErrors] = useState({});
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSendOtp = () => {
    // Validate mobile number
    if (!formData.mobileNo) {
      setErrors({
        ...errors,
        mobileNo: "Mobile number is required",
      });
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobileNo)) {
      setErrors({
        ...errors,
        mobileNo: "Mobile number should be 10 digits",
      });
      return;
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setShowOtpModal(true);
  };

  const handleCaptchaGenerated = (text) => {
    setCaptchaText(text);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.loginId.trim()) {
      newErrors.loginId = "Login ID is required";
    }

    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = "Mobile number should be 10 digits";
    }

    if (!formData.otp.trim()) {
      newErrors.otp = "OTP is required";
    } else if (formData.otp !== generatedOtp) {
      newErrors.otp = "Invalid OTP";
    }

    if (!formData.captchaInput.trim()) {
      newErrors.captchaInput = "Captcha is required";
    } else if (formData.captchaInput !== captchaText) {
      newErrors.captchaInput = "Invalid captcha";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        onLoginSuccess({
          loginId: formData.loginId,
          mobileNo: formData.mobileNo,
        });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="form-step">
      <div className="step-header">
        <FaLock className="step-icon" />
        <h2>Citizen Login</h2>
      </div>
      <p className="step-description">
        Enter your credentials to access the cybercrime reporting system.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group full-width">
            <label htmlFor="loginId">
              Login Id <span className="required">*</span>
            </label>
            <input
              type="text"
              id="loginId"
              name="loginId"
              placeholder="Your Login Id"
              value={formData.loginId}
              onChange={handleChange}
              className={errors.loginId ? "error" : ""}
            />
            {errors.loginId && (
              <span className="error-message">{errors.loginId}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label htmlFor="mobileNo">
              Mobile No <span className="required">*</span>
            </label>
            <div className="mobile-input-container">
              <div className="country-code">+91</div>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="Mobile No."
                value={formData.mobileNo}
                onChange={handleChange}
                className={errors.mobileNo ? "error" : ""}
              />
            </div>
            {errors.mobileNo && (
              <span className="error-message">{errors.mobileNo}</span>
            )}
            <button
              type="button"
              className="btn-outline send-otp-btn"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>

          <div className="form-group full-width">
            <label htmlFor="otp">
              OTP <span className="required">*</span>
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Your OTP Number"
              value={formData.otp}
              onChange={handleChange}
              className={errors.otp ? "error" : ""}
            />
            {errors.otp && <span className="error-message">{errors.otp}</span>}
          </div>

          <div className="form-group full-width">
            <label htmlFor="captchaInput">
              Enter Captcha <span className="required">*</span>
            </label>
            <CaptchaGenerator onCaptchaGenerated={handleCaptchaGenerated} />
            <input
              type="text"
              id="captchaInput"
              name="captchaInput"
              placeholder="Enter the captcha shown above"
              value={formData.captchaInput}
              onChange={handleChange}
              className={errors.captchaInput ? "error" : ""}
            />
            {errors.captchaInput && (
              <span className="error-message">{errors.captchaInput}</span>
            )}
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Login"}
          </button>
        </div>
      </form>

      {showOtpModal && (
        <OtpModal otp={generatedOtp} onClose={() => setShowOtpModal(false)} />
      )}
    </div>
  );
};

// Personal Info Form Component
const PersonalInfoForm = ({ userData, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    relationType: "",
    relationName: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    city: "",
    pincode: "",
    idType: "",
    idNumber: "",
    occupation: "",
    education: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.relationType) {
      newErrors.relationType = "Relation type is required";
    }

    if (!formData.relationName.trim()) {
      newErrors.relationName = "Relation name is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "PIN code is required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "PIN code should be 6 digits";
    }

    if (!formData.idType) {
      newErrors.idType = "ID type is required";
    }

    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID number is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must consent to the processing of your data";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="form-step">
      <div className="form-progress">
        {[1, 2, 3, 4, 5, 6].map((stepNum) => (
          <div
            key={stepNum}
            className={`progress-step ${stepNum === 1 ? "active" : ""} ${
              stepNum < 1 ? "completed" : ""
            }`}
          >
            <div className="step-number">{stepNum}</div>
            <div className="step-label">
              {stepNum === 1 && "Personal Info"}
              {stepNum === 2 && "Complaint Details"}
              {stepNum === 3 && "Suspect Info"}
              {stepNum === 4 && "Identity Verification"}
              {stepNum === 5 && "Preview"}
              {stepNum === 6 && "Submission"}
            </div>
          </div>
        ))}
      </div>

      <div className="step-header">
        <FaUserShield className="step-icon" />
        <h2>Personal Information</h2>
      </div>
      <p className="step-description">
        Please provide your personal details for identification and
        verification.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group full-width">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name as per official records"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "error" : ""}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="relationType">
              Relation Type <span className="required">*</span>
            </label>
            <select
              id="relationType"
              name="relationType"
              value={formData.relationType}
              onChange={handleChange}
              className={errors.relationType ? "error" : ""}
            >
              <option value="">Select Relation</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="spouse">Spouse</option>
              <option value="guardian">Guardian</option>
            </select>
            {errors.relationType && (
              <span className="error-message">{errors.relationType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="relationName">
              Relation Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="relationName"
              name="relationName"
              placeholder="Enter name of relation"
              value={formData.relationName}
              onChange={handleChange}
              className={errors.relationName ? "error" : ""}
            />
            {errors.relationName && (
              <span className="error-message">{errors.relationName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="gender">
              Gender <span className="required">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={errors.gender ? "error" : ""}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
            {errors.gender && (
              <span className="error-message">{errors.gender}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">
              Date of Birth <span className="required">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              max={new Date().toISOString().split("T")[0]}
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={errors.dateOfBirth ? "error" : ""}
            />
            {errors.dateOfBirth && (
              <span className="error-message">{errors.dateOfBirth}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">
              Address <span className="required">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              placeholder="Enter your complete residential address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error" : ""}
            />
            {errors.address && (
              <span className="error-message">{errors.address}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="city">
              City <span className="required">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? "error" : ""}
            />
            {errors.city && (
              <span className="error-message">{errors.city}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="pincode">
              PIN Code <span className="required">*</span>
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Enter 6-digit PIN code"
              value={formData.pincode}
              onChange={handleChange}
              className={errors.pincode ? "error" : ""}
            />
            {errors.pincode && (
              <span className="error-message">{errors.pincode}</span>
            )}
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
            {errors.idType && (
              <span className="error-message">{errors.idType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="idNumber">
              ID Number <span className="required">*</span>
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              placeholder="Enter your ID number"
              value={formData.idNumber}
              onChange={handleChange}
              className={errors.idNumber ? "error" : ""}
            />
            {errors.idNumber && (
              <span className="error-message">{errors.idNumber}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Enter your occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input
              type="text"
              id="education"
              name="education"
              placeholder="Enter your highest education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span>
                I consent to the processing of my personal data for the purpose
                of cybercrime reporting. I understand my information may be
                shared with relevant law enforcement agencies.
              </span>
            </label>
            {errors.consent && (
              <span className="error-message">{errors.consent}</span>
            )}
          </div>
        </div>

        <div className="warning-box">
          <FaExclamationTriangle />
          <p>
            <span className="highlight">WARNING:</span> Providing false
            information is punishable under Section 182/211 of the Indian Penal
            Code.
          </p>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Next: Complaint Details"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Complaint Details Form Component
const ComplaintDetailsForm = ({ userData, onSubmit, onPrevStep }) => {
  const [formData, setFormData] = useState({
    complaintCategory: "",
    complaintSubCategory: "",
    lostMoney: "no",
    lostAmount: "",
    incidentDate: "",
    incidentTime: {
      hour: "12",
      minute: "00",
      period: "AM",
    },
    delayInReporting: "no",
    incidentLocation: "",
    evidenceFiles: [],
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Category and subcategory options
  const categories = [
    "Online and Social Media Related Crime",
    "Online Financial Fraud",
    "Hacking / Damage to computer,computer system etc.",
    "Online Cyber Trafficking",
    "Online Gambling / Betting",
    "Ransomware",
    "Cryptocurrency Crime",
    "Cyber Terrorism",
    "Any Other Cyber Crime",
  ];

  const subCategories = {
    "Online Financial Fraud": [
      "Aadhar Enabled Payment System (AEPS)",
      "Business Email Compromise/Email Takeover",
      "Debit/Credit Card Fraud/Sim Swap Fraud",
      "Demat/Depository Fraud",
      "E-Wallet Related Fraud",
      "Fraud Call/Vishing",
      "Internet Banking Related Fraud",
      "UPI Related Frauds",
    ],
    "Online and Social Media Related Crime": [
      "Cheating by Impersonation",
      "Cyber Bullying / Stalking / Sexting",
      "E-Mail Phishing",
      "Fake/Impersonating Profile",
      "Impersonating Email",
      "Intimidating Email",
      "Online Job Fraud",
      "Online Matrimonial Fraud",
      "Profile Hacking/ Identity Theft",
      "Provocative Speech for unlawful acts",
    ],
    "Hacking / Damage to computer,computer system etc.": [
      "Cheating by Impersonation",
      "Cyber Bullying / Stalking / Sexting",
      "E-Mail Phishing",
      "Fake/Impersonating Profile",
      "Impersonating Email",
      "Intimidating Email",
      "Online Job Fraud",
      "Online Matrimonial Fraud",
      "Profile Hacking/ Identity Theft",
      "Provocative Speech for unlawful acts",
    ],
    "Online Cyber Trafficking": [
      "Damage to computer, computer systems etc.",
      "Email Hacking",
      "Tampering with computer source documents",
      "Unauthorised Access/Data Breach",
      "Website Defacement/Hacking",
    ],
    "Online Gambling / Betting": ["Online Trafficking"],
    Ransomware: ["Ransomware Attack"],
    "Cryptocurrency Crime": ["Cryptocurrency Fraud"],
    "Cyber Terrorism": ["Cyber Terrorism"],
    "Any Other Cyber Crime": ["Other Cyber Crime"],
  };

  // Locations
  const locations = [
    "Home",
    "Office",
    "Public Place",
    "Educational Institution",
    "Commercial Establishment",
    "Online Platform",
    "Mobile Device",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "complaintCategory") {
      setFormData({
        ...formData,
        complaintCategory: value,
        complaintSubCategory: "", // Reset subcategory when category changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      incidentTime: {
        ...formData.incidentTime,
        [name]: value,
      },
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        evidenceFiles: [
          ...formData.evidenceFiles,
          ...Array.from(e.target.files),
        ],
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.complaintCategory) {
      newErrors.complaintCategory = "Complaint category is required";
    }

    if (!formData.complaintSubCategory) {
      newErrors.complaintSubCategory = "Complaint sub-category is required";
    }

    if (!formData.incidentDate) {
      newErrors.incidentDate = "Incident date is required";
    }

    if (!formData.incidentLocation) {
      newErrors.incidentLocation = "Incident location is required";
    }

    if (!formData.additionalInfo.trim()) {
      newErrors.additionalInfo = "Additional information is required";
    } else if (formData.additionalInfo.trim().length < 200) {
      newErrors.additionalInfo =
        "Please provide at least 200 characters of additional information";
    } else if (/[~!#^'`$|{}<>*]/.test(formData.additionalInfo)) {
      newErrors.additionalInfo =
        "Special characters like ~!#^'`$|{}<>* are not allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  // Generate hours for the time dropdown
  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );

  // Generate minutes for the time dropdown
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  return (
    <div className="form-step">
      <div className="form-progress">
        {[1, 2, 3, 4, 5, 6].map((stepNum) => (
          <div
            key={stepNum}
            className={`progress-step ${stepNum === 2 ? "active" : ""} ${
              stepNum < 2 ? "completed" : ""
            }`}
          >
            <div className="step-number">{stepNum}</div>
            <div className="step-label">
              {stepNum === 1 && "Personal Info"}
              {stepNum === 2 && "Complaint Details"}
              {stepNum === 3 && "Suspect Info"}
              {stepNum === 4 && "Identity Verification"}
              {stepNum === 5 && "Preview"}
              {stepNum === 6 && "Submission"}
            </div>
          </div>
        ))}
      </div>

      <div className="step-header">
        <FaExclamationTriangle className="step-icon" />
        <h2>Complaint / Incident Details</h2>
      </div>
      <p className="step-description">
        Provide detailed information about the cybercrime incident.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group full-width">
            <label htmlFor="complaintCategory">
              Category of complaint <span className="required">*</span>
            </label>
            <select
              id="complaintCategory"
              name="complaintCategory"
              value={formData.complaintCategory}
              onChange={handleChange}
              className={errors.complaintCategory ? "error" : ""}
            >
              <option value="">--- Select ---</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.complaintCategory && (
              <span className="error-message">{errors.complaintCategory}</span>
            )}
          </div>

          {formData.complaintCategory && (
            <div className="form-group full-width">
              <label htmlFor="complaintSubCategory">
                Sub-Category of complaint <span className="required">*</span>
              </label>
              <select
                id="complaintSubCategory"
                name="complaintSubCategory"
                value={formData.complaintSubCategory}
                onChange={handleChange}
                className={errors.complaintSubCategory ? "error" : ""}
              >
                <option value="">--- Select ---</option>
                {subCategories[formData.complaintCategory]?.map(
                  (subCategory) => (
                    <option key={subCategory} value={subCategory}>
                      {subCategory}
                    </option>
                  )
                )}
              </select>
              {errors.complaintSubCategory && (
                <span className="error-message">
                  {errors.complaintSubCategory}
                </span>
              )}
            </div>
          )}

          <div className="form-group full-width">
            <label>Have you lost money?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="lostMoney"
                  value="yes"
                  checked={formData.lostMoney === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="lostMoney"
                  value="no"
                  checked={formData.lostMoney === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {formData.lostMoney === "yes" && (
            <div className="form-group">
              <label htmlFor="lostAmount">
                Amount lost <span className="required">*</span>
              </label>
              <div className="money-input">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  id="lostAmount"
                  name="lostAmount"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  value={formData.lostAmount || ""}
                  onChange={handleChange}
                  className={errors.lostAmount ? "error" : ""}
                />
              </div>
              {errors.lostAmount && (
                <span className="error-message">{errors.lostAmount}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="incidentDate">
              Approximate date of Incident <span className="required">*</span>
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
            {errors.incidentDate && (
              <span className="error-message">{errors.incidentDate}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="incidentTime">Approximate time of Incident</label>
            <div className="time-input-container">
              <select
                name="hour"
                value={formData.incidentTime.hour}
                onChange={handleTimeChange}
              >
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <span className="time-separator">:</span>
              <select
                name="minute"
                value={formData.incidentTime.minute}
                onChange={handleTimeChange}
              >
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
              <select
                name="period"
                value={formData.incidentTime.period}
                onChange={handleTimeChange}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Is there any delay in reporting?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="delayInReporting"
                  value="yes"
                  checked={formData.delayInReporting === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="delayInReporting"
                  value="no"
                  checked={formData.delayInReporting === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="incidentLocation">
              Where did the incident occur? <span className="required">*</span>
            </label>
            <select
              id="incidentLocation"
              name="incidentLocation"
              value={formData.incidentLocation}
              onChange={handleChange}
              className={errors.incidentLocation ? "error" : ""}
            >
              <option value="">---Select---</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            {errors.incidentLocation && (
              <span className="error-message">{errors.incidentLocation}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label>Supporting evidence</label>
            <div className="file-upload-container">
              <div className="file-upload-input">
                <input
                  type="file"
                  id="evidenceFiles"
                  name="evidenceFiles"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx"
                />
                <div className="file-upload-placeholder">
                  <FaCloudUploadAlt />
                  <p>[ DROP FILES OR CLICK TO BROWSE ]</p>
                  <span>Add a supporting evidence image to proof this</span>
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
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          aria-label="Remove file"
                        >
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
            <label htmlFor="additionalInfo">
              Please provide any additional information about the incident{" "}
              <span className="required">*</span>
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={6}
              placeholder="Insert at least 200 Characters. Special Characters like ~!#^'`$|{}<>* are not allowed"
              value={formData.additionalInfo}
              onChange={handleChange}
              className={errors.additionalInfo ? "error" : ""}
              maxLength={1500}
            ></textarea>
            <div className="character-count">
              <span>{1500 - formData.additionalInfo.length}</span> characters
              left
            </div>
            {errors.additionalInfo && (
              <span className="error-message">{errors.additionalInfo}</span>
            )}
          </div>
        </div>

        <div className="note-box">
          <FaInfoCircle />
          <p>
            <span className="highlight">NOTE:</span> Provide as much detail as
            possible to help with the investigation. Include dates, times,
            websites, and any other relevant information.
          </p>
        </div>

        <div className="form-buttons">
          <button type="button" className="btn-outline" onClick={onPrevStep}>
            &lt; Back
          </button>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Next: Suspect Details"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Suspect Details Form Component
const SuspectDetailsForm = ({ userData, onSubmit, onPrevStep }) => {
  const [formData, setFormData] = useState({
    suspectKnown: "no",
    suspectName: "",
    suspectContact: "",
    suspectSocialMedia: "",
    suspectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.suspectKnown === "yes") {
      if (!formData.suspectDetails.trim()) {
        newErrors.suspectDetails = "Please provide details about the suspect";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="form-step">
      <div className="form-progress">
        {[1, 2, 3, 4, 5, 6].map((stepNum) => (
          <div
            key={stepNum}
            className={`progress-step ${stepNum === 3 ? "active" : ""} ${
              stepNum < 3 ? "completed" : ""
            }`}
          >
            <div className="step-number">{stepNum}</div>
            <div className="step-label">
              {stepNum === 1 && "Personal Info"}
              {stepNum === 2 && "Complaint Details"}
              {stepNum === 3 && "Suspect Info"}
              {stepNum === 4 && "Identity Verification"}
              {stepNum === 5 && "Preview"}
              {stepNum === 6 && "Submission"}
            </div>
          </div>
        ))}
      </div>

      <div className="step-header">
        <FaExclamationTriangle className="step-icon" />
        <h2>Suspect Information</h2>
      </div>
      <p className="step-description">
        Please provide any information you have about the suspected
        cybercriminal(s).
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group full-width">
            <label>Do you have information about the suspect?</label>
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
                <label htmlFor="suspectName">Suspect Name (if known)</label>
                <input
                  type="text"
                  id="suspectName"
                  name="suspectName"
                  placeholder="Name of the suspected person"
                  value={formData.suspectName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="suspectContact">
                  Suspect Contact Details (if known)
                </label>
                <input
                  type="text"
                  id="suspectContact"
                  name="suspectContact"
                  placeholder="Phone number, email address, etc."
                  value={formData.suspectContact}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="suspectSocialMedia">
                  Suspect Social Media (if known)
                </label>
                <input
                  type="text"
                  id="suspectSocialMedia"
                  name="suspectSocialMedia"
                  placeholder="Username, profile URL, etc."
                  value={formData.suspectSocialMedia}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="suspectDetails">
                  Additional Details about the Suspect{" "}
                  <span className="required">*</span>
                </label>
                <textarea
                  id="suspectDetails"
                  name="suspectDetails"
                  rows={5}
                  placeholder="Provide any additional information about the suspect (appearance, behavior, communications, etc.)"
                  value={formData.suspectDetails}
                  onChange={handleChange}
                  className={errors.suspectDetails ? "error" : ""}
                ></textarea>
                {errors.suspectDetails && (
                  <span className="error-message">{errors.suspectDetails}</span>
                )}
              </div>
            </>
          )}

          {formData.suspectKnown === "no" && (
            <div className="form-group full-width">
              <div className="note-box">
                <FaInfoCircle />
                <p>
                  No problem. The investigation will proceed based on the
                  incident details provided. If you discover any information
                  about a potential suspect later, you can update your report.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="warning-box">
          <FaExclamationTriangle />
          <p>
            <span className="highlight">IMPORTANT:</span> Do not attempt to
            contact or confront any suspected cybercriminal. Leave all
            investigation to the proper authorities.
          </p>
        </div>

        <div className="form-buttons">
          <button type="button" className="btn-outline" onClick={onPrevStep}>
            &lt; Back
          </button>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Next: Identity Verification"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Identity Verification Form Component
const IdentityVerificationForm = ({ userData, onSubmit, onPrevStep }) => {
  const [formData, setFormData] = useState({
    verificationIdType: "",
    verificationIdNumber: "",
    contactEmail: "",
    contactPhone: "",
    preferredContactMethod: "email",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.verificationIdType) {
      newErrors.verificationIdType = "ID type is required for verification";
    }

    if (!formData.verificationIdNumber.trim()) {
      newErrors.verificationIdNumber = "ID number is required for verification";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "Email address is required";
    } else if (!emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email address";
    }

    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="form-step">
      <div className="form-progress">
        {[1, 2, 3, 4, 5, 6].map((stepNum) => (
          <div
            key={stepNum}
            className={`progress-step ${stepNum === 4 ? "active" : ""} ${
              stepNum < 4 ? "completed" : ""
            }`}
          >
            <div className="step-number">{stepNum}</div>
            <div className="step-label">
              {stepNum === 1 && "Personal Info"}
              {stepNum === 2 && "Complaint Details"}
              {stepNum === 3 && "Suspect Info"}
              {stepNum === 4 && "Identity Verification"}
              {stepNum === 5 && "Preview"}
              {stepNum === 6 && "Submission"}
            </div>
          </div>
        ))}
      </div>

      <div className="step-header">
        <FaLock className="step-icon" />
        <h2>Identity Verification</h2>
      </div>
      <p className="step-description">
        Please provide additional verification details and contact information.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="verificationIdType">
              Verification ID Type <span className="required">*</span>
            </label>
            <select
              id="verificationIdType"
              name="verificationIdType"
              value={formData.verificationIdType}
              onChange={handleChange}
              className={errors.verificationIdType ? "error" : ""}
            >
              <option value="">Select ID Type</option>
              <option value="aadhaar">Aadhaar Card</option>
              <option value="pan">PAN Card</option>
              <option value="passport">Passport</option>
              <option value="voter">Voter ID Card</option>
              <option value="driving">Driving License</option>
            </select>
            {errors.verificationIdType && (
              <span className="error-message">{errors.verificationIdType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="verificationIdNumber">
              Verification ID Number <span className="required">*</span>
            </label>
            <input
              type="text"
              id="verificationIdNumber"
              name="verificationIdNumber"
              placeholder="Enter ID number for verification"
              value={formData.verificationIdNumber}
              onChange={handleChange}
              className={errors.verificationIdNumber ? "error" : ""}
            />
            {errors.verificationIdNumber && (
              <span className="error-message">
                {errors.verificationIdNumber}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="Enter your email address"
              value={formData.contactEmail}
              onChange={handleChange}
              className={errors.contactEmail ? "error" : ""}
            />
            {errors.contactEmail && (
              <span className="error-message">{errors.contactEmail}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contactPhone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              placeholder="Enter your phone number"
              value={formData.contactPhone}
              onChange={handleChange}
              className={errors.contactPhone ? "error" : ""}
            />
            {errors.contactPhone && (
              <span className="error-message">{errors.contactPhone}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label>Preferred Contact Method</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value="email"
                  checked={formData.preferredContactMethod === "email"}
                  onChange={handleChange}
                />
                Email
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value="phone"
                  checked={formData.preferredContactMethod === "phone"}
                  onChange={handleChange}
                />
                Phone
              </label>
            </div>
          </div>
        </div>

        <div className="note-box">
          <FaInfoCircle />
          <p>
            <span className="highlight">NOTE:</span> Your contact information
            will be used by our investigators to follow up on your complaint. We
            may need to request additional details or updates.
          </p>
        </div>

        <div className="form-buttons">
          <button type="button" className="btn-outline" onClick={onPrevStep}>
            &lt; Back
          </button>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Next: Preview"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Preview Form Component
const PreviewForm = ({ userData, onSubmit, onPrevStep }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit();
      setIsSubmitting(false);
    }, 1000);
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN");
  };

  return (
    <div className="form-step">
      <div className="form-progress">
        {[1, 2, 3, 4, 5, 6].map((stepNum) => (
          <div
            key={stepNum}
            className={`progress-step ${stepNum === 5 ? "active" : ""} ${
              stepNum < 5 ? "completed" : ""
            }`}
          >
            <div className="step-number">{stepNum}</div>
            <div className="step-label">
              {stepNum === 1 && "Personal Info"}
              {stepNum === 2 && "Complaint Details"}
              {stepNum === 3 && "Suspect Info"}
              {stepNum === 4 && "Identity Verification"}
              {stepNum === 5 && "Preview"}
              {stepNum === 6 && "Submission"}
            </div>
          </div>
        ))}
      </div>

      <div className="step-header">
        <FaCheck className="step-icon" />
        <h2>Preview Your Complaint</h2>
      </div>
      <p className="step-description">
        Please review all the information before final submission.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="preview-section">
          <h3>Personal Information</h3>
          <div className="preview-grid">
            <div className="preview-item">
              <div className="preview-label">Full Name:</div>
              <div className="preview-value">{userData.fullName}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Relation:</div>
              <div className="preview-value">
                {userData.relationType}: {userData.relationName}
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Gender:</div>
              <div className="preview-value">{userData.gender}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Date of Birth:</div>
              <div className="preview-value">
                {formatDate(userData.dateOfBirth)}
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Address:</div>
              <div className="preview-value">{userData.address}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">City:</div>
              <div className="preview-value">{userData.city}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">PIN Code:</div>
              <div className="preview-value">{userData.pincode}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">ID Type:</div>
              <div className="preview-value">{userData.idType}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">ID Number:</div>
              <div className="preview-value">{userData.idNumber}</div>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h3>Complaint Details</h3>
          <div className="preview-grid">
            <div className="preview-item">
              <div className="preview-label">Category:</div>
              <div className="preview-value">{userData.complaintCategory}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Sub-category:</div>
              <div className="preview-value">
                {userData.complaintSubCategory}
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Money Lost:</div>
              <div className="preview-value">
                {userData.lostMoney === "yes"
                  ? `Yes - $${userData.lostAmount}`
                  : "No"}
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Incident Date:</div>
              <div className="preview-value">
                {formatDate(userData.incidentDate)}
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Incident Time:</div>
              <div className="preview-value">
                {userData.incidentTime?.hour}:{userData.incidentTime?.minute}{" "}
                {userData.incidentTime?.period}
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Incident Location:</div>
              <div className="preview-value">{userData.incidentLocation}</div>
            </div>
            <div className="preview-item full-width">
              <div className="preview-label">Description:</div>
              <div className="preview-value preview-text">
                {userData.additionalInfo}
              </div>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h3>Suspect Information</h3>
          <div className="preview-grid">
            {userData.suspectKnown === "yes" ? (
              <>
                <div className="preview-item">
                  <div className="preview-label">Suspect Name:</div>
                  <div className="preview-value">
                    {userData.suspectName || "Not provided"}
                  </div>
                </div>
                <div className="preview-item">
                  <div className="preview-label">Suspect Contact:</div>
                  <div className="preview-value">
                    {userData.suspectContact || "Not provided"}
                  </div>
                </div>
                <div className="preview-item">
                  <div className="preview-label">Suspect Social Media:</div>
                  <div className="preview-value">
                    {userData.suspectSocialMedia || "Not provided"}
                  </div>
                </div>
                <div className="preview-item full-width">
                  <div className="preview-label">Details:</div>
                  <div className="preview-value preview-text">
                    {userData.suspectDetails}
                  </div>
                </div>
              </>
            ) : (
              <div className="preview-item full-width">
                <div className="preview-value">
                  No suspect information provided.
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="preview-section">
          <h3>Contact Information</h3>
          <div className="preview-grid">
            <div className="preview-item">
              <div className="preview-label">Email:</div>
              <div className="preview-value">{userData.contactEmail}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Phone:</div>
              <div className="preview-value">{userData.contactPhone}</div>
            </div>
            <div className="preview-item">
              <div className="preview-label">Preferred Contact:</div>
              <div className="preview-value">
                {userData.preferredContactMethod}
              </div>
            </div>
          </div>
        </div>

        <div className="warning-box">
          <FaExclamationTriangle />
          <p>
            <span className="highlight">DECLARATION:</span> I hereby declare
            that all information provided in this complaint is true and correct
            to the best of my knowledge. I understand that providing false
            information is punishable under law.
          </p>
        </div>

        <div className="form-buttons">
          <button type="button" className="btn-outline" onClick={onPrevStep}>
            &lt; Back
          </button>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Submit Complaint"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Submission Success Component
const SubmissionSuccess = ({ userData }) => {
  // Generate a random complaint ID
  const complaintId = `CYB${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="form-step">
      <div className="form-progress">
        {[1, 2, 3, 4, 5, 6].map((stepNum) => (
          <div
            key={stepNum}
            className={`progress-step ${stepNum === 6 ? "active" : ""} ${
              stepNum < 6 ? "completed" : ""
            }`}
          >
            <div className="step-number">{stepNum}</div>
            <div className="step-label">
              {stepNum === 1 && "Personal Info"}
              {stepNum === 2 && "Complaint Details"}
              {stepNum === 3 && "Suspect Info"}
              {stepNum === 4 && "Identity Verification"}
              {stepNum === 5 && "Preview"}
              {stepNum === 6 && "Submission"}
            </div>
          </div>
        ))}
      </div>

      <div className="success-message">
        <div className="success-icon">
          <FaCheck />
        </div>
        <h2>Complaint Submitted Successfully!</h2>
        <p>Your cybercrime complaint has been registered with our system.</p>

        <div className="complaint-id-box">
          <div className="complaint-id-label">Your Complaint ID:</div>
          <div className="complaint-id">{complaintId}</div>
        </div>

        <p className="success-note">
          Please save this Complaint ID for future reference. You will also
          receive a confirmation email with this information at{" "}
          {userData.contactEmail}.
        </p>

        <h3>What happens next?</h3>
        <ol className="next-steps">
          <li>Our team will review your complaint within 24-48 hours.</li>
          <li>You may be contacted for additional information if needed.</li>
          <li>
            Once assigned, an investigating officer will handle your case.
          </li>
          <li>
            You can check the status of your complaint using your Complaint ID.
          </li>
        </ol>

        <div className="note-box">
          <FaInfoCircle />
          <p>
            <span className="highlight">NOTE:</span> For any urgent updates or
            inquiries related to this complaint, please contact our helpline at
            1930 or email at cybercrime@gov.in, quoting your Complaint ID.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Complaint Form Component
const ComplaintForm = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [userData, setUserData] = useState({
    loginId: "",
    mobileNo: "",

    // Personal Info
    fullName: "",
    relationType: "",
    relationName: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    city: "",
    pincode: "",
    idType: "",
    idNumber: "",
    occupation: "",
    education: "",

    // Complaint Details
    complaintCategory: "",
    complaintSubCategory: "",
    lostMoney: "no",
    lostAmount: "",
    incidentDate: "",
    incidentTime: { hour: "12", minute: "00", period: "AM" },
    delayInReporting: "no",
    incidentLocation: "",
    evidenceFiles: [],
    additionalInfo: "",

    // Suspect Details
    suspectKnown: "no",
    suspectName: "",
    suspectContact: "",
    suspectSocialMedia: "",
    suspectDetails: "",

    // Identity Verification
    verificationIdType: "",
    verificationIdNumber: "",
    contactEmail: "",
    contactPhone: "",
    preferredContactMethod: "email",
  });

  const handleLoginSuccess = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setCurrentPage("personal-info");
  };

  const handlePersonalInfoSubmit = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setCurrentPage("complaint-details");
  };

  const handleComplaintDetailsSubmit = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setCurrentPage("suspect-details");
  };

  const handleSuspectDetailsSubmit = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setCurrentPage("identity-verification");
  };

  const handleIdentityVerificationSubmit = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setCurrentPage("preview");
  };

  const handlePreviewSubmit = () => {
    setCurrentPage("submission-success");
  };

  return (
    <div className="cyber-complaint-container">
      <section className="page-header">
        <div className="container">
          <h1>&lt; CYBERCRIME REPORTING PORTAL &gt;</h1>
          <div className="header-details">
            <div className="portal-logo">
              <FaShieldAlt className="logo-icon" />
            </div>
            <p>
              <span className="blink">[</span> SECURE FORM{" "}
              <span className="blink">]</span> Report cybercrime incidents for
              investigation by authorized agencies.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="cyber-panel complaint-panel">
          {currentPage === "login" && (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          )}

          {currentPage === "personal-info" && (
            <PersonalInfoForm
              userData={userData}
              onSubmit={handlePersonalInfoSubmit}
            />
          )}

          {currentPage === "complaint-details" && (
            <ComplaintDetailsForm
              userData={userData}
              onSubmit={handleComplaintDetailsSubmit}
              onPrevStep={() => setCurrentPage("personal-info")}
            />
          )}

          {currentPage === "suspect-details" && (
            <SuspectDetailsForm
              userData={userData}
              onSubmit={handleSuspectDetailsSubmit}
              onPrevStep={() => setCurrentPage("complaint-details")}
            />
          )}

          {currentPage === "identity-verification" && (
            <IdentityVerificationForm
              userData={userData}
              onSubmit={handleIdentityVerificationSubmit}
              onPrevStep={() => setCurrentPage("suspect-details")}
            />
          )}

          {currentPage === "preview" && (
            <PreviewForm
              userData={userData}
              onSubmit={handlePreviewSubmit}
              onPrevStep={() => setCurrentPage("identity-verification")}
            />
          )}

          {currentPage === "submission-success" && (
            <SubmissionSuccess userData={userData} />
          )}
        </div>

        <div className="emergency-contact-section">
          <h3>// EMERGENCY PROTOCOLS</h3>
          <div className="emergency-grid">
            <div className="emergency-card">
              <h4>National Cyber Crime Portal</h4>
              <p>For all types of cybercrime reporting</p>
              <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
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
};

export default ComplaintForm;