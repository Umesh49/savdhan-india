export const dashboardData = {
  user: {
    name: "NightHawk",
    email: "nighthawk@securemail.net",
    role: "admin",
  },
  complaints: [
    {
      _id: "6372e04b8a5a984f510ab345",
      referenceNumber: "CY-2025-04583",
      status: "in_progress",
      createdAt: "2025-04-15T08:30:22Z",
      incidentDetails: {
        incidentType: "phishing_attack",
        description:
          "Received suspicious email claiming to be from bank requesting login credentials",
      },
    },
    {
      _id: "6372e04b8a5a984f510ab346",
      referenceNumber: "CY-2025-04367",
      status: "under_review",
      createdAt: "2025-04-12T14:22:10Z",
      incidentDetails: {
        incidentType: "ransomware",
        description:
          "System files encrypted, received demand for cryptocurrency payment",
      },
    },
    {
      _id: "6372e04b8a5a984f510ab347",
      referenceNumber: "CY-2025-04129",
      status: "resolved",
      createdAt: "2025-04-05T09:45:16Z",
      incidentDetails: {
        incidentType: "data_breach",
        description: "Personal information appeared on dark web marketplace",
      },
    },
  ],
  updates: [
    {
      _id: "7456f12a9b6b095e621bc456",
      title: "CRITICAL: New Zero-Day Vulnerability in Popular VPN Services",
      summary:
        "Security researchers have identified a critical vulnerability affecting multiple VPN providers that could allow remote code execution. Update your systems immediately.",
      publishedAt: "2025-04-20T10:15:00Z",
    },
    {
      _id: "7456f12a9b6b095e621bc457",
      title: "Emerging Threat: Stealth Cryptojacking Malware",
      summary:
        "A new strain of cryptojacking malware using advanced evasion techniques has been detected in the wild. The malware hides in system processes and can bypass standard detection methods.",
      publishedAt: "2025-04-18T15:30:00Z",
    },
    {
      _id: "7456f12a9b6b095e621bc458",
      title: "Advisory: Social Engineering Campaign Targeting Financial Sector",
      summary:
        "Threat actors are conducting sophisticated social engineering attacks against banking employees. The campaign uses AI-generated voice deepfakes to impersonate executives.",
      publishedAt: "2025-04-16T09:45:00Z",
    },
  ],
};