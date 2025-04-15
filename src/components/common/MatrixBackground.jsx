"use client"

import { useEffect, useRef, useMemo } from "react"

function MatrixBackground({ opacity = 0.15, speed = 1, density = 1, colorVariant = "green" }) {
  const canvasRef = useRef(null)

  // Define color variants
  const colorVariants = useMemo(() => ({
    green: {
      primary: "rgba(0, 255, 65, ", // Classic matrix green
      secondary: "rgba(0, 200, 50, ",
      rare: ["rgba(0, 119, 255, ", "rgba(255, 0, 255, "] // Blue and magenta for rare chars
    },
    blue: {
      primary: "rgba(0, 119, 255, ", 
      secondary: "rgba(12, 235, 255, ",
      rare: ["rgba(0, 255, 65, ", "rgba(255, 0, 255, "]
    },
    purple: {
      primary: "rgba(255, 0, 255, ",
      secondary: "rgba(200, 0, 200, ",
      rare: ["rgba(0, 255, 65, ", "rgba(0, 119, 255, "]
    },
    cyber: {
      primary: "rgba(255, 0, 85, ",
      secondary: "rgba(12, 235, 255, ",
      rare: ["rgba(0, 255, 65, ", "rgba(255, 210, 0, "]
    }
  }), [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    
    let animationId
    let lastTime = 0
    const frameRate = 24 // Framerate optimized for performance

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
      setupMatrix()
    }

    // Enhanced character set with more cybersecurity symbols
    const chars = "01アイウエオカキクケコサシスセソタチツテト♠♦♣♥ノハヒフヘホマミムメモヤユヨラリルレロワヲン▓▒░█▄▀▐▌{}[]()<>~!@#$%^&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz⚠⚡✓⚙⚪⚫⚔⚕⚛⚜⚝⚞⚟プグミ"
    let drops = []
    let brightness = []
    let colors = []
    let speeds = []
    let fontSize = 14
    let columns = 0
    
    // Enhanced matrix setup with density control
    const setupMatrix = () => {
      // Dynamic font size based on screen size
      fontSize = Math.max(14, Math.floor(window.innerWidth / 90))
      
      // Calculate columns with density factor
      columns = Math.floor((canvas.width / fontSize) * density)
      
      // Reset arrays
      drops = []
      brightness = []
      colors = []
      speeds = []
      
      // Get colors based on selected variant
      const colorSet = colorVariants[colorVariant] || colorVariants.green
      
      // Initialize arrays with improved randomization
      for (let i = 0; i < columns; i++) {
        // Stagger the starting position for more realistic effect
        drops[i] = Math.random() * -100
        
        // Variable brightness for dynamic effect
        brightness[i] = Math.random() * 0.5 + 0.5
        
        // Variable speed based on user setting and randomization
        speeds[i] = (Math.random() * 0.5 + 0.5) * speed
        
        // Color distribution with rare highlights
        const rand = Math.random()
        if (rand < 0.70) {
          colors[i] = colorSet.primary // Primary color (70%)
        } else if (rand < 0.95) {
          colors[i] = colorSet.secondary // Secondary color (25%)
        } else {
          // Rare accent colors (5%)
          const rareIndex = Math.floor(Math.random() * colorSet.rare.length)
          colors[i] = colorSet.rare[rareIndex]
        }
      }
    }

    // Enhanced drawing function with optimized performance
    const draw = (timestamp) => {
      // Throttle frames for performance
      if (timestamp - lastTime < 1000 / frameRate) {
        animationId = requestAnimationFrame(draw)
        return
      }
      
      lastTime = timestamp
      
      // Semi-transparent black for fade effect - adjusted for smoother trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
      
      // Set font with monospace for authentic cyber look
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`
      
      // Draw characters with enhanced effects
      for (let i = 0; i < drops.length; i++) {
        // Adaptive performance - skip columns on smaller screens
        if (window.innerWidth < 768 && i % 2 !== 0 && density > 0.8) continue;
        
        // Random character from our charset with higher chance of 0s and 1s for binary feel
        let charIndex
        const binChance = Math.random()
        if (binChance < 0.4) {
          charIndex = Math.floor(Math.random() * 2) // 0 or 1
        } else {
          charIndex = Math.floor(Math.random() * chars.length)
        }
        const text = chars.charAt(charIndex)
        
        // Calculate position
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Brightness calculation with head emphasis
        let alpha = brightness[i]
        if (drops[i] <= 1) {
          alpha = 1 // Full brightness for the first character (head)
        } else if (drops[i] <= 3) {
          // Gradient effect for characters near the head
          alpha = 0.8 + (0.2 * (3 - drops[i]))
        }
        
        // Apply color with calculated brightness
        ctx.fillStyle = `${colors[i]}${alpha * opacity})`
        
        // Enhanced glow effect for leading characters
        if (drops[i] <= 2 || Math.random() > 0.97) {
          ctx.shadowColor = `${colors[i]}1)`
          ctx.shadowBlur = 8
        } else {
          ctx.shadowBlur = 0
        }
        
        // Draw character if within bounds
        if (y > 0 && y < canvas.height / window.devicePixelRatio) {
          ctx.fillText(text, x, y)
        }
        
        // Dynamic character flickering
        if (Math.random() > 0.996) {
          brightness[i] = Math.random() * 0.5 + 0.5
        }
        
        // Intelligent reset logic with variable column lengths
        const maxHeight = canvas.height / window.devicePixelRatio / fontSize
        const randomEnd = maxHeight * (0.5 + Math.random() * 0.5) // Variable column length
        
        if (drops[i] * fontSize > randomEnd) {
          // Reset with probability for more natural flow
          if (Math.random() > 0.99) {
            drops[i] = 0
            brightness[i] = Math.random() * 0.5 + 0.5
            speeds[i] = (Math.random() * 0.5 + 0.5) * speed
          }
        } else {
          // Move drop down with variable speed
          drops[i] += speeds[i] * 0.1
        }
        
        // Occasionally change character
        if (Math.random() > 0.96 && drops[i] > 0) {
          charIndex = Math.floor(Math.random() * chars.length)
        }
      }
      
      animationId = requestAnimationFrame(draw)
    }

    // Initialize canvas and start animation
    resizeCanvas()
    setupMatrix()
    animationId = requestAnimationFrame(draw)
    
    // Handle window resize
    window.addEventListener("resize", resizeCanvas)
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [opacity, speed, density, colorVariant, colorVariants])

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
        opacity: 1, // We control opacity through the color values
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  )
}

export default MatrixBackground