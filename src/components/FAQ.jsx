"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FaSearch, FaChevronDown, FaChevronRight, FaQuestionCircle, FaFilter } from "react-icons/fa"
import CyberSpinner from "./common/CyberSpinner"

function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")
  const [activeFaq, setActiveFaq] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [animatedItems, setAnimatedItems] = useState([])
  const faqListRef = useRef(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Reset animated items when category or search changes
    setAnimatedItems([])

    // Animate items in sequence
    if (!isLoading && faqListRef.current) {
      const items = Array.from(faqListRef.current.querySelectorAll(".faq-item"))
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
    // Filter FAQs based on search query is handled in the filteredFaqs variable
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
    { id: "laws", name: "Indian Laws", icon: <FaFilter /> },
    { id: "complaints", name: "Filing Complaints", icon: <FaFilter /> },
    { id: "security", name: "Cybersecurity", icon: <FaFilter /> },
    { id: "privacy", name: "Privacy & Data Protection", icon: <FaFilter /> },
    { id: "contact", name: "Contact & Support", icon: <FaFilter /> },
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

  // Filter FAQs based on search query
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
    <div className="faq-page">
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about cybersecurity, Indian laws, and complaint procedures.</p>
        </div>
      </section>

      <section className="faq-search cyber-grid-bg">
        <div className="container">
          <form className="search-form cyber-panel" onSubmit={handleSearch}>
            <div className="search-input">
              <FaSearch />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          {isLoading ? (
            <div className="loading-container" style={{ padding: "4rem 0", textAlign: "center" }}>
              <CyberSpinner size="large" text="Loading FAQ data..." />
            </div>
          ) : (
            <div className="faq-layout">
              {searchQuery.trim() === "" && (
                <div className="faq-categories cyber-panel">
                  <h2>Categories</h2>
                  <ul>
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className={`category-item ${activeCategory === category.id ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-name">{category.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="faq-list cyber-panel">
                {searchQuery.trim() !== "" && <h2>Search Results ({filteredFaqs.length})</h2>}

                {searchQuery.trim() === "" && <h2>{categories.find((c) => c.id === activeCategory)?.name} FAQs</h2>}

                {filteredFaqs.length === 0 ? (
                  <div className="no-results">
                    <p>No FAQs found matching your search. Please try different keywords or browse by category.</p>
                  </div>
                ) : (
                  <div className="faq-container" ref={faqListRef}>
                    {filteredFaqs.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq-item ${activeFaq === index ? "active" : ""} ${animatedItems.includes(index.toString()) ? "animated" : ""}`}
                        data-index={index}
                      >
                        <div className="faq-question" onClick={() => handleFaqClick(index)}>
                          <h3>{faq.question}</h3>
                          <div className="faq-toggle">
                            {activeFaq === index ? <FaChevronDown /> : <FaChevronRight />}
                          </div>
                        </div>

                        {activeFaq === index && (
                          <div className="faq-answer">
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

      <section className="faq-more-help">
        <div className="container">
          <h2>Need More Help?</h2>
          <p>Can't find what you're looking for? We're here to help.</p>
          <div className="help-options">
            <div className="help-option cyber-panel">
              <h3>Ask Our Chatbot</h3>
              <p>Get instant answers to your questions from our AI assistant.</p>
              <Link to="/chatbot" className="btn-primary">
                Chat Now
              </Link>
            </div>
            <div className="help-option cyber-panel">
              <h3>Contact Support</h3>
              <p>Reach out to our support team for personalized assistance.</p>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
            <div className="help-option cyber-panel">
              <h3>File a Complaint</h3>
              <p>Ready to report a cybercrime? Use our guided complaint form.</p>
              <Link to="/complaint-form" className="btn-outline">
                File Complaint
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-page {
          padding-bottom: 4rem;
        }
        
        .faq-search {
          padding: 2rem 0;
          position: relative;
        }
        
        .search-form {
          display: flex;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .search-input {
          flex: 1;
          position: relative;
        }
        
        .search-input input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid var(--primary-color);
          background-color: rgba(0, 0, 0, 0.2);
          color: var(--text-color);
          border-radius: 0;
        }
        
        .search-input svg {
          position: absolute;
          top: 50%;
          left: 1rem;
          transform: translateY(-50%);
          color: var(--primary-color);
        }
        
        .faq-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          .faq-layout {
            grid-template-columns: 1fr;
          }
        }
        
        .faq-categories {
          height: fit-content;
        }
        
        .faq-categories h2 {
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .category-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        
        .category-item:hover {
          background-color: rgba(0, 255, 65, 0.1);
        }
        
        .category-item.active {
          background-color: rgba(0, 255, 65, 0.15);
          border-left-color: var(--primary-color);
        }
        
        .category-icon {
          margin-right: 0.75rem;
          color: var(--primary-color);
        }
        
        .faq-list h2 {
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .faq-item {
          margin-bottom: 1rem;
          border: 1px solid var(--border-color);
          opacity: 0;
          transform: translateY(20px);
        }
        
        .faq-item.animated {
          animation: fadeInUp 0.5s forwards;
        }
        
        .faq-question {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .faq-question:hover {
          background-color: rgba(0, 255, 65, 0.05);
        }
        
        .faq-question h3 {
          margin: 0;
          font-size: 1.1rem;
          flex: 1;
        }
        
        .faq-toggle {
          color: var(--primary-color);
          transition: transform 0.3s ease;
        }
        
        .faq-item.active .faq-toggle {
          transform: rotate(90deg);
        }
        
        .faq-answer {
          padding: 0 1rem 1rem;
          border-top: 1px solid var(--border-color);
          animation: fadeIn 0.5s ease;
        }
        
        .no-results {
          padding: 2rem;
          text-align: center;
          background-color: rgba(255, 0, 0, 0.1);
          border: 1px solid rgba(255, 0, 0, 0.3);
        }
        
        .help-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .help-option {
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .help-option:hover {
          transform: translateY(-10px);
        }
        
        .help-option h3 {
          margin-bottom: 1rem;
        }
        
        .help-option p {
          margin-bottom: 1.5rem;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default FAQ
