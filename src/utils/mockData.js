// Mock data for Savdhaan India

// Mock latest updates
export const latestUpdates = [
  {
    id: 1,
    title: "New Cybersecurity Guidelines Released",
    description: "The government has released new guidelines for cybersecurity practices in organizations.",
    date: "2024-04-13",
    category: "Policy",
    url: "/updates/new-cybersecurity-guidelines"
  },
  {
    id: 2,
    title: "Major Phishing Campaign Detected",
    description: "A large-scale phishing campaign targeting Indian users has been identified.",
    date: "2024-04-12",
    category: "Threats",
    url: "/updates/phishing-campaign-alert"
  },
  {
    id: 3,
    title: "Cyber Awareness Month Activities",
    description: "Join us for various activities during Cyber Awareness Month.",
    date: "2024-04-10",
    category: "Events",
    url: "/updates/cyber-awareness-month"
  }
]

// Mock chatbot responses
export const chatbotResponses = {
  greeting: [
    "Hello! How can I help you with cybersecurity today?",
    "Hi there! I'm here to assist you with cyber-related queries.",
    "Welcome! How may I help you stay cyber safe?"
  ],
  itAct: [
    "The Information Technology Act, 2000 is India's primary law for cybercrime and electronic commerce.",
    "The IT Act provides legal recognition for electronic transactions and addresses cybercrime."
  ],
  section66: [
    "Section 66 of the IT Act deals with computer-related offenses.",
    "Under Section 66, hacking and data theft are punishable with up to 3 years imprisonment."
  ],
  phishing: [
    "Phishing is a cyber attack where criminals pose as legitimate institutions to steal your data.",
    "Always verify the sender's email address and don't click on suspicious links."
  ],
  password: [
    "Use strong passwords with a mix of letters, numbers, and special characters.",
    "Never share your passwords and use different passwords for different accounts."
  ],
  complaint: [
    "You can file a cybercrime complaint through the National Cyber Crime Reporting Portal.",
    "Document all evidence before filing a cybercrime complaint."
  ],
  ransomware: [
    "Ransomware is malware that encrypts your files and demands payment for decryption.",
    "Regular backups are your best defense against ransomware attacks."
  ],
  privacy: [
    "Protect your privacy by being careful about what you share online.",
    "Use privacy settings on social media to control who can see your information."
  ],
  dataProtection: [
    "The Digital Personal Data Protection Act protects your personal data rights.",
    "Organizations must obtain your consent before processing your personal data."
  ],
  cyberInsurance: [
    "Cyber insurance can protect you against financial losses from cyber attacks.",
    "Consider cyber insurance for your business to mitigate cybersecurity risks."
  ],
  childSafety: [
    "Use parental controls and monitor your children's online activities.",
    "Teach children about online safety and the risks of sharing personal information."
  ],
  fallback: [
    "I'm not sure about that. Could you please rephrase your question?",
    "I don't have specific information about that. Would you like to know about something else?"
  ]
}

// Mock resources
export const resources = [
  {
    id: 1,
    title: "Cybersecurity Best Practices Guide",
    description: "A comprehensive guide to protecting yourself online.",
    category: "Guide",
    type: "PDF",
    url: "/resources/cybersecurity-guide.pdf"
  },
  {
    id: 2,
    title: "Online Safety Tutorial",
    description: "Video tutorials on staying safe online.",
    category: "Tutorial",
    type: "Video",
    url: "/resources/online-safety-tutorial"
  },
  {
    id: 3,
    title: "Password Security Checklist",
    description: "Essential tips for creating and managing secure passwords.",
    category: "Checklist",
    type: "PDF",
    url: "/resources/password-checklist.pdf"
  }
]

// Mock quiz questions
export const quizQuestions = [
  {
    id: 1,
    question: "What is phishing?",
    options: [
      "A type of fish",
      "A cyber attack that tricks users into revealing sensitive information",
      "A programming language",
      "A type of computer virus"
    ],
    correctAnswer: 1,
    explanation: "Phishing is a cyber attack where criminals pose as legitimate entities to steal sensitive information."
  },
  {
    id: 2,
    question: "Which of these is a strong password?",
    options: [
      "password123",
      "qwerty",
      "P@ssw0rd!2024",
      "abcdef"
    ],
    correctAnswer: 2,
    explanation: "Strong passwords contain a mix of uppercase, lowercase, numbers, and special characters."
  },
  {
    id: 3,
    question: "What should you do if you receive a suspicious email?",
    options: [
      "Click all links to check them",
      "Reply with your information",
      "Forward it to everyone",
      "Don't click any links and report it"
    ],
    correctAnswer: 3,
    explanation: "Never click links in suspicious emails. Report them to your IT department or mark as spam."
  }
]

// Mock threat map data
export const threatMapData = {
  regions: [
    {
      id: "IN-DL",
      name: "Delhi",
      threats: {
        phishing: 150,
        malware: 80,
        ddos: 30,
        total: 260
      }
    },
    {
      id: "IN-MH",
      name: "Maharashtra",
      threats: {
        phishing: 200,
        malware: 120,
        ddos: 45,
        total: 365
      }
    },
    {
      id: "IN-KA",
      name: "Karnataka",
      threats: {
        phishing: 180,
        malware: 90,
        ddos: 40,
        total: 310
      }
    }
  ],
  totalThreats: 935,
  lastUpdated: "2024-04-13T10:00:00Z"
}

// Mock cyber laws data
export const cyberLaws = [
  {
    id: 1,
    title: "Information Technology Act, 2000",
    category: "Primary Legislation",
    year: 2000,
    description:
      "The Information Technology Act, 2000 (IT Act) is the primary law in India dealing with cybercrime and electronic commerce. It provides legal recognition for transactions carried out by means of electronic data interchange and other means of electronic communication, commonly referred to as 'electronic commerce'.",
    sections: [
      {
        id: "s43",
        title: "Section 43: Penalty and Compensation for damage to computer, computer system, etc.",
        content:
          "If any person without permission of the owner or any other person who is in charge of a computer, computer system or computer network accesses or secures access, downloads, copies or extracts any data, introduces or causes to be introduced any computer contaminant or computer virus, etc., shall be liable to pay damages by way of compensation to the person so affected.",
      },
      {
        id: "s66",
        title: "Section 66: Computer Related Offences",
        content:
          "If any person, dishonestly or fraudulently, does any act referred to in section 43, he shall be punishable with imprisonment for a term which may extend to three years or with fine which may extend to five lakh rupees or with both.",
      },
      {
        id: "s67",
        title: "Section 67: Punishment for publishing or transmitting obscene material in electronic form",
        content:
          "Whoever publishes or transmits or causes to be published or transmitted in the electronic form, any material which is lascivious or appeals to the prurient interest or tends to deprave and corrupt persons, shall be punished with imprisonment and fine.",
      },
    ],
    pdfUrl: "/documents/it-act-2000.pdf",
    officialLink: "https://www.meity.gov.in/content/information-technology-act-2000",
  },
  {
    id: 2,
    title: "Information Technology (Amendment) Act, 2008",
    category: "Amendment",
    year: 2008,
    description:
      "The IT Amendment Act 2008 was passed by the Indian Parliament in October 2008 and came into force on 27 October 2009. It made significant changes to the IT Act 2000, introducing new sections addressing issues like cybercrime, data protection, and e-commerce.",
    sections: [
      {
        id: "s66A",
        title: "Section 66A: Punishment for sending offensive messages (Struck down by Supreme Court)",
        content:
          "This section dealt with punishment for sending offensive messages through communication services. It was struck down by the Supreme Court of India in the case of Shreya Singhal v. Union of India in 2015 as it violated the freedom of speech guaranteed under Article 19(1)(a) of the Constitution of India.",
      },
      {
        id: "s66C",
        title: "Section 66C: Punishment for identity theft",
        content:
          "Whoever, fraudulently or dishonestly makes use of the electronic signature, password or any other unique identification feature of any other person, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to rupees one lakh.",
      },
      {
        id: "s66F",
        title: "Section 66F: Punishment for cyber terrorism",
        content:
          "Whoever, with intent to threaten the unity, integrity, security or sovereignty of India or to strike terror in the people or any section of the people, denies or causes the denial of access to any person authorized to access computer resource, or attempts to penetrate or access a computer resource without authorization or exceeding authorized access; or introducing or causing to introduce any computer contaminant, and by means of such conduct causes or is likely to cause death or injuries to persons or damage to or destruction of property or disrupts or knowing that it is likely to cause damage or disruption of supplies or services essential to the life of the community or adversely affect the critical information infrastructure, shall be punishable with imprisonment which may extend to imprisonment for life.",
      },
    ],
    pdfUrl: "/documents/it-amendment-act-2008.pdf",
    officialLink: "https://www.meity.gov.in/content/information-technology-act-2000",
  },
  {
    id: 3,
    title: "Digital Personal Data Protection Act, 2023",
    category: "Data Protection",
    year: 2023,
    description:
      "The Digital Personal Data Protection Act, 2023 is India's comprehensive data protection legislation that establishes a framework for processing digital personal data while recognizing both the right of individuals to protect their personal data and the need to process such data for lawful purposes.",
    sections: [
      {
        id: "s8",
        title: "Section 8: Consent for processing personal data",
        content:
          "This section establishes that data fiduciaries must obtain valid consent from data principals before processing their personal data. It outlines the conditions for valid consent, including that it must be free, informed, specific, clear, and capable of being withdrawn.",
      },
      {
        id: "s10",
        title: "Section 10: Rights of data principals",
        content:
          "This section outlines the rights of individuals (data principals) regarding their personal data, including the right to access information, the right to correction and erasure, the right to grievance redressal, and the right to nominate another person in case of death or incapacity.",
      },
      {
        id: "s25",
        title: "Section 25: Penalties for non-compliance",
        content:
          "This section establishes financial penalties for non-compliance with the provisions of the Act. Penalties can range up to ₹250 crore for serious violations, with the specific amount determined based on the nature, gravity, and duration of the violation.",
      },
    ],
    pdfUrl: "/documents/dpdp-act-2023.pdf",
    officialLink: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
  },
  {
    id: 4,
    title: "Indian Penal Code Sections Related to Cybercrime",
    category: "Criminal Law",
    year: 1860,
    description:
      "Although the Indian Penal Code (IPC) was enacted long before the digital age, several of its provisions are applicable to cybercrimes and are often invoked alongside the IT Act in cybercrime cases.",
    sections: [
      {
        id: "s354D",
        title: "Section 354D: Stalking",
        content:
          "This section criminalizes stalking, including cyberstalking, where a man follows a woman and contacts, or attempts to contact her to foster personal interaction repeatedly despite a clear indication of disinterest by such woman. It is punishable with imprisonment up to three years for first conviction and up to five years for subsequent convictions.",
      },
      {
        id: "s499",
        title: "Section 499: Defamation",
        content:
          "This section can be applied to cases of online defamation, where someone makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm, the reputation of such person.",
      },
      {
        id: "s503",
        title: "Section 503: Criminal intimidation",
        content:
          "This section can be applied to online threats, where someone threatens another with any injury to their person, reputation, or property, with intent to cause alarm or to cause that person to do any act which they are not legally bound to do, or to omit to do any act which that person is legally entitled to do.",
      },
    ],
    pdfUrl: "/documents/ipc-cyber-sections.pdf",
    officialLink: "https://legislative.gov.in/sites/default/files/A1860-45.pdf",
  },
  {
    id: 5,
    title: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
    category: "Rules and Regulations",
    year: 2021,
    description:
      "These rules regulate social media platforms, OTT platforms, and digital news media. They establish a framework for addressing grievances and ensuring compliance with Indian laws, including provisions for content takedown, user verification, and traceability of messages.",
    sections: [
      {
        id: "r3",
        title: "Rule 3: Due diligence by intermediaries",
        content:
          "This rule outlines the due diligence requirements for intermediaries, including publishing rules and regulations, privacy policy, and user agreement. It also mandates the establishment of a grievance redressal mechanism and the appointment of a Grievance Officer.",
      },
      {
        id: "r4",
        title: "Rule 4: Additional due diligence for significant social media intermediaries",
        content:
          "This rule imposes additional requirements on significant social media intermediaries (those with more than 50 lakh registered users), including the appointment of a Chief Compliance Officer, a Nodal Contact Person, and a Resident Grievance Officer, all of whom must be residents of India.",
      },
      {
        id: "r9",
        title: "Rule 9: Code of Ethics for digital media",
        content:
          "This rule establishes a Code of Ethics for publishers of news and current affairs content and publishers of online curated content (OTT platforms), requiring them to adhere to certain standards and establish a self-regulatory mechanism.",
      },
    ],
    pdfUrl: "/documents/it-intermediary-guidelines-2021.pdf",
    officialLink:
      "https://www.meity.gov.in/content/notification-dated-25th-february-2021-gsr-139e-information-technology-intermediary",
  },
  {
    id: 6,
    title: "Prevention of Money Laundering Act, 2002 (PMLA)",
    category: "Financial Crime",
    year: 2002,
    description:
      "The PMLA is relevant to cybercrimes involving financial fraud, as it provides for the prevention of money laundering and confiscation of property derived from, or involved in, money laundering. It has been increasingly applied to cases of online financial fraud and cryptocurrency-related crimes.",
    sections: [
      {
        id: "s3",
        title: "Section 3: Offence of money laundering",
        content:
          "This section defines the offence of money laundering as direct or indirect attempts to indulge or knowingly assist or knowingly be a party or actually involved in any process or activity connected with the proceeds of crime and projecting it as untainted property.",
      },
      {
        id: "s4",
        title: "Section 4: Punishment for money laundering",
        content:
          "This section prescribes punishment for money laundering, which includes rigorous imprisonment for a term not less than three years but which may extend to seven years and a fine. In certain cases, the term may extend to ten years.",
      },
      {
        id: "s12",
        title: "Section 12: Reporting entity to maintain records",
        content:
          "This section mandates that banking companies, financial institutions, and intermediaries maintain records of transactions and verify the identity of their clients. This is particularly relevant for tracking digital financial transactions in cybercrime cases.",
      },
    ],
    pdfUrl: "/documents/pmla-2002.pdf",
    officialLink: "https://fiuindia.gov.in/pdfs/PMLA-2002.pdf",
  },
  {
    id: 7,
    title: "Copyright Act, 1957 (as amended)",
    category: "Intellectual Property",
    year: 1957,
    description:
      "The Copyright Act protects original literary, dramatic, musical, and artistic works, cinematograph films, and sound recordings from unauthorized use. In the digital context, it addresses issues like online piracy, unauthorized distribution of copyrighted content, and software piracy.",
    sections: [
      {
        id: "s51",
        title: "Section 51: Infringement of copyright",
        content:
          "This section defines what constitutes copyright infringement, including unauthorized reproduction, distribution, or public display of copyrighted works. In the digital context, this applies to unauthorized sharing of movies, music, software, and other copyrighted content online.",
      },
      {
        id: "s63",
        title: "Section 63: Offence of infringement of copyright",
        content:
          "This section prescribes punishment for copyright infringement, which includes imprisonment for a term not less than six months but which may extend to three years and a fine not less than fifty thousand rupees but which may extend to two lakh rupees.",
      },
      {
        id: "s65A",
        title: "Section 65A: Protection of technological measures",
        content:
          "This section, added by the Copyright (Amendment) Act, 2012, prohibits circumvention of technological measures applied for the purpose of protecting rights under the Copyright Act. This is particularly relevant for digital rights management (DRM) technologies used to protect digital content.",
      },
    ],
    pdfUrl: "/documents/copyright-act-1957.pdf",
    officialLink: "https://copyright.gov.in/Documents/CopyrightRules1957.pdf",
  },
  {
    id: 8,
    title: "Consumer Protection Act, 2019",
    category: "Consumer Protection",
    year: 2019,
    description:
      "The Consumer Protection Act, 2019 includes provisions specifically addressing e-commerce and online transactions. It provides a framework for protecting consumers from unfair trade practices, including those in the digital marketplace.",
    sections: [
      {
        id: "s2(7)",
        title: "Section 2(7): Definition of consumer",
        content:
          "This section defines a consumer to include anyone who buys goods or avails services, including through online transactions, making the Act applicable to e-commerce platforms and digital services.",
      },
      {
        id: "s94",
        title: "Section 94: Powers of Central Authority",
        content:
          "This section empowers the Central Consumer Protection Authority to take action against unfair trade practices in e-commerce, including misleading advertisements, violation of consumer rights, and unfair business practices by online platforms.",
      },
      {
        id: "s101",
        title: "Section 101: E-commerce guidelines",
        content:
          "This section provides for the formulation of guidelines for the prevention of unfair trade practices in e-commerce, direct selling, etc., addressing issues like fake reviews, misleading information, and unfair cancellation policies on online platforms.",
      },
    ],
    pdfUrl: "/documents/consumer-protection-act-2019.pdf",
    officialLink: "https://consumeraffairs.nic.in/sites/default/files/CP%20Act%202019.pdf",
  },
  {
    id: 9,
    title: "Reserve Bank of India Guidelines on Digital Payments",
    category: "Financial Regulations",
    year: 2022,
    description:
      "The Reserve Bank of India (RBI) has issued various guidelines and circulars regulating digital payments, online banking, and fintech operations in India. These guidelines aim to ensure security, prevent fraud, and protect consumers in digital financial transactions.",
    sections: [
      {
        id: "tokenization",
        title: "Card Tokenization Guidelines",
        content:
          "These guidelines mandate the tokenization of card data for online transactions, prohibiting merchants from storing actual card details. This aims to enhance security and reduce the risk of card data breaches in online transactions.",
      },
      {
        id: "2fa",
        title: "Two-Factor Authentication (2FA) Requirement",
        content:
          "RBI mandates two-factor authentication for all card-not-present transactions, requiring users to verify their identity through two different methods (like OTP and password) before completing online transactions.",
      },
      {
        id: "liability",
        title: "Customer Liability in Unauthorized Electronic Banking Transactions",
        content:
          "These guidelines define the extent of customer liability in cases of unauthorized electronic banking transactions, providing protection to customers who report such transactions promptly.",
      },
    ],
    pdfUrl: "/documents/rbi-digital-payment-guidelines.pdf",
    officialLink: "https://www.rbi.org.in/Scripts/NotificationUser.aspx",
  },
  {
    id: 10,
    title: "Telecom Regulatory Authority of India (TRAI) Regulations",
    category: "Telecom Regulations",
    year: 2018,
    description:
      "TRAI has issued various regulations addressing issues like spam messages, telemarketing calls, and data privacy in telecommunications. These regulations are relevant to cybercrimes involving mobile phones and telecommunications networks.",
    sections: [
      {
        id: "dnd",
        title: "Telecom Commercial Communications Customer Preference Regulations, 2018",
        content:
          "These regulations aim to curb unsolicited commercial communications (UCC) like spam calls and messages by establishing a framework for customer consent, sender registration, and complaint redressal.",
      },
      {
        id: "privacy",
        title: "Recommendations on Privacy, Security and Ownership of Data in the Telecom Sector",
        content:
          "These recommendations address issues of data privacy, security, and ownership in the telecom sector, proposing measures to protect user data and prevent its misuse by telecom service providers and third parties.",
      },
      {
        id: "netNeutrality",
        title: "Net Neutrality Regulations",
        content:
          "These regulations prohibit discriminatory treatment of content by internet service providers, ensuring that all internet traffic is treated equally. This is relevant to preventing censorship and ensuring open access to online content.",
      },
    ],
    pdfUrl: "/documents/trai-regulations.pdf",
    officialLink: "https://www.trai.gov.in/notifications/press-release",
  },
]

// Mock threat data for the threat map
export const mockThreatData = [
  {
    id: 1,
    title: "Phishing Campaign Targeting Bank Customers",
    type: "phishing",
    severity: "high",
    location: "Mumbai, Maharashtra",
    date: "2023-11-15",
    description:
      "A sophisticated phishing campaign targeting customers of major Indian banks through fake KYC update emails.",
    coordinates: { x: 45, y: 48 },
  },
  {
    id: 2,
    title: "Ransomware Attack on Healthcare Provider",
    type: "ransomware",
    severity: "critical",
    location: "Bangalore, Karnataka",
    date: "2023-11-14",
    description:
      "A major hospital chain suffered a ransomware attack encrypting patient records and demanding cryptocurrency payment.",
    coordinates: { x: 42, y: 58 },
  },
  {
    id: 3,
    title: "Data Breach at E-commerce Platform",
    type: "data breach",
    severity: "high",
    location: "Delhi, NCR",
    date: "2023-11-13",
    description:
      "Personal information of approximately 500,000 users exposed in a data breach at a popular e-commerce platform.",
    coordinates: { x: 43, y: 35 },
  },
  {
    id: 4,
    title: "DDoS Attack on Government Website",
    type: "ddos",
    severity: "medium",
    location: "Chennai, Tamil Nadu",
    date: "2023-11-12",
    description: "A distributed denial-of-service attack temporarily brought down a government service portal.",
    coordinates: { x: 45, y: 65 },
  },
  {
    id: 5,
    title: "Malware Targeting Banking Apps",
    type: "malware",
    severity: "high",
    location: "Hyderabad, Telangana",
    date: "2023-11-11",
    description:
      "A new Android malware strain targeting banking applications to steal credentials and financial information.",
    coordinates: { x: 43, y: 55 },
  },
  {
    id: 6,
    title: "Credential Stuffing Attack on Media Platform",
    type: "hacking",
    severity: "medium",
    location: "Ahmedabad, Gujarat",
    date: "2023-11-10",
    description:
      "Attackers using previously leaked credentials to gain unauthorized access to user accounts on a streaming platform.",
    coordinates: { x: 35, y: 45 },
  },
  {
    id: 7,
    title: "Supply Chain Attack on Software Provider",
    type: "malware",
    severity: "critical",
    location: "Pune, Maharashtra",
    date: "2023-11-09",
    description:
      "A software supply chain attack compromised a widely used business application, potentially affecting thousands of organizations.",
    coordinates: { x: 42, y: 50 },
  },
  {
    id: 8,
    title: "Social Engineering Campaign Targeting Employees",
    type: "phishing",
    severity: "medium",
    location: "Kolkata, West Bengal",
    date: "2023-11-08",
    description:
      "A sophisticated social engineering campaign targeting employees of financial institutions through fake job offers.",
    coordinates: { x: 55, y: 45 },
  },
  {
    id: 9,
    title: "API Vulnerability Exploited at FinTech Company",
    type: "hacking",
    severity: "high",
    location: "Noida, Uttar Pradesh",
    date: "2023-11-07",
    description:
      "Attackers exploited an API vulnerability to access sensitive transaction data at a financial technology company.",
    coordinates: { x: 44, y: 34 },
  },
  {
    id: 10,
    title: "Cryptojacking Campaign Targeting Cloud Infrastructure",
    type: "malware",
    severity: "low",
    location: "Kochi, Kerala",
    date: "2023-11-06",
    description:
      "A cryptojacking campaign targeting misconfigured cloud instances to mine cryptocurrency using compromised resources.",
    coordinates: { x: 40, y: 70 },
  },
]

// Mock complaint data
export const complaints = [
  {
    _id: "COMP123456",
    referenceNumber: "CYB/2023/12345",
    status: "under_review",
    createdAt: "2023-11-10T09:30:00Z",
    incidentDetails: {
      incidentType: "online_fraud",
      incidentDate: "2023-11-05",
      incidentDescription:
        "I received a call from someone claiming to be from my bank. They said my account had suspicious activity and asked me to verify my details. I provided my credit card information and later found unauthorized transactions totaling ₹45,000.",
      financialLoss: "yes",
      lossAmount: "45000",
    },
  },
  {
    _id: "COMP123457",
    referenceNumber: "CYB/2023/12346",
    status: "submitted",
    createdAt: "2023-11-12T14:15:00Z",
    incidentDetails: {
      incidentType: "identity_theft",
      incidentDate: "2023-11-08",
      incidentDescription:
        "Someone created a fake social media profile using my name and photos. They are contacting my friends and colleagues asking for money, claiming I'm in an emergency situation.",
      financialLoss: "no",
      lossAmount: "",
    },
  },
  {
    _id: "COMP123458",
    referenceNumber: "CYB/2023/12347",
    status: "in_progress",
    createdAt: "2023-11-01T11:45:00Z",
    incidentDetails: {
      incidentType: "hacking",
      incidentDate: "2023-10-28",
      incidentDescription:
        "My email account was hacked. The hacker sent emails to my contacts with malicious links. They also changed my recovery information so I cannot regain access.",
      financialLoss: "no",
      lossAmount: "",
    },
  },
  {
    _id: "COMP123459",
    referenceNumber: "CYB/2023/12348",
    status: "resolved",
    createdAt: "2023-10-15T08:20:00Z",
    incidentDetails: {
      incidentType: "online_harassment",
      incidentDate: "2023-10-10",
      incidentDescription:
        "I am receiving threatening and abusive messages from an unknown person on WhatsApp. They seem to have personal information about me and my daily routine, which is very concerning.",
      financialLoss: "no",
      lossAmount: "",
    },
  },
  {
    _id: "COMP123460",
    referenceNumber: "CYB/2023/12349",
    status: "closed",
    createdAt: "2023-10-05T16:30:00Z",
    incidentDetails: {
      incidentType: "data_breach",
      incidentDate: "2023-09-30",
      incidentDescription:
        "I received an email notification from an e-commerce website that my account information, including my name, address, and partial payment details, was compromised in a data breach.",
      financialLoss: "no",
      lossAmount: "",
    },
  },
  {
    _id: "COMP123461",
    referenceNumber: "CYB/2023/12350",
    status: "under_review",
    createdAt: "2023-11-08T10:45:00Z",
    incidentDetails: {
      incidentType: "ransomware",
      incidentDate: "2023-11-07",
      incidentDescription:
        "My company's computer systems were infected with ransomware. All our files are encrypted, and we received a demand for ₹5,00,000 in Bitcoin to restore access to our data.",
      financialLoss: "yes",
      lossAmount: "500000",
    },
  },
  {
    _id: "COMP123462",
    referenceNumber: "CYB/2023/12351",
    status: "in_progress",
    createdAt: "2023-10-25T09:15:00Z",
    incidentDetails: {
      incidentType: "phishing",
      incidentDate: "2023-10-23",
      incidentDescription:
        "I clicked on a link in an email that appeared to be from my bank. The website looked legitimate, and I entered my login credentials. Later, I realized it was a fake website designed to steal my information.",
      financialLoss: "yes",
      lossAmount: "25000",
    },
  },
  {
    _id: "COMP123463",
    referenceNumber: "CYB/2023/12352",
    status: "submitted",
    createdAt: "2023-11-11T13:20:00Z",
    incidentDetails: {
      incidentType: "social_media_crime",
      incidentDate: "2023-11-09",
      incidentDescription:
        "Someone hacked my Instagram account and is posting inappropriate content. They have also changed the email and phone number associated with the account, so I cannot recover it through normal means.",
      financialLoss: "no",
      lossAmount: "",
    },
  },
  {
    _id: "COMP123464",
    referenceNumber: "CYB/2023/12353",
    status: "rejected",
    createdAt: "2023-10-18T15:10:00Z",
    incidentDetails: {
      incidentType: "unauthorized_access",
      incidentDate: "2023-10-16",
      incidentDescription:
        "I suspect someone has gained unauthorized access to my home Wi-Fi network. My internet speed has decreased significantly, and I've noticed unfamiliar devices connected to my network.",
      financialLoss: "no",
      lossAmount: "",
    },
  },
  {
    _id: "COMP123465",
    referenceNumber: "CYB/2023/12354",
    status: "resolved",
    createdAt: "2023-09-28T11:30:00Z",
    incidentDetails: {
      incidentType: "online_scam",
      incidentDate: "2023-09-25",
      incidentDescription:
        "I purchased a laptop from an online marketplace at a discounted price. I paid ₹35,000 via UPI, but the seller has disappeared and is not responding to any messages. The product was never delivered.",
      financialLoss: "yes",
      lossAmount: "35000",
    },
  },
]
