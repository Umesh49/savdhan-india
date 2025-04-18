"use client"
import { useState, useEffect, useMemo } from "react"
import { FaShieldAlt, FaLock, FaExclamationTriangle, FaFingerprint, FaKey, FaUserShield } from "react-icons/fa"
import './CyberSpinner.css'

function CyberSpinner({
  size = "medium",
  text = "Securing data...",
  showBinary = true,
  variant = "green",
}) {
  const [binaryStream, setBinaryStream] = useState("")
  const [currentIcon, setCurrentIcon] = useState(0)

  const securityIcons = [
    <FaShieldAlt key="shield" />,
    <FaLock key="lock" />,
    <FaFingerprint key="fingerprint" />,
    <FaKey key="key" />,
    <FaUserShield key="usershield" />,
    <FaExclamationTriangle key="warning" />,
  ]

  const sizeConfig = useMemo(() => {
    if (typeof size === "number") {
      return {
        spinner: size,
        icon: `${size / 40}rem`,
        ringInner: size * 0.7,
        ringOuter: size * 0.9,
        binaryLength: Math.floor(size / 3),
        borderWidth: size > 60 ? 3 : size > 40 ? 2 : 1,
      }
    }

    switch (size) {
      case "small":
        return {
          spinner: 40,
          icon: "1rem",
          ringInner: 25,
          ringOuter: 35,
          binaryLength: 12,
          borderWidth: 1,
        }
      case "large":
        return {
          spinner: 100,
          icon: "2.5rem",
          ringInner: 70,
          ringOuter: 90,
          binaryLength: 32,
          borderWidth: 3,
        }
      default: 
        return {
          spinner: 60,
          icon: "1.5rem",
          ringInner: 40,
          ringOuter: 55,
          binaryLength: 24,
          borderWidth: 2,
        }
    }
  }, [size])

  const colorThemes = useMemo(
    () => ({
      green: {
        main: "#00ff41",
        glow: "rgba(0, 255, 65, 0.7)",
        secondary: "rgba(0, 200, 50, 0.8)",
      },
      blue: {
        main: "#0cebff",
        glow: "rgba(12, 235, 255, 0.7)",
        secondary: "rgba(0, 119, 255, 0.8)",
      },
      purple: {
        main: "#ff00ff",
        glow: "rgba(255, 0, 255, 0.7)",
        secondary: "rgba(200, 0, 200, 0.8)",
      },
      red: {
        main: "#ff0055",
        glow: "rgba(255, 0, 85, 0.7)",
        secondary: "rgba(200, 0, 50, 0.8)",
      },
    }),
    []
  )

  const colors = colorThemes[variant] || colorThemes.green

  useEffect(() => {
    if (showBinary) {
      const generateBinary = () => {
        let binary = ""
        for (let i = 0; i < sizeConfig.binaryLength; i++) {
          if (i % 8 === 0 && Math.random() > 0.5) {
            const patterns = ["101", "110", "010", "001", "111", "000"]
            binary += patterns[Math.floor(Math.random() * patterns.length)]
            i += 2
          } else {
            binary += Math.round(Math.random()) === 1 ? "1" : "0"
          }
        }
        setBinaryStream(binary)
      }

      generateBinary()
      const interval = setInterval(generateBinary, 800)
      return () => clearInterval(interval)
    }
  }, [showBinary, sizeConfig.binaryLength])

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIcon((prev) => (prev + 1) % securityIcons.length)
      },
      2000 + Math.random() * 1000
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="cyber-spin-spinner-container">
      <div className="cyber-spin-spinner" style={{ width: `${sizeConfig.spinner}px`, height: `${sizeConfig.spinner}px` }}>
        <div className="cyber-spin-spinner-icon" style={{ fontSize: sizeConfig.icon }}>
          {securityIcons[currentIcon]}
        </div>
        <div
          className="cyber-spin-spinner-ring cyber-spin-spinner-ring--inner"
          style={{
            width: `${sizeConfig.ringInner}px`,
            height: `${sizeConfig.ringInner}px`,
            borderWidth: `${sizeConfig.borderWidth}px`,
          }}
        ></div>
        <div
          className="cyber-spin-spinner-ring cyber-spin-spinner-ring--outer"
          style={{
            width: `${sizeConfig.ringOuter}px`,
            height: `${sizeConfig.ringOuter}px`,
            borderWidth: `${Math.max(1, sizeConfig.borderWidth - 1)}px`,
          }}
        ></div>
        <div className="cyber-spin-spinner-glow"></div>
        <div className="cyber-spin-spinner-scanline"></div>
      </div>

      {text && <div className="cyber-spin-spinner-text">{text}</div>}

      {showBinary && (
        <div className="cyber-spin-spinner-binary">
          <span className="cyber-spin-spinner-binary--highlight">{binaryStream.substring(0, 3)}</span>
          {binaryStream.substring(3)}
        </div>
      )}
    </div>
  )
}

export default CyberSpinner