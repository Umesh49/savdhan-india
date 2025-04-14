import { latestUpdates, cyberLaws, chatbotResponses, resources, quizQuestions, threatMapData } from "./mockData"

// Helper function to simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Function to simulate API response
const simulateResponse = async (data, errorChance = 0.05) => {
  await delay(Math.random() * 1000 + 500) // Random delay between 500-1500ms

  // Simulate occasional errors
  if (Math.random() < errorChance) {
    throw new Error("Network error. Please try again.")
  }

  return data
}

// Fetch latest updates
export const fetchLatestUpdates = async ({ limit = 10, page = 1 } = {}) => {
  try {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedUpdates = latestUpdates.slice(startIndex, endIndex)

    return await simulateResponse({
      success: true,
      data: paginatedUpdates,
      pagination: {
        total: latestUpdates.length,
        page,
        limit,
        totalPages: Math.ceil(latestUpdates.length / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching updates:", error)
    throw error
  }
}

// Fetch cyber laws
export const fetchCyberLaws = async ({ category = null } = {}) => {
  try {
    let filteredLaws = cyberLaws

    if (category) {
      filteredLaws = cyberLaws.filter((law) => law.category === category)
    }

    return await simulateResponse(filteredLaws)
  } catch (error) {
    console.error("Error fetching cyber laws:", error)
    throw error
  }
}

// Submit a complaint
export const submitComplaint = async (formData) => {
  try {
    // Simulate processing
    await delay(2000)

    // Generate a random reference number
    const referenceNumber = "CMP" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000)

    return {
      success: true,
      message: "Your complaint has been submitted successfully. We will review it and take appropriate action.",
      referenceNumber,
    }
  } catch (error) {
    console.error("Error submitting complaint:", error)
    throw error
  }
}

// Get chatbot response
export const getChatbotResponse = async (message) => {
  try {
    await delay(1000)

    // Simple keyword-based response system
    const lowerMessage = message.toLowerCase()
    let response

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      response = chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)]
    } else if (lowerMessage.includes("it act") || lowerMessage.includes("information technology act")) {
      response = chatbotResponses.itAct[Math.floor(Math.random() * chatbotResponses.itAct.length)]
    } else if (lowerMessage.includes("section 66")) {
      response = chatbotResponses.section66[Math.floor(Math.random() * chatbotResponses.section66.length)]
    } else if (lowerMessage.includes("phishing")) {
      response = chatbotResponses.phishing[Math.floor(Math.random() * chatbotResponses.phishing.length)]
    } else if (lowerMessage.includes("password")) {
      response = chatbotResponses.password[Math.floor(Math.random() * chatbotResponses.password.length)]
    } else if (lowerMessage.includes("complaint") || lowerMessage.includes("report")) {
      response = chatbotResponses.complaint[Math.floor(Math.random() * chatbotResponses.complaint.length)]
    } else if (lowerMessage.includes("ransomware")) {
      response = chatbotResponses.ransomware[Math.floor(Math.random() * chatbotResponses.ransomware.length)]
    } else if (lowerMessage.includes("privacy")) {
      response = chatbotResponses.privacy[Math.floor(Math.random() * chatbotResponses.privacy.length)]
    } else if (lowerMessage.includes("data protection") || lowerMessage.includes("personal data")) {
      response = chatbotResponses.dataProtection[Math.floor(Math.random() * chatbotResponses.dataProtection.length)]
    } else if (lowerMessage.includes("cyber insurance") || lowerMessage.includes("insurance")) {
      response = chatbotResponses.cyberInsurance[Math.floor(Math.random() * chatbotResponses.cyberInsurance.length)]
    } else if (lowerMessage.includes("child") || lowerMessage.includes("children") || lowerMessage.includes("kids")) {
      response = chatbotResponses.childSafety[Math.floor(Math.random() * chatbotResponses.childSafety.length)]
    } else {
      response = chatbotResponses.fallback[Math.floor(Math.random() * chatbotResponses.fallback.length)]
    }

    return {
      text: response,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error getting chatbot response:", error)
    throw error
  }
}

// Get threat map data
export const getThreatMapData = async () => {
  try {
    return await simulateResponse(threatMapData)
  } catch (error) {
    console.error("Error fetching threat map data:", error)
    throw error
  }
}

// Fetch quiz questions
export const fetchQuizQuestions = async ({ limit = 10 } = {}) => {
  try {
    // Shuffle and select random questions
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, limit)

    return await simulateResponse(selected)
  } catch (error) {
    console.error("Error fetching quiz questions:", error)
    throw error
  }
}

// Fetch resources
export const fetchResources = async ({ category = null, type = null, limit = 10, page = 1 } = {}) => {
  try {
    let filteredResources = resources

    if (category) {
      filteredResources = filteredResources.filter((resource) => resource.category === category)
    }

    if (type) {
      filteredResources = filteredResources.filter((resource) => resource.type === type)
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedResources = filteredResources.slice(startIndex, endIndex)

    return await simulateResponse({
      success: true,
      data: paginatedResources,
      pagination: {
        total: filteredResources.length,
        page,
        limit,
        totalPages: Math.ceil(filteredResources.length / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching resources:", error)
    throw error
  }
}

// User authentication functions (mock)
export const login = async (credentials) => {
  try {
    await delay(1500)

    // Mock validation
    if (credentials.email === "user@example.com" && credentials.password === "password123") {
      return {
        success: true,
        token: "mock-jwt-token",
        user: {
          id: "1",
          name: "Test User",
          email: "user@example.com",
          role: "user",
        },
      }
    } else {
      return {
        success: false,
        message: "Invalid email or password",
      }
    }
  } catch (error) {
    console.error("Error during login:", error)
    throw error
  }
}

export const register = async (userData) => {
  try {
    await delay(2000)

    // Mock validation
    if (userData.email === "user@example.com") {
      return {
        success: false,
        message: "Email already in use",
      }
    }

    return {
      success: true,
      message: "Registration successful! Please check your email to verify your account.",
    }
  } catch (error) {
    console.error("Error during registration:", error)
    throw error
  }
}

// Get user complaints
export const getUserComplaints = async () => {
  try {
    await delay(1500)

    // Mock user complaints
    const mockComplaints = [
      {
        _id: "1",
        referenceNumber: "CMP20230001",
        incidentDetails: {
          incidentType: "phishing_attempt",
          incidentDate: "2023-06-15",
        },
        status: "under_review",
        createdAt: "2023-06-16T10:30:00Z",
      },
      {
        _id: "2",
        referenceNumber: "CMP20230002",
        incidentDetails: {
          incidentType: "online_fraud",
          incidentDate: "2023-07-20",
        },
        status: "resolved",
        createdAt: "2023-07-21T14:45:00Z",
      },
    ]

    return await simulateResponse(mockComplaints)
  } catch (error) {
    console.error("Error fetching user complaints:", error)
    throw error
  }
}
