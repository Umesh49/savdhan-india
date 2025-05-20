export const cybersecurityData = {
  threatTypes: [
    {
      name: "Phishing",
      description:
        "Fraudulent messages tricking victims into revealing sensitive information like passwords or credit cards.",
      preventionMeasures:
        "Verify links before clicking, use anti-phishing filters, and avoid sharing personal info over email.",
    },
    {
      name: "Ransomware",
      description:
        "Malware encrypting victim's files, demanding ransom for decryption.",
      preventionMeasures:
        "Use updated antivirus software, avoid suspicious links, and regularly back up data.",
    },
    {
      name: "SQL Injection",
      description:
        "Malicious SQL statements inserted into a database query, allowing unauthorized data access or manipulation.",
      preventionMeasures:
        "Use parameterized queries, input validation, and ORM frameworks.",
    },
    {
      name: "Man-in-the-Middle",
      description:
        "Attacker secretly relays and possibly alters communication between two parties.",
      preventionMeasures:
        "Use encrypted connections (HTTPS), verify website certificates, and avoid public Wi-Fi for sensitive transactions.",
    },
    {
      name: "Distributed Denial of Service",
      description:
        "Attack that floods a target with traffic to disrupt services and make resources unavailable.",
      preventionMeasures:
        "Implement rate limiting, use CDN services, and configure network hardware against DDoS attacks.",
    },
  ],
  cyberLaws: [
    {
      section: "Section 66C",
      description:
        "Punishment for identity theft involving fraudulent use of another's electronic signature, password, or ID.",
      penalty: "Up to 3 years imprisonment and/or fine up to ₹1 lakh.",
    },
    {
      section: "Section 66D",
      description:
        "Covers frauds where someone impersonates another through electronic means.",
      penalty: "Up to 3 years imprisonment and fine up to ₹1 lakh.",
    },
    {
      section: "Section 67",
      description:
        "Publishing or transmitting obscene material in electronic form.",
      penalty:
        "First conviction: up to 3 years + ₹5 lakh fine; subsequent: up to 5 years + ₹10 lakh fine.",
    },
    {
      section: "Section 43",
      description:
        "Unauthorized access, downloading, extraction of data from computer systems.",
      penalty:
        "Compensation to affected person, amount determined by adjudicating officer.",
    },
    {
      section: "Section 72",
      description:
        "Breach of confidentiality and privacy by disclosing information without consent.",
      penalty: "Up to 2 years imprisonment or fine up to ₹1 lakh, or both.",
    },
  ],
  reportingChannels: [
    {
      name: "Cyber Crime Portal",
      urlOrContact: "cybercrime.gov.in",
      description:
        "Official platform for reporting cyber crimes, especially related to women and children.",
    },
    {
      name: "Helpline 1930",
      urlOrContact: "Call 1930",
      description:
        "Cyber fraud helpline in India for financial frauds; victims can call to initiate a freeze on the transaction.",
    },
    {
      name: "CERT-IN",
      urlOrContact: "cert-in.org.in",
      description:
        "Indian Computer Emergency Response Team - issues alerts, security guidelines, and incident response.",
    },
    {
      name: "Local Police Station",
      urlOrContact: "Visit nearest police station",
      description:
        "File an FIR at your local police station with jurisdiction over your residence.",
    },
    {
      name: "National Cyber Crime Reporting Portal",
      urlOrContact: "cybercrime.gov.in",
      description:
        "Report all types of cybercrimes with option to track complaint status.",
    },
  ],
  faqs: [
    {
      question: "What should I do if I fall victim to a phishing scam?",
      answer:
        "Immediately change your passwords, report the incident on cybercrime.gov.in, and notify your bank if financial data was compromised.",
    },
    {
      question: "Is cyberbullying punishable in India?",
      answer:
        "Yes. It can be prosecuted under IPC Section 506 (criminal intimidation) and 509 (insulting modesty of a woman).",
    },
    {
      question: "How do I file a cybercrime complaint?",
      answer:
        "Visit cybercrime.gov.in, choose 'Report Other Cybercrime', fill in the required details, and submit supporting evidence.",
    },
    {
      question: "What is the punishment for hacking in India?",
      answer:
        "Under Section 66 of IT Act, hacking can lead to imprisonment up to 3 years or fine up to ₹5 lakh, or both.",
    },
    {
      question: "How can I protect my online banking transactions?",
      answer:
        "Use strong passwords, enable two-factor authentication, verify website security (https), avoid public Wi-Fi for transactions, and regularly monitor your accounts.",
    },
    {
      question: "What should I do if my social media account is hacked?",
      answer:
        "Report the hack to the platform, reset your password, enable two-factor authentication, and file a complaint on cybercrime.gov.in if sensitive data was misused.",
    },
    {
      question: "How can I protect against cryptocurrency scams?",
      answer:
        "Verify the legitimacy of crypto platforms, avoid sharing wallet keys, use hardware wallets for storage, and be wary of unsolicited investment offers.",
    },
    {
      question:
        "What steps can organizations take to prevent supply chain attacks?",
      answer:
        "Implement zero-trust architecture, regularly audit third-party vendors, and ensure software supply chains are monitored for integrity.",
    },
  ],
  caseStudies: [
    {
      id: 1,
      title: "Clop Ransomware Attack on Accellion FTA (2025)",
      date: "January 2025",
      summary:
        "The Clop ransomware gang exploited vulnerabilities in Accellion's File Transfer Application, stealing sensitive data from multiple organizations, including healthcare and financial sectors.",
      legalAction:
        "Ongoing investigations by international law enforcement; class-action lawsuits filed against affected organizations for inadequate security.",
      lesson:
        "Legacy file transfer systems require regular security updates and should be replaced with modern, secure alternatives.",
      category: "Ransomware",
      impact: "High - Compromised sensitive data across multiple industries",
    },
    {
      id: 2,
      title: "Change Healthcare Ransomware Attack (2024)",
      date: "February 2024",
      summary:
        "Massive ransomware attack on Change Healthcare, a major US healthcare technology company, disrupted healthcare payments and claims processing nationwide.",
      legalAction:
        "BlackCat/ALPHV ransomware group claimed responsibility. FBI investigation ongoing with significant government response.",
      lesson:
        "Healthcare payment systems require enhanced security measures as they represent critical infrastructure with widespread impacts when compromised.",
      category: "Ransomware",
      impact: "Critical - Disrupted healthcare payments across the US",
    },
    {
      id: 3,
      title: "MGM Resorts Ransomware Attack (2023)",
      date: "September 2023",
      summary:
        "Major ransomware attack disrupted operations at MGM Resorts properties nationwide, affecting hotel room access, casino operations, and reservation systems.",
      legalAction:
        "Multiple class-action lawsuits filed by guests and shareholders. ALPHV/BlackCat ransomware group claimed responsibility.",
      lesson:
        "Hospitality industry needs stronger security measures and better segmentation between guest services and core IT infrastructure.",
      category: "Ransomware",
      impact: "High - Caused over $100 million in damages",
    },
    {
      id: 4,
      title: "Aadhaar Data Leak (2023)",
      date: "October 2023",
      summary:
        "Personal details of over 81.5 crore Indians were leaked online, allegedly sourced from the Indian Council of Medical Research (ICMR).",
      legalAction:
        "Investigation initiated by CERT-In and Ministry of Electronics and Information Technology; raised concerns about data security and privacy.",
      lesson:
        "Government agencies must implement stringent data protection measures to safeguard citizens' information and conduct regular security audits.",
      category: "Data Leak",
      impact: "Critical - Potentially largest data breach in India's history",
    },
    {
      id: 5,
      title: "MOVEit Transfer Global Attack (2023)",
      date: "May 2023",
      summary:
        "Mass exploitation of a zero-day vulnerability in the MOVEit Transfer file transfer application affected thousands of organizations worldwide, with data theft from over 2,000 organizations.",
      legalAction:
        "Multiple class-action lawsuits filed against Progress Software. Cl0p ransomware group claimed responsibility.",
      lesson:
        "Critical vulnerabilities in widely-used enterprise software can have cascading effects across industries and require immediate patching responses.",
      category: "Supply Chain Attack",
      impact: "Critical - Affected thousands of organizations globally",
    },
    {
      id: 6,
      title: "Log4Shell Vulnerability (2021)",
      date: "December 2021",
      summary:
        "Critical zero-day vulnerability in Apache Log4j library allowed remote code execution, affecting millions of devices and applications worldwide.",
      legalAction:
        "No specific prosecutions, but led to emergency directives from government agencies requiring immediate patching.",
      lesson:
        "Regular security audits of open-source dependencies and rapid patching processes are essential for reducing vulnerability exposure.",
      category: "Zero-Day Vulnerability",
      impact: "Critical - Affected millions of systems globally",
    },
    {
      id: 7,
      title: "Pegasus Spyware Surveillance (2021)",
      date: "July 2021",
      summary:
        "NSO Group's Pegasus spyware was revealed to have been used to target journalists, activists, and politicians worldwide, including in India, through zero-click exploits.",
      legalAction:
        "Supreme Court of India established a technical committee to investigate the allegations. Multiple international lawsuits against NSO Group.",
      lesson:
        "Mobile security requires constant vigilance. Even fully updated devices can be vulnerable to sophisticated state-sponsored attacks.",
      category: "Surveillance",
      impact: "High - Privacy implications affecting democratic institutions",
    },
    {
      id: 8,
      title: "Air India Data Breach (2021)",
      date: "May 2021",
      summary:
        "Air India reported a massive data breach affecting 4.5 million customers worldwide. Personal data including passport and credit card details were compromised.",
      legalAction:
        "CERT-In investigation initiated; Air India faced potential GDPR penalties due to affected EU citizens.",
      lesson:
        "Third-party data processors must be thoroughly vetted and monitored as part of an organization's security posture.",
      category: "Data Breach",
      impact: "High - Affected 4.5 million passengers globally",
    },
    {
      id: 9,
      title: "JBS Foods Ransomware Attack (2021)",
      date: "June 2021",
      summary:
        "REvil ransomware group attacked JBS Foods, the world's largest meat processor, forcing the shutdown of facilities in the US, Canada, and Australia.",
      legalAction:
        "JBS paid $11 million in ransom. FBI attributed the attack to REvil and eventually recovered some of the ransom payment.",
      lesson:
        "Food supply chain security is critical infrastructure that requires enhanced protection measures and business continuity planning.",
      category: "Ransomware",
      impact: "High - Disrupted global meat supply chain",
    },
    {
      id: 10,
      title: "Colonial Pipeline Ransomware Attack (2021)",
      date: "May 2021",
      summary:
        "DarkSide ransomware attack forced Colonial Pipeline to shut down its entire 5,500-mile pipeline system, causing fuel shortages across the Eastern United States.",
      legalAction:
        "FBI recovered approximately $2.3 million in Bitcoin ransom. DarkSide disbanded following international pressure.",
      lesson:
        "Critical infrastructure requires enhanced security measures and segmented networks separating operational technology from IT networks.",
      category: "Ransomware",
      impact: "Critical - Affected fuel supply for 45% of the East Coast",
    },
    {
      id: 11,
      title: "Microsoft Exchange Server Attacks (2021)",
      date: "March 2021",
      summary:
        "Chinese state-sponsored group Hafnium exploited zero-day vulnerabilities in Microsoft Exchange Server, affecting approximately 250,000 servers worldwide.",
      legalAction:
        "US, UK, and EU officially attributed the attack to China. Microsoft released emergency patches.",
      lesson:
        "On-premises email servers require urgent patching and careful configuration. Cloud-based alternatives may provide better security for some organizations.",
      category: "State-Sponsored Attack",
      impact: "Critical - Widespread compromise of corporate email servers",
    },
    {
      id: 12,
      title: "Twitter Bitcoin Scam (2020)",
      date: "July 2020",
      summary:
        "Hackers compromised high-profile Twitter accounts, including those of Elon Musk and Barack Obama, to promote a Bitcoin scam, defrauding users of over $120,000.",
      legalAction:
        "US authorities arrested a 17-year-old mastermind and accomplices. Charges included wire fraud and identity theft.",
      lesson:
        "Social media platforms must enhance account security and monitor for suspicious activity to prevent large-scale scams.",
      category: "Social Media Fraud",
      impact: "Medium - Significant financial losses and reputational damage",
    },
    {
      id: 13,
      title: "SolarWinds Supply Chain Attack (2020)",
      date: "December 2020",
      summary:
        "Attackers inserted malicious code into SolarWinds Orion software updates, affecting up to 18,000 organizations including multiple US government agencies and major corporations.",
      legalAction:
        "US imposed sanctions on Russia as the suspected perpetrator. Multiple investigations by federal agencies and class-action lawsuits filed against SolarWinds.",
      lesson:
        "Supply chain integrity is critical. Organizations must verify the security of third-party software and implement zero-trust architecture.",
      category: "Supply Chain Attack",
      impact:
        "High - National security implications with infiltration of government networks",
    },
    {
      id: 14,
      title: "OLX Scam Targeting NRIs (2020)",
      date: "June 2020",
      summary:
        "Scammers posed as military personnel selling vehicles at low prices, convincing NRIs to pay advance amounts for non-existent products.",
      legalAction:
        "Multiple FIRs registered across India; ongoing investigations.",
      lesson:
        "Users should verify the authenticity of online sellers and avoid making advance payments without proper verification.",
      category: "Online Marketplace Fraud",
      impact: "Medium - Affected numerous NRIs with financial losses",
    },
    {
      id: 15,
      title: "Cosmos Bank Cyber Attack (2018)",
      date: "August 2018",
      summary:
        "Hackers siphoned off ₹94 crore through a malware attack on the bank's ATM server.",
      legalAction:
        "Investigation by cybercrime agencies; highlighted vulnerabilities in banking infrastructure.",
      lesson:
        "Financial institutions must regularly update security protocols and monitor for suspicious activities.",
      category: "Banking Fraud",
      impact: "High - One of India's largest banking cyberheists",
    },
    {
      id: 16,
      title: "Equifax Data Breach (2017)",
      date: "September 2017",
      summary:
        "Hackers exploited a vulnerability in Apache Struts, stealing personal data of 147 million people, including Social Security numbers and credit card details.",
      legalAction:
        "Equifax settled for $700 million in fines and consumer compensation. Multiple lawsuits and regulatory actions followed.",
      lesson:
        "Timely patching of known vulnerabilities and robust data protection policies are critical to prevent large-scale breaches.",
      category: "Data Breach",
      impact: "Critical - Affected 147 million individuals",
    },
    {
      id: 17,
      title: "WannaCry Ransomware Attack (2017)",
      date: "May 2017",
      summary:
        "Global ransomware attack exploiting a Windows vulnerability affected over 200,000 systems across 150 countries, including hospitals and businesses.",
      legalAction:
        "US attributed the attack to North Korea. No major prosecutions; international sanctions imposed.",
      lesson:
        "Regular software updates and disabling outdated protocols like SMBv1 are essential to prevent widespread ransomware attacks.",
      category: "Ransomware",
      impact: "Critical - Disrupted critical services globally",
    },
    {
      id: 18,
      title: "Yahoo Data Breaches (2013-2014)",
      date: "September 2014",
      summary:
        "Two separate breaches compromised 3 billion user accounts, exposing names, email addresses, and hashed passwords, disclosed publicly in 2016.",
      legalAction:
        "Yahoo faced $117.5 million in settlements and regulatory fines. Russian hackers were implicated.",
      lesson:
        "Organizations must implement strong encryption and timely breach detection to protect user data.",
      category: "Data Breach",
      impact: "Critical - Largest known data breach affecting all Yahoo users",
    },
    {
      id: 19,
      title: "Bazee.com Obscenity Case (2004)",
      date: "December 2004",
      summary:
        "An obscene video was listed for sale on Bazee.com, leading to the arrest of the CEO, Avnish Bajaj.",
      legalAction:
        "Charged under Section 67 of the IT Act; highlighted the need for clear intermediary liability laws.",
      lesson:
        "Online platforms must monitor user-generated content and have mechanisms to address illegal material.",
      category: "Content Moderation",
      impact: "Medium - Led to changes in intermediary liability laws in India",
    },
    {
      id: 20,
      title: "Sony Sambandh Fraud (2003)",
      date: "May 2003",
      summary:
        "An individual used stolen credit card information to fraudulently purchase electronics from Sony India's website, targeting NRIs.",
      legalAction:
        "India's first cybercrime conviction; case registered under IPC Section 420 and IT Act Section 66.",
      lesson:
        "E-commerce platforms must implement robust verification mechanisms to prevent fraudulent transactions.",
      category: "Financial Fraud",
      impact:
        "Medium - Established legal precedent in India for cybercrime cases",
    },
  ],
  preventiveTips: [
    { tip: "Use two-factor authentication on all critical accounts." },
    { tip: "Avoid sharing OTPs and passwords over calls or messages." },
    { tip: "Do not click on unknown links received via email or SMS." },
    {
      tip: "Use licensed antivirus software and regularly update all applications.",
    },
    { tip: "Log out of shared systems and public Wi-Fi after use." },
    { tip: "Verify website URLs before entering personal details." },
    { tip: "Regularly back up important data to secure locations." },
    {
      tip: "Be cautious of unsolicited job offers or investment opportunities online.",
    },
    { tip: "Use strong, unique passwords for different accounts." },
    {
      tip: "Keep your operating system and software updated with security patches.",
    },
    {
      tip: "Monitor social media accounts for unusual activity and report hacks immediately.",
    },
    {
      tip: "Use reputable VPN services for secure browsing on public networks.",
    },
    {
      tip: "Regularly audit third-party software and vendors for security compliance.",
    },
    {
      tip: "Use hardware wallets for cryptocurrency storage to prevent theft.",
    },
  ],
  timeline: [
    {
      year: 2025,
      event:
        "Clop Ransomware Attack on Accellion FTA - Compromised sensitive data across multiple industries",
    },
    {
      year: 2024,
      event: "Change Healthcare Ransomware - Disrupted US healthcare payments",
    },
    {
      year: 2023,
      event: "MGM Resorts Ransomware - $100M+ in damages to casino operations",
    },
    {
      year: 2023,
      event:
        "Aadhaar Data Leak - 81.5 crore Indians' data allegedly compromised",
    },
    {
      year: 2023,
      event:
        "MOVEit Transfer Global Attack - Data theft from 2,000+ organizations",
    },
    {
      year: 2021,
      event:
        "Log4Shell Vulnerability - Critical zero-day in widely used library",
    },
    {
      year: 2021,
      event:
        "Pegasus Spyware Revelations - Surveillance of journalists and activists",
    },
    {
      year: 2021,
      event: "JBS Foods Ransomware - Disrupted global meat processing",
    },
    {
      year: 2021,
      event: "Air India Data Breach - 4.5 million customers affected",
    },
    {
      year: 2021,
      event: "Colonial Pipeline Ransomware - Major fuel supply disruption",
    },
    {
      year: 2021,
      event: "Microsoft Exchange Server Attacks - 250000 servers compromised",
    },
    {
      year: 2020,
      event:
        "Twitter Bitcoin Scam - High-profile accounts hacked for cryptocurrency fraud",
    },
    {
      year: 2020,
      event:
        "SolarWinds Supply Chain Attack - Compromised thousands of organizations",
    },
    { year: 2020, event: "OLX Scam Targeting NRIs - Online marketplace fraud" },
    {
      year: 2018,
      event: "Cosmos Bank Cyber Attack - ₹94 crore heist via malware",
    },
    {
      year: 2017,
      event: "Equifax Data Breach - 147 million individuals' data exposed",
    },
    {
      year: 2017,
      event: "WannaCry Ransomware Attack - Affected 200,000 systems globally",
    },
    {
      year: 2014,
      event: "Yahoo Data Breaches - 3 billion accounts compromised",
    },
    {
      year: 2004,
      event:
        "Bazee.com Obscenity Case - Highlighted intermediary liability issues",
    },
    {
      year: 2003,
      event: "Sony Sambandh Fraud - India's first cybercrime conviction",
    },
  ],
};

export default cybersecurityData;