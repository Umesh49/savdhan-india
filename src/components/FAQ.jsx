"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FaSearch, FaChevronDown, FaChevronRight, FaQuestionCircle, FaShieldAlt, FaFileAlt, FaLock, FaUserSecret, FaHeadset } from "react-icons/fa"
import CyberSpinner from "./common/CyberSpinner"
import "./styles/FAQStyles.css"

function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")
  const [activeFaq, setActiveFaq] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [animatedItems, setAnimatedItems] = useState([])
  const faqListRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setAnimatedItems([])
    if (!isLoading && faqListRef.current) {
      const items = Array.from(faqListRef.current.querySelectorAll(".safeguard-faq-item"))
      let delay = 0

      const animationInterval = setInterval(() => {
        if (animatedItems.length < items.length) {
          setAnimatedItems((prev) => [...prev, items[animatedItems.length].dataset.index])
          delay += 100
        } else {
          clearInterval(animationInterval)
        }
      }, 100)

      return () => clearInterval(animationInterval)
    }
  }, [isLoading, activeCategory, searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setActiveFaq(null)
  }

  const handleFaqClick = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const categories = [
    { id: "general", name: "General", icon: <FaQuestionCircle /> },
    { id: "laws", name: "Indian Laws", icon: <FaFileAlt /> },
    { id: "complaints", name: "Filing Complaints", icon: <FaShieldAlt /> },
    { id: "security", name: "Cybersecurity", icon: <FaLock /> },
    { id: "privacy", name: "Privacy & Data Protection", icon: <FaUserSecret /> },
    { id: "contact", name: "Contact & Support", icon: <FaHeadset /> },
  ]

  // Mock FAQ data
  const faqs = {
    general: [
      {
        question: "What is Savdhaan India?",
        answer:
          "Savdhaan India is a comprehensive platform focused on cybersecurity awareness, Indian cyber laws, complaint guidance, and educational resources for the Indian public. Our mission is to empower citizens with the knowledge and tools to protect themselves in the digital world and take appropriate action when facing cyber threats.",
      },
      {
        question: "Who can use this platform?",
        answer:
          "Our platform is designed for all Indian citizens, businesses, and organizations. Whether you're an individual seeking information about cyber laws, someone who has experienced cybercrime, or an organization wanting to educate employees about cybersecurity best practices, Savdhaan India offers resources tailored to your needs.",
      },
      {
        question: "Is this an official government website?",
        answer:
          "No, Savdhaan India is not an official government website. However, we provide accurate information about Indian cyber laws and redirect users to official government portals like the National Cyber Crime Reporting Portal (cybercrime.gov.in) for filing formal complaints.",
      },
      {
        question: "Are the services on this platform free?",
        answer:
          "Yes, all informational resources, guides, and educational content on Savdhaan India are completely free to access. Our mission is to make cybersecurity knowledge and resources available to all Indian citizens without any barriers.",
      },
      {
        question: "How often is the content updated?",
        answer:
          "We regularly update our content to reflect the latest cybersecurity threats, legal developments, and best practices. Our team monitors changes in Indian cyber laws, emerging threats, and new security techniques to ensure that the information provided is current and relevant.",
      },
      {
        question: "Can I contribute content to Savdhaan India?",
        answer:
          "We welcome contributions from cybersecurity experts, legal professionals, and educators. If you're interested in contributing articles, guides, or other resources, please contact us through our Contact page with details about your expertise and the type of content you'd like to contribute.",
      },
    ],
    laws: [
      {
        question: "What is the IT Act, 2000?",
        answer:
          "The Information Technology Act, 2000 (IT Act) is the primary legislation in India that deals with cybercrime and electronic commerce. It provides a legal framework for electronic transactions, electronic signatures, and addresses various cybercrimes such as hacking, data theft, identity fraud, and publishing offensive content. The Act was significantly amended in 2008 to address new forms of cyber threats.",
      },
      {
        question: "What are the key sections of the IT Act that address cybercrimes?",
        answer:
          "Some key sections include: Section 43 (penalties for unauthorized access to computer systems), Section 65 (tampering with computer source documents), Section 66 (computer-related offenses), Section 66C (identity theft), Section 66D (cheating by personation using computer resources), Section 66E (privacy violation), Section 66F (cyber terrorism), Section 67 (publishing obscene material), and Section 72 (breach of confidentiality and privacy).",
      },
      {
        question: "What penalties exist for cybercrimes in India?",
        answer:
          "Penalties vary based on the nature and severity of the offense. They range from financial penalties (from a few lakh rupees) to imprisonment (from a few months to life imprisonment for certain offenses like cyber terrorism). The IT Act specifies different penalties for different categories of offenses.",
      },
      {
        question: "What is the Digital Personal Data Protection Act, 2023?",
        answer:
          "The Digital Personal Data Protection Act, 2023 is a comprehensive legislation that focuses on protecting the personal data of individuals in India. It establishes rules for the processing of digital personal data, outlines the rights of individuals regarding their data, and creates a Data Protection Board to enforce compliance. The Act aims to balance data protection with the need for data processing for legitimate purposes.",
      },
      {
        question: "How does Indian law address online harassment and cyberbullying?",
        answer:
          "Online harassment and cyberbullying can be addressed under various provisions of the IT Act and the Indian Penal Code. Section 66E of the IT Act deals with privacy violations, while Section 67 addresses obscene material. Additionally, IPC sections like 354D (stalking), 499/500 (defamation), and 503 (criminal intimidation) can be applied to online harassment cases. The specific charges depend on the nature of the harassment.",
      },
    ],
    complaints: [
      {
        question: "How do I report a cybercrime in India?",
        answer:
          "You can report a cybercrime through the National Cyber Crime Reporting Portal (cybercrime.gov.in), by calling the Cyber Crime Helpline at 1930, or by visiting your local police station to file an FIR. For guidance on the reporting process, you can use our Complaint Guide or the Complaint Form on this website.",
      },
      {
        question: "What information do I need to provide when filing a complaint?",
        answer:
          "You should provide your personal details (name, contact information), details of the incident (date, time, nature of crime), evidence (screenshots, emails, transaction details), details of the suspected perpetrator (if available), and any other relevant information that might help in the investigation.",
      },
      {
        question: "How long does it take for a cybercrime complaint to be processed?",
        answer:
          "The processing time varies depending on the complexity of the case, the jurisdiction, the availability of evidence, and the workload of the investigative agencies. Simple cases might be addressed within a few weeks, while complex cases could take several months. You can track the status of your complaint using the reference number provided when you file it.",
      },
      {
        question: "What is the 'Golden Hour' in cybercrime reporting?",
        answer:
          "The 'Golden Hour' refers to the first 24 hours after a cybercrime occurs, particularly for financial frauds. Reporting within this timeframe significantly increases the chances of recovering lost funds, as authorities can take immediate action to freeze suspicious transactions before the money is transferred multiple times or withdrawn.",
      },
      {
        question: "Can I file a complaint anonymously?",
        answer:
          "The National Cyber Crime Reporting Portal allows reporting certain types of content (like child sexual abuse material) anonymously. However, for most cybercrimes, providing your contact details is necessary for the investigation to proceed effectively. Your information is kept confidential during the investigation process.",
      },
    ],
    security: [
      {
        question: "How can I protect myself from phishing attacks?",
        answer:
          "To protect against phishing: Be cautious of unexpected emails or messages asking for personal information; verify the sender's email address; don't click on suspicious links or download unknown attachments; check for HTTPS in the URL when entering sensitive information; use multi-factor authentication; keep your software updated; and use security software with anti-phishing capabilities.",
      },
      {
        question: "What should I do if my social media account is hacked?",
        answer:
          "If your account is hacked: Try to login and change your password immediately; use account recovery options provided by the platform; check and revoke access to any suspicious third-party apps; scan your device for malware; enable two-factor authentication; notify your contacts about the hack to prevent further spreading; and report the incident to the platform's support and to cybercrime authorities if necessary.",
      },
      {
        question: "How can I secure my online banking and financial transactions?",
        answer:
          "For secure financial transactions: Use strong, unique passwords for banking accounts; enable two-factor authentication; only access banking websites through official apps or by typing the URL directly; ensure the website uses HTTPS; never share OTPs, passwords, or CVV numbers; regularly monitor your accounts for unauthorized transactions; use secure networks (avoid public Wi-Fi for banking); and keep your devices and software updated.",
      },
      {
        question: "What is ransomware and how can I protect against it?",
        answer:
          "Ransomware is malicious software that encrypts your files and demands payment for the decryption key. To protect against ransomware: Regularly back up your data to offline storage; keep your operating system and software updated; be cautious with email attachments and links; use reputable antivirus software with ransomware protection; implement network segmentation in organizational settings; and educate yourself and others about ransomware threats.",
      },
      {
        question: "How can I create and manage strong passwords?",
        answer:
          "To create strong passwords: Use at least 12-16 characters; include a mix of uppercase and lowercase letters, numbers, and special characters; avoid using personal information or common words; use different passwords for different accounts; consider using a passphrase (a sequence of random words); use a reputable password manager to generate and store complex passwords securely; and change passwords periodically, especially after a breach.",
      },
    ],
    privacy: [
      {
        question: "What rights do I have regarding my personal data in India?",
        answer:
          "Under current Indian laws, your rights include the right to know what data is being collected, how it's being used, and the right to withdraw consent. The upcoming Personal Data Protection Bill aims to enhance these rights, including the right to access, correct, and erase your data, data portability, and the right to be forgotten. Until comprehensive legislation is passed, the IT Act and its rules provide some protections for sensitive personal data.",
      },
      {
        question: "How can I protect my privacy online?",
        answer:
          "To protect your online privacy: Use strong, unique passwords and a password manager; enable two-factor authentication; be selective about the information you share on social media; adjust privacy settings on all platforms; use privacy-focused browsers and search engines; consider using a VPN; review app permissions; keep software updated; use encryption for sensitive data; and regularly delete cookies and browsing history.",
      },
      {
        question: "What can I do if my private information or images are shared online without my consent?",
        answer:
          "If your private information or images are shared without consent: Document everything (screenshots, URLs); report the content to the platform where it's hosted; file a police complaint under relevant sections of the IT Act and IPC; consider sending legal notices to websites hosting the content; contact cyber cells specializing in such cases; and seek support from organizations that assist victims of privacy violations and online harassment.",
      },
      {
        question: "What is data encryption and why is it important?",
        answer:
          "Data encryption is the process of converting information into a code to prevent unauthorized access. It's important because it protects sensitive data from being read by anyone who doesn't have the decryption key. Encryption helps secure your communications, stored data, and online transactions from hackers and other unauthorized parties. It's particularly crucial when transmitting sensitive information over networks or storing it on devices that could be lost or stolen.",
      },
      {
        question: "How do I protect my children's privacy online?",
        answer:
          "To protect children's privacy online: Educate them about the importance of privacy and the risks of sharing personal information; use parental controls and privacy settings on devices and platforms; monitor their online activities and friends; teach them to ask permission before downloading apps or joining online platforms; use family-friendly search engines; keep devices in common areas of the home; and maintain open communication about their online experiences.",
      },
    ],
    contact: [
      {
        question: "How can I contact the Savdhaan India team?",
        answer:
          "You can contact us through the Contact page on our website, which provides our email address, phone number, and a contact form. For direct assistance, you can also use our live chat feature during business hours or send us a message through our social media channels.",
      },
      {
        question: "Who should I contact in case of a cybercrime emergency?",
        answer:
          "For immediate assistance in case of a cybercrime emergency, call the National Cyber Crime Helpline at 1930. For life-threatening emergencies, contact the general emergency number 112. You can also visit your nearest police station to report the incident in person.",
      },
      {
        question: "Are there specialized cybercrime police units in India?",
        answer:
          'Yes, India has specialized cybercrime police units in most major cities. Additionally, each state has a cyber cell that specializes in investigating digital crimes. The contact information for these specialized units can be found on our Contact page under "Specialized Cyber Cells."',
      },
      {
        question: "How can I provide feedback or suggest improvements to the platform?",
        answer:
          "We welcome your feedback and suggestions! You can share your thoughts through our Contact page, by emailing feedback@savdhaanindia.org, or by using the feedback form available at the bottom of each page. Your input helps us improve our platform and better serve the cybersecurity needs of Indian citizens.",
      },
      {
        question: "Can I request a cybersecurity awareness workshop for my organization?",
        answer:
          "Yes, we conduct cybersecurity awareness workshops for educational institutions, businesses, government agencies, and community organizations. To request a workshop, please fill out the Workshop Request Form on our Contact page with details about your organization, the target audience, and your specific areas of interest. Our team will get back to you to discuss the arrangements.",
      },
    ],
  }

  const filteredFaqs =
    searchQuery.trim() !== ""
      ? Object.values(faqs)
          .flat()
          .filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          )
      : faqs[activeCategory]

  return (
    <div className="safeguard-faq-page">
      <section className="safeguard-page-header">
        <div className="safeguard-container">
          <h1 className="safeguard-header-title">Frequently Asked Questions</h1>
          <p className="safeguard-header-subtitle">Find answers to common questions about cybersecurity, Indian laws, and complaint procedures.</p>
          <div className="safeguard-terminal-line">
            <span className="safeguard-prompt">~/safeguard/faq $</span>
            <span className="safeguard-blink">_</span>
          </div>
        </div>
      </section>

      <section className="safeguard-faq-search">
        <div className="safeguard-container">
          <form className="safeguard-search-form" onSubmit={handleSearch}>
            <div className="safeguard-search-input">
              <FaSearch className="safeguard-search-icon" />
              <input
                type="text"
                placeholder="access * from database where question like '%search%'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="safeguard-input"
              />
            </div>
            <button type="submit" className="safeguard-btn-primary">
              EXECUTE
            </button>
          </form>
        </div>
      </section>

      <section className="safeguard-faq-content">
        <div className="safeguard-container">
          {isLoading ? (
            <div className="safeguard-loading-container">
              <CyberSpinner size="large" text="Initializing FAQ system..." />
            </div>
          ) : (
            <div className="safeguard-faq-layout">
              {searchQuery.trim() === "" && (
                <div className="safeguard-faq-categories">
                  <h2 className="safeguard-categories-title">System Modules</h2>
                  <ul className="safeguard-categories-list">
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className={`safeguard-category-item ${activeCategory === category.id ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <span className="safeguard-category-icon">{category.icon}</span>
                        <span className="safeguard-category-name">{category.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="safeguard-faq-list">
                {searchQuery.trim() !== "" && (
                  <h2 className="safeguard-list-title">
                    Search Results 
                    <span className="safeguard-result-count">[{filteredFaqs.length}]</span>
                  </h2>
                )}

                {searchQuery.trim() === "" && (
                  <h2 className="safeguard-list-title">
                    <span className="safeguard-module-name">{categories.find((c) => c.id === activeCategory)?.name}</span> Module
                  </h2>
                )}

                {filteredFaqs.length === 0 ? (
                  <div className="safeguard-no-results">
                    <div className="safeguard-error-code">404_NOT_FOUND</div>
                    <p>No matching entries in database. Try different search parameters or browse available modules.</p>
                  </div>
                ) : (
                  <div className="safeguard-faq-container" ref={faqListRef}>
                    {filteredFaqs.map((faq, index) => (
                      <div
                        key={index}
                        className={`safeguard-faq-item ${activeFaq === index ? "active" : ""} ${
                          animatedItems.includes(index.toString()) ? "animated" : ""
                        }`}
                        data-index={index}
                      >
                        <div className="safeguard-faq-question" onClick={() => handleFaqClick(index)}>
                          <h3 className="safeguard-question-text">{faq.question}</h3>
                          <div className="safeguard-faq-toggle">
                            {activeFaq === index ? <FaChevronDown /> : <FaChevronRight />}
                          </div>
                        </div>

                        {activeFaq === index && (
                          <div className="safeguard-faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="safeguard-faq-more-help">
        <div className="safeguard-container">
          <h2 className="safeguard-more-help-title">Need More Assistance?</h2>
          <p className="safeguard-more-help-subtitle">Additional system modules available for your security needs.</p>
          <div className="safeguard-help-options">
            <div className="safeguard-help-option">
              <h3 className="safeguard-option-title">Activate AI Assistant</h3>
              <p>Deploy AI-powered neural network for real-time security analysis and guidance.</p>
              <Link to="/chatbot" className="safeguard-btn-terminal">
                ./initialize_ai.sh
              </Link>
            </div>
            <div className="safeguard-help-option">
              <h3 className="safeguard-option-title">Contact Security Team</h3>
              <p>Establish secure connection with our cybersecurity specialists.</p>
              <Link to="/contact" className="safeguard-btn-terminal">
                ssh secure@support.safeguard.in
              </Link>
            </div>
            <div className="safeguard-help-option">
              <h3 className="safeguard-option-title">Submit Incident Report</h3>
              <p>Document and track security breach or vulnerability using our guided reporting system.</p>
              <Link to="/complaint-form" className="safeguard-btn-terminal">
                ./report_incident --guided
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