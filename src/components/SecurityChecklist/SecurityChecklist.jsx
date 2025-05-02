import { useState, useEffect, useCallback, useMemo } from "react";
import {
  FaCheck,
  FaLock,
  FaUserShield,
  FaWifi,
  FaMobile,
  FaFingerprint,
  FaChevronDown,
  FaChevronUp,
  FaPrint,
  FaTerminal,
  FaVirus,
  FaCode,
  FaInfoCircle,
  FaShieldAlt,
  FaQuestionCircle,
  FaHome,
  FaBriefcase,
  FaUserSecret,
} from "react-icons/fa";
import initialChecklist from "./checklist.js";
import "./SecurityChecklist.css";

const SECTIONS = {
  passwords: { title: "Password Security", icon: <FaLock /> },
  devices: { title: "Device Protection", icon: <FaUserShield /> },
  online: { title: "Online Safety", icon: <FaWifi /> },
  financial: { title: "Financial Security", icon: <FaFingerprint /> },
  mobile: { title: "Mobile Device Safety", icon: <FaMobile /> },
  privacy: { title: "Privacy Protection", icon: <FaShieldAlt /> },
  iot: { title: "Smart Home Security", icon: <FaHome /> },
  workFromHome: { title: "Work From Home", icon: <FaBriefcase /> },
  socialEngineering: {
    title: "Social Engineering Defense",
    icon: <FaUserSecret />,
  },
};

const getCategoryColor = (category) => {
  const categoryColors = {
    passwords: "var(--primary-color)",
    devices: "var(--secondary-color)",
    online: "var(--accent-color)",
    financial: "var(--primary-dim)",
    mobile: "var(--secondary-color)",
    privacy: "var(--accent-color)",
    iot: "var(--tertiary-color)",
    workFromHome: "var(--quaternary-color)",
    socialEngineering: "var(--warning-color)",
  };

  return categoryColors[category] || "var(--primary-color)";
};

const generateSessionId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

