const initialChecklist = {
  passwords: [
    {
      id: "p1",
      text: "Create strong passwords with letters, numbers, and symbols",
      checked: false,
      explanation:
        "Strong passwords are harder to guess. Use a mix of uppercase, lowercase, numbers, and symbols. Aim for at least 12 characters.",
    },
    {
      id: "p2",
      text: "Turn on two-factor authentication (2FA) for important accounts",
      checked: false,
      explanation:
        "2FA adds an extra layer of security by requiring a second verification step, usually a code sent to your phone.",
    },
    {
      id: "p3",
      text: "Use a password manager to store your passwords securely",
      checked: false,
      explanation:
        "Password managers let you create and store strong, unique passwords for all your accounts without having to memorize them.",
    },
    {
      id: "p4",
      text: "Change your passwords regularly, at least every 3-6 months",
      checked: false,
      explanation:
        "Regularly changing passwords helps protect your accounts if a website you use experiences a data breach.",
    },
    {
      id: "p5",
      text: "Use different passwords for different important accounts",
      checked: false,
      explanation:
        "Using unique passwords prevents hackers from accessing all your accounts if one password is compromised.",
    },
    {
      id: "p6",
      text: "Avoid using personal information in your passwords",
      checked: false,
      explanation:
        "Don't use names, birthdays, or other personal details that someone might be able to find or guess based on your social media profiles.",
    },
    {
      id: "p7",
      text: "Check if your accounts have been involved in data breaches",
      checked: false,
      explanation:
        "Use services like HaveIBeenPwned to check if your email or phone has been exposed in a known data breach and change affected passwords immediately.",
    },
    {
      id: "p8",
      text: "Set up recovery options for your important accounts",
      checked: false,
      explanation:
        "Add backup email addresses, phone numbers, and recovery codes to ensure you don't get locked out of your accounts.",
    },
  ],
  devices: [
    {
      id: "d1",
      text: "Keep your devices updated with the latest security updates",
      checked: false,
      explanation:
        "Updates often fix security vulnerabilities. Enable automatic updates when possible.",
    },
    {
      id: "d2",
      text: "Install and maintain antivirus/anti-malware protection",
      checked: false,
      explanation:
        "Antivirus software helps detect and remove malicious programs that could steal your information.",
    },
    {
      id: "d3",
      text: "Turn on device encryption to protect your data",
      checked: false,
      explanation:
        "Encryption scrambles your data so it can't be read if your device is lost or stolen.",
    },
    {
      id: "d4",
      text: "Back up your important files regularly",
      checked: false,
      explanation:
        "Regular backups help you recover your data in case of device failure, theft, or ransomware attacks.",
    },
    {
      id: "d5",
      text: "Set up fingerprint or face recognition if available",
      checked: false,
      explanation:
        "Biometric authentication adds an extra layer of security that's difficult for others to replicate.",
    },
    {
      id: "d6",
      text: "Enable automatic screen lock after a short period of inactivity",
      checked: false,
      explanation:
        "This prevents unauthorized access if you step away from your device without manually locking it.",
    },
    {
      id: "d7",
      text: "Use a secure DNS provider for added protection",
      checked: false,
      explanation:
        "Services like Cloudflare's 1.1.1.1 or Google's 8.8.8.8 can help protect against DNS-based attacks and some malicious websites.",
    },
    {
      id: "d8",
      text: "Monitor your device for unusual activity or performance issues",
      checked: false,
      explanation:
        "Sudden slowdowns, strange pop-ups, or unexpected behavior could indicate your device has been compromised.",
    },
    {
      id: "d9",
      text: "Securely dispose of old devices by wiping all data",
      checked: false,
      explanation:
        "Before selling, donating, or recycling devices, perform a factory reset and remove all personal data to prevent it from being recovered.",
    },
    {
      id: "d10",
      text: "Review app permissions periodically on all devices",
      checked: false,
      explanation:
        "Check and revoke unnecessary permissions that apps have accumulated over time to minimize data exposure.",
    },
  ],
  online: [
    {
      id: "o1",
      text: "Be cautious about email attachments and links",
      checked: false,
      explanation:
        "Suspicious emails may contain malware or phishing links. Verify the sender before clicking or downloading anything.",
    },
    {
      id: "o2",
      text: "Check for HTTPS (padlock icon) before entering sensitive information",
      checked: false,
      explanation:
        "The padlock icon means your connection to the website is encrypted, helping protect your information from eavesdroppers.",
    },
    {
      id: "o3",
      text: "Use a VPN when on public Wi-Fi",
      checked: false,
      explanation:
        "VPNs encrypt your internet connection, protecting your data from others who might be monitoring the public network.",
    },
    {
      id: "o4",
      text: "Review your social media privacy settings",
      checked: false,
      explanation:
        "Limit what information is visible to the public and be mindful of what personal details you share online.",
    },
    {
      id: "o5",
      text: "Clear your browsing history and cookies periodically",
      checked: false,
      explanation:
        "This helps limit tracking of your online activities and reduces the personal data websites can collect about you.",
    },
    {
      id: "o6",
      text: "Use a content blocker or ad-blocker for safer browsing",
      checked: false,
      explanation:
        "These tools can block malicious ads, trackers, and scripts that could compromise your security or privacy.",
    },
    {
      id: "o7",
      text: "Be cautious of public USB charging stations",
      checked: false,
      explanation:
        "Some charging stations can be manipulated to steal data. Use your own charger when possible or consider a USB data blocker.",
    },
    {
      id: "o8",
      text: "Verify requests for personal information even if they appear legitimate",
      checked: false,
      explanation:
        "Contact companies directly using their official phone numbers or websites if you receive unexpected requests for sensitive information.",
    },
    {
      id: "o9",
      text: "Use secure messaging apps with end-to-end encryption",
      checked: false,
      explanation:
        "Apps like Signal, WhatsApp, or Telegram with end-to-end encryption protect your private conversations from being intercepted.",
    },
    {
      id: "o10",
      text: "Disable automatic Wi-Fi connections to unknown networks",
      checked: false,
      explanation:
        "This prevents your device from automatically connecting to potentially malicious networks with similar names to those you've previously used.",
    },
  ],
  financial: [
    {
      id: "f1",
      text: "Monitor your bank and credit card statements regularly",
      checked: false,
      explanation:
        "Check for suspicious transactions that could indicate your account has been compromised.",
    },
    {
      id: "f2",
      text: "Set up alerts for bank account and credit card transactions",
      checked: false,
      explanation:
        "Real-time alerts can notify you immediately of any activity, allowing you to quickly spot unauthorized transactions.",
    },
    {
      id: "f3",
      text: "Use separate cards or virtual cards for online shopping",
      checked: false,
      explanation:
        "This limits potential damage if a website is compromised, as hackers won't have access to your main accounts.",
    },
    {
      id: "f4",
      text: "Avoid conducting financial transactions on public Wi-Fi",
      checked: false,
      explanation:
        "Public networks can be monitored by hackers looking to steal financial information.",
    },
    {
      id: "f5",
      text: "Check your credit report annually for suspicious activity",
      checked: false,
      explanation:
        "Reviewing your credit report helps you spot identity theft early and dispute unauthorized accounts.",
    },
    {
      id: "f6",
      text: "Freeze your credit if you're not actively applying for loans",
      checked: false,
      explanation:
        "A credit freeze prevents new accounts from being opened in your name without your explicit permission, helping prevent identity theft.",
    },
    {
      id: "f7",
      text: "Set up spending limits on your credit and debit cards",
      checked: false,
      explanation:
        "This can limit the damage if your card information is stolen by capping how much can be spent without additional verification.",
    },
    {
      id: "f8",
      text: "Use a secure computer for online banking and financial transactions",
      checked: false,
      explanation:
        "Avoid using shared computers or devices that may be infected with malware when accessing financial accounts.",
    },
    {
      id: "f9",
      text: "Sign up for identity theft protection services",
      checked: false,
      explanation:
        "These services monitor your personal information and alert you to potential fraud or identity theft attempts.",
    },
    {
      id: "f10",
      text: "Keep digital and paper copies of important financial documents secure",
      checked: false,
      explanation:
        "Store tax returns, investment records, and other financial documents in encrypted digital storage and physical locked storage.",
    },
  ],
  mobile: [
    {
      id: "m1",
      text: "Only download apps from official app stores",
      checked: false,
      explanation:
        "Official stores like Google Play and Apple App Store screen apps for malware and security issues.",
    },
    {
      id: "m2",
      text: "Review app permissions before installing",
      checked: false,
      explanation:
        "Be wary of apps requesting unnecessary access to your contacts, camera, location, or other sensitive information.",
    },
    {
      id: "m3",
      text: "Turn off Bluetooth and Wi-Fi when not in use",
      checked: false,
      explanation:
        "Leaving these on can create additional ways for hackers to access your device.",
    },
    {
      id: "m4",
      text: "Set up remote tracking and wiping for your mobile devices",
      checked: false,
      explanation:
        "If your phone is lost or stolen, you can locate it or erase your personal data remotely.",
    },
    {
      id: "m5",
      text: "Keep unused apps updated or uninstall them",
      checked: false,
      explanation:
        "Outdated apps can contain security vulnerabilities. If you don't use an app, it's safer to remove it.",
    },
    {
      id: "m6",
      text: "Use a secure lock screen with PIN, pattern, or biometric authentication",
      checked: false,
      explanation:
        "This prevents unauthorized access to your device if it's lost or stolen. Avoid simple patterns or PINs like '1234'.",
    },
    {
      id: "m7",
      text: "Enable SIM card lock with a PIN code",
      checked: false,
      explanation:
        "This prevents someone from using your SIM card in another device if your phone is stolen.",
    },
    {
      id: "m8",
      text: "Turn off location services for apps that don't need them",
      checked: false,
      explanation:
        "Many apps collect location data unnecessarily. Review which apps have access to your location and disable when not needed.",
    },
    {
      id: "m9",
      text: "Be cautious when charging your phone at public USB ports",
      checked: false,
      explanation:
        "Use a power-only USB cable or AC adapter instead of connecting directly to unknown USB ports which could access your data.",
    },
    {
      id: "m10",
      text: "Backup your mobile device regularly",
      checked: false,
      explanation:
        "Regular backups ensure you don't lose contacts, photos, and other important information if your device is lost, stolen, or damaged.",
    },
  ],
  privacy: [
    {
      id: "pr1",
      text: "Opt out of data collection when possible",
      checked: false,
      explanation:
        "Many services allow you to limit what personal information they collect and share. Check privacy settings on accounts.",
    },
    {
      id: "pr2",
      text: "Use private browsing or a privacy-focused browser",
      checked: false,
      explanation:
        "These options can help limit tracking of your online activities and reduce targeted advertising.",
    },
    {
      id: "pr3",
      text: "Cover your webcam when not in use",
      checked: false,
      explanation:
        "Malware can potentially access your camera without your knowledge. A simple cover provides peace of mind.",
    },
    {
      id: "pr4",
      text: "Be careful what you share on social media",
      checked: false,
      explanation:
        "Information like your full birth date, home address, or vacation plans can be used by identity thieves or burglars.",
    },
    {
      id: "pr5",
      text: "Shred sensitive documents before discarding",
      checked: false,
      explanation:
        "Physical documents with personal information can be used for identity theft if found in your trash.",
    },
    {
      id: "pr6",
      text: "Use a dedicated email address for online accounts and subscriptions",
      checked: false,
      explanation:
        "This helps limit spam and makes it easier to identify phishing attempts targeting your main email address.",
    },
    {
      id: "pr7",
      text: "Review and clean up your digital footprint periodically",
      checked: false,
      explanation:
        "Search for yourself online and request removal of outdated or sensitive information from websites and search engines.",
    },
    {
      id: "pr8",
      text: "Disable personalized ads and tracking where possible",
      checked: false,
      explanation:
        "Most platforms like Google, Facebook, and Apple allow you to opt out of personalized advertising and some tracking features.",
    },
    {
      id: "pr9",
      text: "Use encrypted cloud storage for sensitive files",
      checked: false,
      explanation:
        "Services with zero-knowledge encryption ensure that only you can access your files, not even the service provider.",
    },
    {
      id: "pr10",
      text: "Be cautious of voice assistants and smart home devices",
      checked: false,
      explanation:
        "Review privacy settings for these devices, considering when they're listening and what data they collect and store.",
    },
  ],

  iot: [
    {
      id: "iot1",
      text: "Change default passwords on all smart home devices",
      checked: false,
      explanation:
        "Most IoT devices come with default passwords that are widely known and can be easily exploited if not changed.",
    },
    {
      id: "iot2",
      text: "Create a separate Wi-Fi network for IoT devices",
      checked: false,
      explanation:
        "A guest network or VLAN for smart devices prevents them from accessing your main network if compromised.",
    },
    {
      id: "iot3",
      text: "Keep firmware updated on smart home devices",
      checked: false,
      explanation:
        "Regular updates patch security vulnerabilities. Enable automatic updates when available.",
    },
    {
      id: "iot4",
      text: "Disable features you don't use on smart devices",
      checked: false,
      explanation:
        "Turn off unused features, services, and ports to reduce potential attack vectors.",
    },
    {
      id: "iot5",
      text: "Research security practices of manufacturers before purchasing IoT devices",
      checked: false,
      explanation:
        "Choose devices from companies with good security track records and ongoing support for older devices.",
    },
    {
      id: "iot6",
      text: "Secure your home router with strong credentials and latest firmware",
      checked: false,
      explanation:
        "Your router is the gateway to all your connected devices. Keep it updated and secured with a strong password.",
    },
    {
      id: "iot7",
      text: "Review and manage connected apps and services for smart devices",
      checked: false,
      explanation:
        "Periodically check what third-party services have access to your smart home ecosystem and revoke unnecessary access.",
    },
    {
      id: "iot8",
      text: "Use two-factor authentication for smart home accounts when available",
      checked: false,
      explanation:
        "2FA adds an extra layer of security to prevent unauthorized access to your smart home controls.",
    },
  ],

  workFromHome: [
    {
      id: "wfh1",
      text: "Use a VPN when accessing work resources remotely",
      checked: false,
      explanation:
        "A VPN encrypts your connection to work resources, protecting sensitive company data from interception.",
    },
    {
      id: "wfh2",
      text: "Keep work and personal activities separate on devices",
      checked: false,
      explanation:
        "Use different browsers or user accounts for work and personal activities to prevent accidental data leakage.",
    },
    {
      id: "wfh3",
      text: "Secure your home office against physical intrusion",
      checked: false,
      explanation:
        "Lock your computer when not in use and secure sensitive documents, even from family members or roommates.",
    },
    {
      id: "wfh4",
      text: "Be careful with sensitive discussions in shared living spaces",
      checked: false,
      explanation:
        "Be mindful of who might overhear work calls, especially when discussing confidential information.",
    },
    {
      id: "wfh5",
      text: "Follow company security policies even when working from home",
      checked: false,
      explanation:
        "Security policies are still important outside the office. Report security incidents promptly to your IT department.",
    },
    {
      id: "wfh6",
      text: "Secure your home Wi-Fi network with strong encryption (WPA3)",
      checked: false,
      explanation:
        "Use the strongest encryption available (WPA3 or WPA2) and a complex password to prevent unauthorized access to your network.",
    },
    {
      id: "wfh7",
      text: "Use company-approved tools for file sharing and collaboration",
      checked: false,
      explanation:
        "Avoid using personal email or unauthorized cloud services for work documents and communications.",
    },
    {
      id: "wfh8",
      text: "Regularly update conferencing and collaboration software",
      checked: false,
      explanation:
        "Video conferencing and other remote work tools often receive security updates that should be applied promptly.",
    },
  ],

  socialEngineering: [
    {
      id: "se1",
      text: "Be suspicious of unsolicited calls or messages asking for information",
      checked: false,
      explanation:
        "Legitimate organizations rarely call you unexpectedly asking for personal information or passwords.",
    },
    {
      id: "se2",
      text: "Verify the identity of people requesting sensitive information",
      checked: false,
      explanation:
        "Contact organizations directly through official channels rather than using contact info provided in the suspicious message.",
    },
    {
      id: "se3",
      text: "Be wary of messages creating urgency or fear",
      checked: false,
      explanation:
        "Scammers often use pressure tactics to make you act quickly without thinking. Take your time to verify requests.",
    },
    {
      id: "se4",
      text: "Don't overshare personal information on social media",
      checked: false,
      explanation:
        "Information like your birthdate, hometown, or pet names could be used to answer security questions or personalize phishing attempts.",
    },
    {
      id: "se5",
      text: "Be cautious of free offers or things that seem too good to be true",
      checked: false,
      explanation:
        "Free gift cards, prizes, or unexpected winnings are common lures in phishing and social engineering attacks.",
    },
    {
      id: "se6",
      text: "Educate family members about common scams and security practices",
      checked: false,
      explanation:
        "Make sure everyone in your household, especially vulnerable members like children and elderly, knows how to identify and avoid scams.",
    },
    {
      id: "se7",
      text: "Verify unexpected attachments before opening, even from known contacts",
      checked: false,
      explanation:
        "If you weren't expecting a document, confirm with the sender through a different channel before opening the attachment.",
    },
    {
      id: "se8",
      text: "Check for poor grammar, spelling mistakes, and unprofessional formatting",
      checked: false,
      explanation:
        "These are common signs of phishing emails and scam messages, though sophisticated attacks may not have these obvious flaws.",
    },
  ],
};

export default initialChecklist;