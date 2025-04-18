import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import {
  FaServer,
  FaLock,
  FaGlobe,
  FaFingerprint,
  FaShieldAlt,
} from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { RiRadarLine } from "react-icons/ri";
import logoUrl from "../../svg/logo.svg";
import "./SplashScreen.css";

const MATRIX_CHARS =
  "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह१२३४५६७८९०";
const STATUS_TEXTS = [
  "Initializing system components...",
  "Establishing secure connection...",
  "Loading advanced security protocols...",
  "Deploying countermeasures...",
  "Launching Savdhaan India terminal...",
];
const INTERVAL_MS = 50;      
const CHECK_ITEM_HEIGHT = 40;

export default function SplashScreenLoad({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(STATUS_TEXTS[0]);
  const [securityChecks, setSecurityChecks] = useState([
    { id: 1, text: "Securing network perimeter...", complete: false, icon: <FaGlobe /> },
    { id: 2, text: "Initializing threat detection...", complete: false, icon: <IoWarning /> },
    { id: 3, text: "Loading cryptographic modules...", complete: false, icon: <FaLock /> },
    { id: 4, text: "Verifying biometric signatures...", complete: false, icon: <FaFingerprint /> },
    { id: 5, text: "Establishing secure channels…", complete: false, icon: <RiRadarLine /> },
    { id: 6, text: "Generating security proofs…", complete: false, icon: <FaShieldAlt /> },
  ]);
  const [isExiting, setIsExiting] = useState(false);

  const matrixRef = useRef(null);
  const hexGridRef = useRef(null);
  const mark = useCallback(
    (id) =>
      setSecurityChecks((prev) =>
        prev.map((c) => (c.id === id ? { ...c, complete: true } : c))
      ),
    []
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

    const fontSize = 14;
    const cols = Math.ceil(canvas.width / fontSize);
    const drops = Array.from({ length: cols }, () => -Math.random() * 100);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF41";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const ch = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        ctx.fillText(ch, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const id = setInterval(draw, 50);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const grid = hexGridRef.current;
    if (!grid) return;
    const createHex = () => {
      grid.innerHTML = "";
      const count = window.innerWidth < 768 ? 15 : 25;
      for (let i = 0; i < count; i++) {
        const hex = document.createElement("div");
        hex.className = "splashscreen-hex-cell";
        hex.style.animationDelay = `${Math.random() * 5}s`;
        hex.style.top = `${Math.random() * 100}%`;
        hex.style.left = `${Math.random() * 100}%`;
        hex.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        hex.style.transform = `scale(${Math.random() * 0.4 + 0.8})`;
        grid.appendChild(hex);
      }
    };
    createHex();
    window.addEventListener("resize", createHex);
    return () => window.removeEventListener("resize", createHex);
  }, []);

  useEffect(() => {
    let pct = 0;
    const tick = setInterval(() => {
      pct++;
      setProgress(pct);
      if (pct === 16) mark(1);
      if (pct === 32) mark(2);
      if (pct === 48) mark(3);
      if (pct === 64) mark(4);
      if (pct === 80) mark(5);
      if (pct === 95) mark(6);
      if (pct === 25) setLoadingText(STATUS_TEXTS[1]);
      if (pct === 50) setLoadingText(STATUS_TEXTS[2]);
      if (pct === 75) setLoadingText(STATUS_TEXTS[3]);
      if (pct === 90) setLoadingText(STATUS_TEXTS[4]);
      if (pct >= 100) {
        clearInterval(tick);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onFinish, 1000);
        }, 500);
      }
    }, INTERVAL_MS);

    return () => clearInterval(tick);
  }, [mark, onFinish]);
  const completedCount = securityChecks.filter((c) => c.complete).length;

  return (
    <div className={`splashscreen-auth-section ${isExiting ? "splashscreen-exiting" : ""}`}>
      <canvas ref={matrixRef} className="splashscreen-matrix-background" />
      <div ref={hexGridRef} className="splashscreen-cyber-background-grid" />
      <div className="splashscreen-scan-line" />

      <div className="splashscreen-auth-container splashscreen-splash-container">
        <div className="splashscreen-logo-wrapper">
          <img src={logoUrl} alt="Savdhaan India logo" className="splashscreen-cyber-logo" />
        </div>
        <h1 className="splashscreen-cyber-title">SAVDHAAN INDIA</h1>
        <p className="splashscreen-tagline">ADVANCED CYBER SECURITY INITIATIVE</p>

        <div className="splashscreen-system-status">
          <div className="splashscreen-status-row">
            <FaServer className="splashscreen-status-icon" />
            <span className="splashscreen-status-text">SYSTEM</span>
            <span className="splashscreen-status-indicator splashscreen-active">ONLINE</span>
          </div>
          <div className="splashscreen-status-row">
            <IoWarning className="splashscreen-status-icon" />
            <span className="splashscreen-status-text">THREATS</span>
            <span className="splashscreen-status-indicator splashscreen-scanning">SCANNING</span>
          </div>
        </div>

        <div className="splashscreen-loading-container">
          <div className="splashscreen-progress-bar-container">
            <div className="splashscreen-progress-bar" style={{ width: `${progress}%` }} />
            <div className="splashscreen-progress-glitch" style={{ left: `${progress}%` }} />
          </div>
          <div className="splashscreen-loading-details">
            <p className="splashscreen-loading-text">{loadingText}</p>
            <p className="splashscreen-loading-percentage">{progress}%</p>
          </div>
        </div>

        <div className="splashscreen-security-checks">
          <div
            className="splashscreen-checks-inner"
            style={{
              transform: `translateY(${securityChecks.length * CHECK_ITEM_HEIGHT - completedCount * CHECK_ITEM_HEIGHT}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            {securityChecks.map(({ id, text, icon, complete }) => (
              <div
                key={id}
                className={`splashscreen-check-item ${complete ? "splashscreen-complete" : ""} ${progress > (id * 15) ? "splashscreen-visible" : ""}`}
              >
                {icon}
                <span className="splashscreen-check-text">{text}</span>
                <span className="splashscreen-check-status">
                  {complete ? "[ COMPLETE ]" : "[ PENDING ]"}
                </span>
              </div>
            ))}
          </div>
        </div>
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

SplashScreenLoad.propTypes = {
  onFinish: PropTypes.func.isRequired,
};