function SecurityChecklist() {
  const [checklist, setChecklist] = useState(initialChecklist);
  const [expandedSections, setExpandedSections] = useState(
    // Initialize with all sections collapsed except passwords
    Object.keys(SECTIONS).reduce((acc, section) => {
      acc[section] = section === "passwords";
      return acc;
    }, {})
  );
  const [showExplanation, setShowExplanation] = useState({});
  const [sessionId, setSessionId] = useState("");

  // Load saved state on mount
  useEffect(() => {
    // Get or create session ID
    let currentSessionId = localStorage.getItem("securityChecklistSessionId");
    if (!currentSessionId) {
      currentSessionId = generateSessionId();
      localStorage.setItem("securityChecklistSessionId", currentSessionId);
    }
    setSessionId(currentSessionId);

    // Load saved data
    try {
      // Load saved checklist
      const savedChecklist = localStorage.getItem(
        `securityChecklist_${currentSessionId}`
      );
      if (savedChecklist) {
        setChecklist(JSON.parse(savedChecklist));
      }

      // Load saved expanded sections
      const savedExpandedSections = localStorage.getItem(
        `securityChecklistSections_${currentSessionId}`
      );
      if (savedExpandedSections) {
        setExpandedSections(JSON.parse(savedExpandedSections));
      }
    } catch (error) {
      console.error("Error loading saved data:", error);
    }
  }, []);

  // Save checklist data when it changes
  useEffect(() => {
    if (!sessionId) return;

    try {
      // Save checklist
      localStorage.setItem(
        `securityChecklist_${sessionId}`,
        JSON.stringify(checklist)
      );

      // Set expiration to 1 year
      const expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);
      localStorage.setItem(
        `securityChecklistExpires_${sessionId}`,
        expirationDate.toISOString()
      );

      // Set a cookie with the expiration date
      document.cookie = `securityChecklistSaved=true; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;
    } catch (error) {
      console.error("Error saving checklist data:", error);
    }
  }, [checklist, sessionId]);

  // Save expanded sections state
  useEffect(() => {
    if (!sessionId) return;

    try {
      localStorage.setItem(
        `securityChecklistSections_${sessionId}`,
        JSON.stringify(expandedSections)
      );
    } catch (error) {
      console.error("Error saving expanded sections:", error);
    }
  }, [expandedSections, sessionId]);

  // Memoized handlers to prevent recreation on each render
  const handleCheckItem = useCallback((category, id) => {
    setChecklist((prevChecklist) => ({
      ...prevChecklist,
      [category]: prevChecklist[category].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  }, []);

  const toggleExplanation = useCallback((itemId) => {
    setShowExplanation((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }, []);

  const toggleSection = useCallback((section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleResetProgress = useCallback(() => {
    if (
      confirm(
        "Are you sure you want to reset all progress? This cannot be undone."
      )
    ) {
      // Create new session ID
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);

      // Reset checklist to initial state
      setChecklist(initialChecklist);

      // Save new session ID
      localStorage.setItem("securityChecklistSessionId", newSessionId);

      // Remove old session data
      localStorage.removeItem(`securityChecklist_${sessionId}`);
      localStorage.removeItem(`securityChecklistSections_${sessionId}`);
      localStorage.removeItem(`securityChecklistExpires_${sessionId}`);
    }
  }, [sessionId]);

  // Calculate progress for a category
  const calculateProgress = useCallback(
    (category) => {
      const categoryItems = checklist[category];
      if (!categoryItems || categoryItems.length === 0) return 0;

      const totalItems = categoryItems.length;
      const checkedItems = categoryItems.filter((item) => item.checked).length;
      return (checkedItems / totalItems) * 100;
    },
    [checklist]
  );

  // Memoize total progress calculation 
  const totalProgress = useMemo(() => {
    const allItems = Object.values(checklist).flat();
    if (allItems.length === 0) return 0;

    const totalItems = allItems.length;
    const checkedItems = allItems.filter((item) => item.checked).length;
    return (checkedItems / totalItems) * 100;
  }, [checklist]);

  return (
    <div className="security-checklist-container">
      {/* Header Section */}
      <header className="security-checklist-header">
        <div className="security-checklist-header-content">
          <div className="security-checklist-terminal-text">
            <FaShieldAlt aria-hidden="true" />
            <span>Personal Cybersecurity Checklist</span>
          </div>
          <h1>
            Your Digital Safety Guide{" "}
            <span className="security-checklist-blink">_</span>
          </h1>
          <p>
            Complete this checklist to protect yourself from common cyber
            threats and safeguard your personal information.
          </p>
        </div>
      </header>

      {/* Dashboard Overview */}
      <main className="security-checklist-dashboard">
        <div className="security-checklist-panel">
          <div className="security-checklist-panel-header">
            <h2>
              <FaTerminal aria-hidden="true" /> Your Security Status
            </h2>
            <div className="security-checklist-button-group">
              <button
                className="security-checklist-button"
                onClick={handlePrint}
                aria-label="Print Checklist"
              >
                <FaPrint aria-hidden="true" /> Print Checklist
              </button>
              <button
                className="security-checklist-button"
                onClick={handleResetProgress}
                aria-label="Reset Progress"
              >
                Reset Progress
              </button>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="security-checklist-progress-tracker">
            <div className="security-checklist-progress-header">
              <span>Overall Security Score</span>
              <span>{Math.round(totalProgress)}%</span>
            </div>
            <div
              className="security-checklist-progress-bar"
              role="progressbar"
              aria-valuenow={Math.round(totalProgress)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="security-checklist-progress-fill"
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Security Metrics */}
          <div className="security-checklist-metrics">
            {Object.entries(SECTIONS).map(([key, section]) => {
              const categoryColor = getCategoryColor(key);
              const progressValue = Math.round(calculateProgress(key));

              return (
                <div
                  key={key}
                  className="security-checklist-metric-card"
                  style={{ borderLeft: `3px solid ${categoryColor}` }}
                >
                  <div aria-hidden="true" style={{ color: categoryColor }}>
                    {section.icon}
                  </div>
                  <h3>{section.title}</h3>
                  <div>{progressValue}%</div>
                </div>
              );
            })}
          </div>

          {/* Session ID Display */}
          <div className="security-checklist-session-info">
            <small>
              Your progress is automatically saved to this device. Session ID:{" "}
              {sessionId && sessionId.substring(0, 8)}...
            </small>
          </div>
        </div>

        {/* Security Protocol Accordion Sections */}
        {Object.entries(SECTIONS).map(([key, section]) => {
          const isExpanded = expandedSections[key];
          const categoryColor = getCategoryColor(key);
          const progressValue = Math.round(calculateProgress(key));

          return (
            <div key={key} className="security-checklist-protocol-section">
              <div
                className="security-checklist-protocol-header"
                onClick={() => toggleSection(key)}
                style={{
                  borderLeft: `3px solid ${categoryColor}`,
                  borderTop: `1px solid var(--border-color)`,
                  borderRight: `1px solid var(--border-color)`,
                  borderBottom: isExpanded
                    ? "none"
                    : `1px solid var(--border-color)`,
                }}
                role="button"
                aria-expanded={isExpanded}
                aria-controls={`section-${key}-content`}
              >
                <h2 style={{ color: categoryColor }}>
                  {section.icon} {section.title}
                </h2>
                <div className="security-checklist-protocol-header-right">
                  <div>{progressValue}%</div>
                  {isExpanded ? (
                    <FaChevronUp aria-hidden="true" />
                  ) : (
                    <FaChevronDown aria-hidden="true" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div
                  id={`section-${key}-content`}
                  className="security-checklist-protocol-content"
                  style={{
                    borderLeft: `3px solid ${categoryColor}`,
                    borderRight: `1px solid var(--border-color)`,
                    borderBottom: `1px solid var(--border-color)`,
                  }}
                >
                  {/* Progress Bar */}
                  <div className="security-checklist-category-progress">
                    <div className="security-checklist-progress-header">
                      <span>Completion Progress</span>
                      <span style={{ color: categoryColor }}>
                        {progressValue}%
                      </span>
                    </div>
                    <div
                      className="security-checklist-progress-bar"
                      role="progressbar"
                      aria-valuenow={progressValue}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="security-checklist-progress-fill"
                        style={{
                          width: `${progressValue}%`,
                          backgroundColor: categoryColor,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="security-checklist-task-list">
                    {checklist[key] &&
                      checklist[key].map((item) => (
                        <div key={item.id}>
                          <div
                            className={`security-checklist-task-item ${
                              item.checked ? "checked" : ""
                            }`}
                          >
                            <div
                              className={`security-checklist-task-checkbox ${
                                item.checked ? "checked" : ""
                              }`}
                              onClick={() => handleCheckItem(key, item.id)}
                              role="checkbox"
                              aria-checked={item.checked}
                              tabIndex={0}
                              style={{
                                borderColor: categoryColor,
                                backgroundColor: item.checked
                                  ? categoryColor
                                  : "transparent",
                              }}
                              onKeyPress={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  handleCheckItem(key, item.id);
                                }
                              }}
                            >
                              {item.checked && <FaCheck aria-hidden="true" />}
                            </div>
                            <span className="security-checklist-task-text">
                              {item.text}
                            </span>
                            <button
                              className="security-checklist-info-button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExplanation(item.id);
                              }}
                              aria-label={`More information about ${item.text}`}
                              aria-expanded={showExplanation[item.id]}
                            >
                              <FaQuestionCircle aria-hidden="true" />
                            </button>
                          </div>
                          {showExplanation[item.id] && (
                            <div className="security-checklist-explanation">
                              <FaInfoCircle aria-hidden="true" />
                              <span>{item.explanation}</span>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Learn More Section */}
      <section className="security-checklist-cta">
        <div>
          <h2>Learn More About Protecting Yourself</h2>
          <p>
            Access easy-to-understand guides and tools to keep yourself safe
            online.
          </p>
          <div className="security-checklist-cta-buttons">
            <a
              href="/security-basics"
              className="security-checklist-cta-button primary"
            >
              <FaVirus aria-hidden="true" /> Security Basics
            </a>
            <a
              href="/privacy-quiz"
              className="security-checklist-cta-button secondary"
            >
              <FaCode aria-hidden="true" /> Test Your Knowledge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecurityChecklist;
