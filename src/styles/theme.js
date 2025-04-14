// Enhanced cybersecurity design system for Savdhaan India
const theme = {
  // Color palette
  colors: {
    // Primary colors
    primary: {
      main: "#00ff41", // Matrix green for main accents
      light: "rgba(0, 255, 65, 0.2)",
      dark: "#00cc33",
      glow: "0 0 10px rgba(0, 255, 65, 0.7), 0 0 20px rgba(0, 255, 65, 0.4)"
    },
    // Secondary colors
    secondary: {
      main: "#0cebff", // Cyber blue for secondary elements
      light: "rgba(12, 235, 255, 0.2)",
      dark: "#0aa8b8",
      glow: "0 0 10px rgba(12, 235, 255, 0.7), 0 0 20px rgba(12, 235, 255, 0.4)"
    },
    // Accent colors
    accent: {
      main: "#ff00ff", // Neon purple for highlights
      light: "rgba(255, 0, 255, 0.2)",
      dark: "#cc00cc",
      glow: "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.4)"
    },
    // Warning colors
    warning: {
      main: "#ffcc00", // Amber for warnings
      light: "rgba(255, 204, 0, 0.2)",
      dark: "#e6b800",
      glow: "0 0 10px rgba(255, 204, 0, 0.7), 0 0 20px rgba(255, 204, 0, 0.4)"
    },
    // Danger colors
    danger: {
      main: "#ff0055", // Neon red for errors/danger
      light: "rgba(255, 0, 85, 0.2)",
      dark: "#cc0044",
      glow: "0 0 10px rgba(255, 0, 85, 0.7), 0 0 20px rgba(255, 0, 85, 0.4)"
    },
    // Background colors
    background: {
      dark: "#0a0e17", // Deep blue-black
      darker: "#050709", // Even darker for contrast
      darkest: "#000000", // Pure black
      card: "#111927", // Slightly lighter for cards
      terminal: "#0D0208", // Terminal black
      overlay: "rgba(5, 7, 9, 0.8)", // For overlays
    },
    // Text colors
    text: {
      primary: "#ffffff", // White for primary text
      secondary: "#b3b3b3", // Light gray for secondary text
      muted: "#666666", // Muted text
      inverse: "#000000", // Black for text on light backgrounds
      terminal: "#00ff41", // Matrix green for terminal text
    },
    // Border colors
    border: {
      light: "rgba(255, 255, 255, 0.1)",
      medium: "rgba(255, 255, 255, 0.2)",
      focused: "#00ff41",
      terminal: "#00ff41",
    },
    // Gradient presets
    gradients: {
      primary: "linear-gradient(135deg, #00ff41 0%, #0cebff 100%)",
      cyber: "linear-gradient(90deg, #ff0055 0%, #0cebff 50%, #00ff41 100%)",
      dark: "linear-gradient(135deg, #111927 0%, #0a0e17 100%)",
      matrix: "linear-gradient(180deg, #00ff41 0%, #003b0f 100%)",
      terminal: "linear-gradient(180deg, #0d0208 0%, #000000 100%)",
    },
  },

  // Typography
  typography: {
    fontFamily: {
      display: '"Orbitron", "Rajdhani", sans-serif', // For headings and display text
      body: '"Inter", "Roboto Mono", monospace', // For body text
      mono: '"JetBrains Mono", "Courier New", monospace', // For code and technical text
      terminal: '"Share Tech Mono", "VT323", monospace', // For terminal-style text
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Spacing
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
  },

  // Borders
  borders: {
    radius: {
      none: "0",
      sm: "0.125rem", // 2px
      md: "0.25rem", // 4px
      lg: "0.5rem", // 8px
      xl: "1rem", // 16px
      full: "9999px",
    },
    width: {
      none: "0",
      thin: "1px",
      thick: "2px",
      thicker: "4px",
    },
    types: {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted",
      double: "double",
      terminal: "1px solid #00ff41",
    }
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
    inner: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
    outline: "0 0 0 3px rgba(0, 255, 65, 0.5)",
    neon: "0 0 10px rgba(0, 255, 65, 0.7), 0 0 20px rgba(0, 255, 65, 0.5), 0 0 30px rgba(0, 255, 65, 0.3)",
    neonBlue: "0 0 10px rgba(12, 235, 255, 0.7), 0 0 20px rgba(12, 235, 255, 0.5), 0 0 30px rgba(12, 235, 255, 0.3)",
    neonPurple: "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)",
    terminal: "0 0 10px #00ff41, 0 0 20px rgba(0, 255, 65, 0.5)",
  },

  // Animation
  animations: {
    glitch: "glitch 1s infinite",
    flicker: "flicker 2s linear infinite",
    pulse: "pulse 2s ease-in-out infinite",
    typing: "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
    scanline: "scanline 2s linear infinite",
    loading: "loading 1.5s ease-in-out infinite",
    float: "float 6s ease-in-out infinite",
    rotate: "rotate 4s linear infinite",
  },

  // Z-index
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: "auto",
  },

  // Transitions
  transitions: {
    duration: {
      fastest: "100ms",
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "1000ms",
    },
    timing: {
      ease: "ease",
      linear: "linear",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Components specific styling
  components: {
    terminal: {
      background: "#0D0208",
      text: "#00ff41",
      border: "1px solid #00ff41",
      borderRadius: "4px",
      fontFamily: '"Share Tech Mono", monospace',
      boxShadow: "0 0 10px rgba(0, 255, 65, 0.3)",
    },
    card: {
      background: "rgba(17, 25, 39, 0.7)",
      border: "1px solid rgba(0, 255, 65, 0.3)",
      borderRadius: "6px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 255, 65, 0.1)",
    },
    button: {
      primary: {
        background: "linear-gradient(45deg, #00ff41, #0cebff)",
        color: "#000000",
        border: "none",
        borderRadius: "4px",
        padding: "0.75rem 1.5rem",
        fontWeight: 600,
        letterSpacing: "0.025em",
        boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)",
        hoverEffect: "transform: translateY(-2px); box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);"
      },
      secondary: {
        background: "transparent",
        color: "#00ff41",
        border: "1px solid #00ff41",
        borderRadius: "4px",
        padding: "0.75rem 1.5rem",
        fontWeight: 600,
        letterSpacing: "0.025em",
        boxShadow: "none",
        hoverEffect: "background-color: rgba(0, 255, 65, 0.1); box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);"
      }
    }
  }
}

export default theme