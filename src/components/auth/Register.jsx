// Register.jsx
import { useState } from "react"
import { FaUser, FaEnvelope, FaLock, FaPhone, FaExclamationCircle, FaUserShield } from "react-icons/fa"
import { IoShieldHalfSharp } from "react-icons/io5"
import { BiSolidLockAlt } from "react-icons/bi"
import './Auth.css';

// Mock API function (replace with your actual API call)
const register = async (userData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock response
      resolve({
        success: true,
        message: "Registration successful"
      });
    }, 1000);
  });
};

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [registerError, setRegisterError] = useState(null)
  const [registerSuccess, setRegisterSuccess] = useState(null)

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

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number should be 10 digits"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)
      setRegisterError(null)
      setRegisterSuccess(null)

      try {
        // Remove confirmPassword before sending to API
        const { confirmPassword, ...userData } = formData

        const response = await register(userData)

        if (response.success) {
          setRegisterSuccess("Security profile created! Please verify your email to activate full protection.")

          // Redirect to login page after a delay
          setTimeout(() => {
            window.location.href = "/login"
          }, 3000)
        } else {
          setRegisterError(response.message || "Security registration failed. Please try again.")
        }
      } catch (error) {
        setRegisterError(error.message || "Security registration failed. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="savdhaan-auth-page">
      <div className="savdhaan-auth-container">
        <div className="savdhaan-logo">
          <h1>Savdhaan India</h1>
          <p>Cyber Security Awareness Portal</p>
        </div>
        
        <div className="savdhaan-auth-card">
          <IoShieldHalfSharp className="savdhaan-security-icon shield" />
          <BiSolidLockAlt className="savdhaan-security-icon lock" />
          
          <div className="savdhaan-auth-header">
            <h2>
              <FaUserShield /> Create Secure Profile
            </h2>
            <p>Join our protected network</p>
          </div>

          {registerError && (
            <div className="savdhaan-auth-error">
              <FaExclamationCircle />
              <span>{registerError}</span>
            </div>
          )}

          {registerSuccess && (
            <div className="savdhaan-auth-success">
              <span>{registerSuccess}</span>
            </div>
          )}

          <form className="savdhaan-auth-form" onSubmit={handleSubmit}>
            <div className="savdhaan-form-group">
              <label htmlFor="name">
                <FaUser /> Identity Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="savdhaan-error-message">{errors.name}</span>}
            </div>

            <div className="savdhaan-form-group">
              <label htmlFor="email">
                <FaEnvelope /> Secure Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="Enter your verification email"
              />
              {errors.email && <span className="savdhaan-error-message">{errors.email}</span>}
            </div>

            <div className="savdhaan-form-group">
              <label htmlFor="phone">
                <FaPhone /> Recovery Contact
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
                placeholder="Enter your 10-digit recovery number"
              />
              {errors.phone && <span className="savdhaan-error-message">{errors.phone}</span>}
            </div>

            <div className="savdhaan-form-group">
              <label htmlFor="password">
                <FaLock /> Encryption Key
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error" : ""}
                placeholder="Create a strong password"
              />
              {errors.password && <span className="savdhaan-error-message">{errors.password}</span>}
            </div>

            <div className="savdhaan-form-group">
              <label htmlFor="confirmPassword">
                <FaLock /> Verify Encryption Key
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <span className="savdhaan-error-message">{errors.confirmPassword}</span>}
            </div>

            <button type="submit" className="savdhaan-btn-primary" disabled={isLoading}>
              {isLoading ? "Securing Profile..." : "Create Protected Account"}
            </button>
          </form>

          <div className="savdhaan-auth-footer">
            <p>
              Already have security clearance? <a href="/login">Secure Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register