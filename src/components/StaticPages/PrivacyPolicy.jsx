import { FaShieldAlt, FaUserShield, FaDatabase, FaExchangeAlt, FaLock, FaUserSecret, FaChild, FaCookieBite } from "react-icons/fa";
import './TOS_PP.css';

const PrivacyPolicy = () => {
  return (
    <div className="pp-tos-theme">
    <div className="tos-pp-container tos-pp-py-8">
      <div className="tos-pp-page-header">
        <div className="tos-pp-header-container">
          <h1 className="tos-pp-glitch-text">Privacy Policy</h1>
          <p className="tos-pp-header-subtitle">How we protect and handle your personal information</p>
          <div className="tos-pp-grid-lines"></div>
        </div>
      </div>

      <div className="tos-pp-privacy-container">
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">System Information</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaShieldAlt className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Introduction</h2>
              <p className="tos-pp-text">
                Savdhaan India is a cybersecurity awareness platform developed by Masters of Computer Applications (MCA) students from Mumbai and Navi Mumbai. Our mission is to educate users about cybersecurity threats and best practices, empowering individuals and communities to navigate the digital world safely. As part of this mission, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              <p className="tos-pp-text">
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. It is designed to provide transparency into our data handling practices and to ensure that you feel confident in how your information is managed. Please read this policy carefully. If you do not agree with its terms, we kindly ask that you refrain from accessing the site.
              </p>
              <p className="tos-pp-text">
                We reserve the right to update this Privacy Policy at any time and for any reason to reflect changes in our practices or legal requirements. Any updates will be communicated by revising the "Last Updated" date below. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
              <p className="tos-pp-last-updated">Last Updated: May 20, 2025</p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Data Collection</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaUserShield className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Collection of Your Information</h2>
              <p className="tos-pp-text">
                We collect information about you in various ways to enhance your experience and fulfill our mission. The types of information we gather include:
              </p>

              <h3 className="tos-pp-subheading">Personal Data</h3>
              <p className="tos-pp-text">
                When you register on our platform, we collect personally identifiable information such as your full name, email address, phone number, and location (e.g., city and state). This data is essential for creating your account, verifying your identity, and tailoring content to your region. You may also voluntarily provide demographic details when participating in activities like surveys or forums. While providing this information is optional, opting out may limit your access to certain features.
              </p>

              <h3 className="tos-pp-subheading">Derivative Data</h3>
              <p className="tos-pp-text">
                Our servers automatically capture technical details when you visit, including your IP address, browser type (e.g., Chrome, Firefox), operating system (e.g., Windows, macOS), access times, and the sequence of pages you view. This information helps us analyze user behavior, optimize website performance, and ensure a seamless experience across devices.
              </p>

              <h3 className="tos-pp-subheading">Financial Data</h3>
              <p className="tos-pp-text">
                If you make a donation or purchase educational materials, we collect payment details such as your credit card number, card brand, expiration date, and billing address. This data is processed securely through our trusted payment gateway partner and is not retained on our servers beyond what is necessary for the transaction. We prioritize your financial security by adhering to industry-standard protocols.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Data Usage</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaDatabase className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Use of Your Information</h2>
              <p className="tos-pp-text">
                Accurate information enables us to deliver a personalized and efficient experience. We use your data for the following purposes:
              </p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">Create and manage your account to ensure seamless access to our resources.</li>
                <li className="tos-pp-list-item">Process complaints and requests to address your concerns promptly.</li>
                <li className="tos-pp-list-item">Send newsletters and updates on cybersecurity threats, with an option to unsubscribe at any time.</li>
                <li className="tos-pp-list-item">Email you about account activities or transaction confirmations.</li>
                <li className="tos-pp-list-item">Facilitate user-to-user communication for community engagement.</li>
                <li className="tos-pp-list-item">Build a personal profile to customize your future visits.</li>
                <li className="tos-pp-list-item">Enhance website efficiency and functionality based on usage patterns.</li>
                <li className="tos-pp-list-item">Analyze trends to improve content and user experience.</li>
                <li className="tos-pp-list-item">Notify you of platform updates or new features.</li>
                <li className="tos-pp-list-item">Prevent fraud and monitor for security threats.</li>
                <li className="tos-pp-list-item">Solicit feedback to refine our services.</li>
                <li className="tos-pp-list-item">Resolve disputes and troubleshoot technical issues.</li>
              </ul>
              <p className="tos-pp-text">
                For example, your browsing data may reveal high engagement with our 'Phishing Awareness' module, prompting us to develop additional related content.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Data Sharing</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaExchangeAlt className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Disclosure of Your Information</h2>
              <p className="tos-pp-text">
                We may share your information under specific circumstances, as detailed below:
              </p>

              <h3 className="tos-pp-subheading">By Law or to Protect Rights</h3>
              <p className="tos-pp-text">
                We may disclose your information if required by law, to comply with legal processes, investigate policy violations, or protect the rights, property, and safety of our users and the public, in accordance with applicable regulations.
              </p>

              <h3 className="tos-pp-subheading">Third-Party Service Providers</h3>
              <p className="tos-pp-text">
                We collaborate with third-party services like AWS (hosting), Google Analytics (data analysis), and Mailchimp (email marketing). These providers access only the data necessary to perform their functions and are bound by confidentiality agreements.
              </p>

              <h3 className="tos-pp-subheading">Marketing Communications</h3>
              <p className="tos-pp-text">
                With your explicit consent, we may share your information with partners for marketing purposes. You can withdraw this consent at any time via your account settings or by contacting us.
              </p>

              <h3 className="tos-pp-subheading">Interactions with Other Users</h3>
              <p className="tos-pp-text">
                When engaging with others on the platform, your name, profile photo, and activity descriptions may be visible to them to foster community interaction.
              </p>

              <h3 className="tos-pp-subheading">Online Postings</h3>
              <p className="tos-pp-text">
                Content you post, such as comments or contributions, may be publicly viewable and could be distributed beyond our platform indefinitely.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Security Protocols</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaLock className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Security of Your Information</h2>
              <p className="tos-pp-text">
                We implement robust administrative, technical, and physical security measures—including data encryption, regular audits, and access controls—to safeguard your personal information. These steps reflect our commitment to cybersecurity excellence.
              </p>
              <p className="tos-pp-text">
                Despite our efforts, no security system is infallible. We cannot guarantee absolute protection against unauthorized access or misuse, particularly for data transmitted online. We encourage you to adopt strong passwords and two-factor authentication to enhance your own security.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">User Rights</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaUserSecret className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Your Rights Regarding Your Information</h2>
              <p className="tos-pp-text">
                You have the following rights over your personal data:
              </p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">Access your data and request a copy.</li>
                <li className="tos-pp-list-item">Correct inaccuracies in your information.</li>
                <li className="tos-pp-list-item">Request deletion, subject to legal obligations.</li>
                <li className="tos-pp-list-item">Opt out of marketing data processing.</li>
              </ul>
              <p className="tos-pp-text">
                To exercise these rights, contact us at <span className="tos-pp-highlight">privacy@savdhaanindia.org</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Data Retention</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaDatabase className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">How Long We Keep Your Information</h2>
              <p className="tos-pp-text">
                We retain your data as long as your account remains active or as needed to provide services. Upon account deletion, we remove your personal information within 30 days, except where retention is required for legal or security purposes. Anonymized data may be kept indefinitely for analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Children's Privacy</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaChild className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Protecting Children's Privacy</h2>
              <p className="tos-pp-text">
                Our platform welcomes users of all ages, including those under 13. We do not knowingly collect data from children without parental consent. If a parent or guardian believes their child has shared information, please contact us at <span className="tos-pp-highlight">privacy@savdhaanindia.org</span> for prompt removal.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Cookies</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaCookieBite className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Use of Cookies and Tracking Technologies</h2>
              <p className="tos-pp-text">
                We use cookies—small text files stored on your device—to improve your experience by remembering preferences, analyzing traffic, and personalizing content. You can adjust cookie settings in your browser, though this may impact some features.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Contact Network</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaUserSecret className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">Contact Us</h2>
              <p className="tos-pp-text">
                For questions or comments about this Privacy Policy, reach out to us at:
              </p>
              <div className="tos-pp-contact-info">
                <p className="tos-pp-contact-text">Savdhaan India</p>
                <p className="tos-pp-contact-text">Email: <span className="tos-pp-highlight">privacy@savdhaanindia.org</span></p>
                <p className="tos-pp-contact-text">Phone: <span className="tos-pp-highlight">XXXX XXXX XX</span></p>
                <p className="tos-pp-contact-text">Address: <span className="tos-pp-highlight">Mumbai, India</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;