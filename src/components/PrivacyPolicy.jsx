import { FaShieldAlt, FaUserShield, FaDatabase, FaExchangeAlt, FaLock, FaUserSecret } from "react-icons/fa"

const PrivacyPolicy = () => {
  return (
    <div className="container py-8">
      <div className="page-header">
        <div className="container">
          <h1 className="glitch-text">Privacy Policy</h1>
          <p>How we protect and handle your personal information</p>
        </div>
      </div>

      <div className="privacy-policy-container">
        <div className="cyber-panel mb-6">
          <div className="policy-section">
            <div className="section-icon">
              <FaShieldAlt />
            </div>
            <div className="section-content">
              <h2>Introduction</h2>
              <p>
                At Savdhaan India, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services. Please read
                this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
                access the site.
              </p>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will
                alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are
                encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
              <p className="last-updated">Last Updated: April 14, 2023</p>
            </div>
          </div>
        </div>

        <div className="cyber-panel mb-6">
          <div className="policy-section">
            <div className="section-icon">
              <FaUserShield />
            </div>
            <div className="section-content">
              <h2>Collection of Your Information</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect via the
                Website includes:
              </p>

              <h3>Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and demographic
                information that you voluntarily give to us when you register with the Website or when you choose to
                participate in various activities related to the Website. You are under no obligation to provide us with
                personal information of any kind, however your refusal to do so may prevent you from using certain
                features of the Website.
              </p>

              <h3>Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Website, such as your IP address, your
                browser type, your operating system, your access times, and the pages you have viewed directly before
                and after accessing the Website.
              </p>

              <h3>Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card
                brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
                information about our services from the Website. We store only very limited, if any, financial
                information that we collect. Otherwise, all financial information is stored by our payment processor.
              </p>
            </div>
          </div>
        </div>

        <div className="cyber-panel mb-6">
          <div className="policy-section">
            <div className="section-icon">
              <FaDatabase />
            </div>
            <div className="section-content">
              <h2>Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the Website to:
              </p>

              <ul className="policy-list">
                <li>Create and manage your account.</li>
                <li>Process your complaints and requests.</li>
                <li>
                  Deliver targeted advertising, newsletters, and other information regarding promotions and the Website
                  to you.
                </li>
                <li>Email you regarding your account or order.</li>
                <li>Enable user-to-user communications.</li>
                <li>Generate a personal profile about you to make future visits to the Website more personalized.</li>
                <li>Increase the efficiency and operation of the Website.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
                <li>Notify you of updates to the Website.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Request feedback and contact you about your use of the Website.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cyber-panel mb-6">
          <div className="policy-section">
            <div className="section-icon">
              <FaExchangeAlt />
            </div>
            <div className="section-content">
              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>

              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>

              <h3>Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes.
              </p>

              <h3>Interactions with Other Users</h3>
              <p>
                If you interact with other users of the Website, those users may see your name, profile photo, and
                descriptions of your activity.
              </p>

              <h3>Online Postings</h3>
              <p>
                When you post comments, contributions or other content to the Website, your posts may be viewed by all
                users and may be publicly distributed outside the Website in perpetuity.
              </p>
            </div>
          </div>
        </div>

        <div className="cyber-panel mb-6">
          <div className="policy-section">
            <div className="section-icon">
              <FaLock />
            </div>
            <div className="section-content">
              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              <p>
                Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.
                Therefore, we cannot guarantee complete security if you provide personal information.
              </p>
            </div>
          </div>
        </div>

        <div className="cyber-panel">
          <div className="policy-section">
            <div className="section-icon">
              <FaUserSecret />
            </div>
            <div className="section-content">
              <h2>Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="contact-info">
                <p>Savdhaan India</p>
                <p>Email: privacy@savdhaanindia.org</p>
                <p>Phone: +91-1234567890</p>
                <p>Address: Cyber Security Complex, New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy