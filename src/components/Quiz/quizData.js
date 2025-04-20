// import { 
//     FaShieldAlt, FaEnvelope, FaUserSecret, FaMobileAlt, 
//     FaGlobe, FaLock, FaCodeBranch, FaDatabase, 
//     FaFingerprint
// } from "react-icons/fa";
// import { allQuizData } from './quizQuestions'; // Assuming transformed JSON is exported from quizQuestions.js

// const getCategoryIcon = (category) => {
//     switch(category) {
//         case "phishing": return FaEnvelope;
//         case "identity": return FaUserSecret;
//         case "mobile": return FaMobileAlt;
//         case "network": return FaGlobe;
//         case "password": return FaLock;
//         case "software": return FaCodeBranch;
//         case "data": return FaDatabase;
//         case "authentication": return FaFingerprint;
//         default: return FaShieldAlt;
//     }
// };

// // Function to get explanation for an answer
// export const getExplanation = (answer) => {
//     if (!answer) return "No explanation available";
    
//     if (answer.includes("phishing")) {
//         return "Phishing attacks attempt to steal sensitive information by disguising as trustworthy entities.";
//     } else if (answer.includes("SIM")) {
//         return "SIM swap fraud allows criminals to take control of your phone number to bypass 2FA security.";
//     } else if (answer.includes("identity theft")) {
//         return "Identity theft occurs when someone steals your personal information to commit fraud.";
//     } else if (answer.includes("bank")) {
//         return "Financial fraud can take multiple forms including fake calls, unauthorized transfers and fraudulent notifications.";
//     }
    
//     return "Always verify information sources and protect your personal data.";
// };

// // Categories for quiz selection
// export const quizCategories = [
//     {
//         id: "all",
//         title: "Complete Security Assessment",
//         description: "Comprehensive evaluation of your cybersecurity knowledge across all domains",
//         icon: FaShieldAlt, // Changed from FaShield to FaShieldAlt
//         questions: 10
//     },
//     {
//         id: "phishing",
//         title: "Phishing Defense",
//         description: "Identify and protect against social engineering and phishing attempts",
//         icon: FaEnvelope,
//         questions: 5
//     },
//     {
//         id: "identity",
//         title: "Identity Protection",
//         description: "Safeguard your personal information and prevent identity theft",
//         icon: FaUserSecret,
//         questions: 5
//     },
//     {
//         id: "mobile",
//         title: "Mobile Security",
//         description: "Secure your mobile devices against threats and vulnerabilities",
//         icon: FaMobileAlt,
//         questions: 5
//     },
//     {
//         id: "password",
//         title: "Password Security",
//         description: "Create and manage strong, secure passwords",
//         icon: FaLock,
//         questions: 5
//     }
// ];

// export const getQuizDataByCategory = (categoryId, count = 5) => {
//     if (categoryId === "all") {
//         const shuffled = [...allQuizData].sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, count);
//     }
    
//     const categoryQuestions = allQuizData.filter(q => q.category === categoryId);
    
//     // If not enough questions in category, supplement with others
//     if (categoryQuestions.length < count) {
//         const otherQuestions = allQuizData
//             .filter(q => q.category !== categoryId)
//             .sort(() => 0.5 - Math.random())
//             .slice(0, count - categoryQuestions.length);
        
//         return [...categoryQuestions, ...otherQuestions]
//             .sort(() => 0.5 - Math.random());
//     }
    
//     return categoryQuestions
//         .sort(() => 0.5 - Math.random())
//         .slice(0, count);
// };

// export { getCategoryIcon };