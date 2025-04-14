"use client"

import { useState } from "react"
import {
  FaCheck,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaWifi,
  FaMobile,
  FaEnvelope,
  FaPrint,
  FaGraduationCap,
} from "react-icons/fa"

function SecurityChecklist() {
  const [checklist, setChecklist] = useState({
    passwords: [
      { id: "p1", text: "Use strong, unique passwords for each account", checked: false },
      { id: "p2", text: "Enable two-factor authentication where available", checked: false },
      { id: "p3", text: "Use a password manager to store credentials securely", checked: false },
      { id: "p4", text: "Change passwords regularly (every 3-6 months)", checked: false },
      { id: "p5", text: "Never share passwords with others", checked: false },
    ],
    devices: [
      { id: "d1", text: "Keep operating systems and software updated", checked: false },
      { id: "d2", text: "Use antivirus/anti-malware software and keep it updated", checked: false },
      { id: "d3", text: "Enable device encryption", checked: false },
      { id: "d4", text: "Set up automatic backups for important data", checked: false },
      { id: "d5", text: "Use screen locks and strong device passwords", checked: false },
    ],
    online: [
      { id: "o1", text: "Be cautious about clicking links in emails or messages", checked: false },
      {
        id: "o2",
        text: "Verify website security (https, padlock icon) before entering sensitive information",
        checked: false,
      },
      { id: "o3", text: "Avoid using public Wi-Fi for sensitive transactions", checked: false },
      { id: "o4", text: "Review privacy settings on social media accounts", checked: false },
      { id: "o5", text: "Be mindful of what personal information you share online", checked: false },
    ],
    financial: [
      { id: "f1", text: "Monitor bank and credit card statements regularly", checked: false },
      { id: "f2", text: "Set up transaction alerts for your accounts", checked: false },
      { id: "f3", text: "Use credit cards instead of debit cards for online purchases", checked: false },
      { id: "f4", text: "Never share OTPs or banking credentials with anyone", checked: false },
      { id: "f5", text: "Use secure, official apps for banking and financial transactions", checked: false },
    ],
    mobile: [
      { id: "m1", text: "Only download apps from official app stores", checked: false },
      { id: "m2", text: "Review app permissions before installing", checked: false },
      { id: "m3", text: "Keep Bluetooth and Wi-Fi turned off when not in use", checked: false },
      { id: "m4", text: "Enable remote tracking and wiping capabilities", checked: false },
      { id: "m5", text: "Regularly remove unused apps", checked: false },
    ],
  })

  const handleCheckItem = (category, id) => {
    setChecklist({
      ...checklist,
      [category]: checklist[category].map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    })
  }

  const calculateProgress = (category) => {
    const totalItems = checklist[category].length
    const checkedItems = checklist[category].filter((item) => item.checked).length
    return (checkedItems / totalItems) * 100
  }

  const calculateTotalProgress = () => {
    const allItems = Object.values(checklist).flat()
    const totalItems = allItems.length
    const checkedItems = allItems.filter((item) => item.checked).length
    return (checkedItems / totalItems) * 100
  }

  const totalProgress = calculateTotalProgress()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="tools-page">
      <section className="page-header">
        <div className="container">
          <h1>Cybersecurity Checklist</h1>
          <p>Track your security posture with this comprehensive checklist of essential cybersecurity practices.</p>
        </div>
      </section>

      <section className="container">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
          >
            <h2 style={{ margin: 0 }}>Your Security Progress</h2>
            <button className="btn-outline" onClick={handlePrint}>
              <FaPrint /> Print Checklist
            </button>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Overall Progress</span>
              <span>{Math.round(totalProgress)}%</span>
            </div>
            <div
              style={{
                height: "10px",
                backgroundColor: "var(--gray-200)",
                borderRadius: "var(--border-radius-full)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${totalProgress}%`,
                  backgroundColor:
                    totalProgress < 33
                      ? "var(--danger-color)"
                      : totalProgress < 66
                        ? "var(--warning-color)"
                        : "var(--success-color)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "var(--primary-light)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <FaLock style={{ fontSize: "2rem", color: "var(--primary-color)", marginBottom: "0.5rem" }} />
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Passwords</h3>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {Math.round(calculateProgress("passwords"))}%
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "var(--success-light)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <FaUserShield style={{ fontSize: "2rem", color: "var(--success-color)", marginBottom: "0.5rem" }} />
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Devices</h3>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{Math.round(calculateProgress("devices"))}%</div>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "var(--warning-light)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <FaWifi style={{ fontSize: "2rem", color: "var(--warning-color)", marginBottom: "0.5rem" }} />
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Online</h3>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{Math.round(calculateProgress("online"))}%</div>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "var(--accent-light)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <FaShieldAlt style={{ fontSize: "2rem", color: "var(--accent-color)", marginBottom: "0.5rem" }} />
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Financial</h3>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {Math.round(calculateProgress("financial"))}%
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "var(--secondary-light)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <FaMobile style={{ fontSize: "2rem", color: "var(--secondary-color)", marginBottom: "0.5rem" }} />
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Mobile</h3>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{Math.round(calculateProgress("mobile"))}%</div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            <FaLock style={{ marginRight: "0.5rem" }} /> Password Security
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Category Progress</span>
              <span>{Math.round(calculateProgress("passwords"))}%</span>
            </div>
            <div
              style={{
                height: "8px",
                backgroundColor: "var(--gray-200)",
                borderRadius: "var(--border-radius-full)",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${calculateProgress("passwords")}%`,
                  backgroundColor: "var(--primary-color)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>

          <div>
            {checklist.passwords.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem",
                  borderBottom: "1px solid var(--gray-200)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--gray-50)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    border: item.checked ? "none" : "2px solid var(--gray-400)",
                    backgroundColor: item.checked ? "var(--primary-color)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => handleCheckItem("passwords", item.id)}
                >
                  {item.checked && <FaCheck style={{ color: "white" }} />}
                </div>
                <span style={{ flex: 1 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            <FaUserShield style={{ marginRight: "0.5rem" }} /> Device Security
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Category Progress</span>
              <span>{Math.round(calculateProgress("devices"))}%</span>
            </div>
            <div
              style={{
                height: "8px",
                backgroundColor: "var(--gray-200)",
                borderRadius: "var(--border-radius-full)",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${calculateProgress("devices")}%`,
                  backgroundColor: "var(--success-color)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>

          <div>
            {checklist.devices.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem",
                  borderBottom: "1px solid var(--gray-200)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--gray-50)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    border: item.checked ? "none" : "2px solid var(--gray-400)",
                    backgroundColor: item.checked ? "var(--success-color)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => handleCheckItem("devices", item.id)}
                >
                  {item.checked && <FaCheck style={{ color: "white" }} />}
                </div>
                <span style={{ flex: 1 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Online Safety Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            <FaWifi style={{ marginRight: "0.5rem" }} /> Online Safety
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Category Progress</span>
              <span>{Math.round(calculateProgress("online"))}%</span>
            </div>
            <div
              style={{
                height: "8px",
                backgroundColor: "var(--gray-200)",
                borderRadius: "var(--border-radius-full)",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${calculateProgress("online")}%`,
                  backgroundColor: "var(--warning-color)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>

          <div>
            {checklist.online.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem",
                  borderBottom: "1px solid var(--gray-200)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--gray-50)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    border: item.checked ? "none" : "2px solid var(--gray-400)",
                    backgroundColor: item.checked ? "var(--warning-color)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => handleCheckItem("online", item.id)}
                >
                  {item.checked && <FaCheck style={{ color: "white" }} />}
                </div>
                <span style={{ flex: 1 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Security Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            <FaShieldAlt style={{ marginRight: "0.5rem" }} /> Financial Security
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Category Progress</span>
              <span>{Math.round(calculateProgress("financial"))}%</span>
            </div>
            <div
              style={{
                height: "8px",
                backgroundColor: "var(--gray-200)",
                borderRadius: "var(--border-radius-full)",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${calculateProgress("financial")}%`,
                  backgroundColor: "var(--accent-color)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>

          <div>
            {checklist.financial.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem",
                  borderBottom: "1px solid var(--gray-200)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--gray-50)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    border: item.checked ? "none" : "2px solid var(--gray-400)",
                    backgroundColor: item.checked ? "var(--accent-color)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => handleCheckItem("financial", item.id)}
                >
                  {item.checked && <FaCheck style={{ color: "white" }} />}
                </div>
                <span style={{ flex: 1 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Security Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            <FaMobile style={{ marginRight: "0.5rem" }} /> Mobile Security
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Category Progress</span>
              <span>{Math.round(calculateProgress("mobile"))}%</span>
            </div>
            <div
              style={{
                height: "8px",
                backgroundColor: "var(--gray-200)",
                borderRadius: "var(--border-radius-full)",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${calculateProgress("mobile")}%`,
                  backgroundColor: "var(--secondary-color)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>

          <div>
            {checklist.mobile.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem",
                  borderBottom: "1px solid var(--gray-200)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--gray-50)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    border: item.checked ? "none" : "2px solid var(--gray-400)",
                    backgroundColor: item.checked ? "var(--secondary-color)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => handleCheckItem("mobile", item.id)}
                >
                  {item.checked && <FaCheck style={{ color: "white" }} />}
                </div>
                <span style={{ flex: 1 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "var(--primary-light)",
            borderRadius: "var(--border-radius-lg)",
            padding: "1.5rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <FaEnvelope style={{ color: "var(--primary-color)", fontSize: "1.5rem", marginTop: "0.25rem" }} />
          <div>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "0.5rem" }}>Stay Updated</h3>
            <p style={{ marginBottom: "1rem" }}>
              Subscribe to our newsletter to receive regular security tips and updates on the latest threats.
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: "1",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--border-radius)",
                  border: "1px solid var(--primary-color)",
                }}
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Take Your Security to the Next Level</h2>
            <p>Explore our comprehensive resources and tools to enhance your cybersecurity posture.</p>
            <div className="cta-buttons">
              <a href="/security-tools" className="btn-primary">
                <FaShieldAlt /> Security Tools
              </a>
              <a href="/cyber-awareness-quiz" className="btn-secondary">
                <FaGraduationCap /> Take the Quiz
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityChecklist
