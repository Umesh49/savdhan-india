import React from "react";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Calendar,
  Camera,
  Check,
  CheckCircle,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  Eye,
  FileText,
  Fingerprint,
  Globe,
  Home,
  ImageIcon,
  Info,
  Key,
  Laptop,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  ShieldOff,
  Smartphone,
  Target,
  Terminal,
  Upload,
  User,
} from "lucide-react";

export const crimeCategories = [
  {
    id: "cat1",
    title: "Financial Cybercrimes",
    icon: <DollarSign size={22} />,
    color: "#e74c3c",
    description:
      "Crimes involving monetary theft or fraud through digital means",
    subcategories: [
      {
        title: "UPI Fraud",
        icon: <Smartphone size={16} />,
        description:
          "Unauthorized transactions through UPI apps like Google Pay, PhonePe, etc.",
        examples: [
          "Fake customer support calls asking for UPI PIN",
          "Fraudulent payment requests",
          "QR code scams for payments",
        ],
        evidence: [
          "Screenshots of transaction details",
          "UPI ID of the fraudster",
          "Call recordings (if available)",
          "Bank statement showing unauthorized transfer",
        ],
        urgency:
          "Immediate action required (within 24 hours for fund recovery)",
      },
      {
        title: "Credit/Debit Card Fraud",
        icon: <CreditCard size={16} />,
        description: "Unauthorized use of your credit or debit card details",
        examples: [
          "Online purchases without your knowledge",
          "Card cloning and physical theft",
          "Unauthorized recurring payments",
        ],
        evidence: [
          "Bank statements showing unauthorized transactions",
          "Card statement details",
          "Merchant information where fraud occurred",
          "Any communication with fraudsters",
        ],
        urgency:
          "High - Report within 24 hours to your bank and cybercrime portal",
      },
      {
        title: "Internet Banking Fraud",
        icon: <Laptop size={16} />,
        description: "Unauthorized access to your online banking account",
        examples: [
          "Phishing websites that steal login credentials",
          "Unauthorized fund transfers",
          "Modification of account details",
        ],
        evidence: [
          "Screenshots of unauthorized transactions",
          "Account statements",
          "Phishing emails or SMS (if available)",
          "IP address or any technical details (if available)",
        ],
        urgency:
          "Critical - Contact bank immediately and file cybercrime report",
      },
      {
        title: "Investment Fraud",
        icon: <Briefcase size={16} />,
        description: "Fake investment schemes promising unrealistic returns",
        examples: [
          "Ponzi schemes operating online",
          "Fake cryptocurrency investment platforms",
          "Stock market manipulation schemes",
        ],
        evidence: [
          "Investment promotional materials",
          "Communication with fraudsters",
          "Payment receipts or fund transfer details",
          "Screenshots of investment portal/website",
        ],
        urgency: "Medium to High - Report as soon as possible",
      },
      {
        title: "Cryptocurrency Fraud",
        icon: <Database size={16} />,
        description:
          "Scams related to cryptocurrency investments and exchanges",
        examples: [
          "Fake cryptocurrency exchanges",
          "Crypto wallet hacking",
          "Initial Coin Offering (ICO) scams",
        ],
        evidence: [
          "Wallet addresses involved",
          "Transaction hashes",
          "Screenshots of exchange/platform",
          "Communication with perpetrators",
        ],
        urgency: "High - Report immediately but recovery can be difficult",
      },
    ],
  },
  {
    id: "cat2",
    title: "Social Media & Online Harassment",
    icon: <MessageSquare size={22} />,
    color: "#3498db",
    description:
      "Crimes involving harassment, bullying, or abuse through social platforms",
    subcategories: [
      {
        title: "Cyberbullying",
        icon: <Target size={16} />,
        description:
          "Repeated harassment or intimidation using digital platforms",
        examples: [
          "Persistent offensive messages",
          "Intimidation through social media",
          "Group targeting or exclusion",
        ],
        evidence: [
          "Screenshots of abusive messages",
          "Timeline of incidents",
          "Profile details of perpetrators",
          "Witness statements (if available)",
        ],
        urgency: "Medium to High (High if involving minors or threats)",
      },
      {
        title: "Defamation & False Information",
        icon: <AlertCircle size={16} />,
        description: "Spreading false information to damage reputation",
        examples: [
          "False accusations on social media",
          "Manipulated images or deepfakes",
          "Spreading rumors on public platforms",
        ],
        evidence: [
          "Screenshots of defamatory content",
          "URLs of posts/websites",
          "Evidence proving falsity of claims",
          "Impact documentation (professional/personal)",
        ],
        urgency: "Medium - Important to document before content is removed",
      },
      {
        title: "Impersonation & Fake Profiles",
        icon: <User size={16} />,
        description: "Creating fake profiles pretending to be someone else",
        examples: [
          "Fake profiles using your name and photos",
          "Impersonating you to friends/contacts",
          "Using your identity for fraudulent activities",
        ],
        evidence: [
          "URLs of fake profiles",
          "Screenshots showing impersonation",
          "Communication with contacts who were approached",
          "Original photos that were stolen/misused",
        ],
        urgency: "Medium to High - Report to platform and cybercrime portal",
      },
      {
        title: "Cyberstalking",
        icon: <Eye size={16} />,
        description: "Persistent unwanted attention and monitoring online",
        examples: [
          "Following all social media activities",
          "Unwanted repeated contact despite being blocked",
          "Monitoring or tracking online movement",
        ],
        evidence: [
          "Pattern of unwanted contact (screenshots)",
          "Messages showing requests to stop contact",
          "Any threats or concerning statements",
          "Timeline documenting persistence",
        ],
        urgency:
          "High - Especially if involving physical threats or location tracking",
      },
      {
        title: "Image-based Abuse",
        icon: <Camera size={16} />,
        description: "Sharing intimate or manipulated images without consent",
        examples: [
          "Revenge pornography",
          "Morphed/edited images of personal nature",
          "Threatening to share intimate content",
        ],
        evidence: [
          "URLs where content was shared (if publicly available)",
          "Screenshots showing the sharing (without capturing actual content)",
          "Threats or communications related to the content",
          "Original images if they were manipulated",
        ],
        urgency: "Critical - Report immediately to platforms and authorities",
      },
    ],
  },
  {
    id: "cat3",
    title: "Data & Identity Theft",
    icon: <Key size={22} />,
    color: "#9b59b6",
    description:
      "Unauthorized access and theft of personal or financial information",
    subcategories: [
      {
        title: "Identity Theft",
        icon: <Fingerprint size={16} />,
        description:
          "Using someone's identity to commit fraud or gain advantages",
        examples: [
          "Opening accounts in your name",
          "Filing tax returns as you",
          "Applying for loans or credit cards with your identity",
        ],
        evidence: [
          "Credit reports showing unknown accounts",
          "Communications about accounts you didn't open",
          "Any financial or legal notices received",
          "Unauthorized changes to official documents",
        ],
        urgency:
          "High - Requires immediate reporting to prevent further damage",
      },
      {
        title: "Data Breach",
        icon: <ShieldOff size={16} />,
        description:
          "Unauthorized access to databases containing personal information",
        examples: [
          "Company databases being hacked",
          "Personal information being leaked",
          "Credentials appearing in data dumps",
        ],
        evidence: [
          "Notification of breach from company",
          "Evidence your data was compromised",
          "Unusual activity in your accounts following breach",
          "Details of what information was exposed",
        ],
        urgency:
          "Medium - Focus on securing accounts and monitoring for misuse",
      },
      {
        title: "Phishing Attacks",
        icon: <Mail size={16} />,
        description:
          "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity",
        examples: [
          "Fake emails appearing to be from banks",
          "SMS pretending to be from government entities",
          "Fake websites mimicking legitimate services",
        ],
        evidence: [
          "Phishing emails or messages (with headers if possible)",
          "URLs of fake websites",
          "Any information entered before discovering the fraud",
          "How you received the communication",
        ],
        urgency:
          "Medium to High - Report quickly if credentials were compromised",
      },
      {
        title: "SIM Swapping",
        icon: <Smartphone size={16} />,
        description:
          "Taking control of a phone number to bypass 2FA security measures",
        examples: [
          "Mobile number suddenly losing service",
          "Unauthorized access to accounts secured by SMS verification",
          "Telecom provider changing SIM without authorization",
        ],
        evidence: [
          "Timeline of service disruption",
          "Communication with telecom provider",
          "List of accounts compromised",
          "Unauthorized transactions occurring after SIM swap",
        ],
        urgency:
          "Critical - Contact telecom provider immediately then file cybercrime report",
      },
    ],
  },
  {
    id: "cat4",
    title: "Hacking & Network Security",
    icon: <Terminal size={22} />,
    color: "#2ecc71",
    description:
      "Unauthorized access to computer systems, networks, or applications",
    subcategories: [
      {
        title: "System Hacking",
        icon: <Laptop size={16} />,
        description: "Unauthorized access to computers or network systems",
        examples: [
          "Remote access to your computer without permission",
          "Malware or ransomware installation",
          "Unauthorized account access",
        ],
        evidence: [
          "Unusual system behavior logs",
          "Unfamiliar processes running",
          "Unknown access logs or login attempts",
          "Malware detection reports",
        ],
        urgency: "High - Isolate system and report immediately",
      },
      {
        title: "Ransomware Attack",
        icon: <Shield size={16} />,
        description:
          "Malicious software that locks your data and demands payment for access",
        examples: [
          "Files suddenly encrypted",
          "Ransom note on desktop",
          "Unable to access your system or files",
        ],
        evidence: [
          "Screenshots of ransom note",
          "Sample of encrypted files",
          "Any communication from attackers",
          "Bitcoin wallet address if provided for payment",
        ],
        urgency:
          "Critical - Report immediately and do not pay ransom without expert advice",
      },
      {
        title: "DDoS Attack",
        icon: <Globe size={16} />,
        description:
          "Overwhelming a website/service with traffic to make it unavailable",
        examples: [
          "Business website suddenly unavailable",
          "Unusually slow network performance",
          "Service disruption patterns",
        ],
        evidence: [
          "Traffic logs showing attack pattern",
          "Timeline of service disruption",
          "IP addresses involved (if available)",
          "Any threatening communication before attack",
        ],
        urgency:
          "High for businesses - Report to hosting provider and cybercrime portal",
      },
    ],
  },
];

export const reportingAuthorities = [
  {
    title: "National Cyber Crime Reporting Portal",
    description:
      "Central government portal for reporting all types of cybercrimes",
    website: "https://cybercrime.gov.in/",
    phone: "1930",
    email: "incident@cert-in.org.in",
    steps: [
      "Visit cybercrime.gov.in",
      "Select crime category and state",
      "Fill in personal details and crime information",
      "Upload evidence files",
      "Submit and note down complaint number",
    ],
  },
  {
    title: "Local Cyber Crime Police Station",
    description:
      "District-level specialized police units handling cybercrime cases",
    steps: [
      "Locate your nearest cyber crime police station",
      "Prepare all evidence documents",
      "Visit in person to file an FIR",
      "Provide detailed statement and evidence",
      "Collect FIR copy for reference",
    ],
  },
  {
    title: "Financial Fraud Reporting",
    description: "For bank frauds, UPI scams, and other financial cybercrimes",
    phone: "1930",
    steps: [
      "Call 1930 (Cyber Financial Fraud Helpline)",
      "Report to your bank's fraud department immediately",
      "File complaint on cybercrime.gov.in",
      "Follow up with bank for transaction reversal",
    ],
  },
  {
    title: "CERT-In (Computer Emergency Response Team)",
    description:
      "For reporting technical security incidents and vulnerabilities",
    website: "https://www.cert-in.org.in/",
    email: "incident@cert-in.org.in",
    steps: [
      "Visit cert-in.org.in",
      "Use their incident reporting form",
      "Provide technical details of the security incident",
      "Follow up with additional information if requested",
    ],
  },
];

export const faqData = [
  {
    question:
      "What should I do immediately after becoming a victim of cybercrime?",
    answer:
      "First, secure your accounts by changing passwords. Document all evidence including screenshots, transaction IDs, and communications. For financial fraud, contact your bank immediately and call 1930. Then file a formal complaint on the National Cybercrime Reporting Portal at cybercrime.gov.in.",
  },
  {
    question: "How long does it take to investigate a cybercrime complaint?",
    answer:
      "Investigation timelines vary greatly depending on the complexity of the case, jurisdiction issues, and available evidence. Financial fraud cases may be resolved faster (weeks to months) while complex hacking or international cases may take many months or even years.",
  },
  {
    question: "Can I track the status of my cybercrime complaint?",
    answer:
      "Yes, complaints filed on cybercrime.gov.in can be tracked using your complaint number and provided contact details. For police station FIRs, you can visit the station for updates or contact the investigating officer assigned to your case.",
  },
  {
    question: "Is it possible to recover money lost in online fraud?",
    answer:
      "Recovery is possible but depends on how quickly you report the fraud. If reported within 24-48 hours through the 1930 helpline or cybercrime portal, banks can often freeze fraudulent transactions. The success rate decreases significantly after 48-72 hours as money is typically moved through multiple accounts.",
  },
  {
    question: "What evidence should I preserve for social media harassment?",
    answer:
      "Take screenshots of all harassing content including timestamps and account details. Save any direct messages, comments, or posts. Document the URLs of the content. If calls are involved, save call logs and recordings if available. Keep records of any witnesses who can verify the harassment.",
  },
  {
    question:
      "Do I need to visit a police station to file a cybercrime complaint?",
    answer:
      "Not necessarily. For most cybercrimes, you can file a complaint online through cybercrime.gov.in. However, for serious cases requiring immediate attention or if you prefer in-person reporting, visiting your local cyber police station is recommended.",
  },
  {
    question: "How can I protect myself from UPI fraud?",
    answer:
      "Never share your UPI PIN, OTP or password with anyone. Be suspicious of unexpected payment requests. Verify merchant QR codes before scanning. Don't respond to calls claiming to be from customer care asking for financial information. Enable additional security features in your UPI app.",
  },
  {
    question:
      "What is the difference between filing a complaint on cybercrime.gov.in and an FIR at a police station?",
    answer:
      "A complaint on cybercrime.gov.in initiates preliminary assessment and can be escalated to local police if needed. An FIR (First Information Report) filed directly at a police station formally starts the legal investigation process and is required for court proceedings. Serious cases often benefit from filing an FIR directly.",
  },
];

export const evidenceGuidelines = [
  {
    title: "Document Everything",
    description:
      "Create detailed logs of all incidents with dates, times, and descriptions",
    tips: [
      "Take screenshots with visible date/time stamps",
      "Save emails with complete headers",
      "Record phone call details (number, duration, content)",
      "Maintain a chronological timeline of events",
    ],
  },
  {
    title: "Preserve Digital Evidence",
    description: "Secure all digital proof before it can be altered or deleted",
    tips: [
      "Save original copies of all communications",
      "Download suspicious attachments safely for analysis",
      "Record website URLs and take full-page screenshots",
      "Back up evidence to secure offline storage",
    ],
  },
  {
    title: "Financial Evidence",
    description:
      "Gather all transaction-related information for financial crimes",
    tips: [
      "Obtain bank statements showing unauthorized transactions",
      "Save payment confirmation emails and messages",
      "Document account numbers and transaction IDs",
      "Keep records of communication with financial institutions",
    ],
  },
  {
    title: "Technical Evidence",
    description: "Collect technical details that can help trace perpetrators",
    tips: [
      "Note IP addresses from suspicious logins (check account activity)",
      "Save email headers (contain routing information)",
      "Record device information if compromised",
      "Preserve logs from security software or firewalls",
    ],
  },
];

