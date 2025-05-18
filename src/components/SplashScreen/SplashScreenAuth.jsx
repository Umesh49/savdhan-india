import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { FaKey, FaLock, FaTerminal } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import logoUrl from "../../svg/logo.svg";
import "./SplashScreen.css";

export default function SplashScreenAuth({ onAuthSuccess }) {
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const matrixRef = useRef(null);
  const correctPassword = "savdhaan";

  const handlePasswordSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setPasswordError("");
      setIsAuthenticating(true);

      setTimeout(() => {
        if (password === correctPassword) {
          sessionStorage.setItem("authenticated", "true");
          onAuthSuccess();
        } else {
          setPasswordError("Access denied. Invalid credentials.");
          setIsAuthenticating(false);
        }
      }, 1500);
    },
    [password, onAuthSuccess]
  );

  useEffect(() => {
    const canvas = matrixRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]|;:,.<>?/";
    const fontSize = 14;
    const cols = Math.ceil(canvas.width / fontSize);
    const drops = Array.from({ length: cols }, () =>
      Math.floor(Math.random() * -100)
    );

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const intervalId = setInterval(draw, 60);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="splashscreen-auth-section">
      <canvas ref={matrixRef} className="splashscreen-matrix-background" />

      <div className="splashscreen-cyber-background-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="splashscreen-hex-cell"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="splashscreen-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="splashscreen-auth-container">
        <div className="splashscreen-logo-wrapper">
          <img
            src={logoUrl}
            alt="logo"
            className="splashscreen-cyber-logo"
          />
        </div>

        <h1 className="splashscreen-cyber-title">Zero Trace</h1>
        <p className="splashscreen-tagline">
          ADVANCED CYBER SECURITY INITIATIVE
        </p>

        <form
          onSubmit={handlePasswordSubmit}
          className="splashscreen-password-form"
        >
          <div className="splashscreen-form-header">
            <FaKey className="splashscreen-key-icon" />
            <span>AUTHENTICATION REQUIRED</span>
          </div>
          <div className="splashscreen-input-container">
            <FaLock className="splashscreen-input-icon" />
            <input
              type="password"
              className="splashscreen-cyber-input"
              placeholder="Enter access code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isAuthenticating}
              autoComplete="off"
              autoFocus
            />
          </div>
          {passwordError && (
            <div className="splashscreen-error-message">
              <IoWarning className="splashscreen-error-icon" /> {passwordError}
            </div>
          )}
          <button
            type="submit"
            className={`splashscreen-auth-button ${
              isAuthenticating ? "splashscreen-authenticating" : ""
            }`}
            disabled={isAuthenticating || !password}
          >
            {isAuthenticating ? (
              <>
                AUTHENTICATING{" "}
                <span className="splashscreen-auth-dots">...</span>
              </>
            ) : (
              <>
                AUTHORIZE ACCESS <FaTerminal />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="splashscreen-binary-stream">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {Math.random() > 0.5 ? "1" : "0"}
          </span>
        ))}
      </div>

      <div className="splashscreen-hud-corner splashscreen-top-left" />
      <div className="splashscreen-hud-corner splashscreen-top-right" />
      <div className="splashscreen-hud-corner splashscreen-bottom-left" />
      <div className="splashscreen-hud-corner splashscreen-bottom-right" />
    </div>
  );
}

SplashScreenAuth.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
};