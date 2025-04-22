import {
  FaShieldAlt,
  FaEnvelope,
  FaUserSlash,
  FaMobileAlt,
  FaGlobe,
  FaLock,
  FaCodeBranch,
  FaDatabase,
  FaFingerprint,
  FaUniversity,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";
import { allQuizData } from "./quizQuestions";

export const quizCategories = [
  {
    id: "all",
    title: "Complete Security Assessment",
    description:
      "Comprehensive evaluation of your cybersecurity knowledge across all domains",
    icon: FaShieldAlt,
    questions: 10,
  },
  {
    id: "phishing",
    title: "Phishing Defense",
    description:
      "Identify and protect against social engineering and phishing attempts",
    icon: FaEnvelope,
    questions: 10,
  },
  {
    id: "banking",
    title: "Banking Security",
    description: "Protect your financial transactions and banking information",
    icon: FaUniversity,
    questions: 10,
  },
  {
    id: "identity",
    title: "Identity Protection",
    description:
      "Safeguard your personal information and prevent identity theft",
    icon: FaUserSlash,
    questions: 10,
  },
  {
    id: "mobile",
    title: "Mobile Security",
    description:
      "Secure your mobile devices against threats and vulnerabilities",
    icon: FaMobileAlt,
    questions: 10,
  },
  {
    id: "social_media",
    title: "Social Media Security",
    description: "Learn to secure your social media accounts and privacy",
    icon: FaUsers,
    questions: 10,
  },
  {
    id: "software",
    title: "Software Security",
    description:
      "Understand secure coding practices and software vulnerabilities",
    icon: FaCodeBranch,
    questions: 10,
  },
  {
    id: "authentication",
    title: "Authentication Methods",
    description:
      "Explore different authentication techniques and their security",
    icon: FaFingerprint,
    questions: 10,
  },
  {
    id: "network",
    title: "Network Security",
    description: "Protect networks from unauthorized access and attacks",
    icon: FaGlobe,
    questions: 10,
  },
  {
    id: "password",
    title: "Password Security",
    description: "Create and manage strong, secure passwords",
    icon: FaLock,
    questions: 10,
  },
  {
    id: "general",
    title: "General Cybersecurity",
    description: "Fundamental concepts of cybersecurity awareness",
    icon: FaShieldAlt,
    questions: 10,
  },
  {
    id: "data",
    title: "Data Security",
    description: "Learn about data encryption, backups, and breach prevention",
    icon: FaDatabase,
    questions: 10,
  },
  {
    id: "social_engineering",
    title: "Social Engineering Defense",
    description:
      "Recognize and counter social engineering tactics and manipulations",
    icon: FaExclamationTriangle,
    questions: 10,
  },
];

export const getCategoryIcon = (category) => {
  switch (category) {
    case "phishing":
      return FaEnvelope;
    case "banking":
      return FaUniversity;
    case "identity":
      return FaUserSlash;
    case "mobile":
      return FaMobileAlt;
    case "social_media":
      return FaUsers;
    case "software":
      return FaCodeBranch;
    case "authentication":
      return FaFingerprint;
    case "network":
      return FaGlobe;
    case "password":
      return FaLock;
    case "general":
      return FaShieldAlt;
    case "data":
      return FaDatabase;
    case "social_engineering":
      return FaExclamationTriangle;
    default:
      return FaShieldAlt;
  }
};

export const getQuizDataByCategory = (categoryId, count = 5) => {
  const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  if (categoryId === "all") {
    return shuffle(allQuizData).slice(0, count);
  }

  const categoryQuestions = allQuizData.filter(
    (q) => q.category === categoryId
  );
  const shuffledCategoryQuestions = shuffle(categoryQuestions);

  if (shuffledCategoryQuestions.length >= count) {
    return shuffledCategoryQuestions.slice(0, count);
  }

  const remainingCount = count - shuffledCategoryQuestions.length;
  const otherQuestions = shuffle(
    allQuizData.filter((q) => q.category !== categoryId)
  ).slice(0, remainingCount);

  return shuffle([...shuffledCategoryQuestions, ...otherQuestions]);
};