export const portalSteps = [
  {
    id: "step1",
    title: "Visit the Official Portal",
    icon: <Globe size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          Go to{" "}
          <a
            href="https://cybercrime.gov.in/"
            className="guide-text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            cybercrime.gov.in
          </a>{" "}
          in your browser.
        </p>
        <div className="guide-alert guide-alert-warning">
          <AlertTriangle size={18} className="guide-alert-icon" />
          <div>
            <strong>Note:</strong>
            <p>
              Make sure you're using the official portal with the URL
              "cybercrime.gov.in". Beware of fake websites.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "step2",
    title: "Create an Account / Login",
    icon: <User size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          If you don't have an account, create one by clicking on "Citizen
          Login" and then "Register". If you already have an account, log in
          with your credentials.
        </p>
        <div className="guide-info-box">
          <h4>
            <User size={16} className="guide-icon-small" /> Registration/Login
            Requirements:
          </h4>
          <ul>
            <li>
              <Mail size={16} className="guide-icon-small" /> Email ID
              (required)
            </li>
            <li>
              <Phone size={16} className="guide-icon-small" /> Mobile number
              (required)
            </li>
            <li>
              <Check size={16} className="guide-icon-small" /> OTP verification
              will be required
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "step3",
    title: "Select Crime Category",
    icon: <Database size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          Choose the appropriate category that best describes your cybercrime
          incident:
        </p>
        <div className="guide-categories-box">
          <h4>Available Categories:</h4>
          <ul className="guide-category-list">
            <li>
              <Globe size={16} className="guide-icon-small" />
              <div>
                <strong>Online and Social Media Related Crime</strong>
                <p>
                  Cyberbullying, defamation, obscene content, fake profiles,
                  etc.
                </p>
              </div>
            </li>
            <li>
              <DollarSign size={16} className="guide-icon-small" />
              <div>
                <strong>Online Financial Fraud</strong>
                <p>
                  UPI fraud, credit/debit card fraud, banking fraud, investment
                  scams
                </p>
              </div>
            </li>
            <li>
              <Laptop size={16} className="guide-icon-small" />
              <div>
                <strong>Hacking / Damage to computer systems</strong>
                <p>Unauthorized access, data theft, malware attacks</p>
              </div>
            </li>
            <li>
              <Database size={16} className="guide-icon-small" />
              <div>
                <strong>Online Cyber Trafficking</strong>
                <p>
                  Human trafficking, drug trafficking through online platforms
                </p>
              </div>
            </li>
            <li>
              <DollarSign size={16} className="guide-icon-small" />
              <div>
                <strong>Online Gambling / Betting</strong>
                <p>Illegal betting sites, gambling apps, etc.</p>
              </div>
            </li>
            <li>
              <Lock size={16} className="guide-icon-small" />
              <div>
                <strong>Ransomware</strong>
                <p>Malware that locks your data and demands payment</p>
              </div>
            </li>
            <li>
              <DollarSign size={16} className="guide-icon-small" />
              <div>
                <strong>Cryptocurrency Crime</strong>
                <p>Crypto scams, fraudulent exchanges, etc.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="guide-alert guide-alert-warning">
          <Info size={18} className="guide-alert-icon" />
          <p>
            <strong>Note:</strong> Based on your selection, the portal will ask
            for specific details related to that category.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "step4",
    title: "Complete Category-Specific Details",
    icon: <FileText size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          Depending on your selected category, you'll need to provide specific
          information:
        </p>
        <div className="guide-details-grid">
          <div className="guide-details-box guide-details-financial">
            <h4>
              <DollarSign size={16} className="guide-icon-small" /> For
              Financial Fraud:
            </h4>
            <ul>
              <li>
                <CreditCard size={16} className="guide-icon-small" /> Bank
                account details
              </li>
              <li>
                <DollarSign size={16} className="guide-icon-small" /> UPI IDs
                involved
              </li>
              <li>
                <Calendar size={16} className="guide-icon-small" /> Transaction
                date and time
              </li>
              <li>
                <FileText size={16} className="guide-icon-small" /> Transaction
                ID/reference numbers
              </li>
              <li>
                <DollarSign size={16} className="guide-icon-small" /> Amount
                defrauded
              </li>
            </ul>
          </div>
          <div className="guide-details-box guide-details-social">
            <h4>
              <Globe size={16} className="guide-icon-small" /> For Social Media
              Crimes:
            </h4>
            <ul>
              <li>
                <Globe size={16} className="guide-icon-small" /> Platform
                (Facebook, Instagram, etc.)
              </li>
              <li>
                <User size={16} className="guide-icon-small" /> Suspect
                profile/account details
              </li>
              <li>
                <ArrowRight size={16} className="guide-icon-small" /> URLs of
                offensive content
              </li>
              <li>
                <Calendar size={16} className="guide-icon-small" /> Date and
                time of incident
              </li>
            </ul>
          </div>
        </div>
        <div className="guide-alert guide-alert-info">
          <Info size={18} className="guide-alert-icon" />
          <p>
            <strong>Tip:</strong> Prepare all these details before starting the
            complaint process for efficiency.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "step5",
    title: "Provide Suspect Details (if available)",
    icon: <User size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          If you have information about the suspect, provide it in this section.
        </p>
        <div className="guide-info-box">
          <h4>Possible Suspect Information:</h4>
          <ul>
            <li>
              <User size={16} className="guide-icon-small" /> Suspect name (if
              known)
            </li>
            <li>
              <Phone size={16} className="guide-icon-small" /> Phone number
            </li>
            <li>
              <FileText size={16} className="guide-icon-small" /> ID number (if
              available)
            </li>
            <li>
              <ImageIcon size={16} className="guide-icon-small" /> Photo of
              suspect (optional)
            </li>
            <li>
              <MapPin size={16} className="guide-icon-small" /> Address
              (optional)
            </li>
          </ul>
        </div>
        <div className="guide-alert guide-alert-info">
          <Info size={18} className="guide-alert-icon" />
          <p>
            <strong>Note:</strong> Even if you don't have suspect details, you
            can still file a complaint. Provide whatever information you have.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "step6",
    title: "Enter Complainant Details",
    icon: <User size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          Fill in your personal details accurately as the complainant:
        </p>
        <div className="guide-info-box">
          <h4>Required Personal Information:</h4>
          <div className="guide-personal-info-grid">
            <div>
              <User size={16} className="guide-icon-small" /> Full name
            </div>
            <div>
              <Phone size={16} className="guide-icon-small" /> Mobile number
            </div>
            <div>
              <Mail size={16} className="guide-icon-small" /> Email ID
            </div>
            <div>
              <Calendar size={16} className="guide-icon-small" /> Date of birth
            </div>
            <div>
              <Home size={16} className="guide-icon-small" /> Complete address
            </div>
            <div>
              <MapPin size={16} className="guide-icon-small" /> PIN code
            </div>
          </div>
        </div>
        <div className="guide-info-box">
          <h4>
            <FileText size={16} className="guide-icon-small" /> ID Proof:
          </h4>
          <p>
            Upload a national ID (Aadhar, PAN, Voter ID, etc.) for verification.
          </p>
          <div className="guide-alert guide-alert-warning guide-file-warning">
            <AlertTriangle size={16} className="guide-alert-icon" />
            <p>
              <strong>Note:</strong> Only JPG, JPEG, PNG, or PDF formats. Max
              size: 5MB.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "step7",
    title: "Upload Evidence",
    icon: <Upload size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          Upload all relevant evidence to support your complaint:
        </p>
        <div className="guide-info-box">
          <h4>
            <Upload size={16} className="guide-icon-small" /> Types of Evidence:
          </h4>
          <ul className="guide-evidence-list">
            <li>
              <ImageIcon size={16} className="guide-icon-small" />
              <div>
                <strong>Screenshots</strong>
                <p>Screenshots of messages, social media posts, transactions</p>
              </div>
            </li>
            <li>
              <Mail size={16} className="guide-icon-small" />
              <div>
                <strong>Email communications</strong>
                <p>Phishing emails, threatening messages, etc.</p>
              </div>
            </li>
            <li>
              <FileText size={16} className="guide-icon-small" />
              <div>
                <strong>Transaction receipts</strong>
                <p>Bank statements, payment confirmations</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="guide-alert guide-alert-warning">
          <AlertTriangle size={16} className="guide-alert-icon" />
          <p>
            <strong>File Requirements:</strong> JPG, JPEG, PNG, or PDF formats.
            Max size: 5MB each.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "step8",
    title: "Preview & Submit",
    icon: <CheckCircle size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          In this final step, review all the information before submission:
        </p>
        <div className="guide-info-box">
          <h4>
            <FileText size={16} className="guide-icon-small" /> Review Process:
          </h4>
          <ul className="guide-review-list">
            <li>
              <Check size={16} className="guide-icon-small guide-green" />
              <div>
                <strong>Verify all information</strong>
                <p>Carefully check all details for accuracy</p>
              </div>
            </li>
            <li>
              <Check size={16} className="guide-icon-small guide-green" />
              <div>
                <strong>Confirm evidence uploads</strong>
                <p>Ensure all relevant files are properly uploaded</p>
              </div>
            </li>
            <li>
              <Check size={16} className="guide-icon-small guide-green" />
              <div>
                <strong>Make corrections if needed</strong>
                <p>Use the "Back" button to fix any errors</p>
              </div>
            </li>
            <li>
              <Check size={16} className="guide-icon-small guide-green" />
              <div>
                <strong>Submit your complaint</strong>
                <p>After confirming everything is correct, click "Submit"</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="guide-alert guide-alert-success">
          <Info size={16} className="guide-alert-icon" />
          <p>
            <strong>Important:</strong> After submission, you'll receive a
            reference/complaint number. Save this number for tracking.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "step9",
    title: "Track Your Complaint",
    icon: <Clock size={18} />,
    content: (
      <>
        <p className="guide-step-description">
          After submission, you can track the status of your complaint:
        </p>
        <div className="guide-info-box">
          <h4>
            <Clock size={16} className="guide-icon-small" /> Tracking Process:
          </h4>
          <ul className="guide-tracking-list">
            <li>
              <Check size={16} className="guide-icon-small" />
              <div>
                <strong>Log in to the portal</strong>
                <p>Use your registered credentials</p>
              </div>
            </li>
            <li>
              <Check size={16} className="guide-icon-small" />
              <div>
                <strong>Go to "Track Complaint" section</strong>
                <p>Enter your complaint reference number</p>
              </div>
            </li>
            <li>
              <Check size={16} className="guide-icon-small" />
              <div>
                <strong>Receive status updates</strong>
                <p>You'll be notified of changes via SMS/email</p>
              </div>
            </li>
            <li>
              <Check size={16} className="guide-icon-small" />
              <div>
                <strong>Respond to queries</strong>
                <p>The officer may request additional information</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="guide-alert guide-alert-info">
          <Info size={18} className="guide-alert-icon" />
          <p>
            <strong>Note:</strong> For financial fraud cases, you may need to
            follow additional legal procedures to recover frozen funds.
          </p>
        </div>
      </>
    ),
  },
];

export const processSteps = [
  {
    title: "Identify the Type of Cybercrime",
    description:
      "Determine the nature of the cybercrime you've experienced from the available categories:",
    items: [
      "Online and Social Media Related Crime",
      "Online Financial Fraud",
      "Hacking/Damage to computer systems",
      "Other categories (Online Trafficking, Gambling, Ransomware, etc.)",
    ],
  },
  {
    title: "Gather Evidence",
    description: "Collect and preserve all relevant evidence, including:",
    items: [
      "Screenshots, emails, and messages",
      "Transaction details for financial fraud",
      "Social media posts, links, and suspect account details",
      "UPI IDs, account numbers, payment details (for financial crimes)",
    ],
  },
  {
    title: "Report Online",
    description: (
      <span>
        Visit the National Cyber Crime Reporting Portal at{" "}
        <a
          href="https://cybercrime.gov.in/"
          className="guide-text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          cybercrime.gov.in
        </a>{" "}
        and follow these steps:
      </span>
    ),
    items: [
      "Register/login (create an account if you don't have one)",
      "Select the appropriate crime category",
      "Provide incident, suspect (if known), and your personal details",
      "Upload supporting evidence and ID proof",
    ],
  },
  {
    title: "Follow Up",
    description:
      "After submission, you'll receive a reference number. Keep this safe and use it to:",
    items: [
      "Track the status of your complaint",
      "Provide additional information if requested",
      "Communicate with investigating officers",
    ],
  },
];