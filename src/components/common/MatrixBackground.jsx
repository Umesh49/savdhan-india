"use client"

import { useEffect, useRef } from "react"

function MatrixBackground({ opacity = 0.15, speed = 1 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    
    let animationId
    let lastTime = 0
    const frameRate = 30; // Frames per second
    const frameInterval = 1000 / frameRate;

    // Set canvas dimensions with device pixel ratio for sharpness
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      ctx.scale(pixelRatio, pixelRatio)
      
      // Reset drops when resizing
      setupMatrix()
    }

    // Matrix characters - mix of binary, katakana, unicode symbols, and Latin
    const chars = "01アイウエオカキクケコサシスセソタチツテト♠♦♣♥ノハヒフヘホマミムメモヤユヨラリルレロワヲン▓▒░█▄▀▐▌{}[]()<>~!@#$%^&ABCDプグミ"
    let fontSize = 14
    let columns = 0
    let drops = []
    let brightness = []
    let colors = []
    let speeds = []
    
    // Setup matrix parameters
    const setupMatrix = () => {
      fontSize = Math.max(14, Math.floor(window.innerWidth / 80)) // Responsive font size
      columns = Math.floor(canvas.width / fontSize)
      
      // Reset arrays
      drops = []
      brightness = []
      colors = []
      speeds = []
      
      // Initialize arrays
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100 // Start above canvas at random positions
        brightness[i] = Math.random() * 0.5 + 0.5 // Random brightness between 0.5 and 1
        speeds[i] = (Math.random() * 0.5 + 0.5) * speed // Random speed multiplier
        
        // Color distribution - mostly green
        const rand = Math.random()
        if (rand < 0.85) {
          colors[i] = "rgba(0, 255, 65, " // Matrix green
        } else if (rand < 0.95) {
          colors[i] = "rgba(0, 119, 255, " // Cyber blue
        } else {
          colors[i] = "rgba(255, 0, 255, " // Cyber magenta
        }
      }
    }

    // Drawing function
    const draw = (timestamp) => {
      // Apply throttling for performance
      if (timestamp - lastTime < frameInterval) {
        animationId = requestAnimationFrame(draw)
        return
      }
      
      lastTime = timestamp
      
      // Semi-transparent black for fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
      
      // Set the monospace font
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Skip some columns for performance on smaller devices
        if (window.innerWidth < 768 && i % 2 !== 0) continue;
        
        // Random character from our charset
        const charIndex = Math.floor(Math.random() * chars.length)
        const text = chars.charAt(charIndex)
        
        // Calculate position
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // First character in column is brighter (head of the stream)
        let alpha = brightness[i]
        if (drops[i] <= 1) {
          alpha = 1 // Full brightness for the first character
        }
        
        // Set color with calculated brightness
        ctx.fillStyle = `${colors[i]}${alpha})`
        
        // Add glow effect selectively
        if (Math.random() > 0.95) {
          ctx.shadowColor = `${colors[i]}1)`
          ctx.shadowBlur = 10
        } else {
          ctx.shadowBlur = 0
        }
        
        // Draw the character if it's within canvas bounds
        if (y > 0 && y < canvas.height / window.devicePixelRatio) {
          ctx.fillText(text, x, y)
        }
        
        // Occasionally change brightness for flickering effect
        if (Math.random() > 0.99) {
          brightness[i] = Math.random() * 0.5 + 0.5
        }
        
        // Reset drop to top with random delay if it's at the bottom
        const maxHeight = canvas.height / window.devicePixelRatio / fontSize
        if (drops[i] * fontSize > canvas.height / window.devicePixelRatio) {
          // Only reset some drops to maintain a consistent flow
          if (Math.random() > 0.99) {
            drops[i] = 0
            brightness[i] = Math.random() * 0.5 + 0.5
            speeds[i] = (Math.random() * 0.5 + 0.5) * speed
          }
        } else {
          // Move drop down at variable speed
          drops[i] += speeds[i] * 0.1
        }
      }
      
      animationId = requestAnimationFrame(draw)
    }

    // Initialize canvas
    resizeCanvas()
    setupMatrix()
    
    // Start animation loop
    animationId = requestAnimationFrame(draw)
    
    // Handle window resize
    window.addEventListener("resize", resizeCanvas)
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [opacity, speed])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: opacity,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  )
}

export default MatrixBackground