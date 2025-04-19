// Login.jsx
import { useState } from "react"
import { FaEnvelope, FaLock, FaExclamationCircle, FaUserShield } from "react-icons/fa"
import { BiSolidLockAlt } from "react-icons/bi"
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import './Auth.css';

// Mock API function (replace with your actual API call)
const login = async (userData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock response
      resolve({
        success: true,
        token: "mock-token-12345",
        user: { id: 1, name: "User", email: userData.email }
      });
    }, 1000);
  });
};

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)
      setLoginError(null)

      try {
        const response = await login(formData)

        if (response.success) {
          // Store token in localStorage
          localStorage.setItem("token", response.token)

          // Update auth context
          if (setUser) {
            setUser(response.user)
          }

          // Redirect to dashboard using window.location
          window.location.href = "/dashboard"
        } else {
          setLoginError(response.message || "Login failed. Please try again.")
        }
      } catch (error) {
        setLoginError(error.message || "Login failed. Please try again.")
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
          <p>Stay Secure, Stay Protected</p>
        </div>
        
        <div className="savdhaan-auth-card">
          <IoShieldCheckmarkSharp className="savdhaan-security-icon shield" />
          <BiSolidLockAlt className="savdhaan-security-icon lock" />
          
          <div className="savdhaan-auth-header">
            <h2>
              <FaUserShield /> Secure Login
            </h2>
            <p>Access your protected dashboard</p>
          </div>

          {loginError && (
            <div className="savdhaan-auth-error">
              <FaExclamationCircle />
              <span>{loginError}</span>
            </div>
          )}

          <form className="savdhaan-auth-form" onSubmit={handleSubmit}>
            <div className="savdhaan-form-group">
              <label htmlFor="email">
                <FaEnvelope /> Authorized Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="Enter your registered email"
              />
              {errors.email && <span className="savdhaan-error-message">{errors.email}</span>}
            </div>

            <div className="savdhaan-form-group">
              <label htmlFor="password">
                <FaLock /> Security Passkey
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error" : ""}
                placeholder="Enter your secure password"
              />
              {errors.password && <span className="savdhaan-error-message">{errors.password}</span>}
            </div>

            <div className="savdhaan-form-group savdhaan-forgot-password">
              <a href="/forgot-password">Reset Security Credentials</a>
            </div>

            <button type="submit" className="savdhaan-btn-primary" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Access Secured Zone"}
            </button>
          </form>

          <div className="savdhaan-auth-footer">
            <p>
              Need secure access? <a href="/register">Create Protected Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login