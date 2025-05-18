import { useRef, useEffect } from "react"
import { FaTerminal, FaLock, FaKey, FaCode } from "react-icons/fa"
import "./CyberSpinner.css"

function CyberSpinner({ size = "large", variant = "green", className = "", icon = "terminal" }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  const sizeConfig = {
    small: { spinner: 60, icon: "1.2rem" },
    medium: { spinner: 100, icon: "2rem" },
    large: { spinner: 150, icon: "3rem" },
  }

  const config = typeof size === "string" ? sizeConfig[size] : { spinner: size, icon: `${size / 40}rem` }

  const icons = {
    terminal: <FaTerminal />,
    lock: <FaLock />,
    key: <FaKey />,
    code: <FaCode />,
  }

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      const width = config.spinner
      const height = config.spinner

      canvas.width = width
      canvas.height = height

      const fontSize = Math.max(10, Math.floor(width / 20))
      const columns = Math.floor(width / fontSize)
      const drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * height))

      const particles = Array(15).fill().map(() => ({
        x: width / 2,
        y: height / 2,
        angle: Math.random() * 2 * Math.PI,
        radius: Math.random() * width * 0.4 + width * 0.15,
        speed: Math.random() * 0.05 + 0.02,
      }))

      const drawMatrix = (time) => {
        ctx.fillStyle = `rgba(0, 0, 0, 0.1)`
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = "currentColor"
        ctx.font = `${fontSize}px monospace`

        for (let i = 0; i < drops.length; i++) {
          const x = i * fontSize
          const y = drops[i] * fontSize
          const text = Math.random() > 0.5 ? "0" : "1"
          ctx.fillText(text, x, y)

          drops[i] += 1 + Math.random() * 2
          if (drops[i] * fontSize > height) drops[i] = 0
        }

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        particles.forEach(p => {
          p.angle += p.speed
          const px = p.x + Math.cos(p.angle) * p.radius
          const py = p.y + Math.sin(p.angle) * p.radius
          ctx.beginPath()
          ctx.arc(px, py, 2, 0, 2 * Math.PI)
          ctx.fill()
        })

        animationRef.current = requestAnimationFrame(drawMatrix)
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
      ctx.fillRect(0, 0, width, height)
      drawMatrix()

      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
      }
    }
  }, [config.spinner])

  return (
    <div className={`cyber-spin-container ${className}`}>
      <div
        className={`cyber-spin-spinner cyber-spin-${variant}`}
        style={{ width: `${config.spinner}px`, height: `${config.spinner}px` }}
      >
        <div className="cyber-spin-ring cyber-spin-ring-outer"></div>
        <div className="cyber-spin-ring cyber-spin-ring-middle"></div>
        <div className="cyber-spin-ring cyber-spin-ring-inner"></div>
        <canvas ref={canvasRef} className="cyber-spin-matrix" />
        <div className="cyber-spin-radial-grid"></div>
        <div className="cyber-spin-hexagon">
          <div className="cyber-spin-icon" style={{ fontSize: config.icon }}>
            {icons[icon] || icons.terminal}
          </div>
        </div>
        <div className="cyber-spin-data-lines">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="cyber-spin-data-line" style={{ top: `${5 + i * 8}%` }} />
          ))}
        </div>
        <div className="cyber-spin-scanline"></div>
        <div className="cyber-spin-glitch-overlay"></div>
        <div className="cyber-spin-pulse-glow"></div>
        <div className="cyber-spin-distortion"></div>
      </div>
    </div>
  )
}

export default CyberSpinner