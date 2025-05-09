import { 
  FaGavel, 
  FaUserShield, 
  FaFileContract, 
  FaExclamationTriangle, 
  FaBalanceScale, 
  FaGlobe, 
  FaShieldAlt, 
  FaDatabase, 
  FaUserLock, 
  FaUniversity, 
  FaHandshake,
  FaServer,
  FaRegCopyright,
  FaGlobeAsia
} from "react-icons/fa";
import './Tos_PP.css';

const TermsOfService = () => {
  return (
    <div className="pp-tos-theme">
    <div className="tos-pp-container tos-pp-py-8">
      <div className="tos-pp-page-header">
        <div className="tos-pp-header-container">
          <h1 className="tos-pp-glitch-text">Terms of Service</h1>
          <p className="tos-pp-header-subtitle">Please read these terms carefully before using our cybersecurity awareness platform</p>
          <div className="tos-pp-grid-lines"></div>
        </div>
      </div>

      <div className="tos-pp-terms-container">
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Agreement Terms</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaGavel className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">1. Acceptance of Terms</h2>
              <p className="tos-pp-text">
                By accessing or using the ZeroTrace website, mobile application, and related services (collectively referred to as the "Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Platform.
              </p>
              <p className="tos-pp-text">
                These Terms of Service apply to all users of the Platform, including without limitation users who are browsers, visitors, students, educators, cybersecurity professionals, content contributors, and any other stakeholders engaging with our Platform.
              </p>
              <p className="tos-pp-text">
                ZeroTrace is an educational initiative created by Masters of Computer Application students from Mumbai and Navi Mumbai to promote cybersecurity awareness and digital safety practices. Our mission is to empower Indian citizens with knowledge and tools to protect themselves in the increasingly complex digital landscape.
              </p>
              <p className="tos-pp-text">
                We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and changes to our Platform. It is your responsibility to check our Platform periodically for changes. Your continued use of or access to our Platform following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
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
            <span className="tos-pp-terminal-title">User Responsibilities</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaUserShield className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">2. User Accounts</h2>
              <p className="tos-pp-text">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Platform.
              </p>
              <p className="tos-pp-text">
                You are responsible for safeguarding the password that you use to access the Platform and for any activities or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account and to change them periodically.
              </p>
              <p className="tos-pp-text">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account through our designated security channels.
              </p>
              <p className="tos-pp-text">
                If you are under 13 years of age, you may use our Platform only with the involvement and supervision of a parent or guardian. ZeroTrace is committed to protecting children's privacy and complying with applicable laws regarding minors.
              </p>
              <p className="tos-pp-text">
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to restricting access to your computer and/or account. You accept responsibility for all activities that occur under your account and/or password.
              </p>
              <p className="tos-pp-text">
                If you suspect any unauthorized use of your account, you must immediately notify ZeroTrace by contacting our support team via the information provided in Section 10 of these Terms.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Content Guidelines</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaFileContract className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">3. Content and Conduct</h2>
              <p className="tos-pp-text">
                Our Platform allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Platform, including its legality, reliability, and appropriateness.
              </p>
              <p className="tos-pp-text">By posting Content on our Platform, you represent and warrant that:</p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">
                  The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.
                </li>
                <li className="tos-pp-list-item">
                  The posting of your Content on or through our Platform does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
                </li>
                <li className="tos-pp-list-item">
                  Your Content does not contain malicious code, viruses, or other harmful components designed to interrupt, destroy, or limit the functionality of any computer software, hardware, or telecommunications equipment.
                </li>
                <li className="tos-pp-list-item">
                  Your Content is not spam, machine-generated, or randomly-generated content, or contains unethical or unwanted commercial content designed to drive traffic to third-party sites or boost search engine rankings.
                </li>
                <li className="tos-pp-list-item">
                  Your Content does not advocate, promote, or assist any unlawful act such as copyright infringement or computer misuse.
                </li>
              </ul>
              <p className="tos-pp-text">
                We reserve the right to monitor all Content and to remove any Content which can be considered inappropriate, offensive, or causes breach of these Terms of Service at our sole discretion.
              </p>
              <p className="tos-pp-text">
                You understand and acknowledge that you are responsible for any Content you submit or contribute, and you, not ZeroTrace, have full responsibility for such Content, including its legality, reliability, accuracy, and appropriateness.
              </p>
              <p className="tos-pp-text">
                We reserve the right to terminate the account of any user found to be in violation of these terms, and to refer matters to appropriate law enforcement agencies if necessary.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Prohibited Activities</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaExclamationTriangle className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">4. Prohibited Uses</h2>
              <p className="tos-pp-text">
                You may use our Platform only for lawful purposes and in accordance with these Terms. You agree not to use our Platform:
              </p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">In any way that violates any applicable national or international law or regulation.</li>
                <li className="tos-pp-list-item">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li className="tos-pp-list-item">
                  To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
                </li>
                <li className="tos-pp-list-item">
                  To impersonate or attempt to impersonate ZeroTrace, a ZeroTrace team member, another user, or any other person or entity.
                </li>
                <li className="tos-pp-list-item">
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Platform, or which may harm ZeroTrace or users of the Platform or expose them to liability.
                </li>
                <li className="tos-pp-list-item">
                  To use the Platform in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Platform.
                </li>
                <li className="tos-pp-list-item">
                  To use any robot, spider, or other automatic device, process, or means to access the Platform for any purpose, including monitoring or copying any of the material on the Platform.
                </li>
                <li className="tos-pp-list-item">
                  To use any device, software, or routine that interferes with the proper working of the Platform.
                </li>
                <li className="tos-pp-list-item">
                  To introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.
                </li>
                <li className="tos-pp-list-item">
                  To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Platform, the server on which the Platform is stored, or any server, computer, or database connected to the Platform.
                </li>
                <li className="tos-pp-list-item">
                  To attack the Platform via a denial-of-service attack or a distributed denial-of-service attack.
                </li>
                <li className="tos-pp-list-item">
                  To otherwise attempt to interfere with the proper working of the Platform.
                </li>
              </ul>
              <p className="tos-pp-text">
                Any prohibited use as outlined above may result in the immediate termination of your access to our Platform, and where appropriate, reporting to relevant law enforcement authorities.
              </p>
            </div>
          </div>
        </div>

        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Legal Disclaimers</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaBalanceScale className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">5. Disclaimers and Limitations of Liability</h2>
              <p className="tos-pp-text">
                The information provided on our Platform is for general informational and educational purposes only. All information on the Platform is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Platform.
              </p>
              <p className="tos-pp-text">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Platform or reliance on any information provided on the Platform. Your use of the Platform and your reliance on any information on the Platform is solely at your own risk.
              </p>
              <p className="tos-pp-text">
                The ZeroTrace Platform is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="tos-pp-text">
                We make no warranty that: (1) the Platform will meet your requirements; (2) the Platform will be uninterrupted, timely, secure, or error-free; (3) the results that may be obtained from the use of the Platform will be accurate or reliable; (4) the quality of any products, services, information, or other material purchased or obtained by you through the Platform will meet your expectations.
              </p>
              <p className="tos-pp-text">
                Any material downloaded or otherwise obtained through the use of the Platform is done at your own discretion and risk, and you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material.
              </p>
              <p className="tos-pp-text">
                No advice or information, whether oral or written, obtained by you from ZeroTrace or through or from the Platform shall create any warranty not expressly stated in these Terms.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Intellectual Property</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaRegCopyright className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">6. Intellectual Property Rights</h2>
              <p className="tos-pp-text">
                The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by ZeroTrace, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="tos-pp-text">
                These Terms of Service permit you to use the Platform for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform, except as follows:
              </p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">
                  Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
                </li>
                <li className="tos-pp-list-item">
                  You may store files that are automatically cached by your Web browser for display enhancement purposes.
                </li>
                <li className="tos-pp-list-item">
                  You may print or download one copy of a reasonable number of pages of the Platform for your own personal, non-commercial use and not for further reproduction, publication, or distribution.
                </li>
                <li className="tos-pp-list-item">
                  If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.
                </li>
                <li className="tos-pp-list-item">
                  If we provide social media features with certain content, you may take such actions as are enabled by such features.
                </li>
              </ul>
              <p className="tos-pp-text">
                You must not:
              </p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">Modify copies of any materials from this Platform.</li>
                <li className="tos-pp-list-item">Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.</li>
                <li className="tos-pp-list-item">Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this Platform.</li>
              </ul>
              <p className="tos-pp-text">
                If you wish to make any use of material on the Platform other than that set out in this section, please address your request to: permissions@zerotrace.org.
              </p>
              <p className="tos-pp-text">
                If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Platform in breach of the Terms of Service, your right to use the Platform will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Platform or any content on the Platform is transferred to you, and all rights not expressly granted are reserved by ZeroTrace.
              </p>
              <p className="tos-pp-text">
                The ZeroTrace name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of ZeroTrace or its affiliates or licensors. You must not use such marks without the prior written permission of ZeroTrace. All other names, logos, product and service names, designs, and slogans on this Platform are the trademarks of their respective owners.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Data Security</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaDatabase className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">7. Data Privacy and Security</h2>
              <p className="tos-pp-text">
                Protecting your personal information is of utmost importance to us. All personal data collected through the Platform is handled in accordance with our Privacy Policy, which is incorporated by reference into these Terms of Service. By using our Platform, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.
              </p>
              <p className="tos-pp-text">
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
              </p>
              <p className="tos-pp-text">
                Despite our best efforts, no data transmission over the internet or any wireless network can be guaranteed to be 100% secure. While we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations of the Internet which are beyond our control; (b) the security, integrity, and privacy of any and all information and data exchanged between you and us through this Platform cannot be guaranteed; and (c) any such information and data may be viewed or tampered with in transit by a third party.
              </p>
              <p className="tos-pp-text">
                In the event we become aware of a data breach that affects your personal information, we will make reasonable efforts to notify you as per applicable laws. You agree to provide us with accurate and complete information as necessary for us to fulfill our obligations under these Terms.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">User Privacy</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaUserLock className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">8. User Rights and Privacy Choices</h2>
              <p className="tos-pp-text">
                As a user of our Platform, you have certain rights regarding your personal data. These rights may include:
              </p>
              <ul className="tos-pp-policy-list">
                <li className="tos-pp-list-item">The right to access and obtain a copy of your personal data</li>
                <li className="tos-pp-list-item">The right to rectify any inaccurate or incomplete personal data</li>
                <li className="tos-pp-list-item">The right to erasure of your personal data in certain circumstances</li>
                <li className="tos-pp-list-item">The right to restrict processing of your personal data</li>
                <li className="tos-pp-list-item">The right to data portability</li>
                <li className="tos-pp-list-item">The right to object to processing of your personal data</li>
                <li className="tos-pp-list-item">The right to withdraw consent at any time, where we rely on consent to process your personal data</li>
              </ul>
              <p className="tos-pp-text">
                To exercise any of these rights, please contact us using the contact information provided in Section 10. We will respond to your request in accordance with applicable laws. Before responding to your request, we may ask you to verify your identity and provide further details about your request.
              </p>
              <p className="tos-pp-text">
                We will not discriminate against you for exercising any of these rights. However, we may not be able to provide certain services if you choose to withhold necessary personal data.
              </p>
              <p className="tos-pp-text">
                For more detailed information about how we collect, use, and disclose your personal data, please review our Privacy Policy available on our Platform.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Academic Disclosures</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaUniversity className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">9. Academic Project Disclosure</h2>
              <p className="tos-pp-text">
                ZeroTrace is developed as an academic project by Masters of Computer Application students from educational institutions in Mumbai and Navi Mumbai. The Platform is designed primarily for educational purposes and to create cybersecurity awareness among Indian citizens.
              </p>
              <p className="tos-pp-text">
                As an academic project, the Platform may be subject to periodic updates, changes, or discontinuation based on academic schedules, requirements, or evaluations. We will make reasonable efforts to notify users of any significant changes or discontinuation of services.
              </p>
              <p className="tos-pp-text">
                The research, analyses, and educational content provided on the Platform may be utilized for academic publications, presentations, or reports. Any personal information will be anonymized and aggregated before being used in such academic contexts.
              </p>
              <p className="tos-pp-text">
                While the Platform is developed with professional standards in mind, users should be aware of its academic nature and purpose. The Platform may not offer the same level of services or support as commercial cybersecurity platforms.
              </p>
              <p className="tos-pp-text">
                We welcome feedback, suggestions, and contributions from users to improve the Platform and enhance its educational value. Such feedback may be incorporated into future iterations of the Platform or related academic work.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Contact Information</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaGlobe className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">10. Contact Us</h2>
              <p className="tos-pp-text">If you have any questions about these Terms of Service, please contact us at:</p>
              <div className="tos-pp-contact-info">
                <p className="tos-pp-contact-text">ZeroTrace - Cybersecurity Awareness Project</p>
                <p className="tos-pp-contact-text">Email: <span className="tos-pp-highlight">legal@zerotrace.org</span></p>
                <p className="tos-pp-contact-text">Technical Support: <span className="tos-pp-highlight">support@zerotrace.org</span></p>
                <p className="tos-pp-contact-text">General Inquiries: <span className="tos-pp-highlight">info@zerotrace.org</span></p>
                <p className="tos-pp-contact-text">Phone: <span className="tos-pp-highlight">XXXX XXXX XX</span></p>
                <p className="tos-pp-contact-text">Address: <span className="tos-pp-highlight">Mumbai, Maharashtra, India</span></p>
                <p className="tos-pp-contact-text">Hours of Operation: <span className="tos-pp-highlight">Monday to Friday, 9:00 AM to 5:00 PM IST</span></p>
              </div>
              <p className="tos-pp-text">
                For urgent security concerns or vulnerability reports, please email <span className="tos-pp-highlight">security@zerotrace.org</span> with details of your concern.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel tos-pp-mb-6">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Term Modifications</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaHandshake className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">11. Modifications to Terms</h2>
              <p className="tos-pp-text">
                ZeroTrace reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="tos-pp-text">
                By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Platform.
              </p>
              <p className="tos-pp-text">
                The most current version of the Terms will always be posted on our Platform with the effective date clearly indicated. We encourage users to frequently check this page for any changes to stay informed about our terms and conditions.
              </p>
              <p className="tos-pp-text">
                If you have any questions or concerns about the modifications made to these Terms, please contact us using the information provided in Section 10.
              </p>
            </div>
          </div>
        </div>
        
        <div className="tos-pp-panel">
          <div className="tos-pp-terminal-header">
            <span className="tos-pp-terminal-button tos-pp-red"></span>
            <span className="tos-pp-terminal-button tos-pp-yellow"></span>
            <span className="tos-pp-terminal-button tos-pp-green"></span>
            <span className="tos-pp-terminal-title">Governing Law</span>
          </div>
          <div className="tos-pp-policy-section">
            <div className="tos-pp-section-icon">
              <FaGlobeAsia className="tos-pp-icon" />
            </div>
            <div className="tos-pp-section-content">
              <h2 className="tos-pp-section-title">12. Governing Law and Jurisdiction</h2>
              <p className="tos-pp-text">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="tos-pp-text">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              <p className="tos-pp-text">
                Any disputes arising out of or relating to these Terms or any use of our Platform shall be finally settled under the Rules of Arbitration of the Indian Arbitration and Conciliation Act, 1996 by one or more arbitrators appointed in accordance with said Rules. The place of arbitration shall be Mumbai, Maharashtra, India.
              </p>
              <p className="tos-pp-text">
                These Terms constitute the entire agreement between us regarding our Platform, and supersede and replace any prior agreements we might have had between us regarding the Platform.
              </p>
              <p className="tos-pp-text">
                The Platform is controlled and operated from India. If you access our Platform from other territories, you do so at your own risk and are responsible for compliance with local laws.
              </p>
              <p className="tos-pp-text">
                By using ZeroTrace, you acknowledge that you have read these Terms of Service, understood them, and agree to be bound by them. If you do not agree to these Terms of Service, you are not authorized to use the Platform.
              </p>
              <p className="tos-pp-text">
                Thank you for using ZeroTrace - together, we can build a safer digital India!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ div>
  )
}

export default TermsOfService