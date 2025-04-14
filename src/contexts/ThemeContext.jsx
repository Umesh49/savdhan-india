"use client"

import { createContext, useState, useEffect, useContext } from "react"
import theme from "../theme"

// Create the context
const ThemeContext = createContext()

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // State to track dark mode preference
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode for cybersecurity theme
  // State to track matrix animation intensity
  const [matrixIntensity, setMatrixIntensity] = useState("medium") // low, medium, high
  // State to track accent color choice
  const [accentColor, setAccentColor] = useState("green") // green, blue, purple

  // Get user's preferred theme from localStorage or system preference on initial load
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("darkMode")
    const savedMatrixIntensity = localStorage.getItem("matrixIntensity")
    const savedAccentColor = localStorage.getItem("accentColor")
    
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true")
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }

    // Set matrix intensity and accent color from localStorage if available
    if (savedMatrixIntensity) {
      setMatrixIntensity(savedMatrixIntensity)
    }
    
    if (savedAccentColor) {
      setAccentColor(savedAccentColor)
    }
  }, [])

  // Apply theme changes to document root
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode)
    document.documentElement.setAttribute("data-accent", accentColor)
    document.documentElement.setAttribute("data-matrix", matrixIntensity)
    
    // Save preferences to localStorage
    localStorage.setItem("darkMode", darkMode)
    localStorage.setItem("matrixIntensity", matrixIntensity)
    localStorage.setItem("accentColor", accentColor)

    // Apply theme CSS variables
    const root = document.documentElement
    
    // Set primary color based on accent choice
    let primaryColor = theme.colors.primary.main // Default matrix green
    let primaryGlow = theme.colors.primary.glow
    
    if (accentColor === "blue") {
      primaryColor = theme.colors.secondary.main
      primaryGlow = theme.colors.secondary.glow
    } else if (accentColor === "purple") {
      primaryColor = theme.colors.accent.main
      primaryGlow = theme.colors.accent.glow
    }
    
    // Apply colors
    root.style.setProperty('--color-primary', primaryColor)
    root.style.setProperty('--color-primary-glow', primaryGlow)
    root.style.setProperty('--color-background', darkMode ? theme.colors.background.dark : '#f8f9fa')
    root.style.setProperty('--color-text', darkMode ? theme.colors.text.primary : theme.colors.text.inverse)
    root.style.setProperty('--color-text-secondary', darkMode ? theme.colors.text.secondary : '#555555')
    root.style.setProperty('--color-border', darkMode ? theme.colors.border.light : '#e5e7eb')
    
    // Apply matrix opacity based on intensity
    let matrixOpacity = "0.15" // Medium
    if (matrixIntensity === "low") {
      matrixOpacity = "0.07"
    } else if (matrixIntensity === "high") {
      matrixOpacity = "0.25"
    }
    root.style.setProperty('--matrix-opacity', matrixOpacity)
    
  }, [darkMode, matrixIntensity, accentColor])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  // Change matrix intensity
  const changeMatrixIntensity = (intensity) => {
    if (["low", "medium", "high"].includes(intensity)) {
      setMatrixIntensity(intensity)
    }
  }

  // Change accent color
  const changeAccentColor = (color) => {
    if (["green", "blue", "purple"].includes(color)) {
      setAccentColor(color)
    }
  }

  // Get color values from theme based on current settings
  const getThemeColors = () => {
    return {
      primary: accentColor === "green" 
        ? theme.colors.primary 
        : accentColor === "blue" 
          ? theme.colors.secondary 
          : theme.colors.accent,
      background: darkMode 
        ? theme.colors.background 
        : { dark: '#f8f9fa', darker: '#e5e7eb', card: '#ffffff' },
      text: darkMode 
        ? theme.colors.text 
        : { primary: '#000000', secondary: '#555555', muted: '#777777' }
    }
  }

  return (
    <ThemeContext.Provider 
      value={{ 
        darkMode, 
        toggleDarkMode,
        matrixIntensity,
        changeMatrixIntensity,
        accentColor,
        changeAccentColor,
        colors: getThemeColors(),
        theme: theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext