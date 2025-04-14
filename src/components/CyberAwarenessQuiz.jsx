"use client"

import { Link } from "react-router-dom"

import { useState } from "react"
import { FaCheck, FaTimes, FaArrowRight, FaArrowLeft, FaRedo, FaTrophy } from "react-icons/fa"

// Mock quiz data
const quizData = [
  {
    id: 1,
    question: "What is phishing?",
    options: [
      "A type of fish found in cyber lakes",
      "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity",
      "A method to improve internet speed",
      "A programming language for cybersecurity",
    ],
    correctAnswer: 1,
    explanation:
      "Phishing is a cybercrime where attackers disguise themselves as trustworthy entities to trick individuals into revealing sensitive information such as passwords, credit card numbers, or personal data.",
  },
  {
    id: 2,
    question: "Which of the following is a strong password?",
    options: ["password123", "qwerty", "P@$$w0rd!2023", "your name and birth year"],
    correctAnswer: 2,
    explanation:
      "Strong passwords contain a mix of uppercase and lowercase letters, numbers, and special characters. They should be at least 12 characters long and not include easily guessable information.",
  },
  {
    id: 3,
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Logging in with two different passwords",
      "A security process requiring two different authentication methods",
      "Sharing your password with two trusted friends",
      "Changing your password twice a year",
    ],
    correctAnswer: 1,
    explanation:
      "Two-factor authentication (2FA) is a security process that requires users to provide two different authentication factors to verify their identity, typically something you know (password) and something you have (like a phone).",
  },
  {
    id: 4,
    question: "Which of these is NOT a sign of a phishing email?",
    options: [
      "Urgent call to action",
      "Spelling and grammar errors",
      "Official company logo and proper formatting",
      "Request for personal information",
    ],
    correctAnswer: 2,
    explanation:
      "While phishing emails often try to mimic legitimate communications, they typically contain red flags like urgent requests, spelling errors, suspicious links, or requests for personal information. Proper formatting and official logos can be present in both legitimate and phishing emails.",
  },
  {
    id: 5,
    question: "Under the IT Act of India, what is the punishment for hacking?",
    options: [
      "No punishment, it's not illegal",
      "Up to 3 years imprisonment or fine up to ₹5 lakh, or both",
      "Only a fine of ₹1 lakh",
      "Only a warning for first-time offenders",
    ],
    correctAnswer: 1,
    explanation:
      "Under Section 66 of the IT Act, hacking (unauthorized access to computer systems) is punishable with imprisonment up to 3 years or a fine up to ₹5 lakh, or both.",
  },
  {
    id: 6,
    question: "What should you do if you receive a suspicious link via email?",
    options: [
      "Click it to see what happens",
      "Forward it to all your contacts to warn them",
      "Hover over it to check the actual URL before deciding",
      "Download the attachment to scan it",
    ],
    correctAnswer: 2,
    explanation:
      "When you receive a suspicious link, hover over it (without clicking) to see the actual URL. If it looks suspicious or different from what it claims to be, don't click it. Report the email as phishing if possible.",
  },
  {
    id: 7,
    question: "What is ransomware?",
    options: [
      "Software that speeds up your computer",
      "Malware that blocks access to your data until a ransom is paid",
      "A tool used by cybersecurity professionals",
      "A type of antivirus program",
    ],
    correctAnswer: 1,
    explanation:
      "Ransomware is a type of malicious software that encrypts a victim's files or locks their device, demanding payment (ransom) to restore access to the data or system.",
  },
  {
    id: 8,
    question: "Which section of the IT Act deals with publishing or transmitting obscene material in electronic form?",
    options: ["Section 43", "Section 66", "Section 67", "Section 72"],
    correctAnswer: 2,
    explanation:
      "Section 67 of the IT Act deals with publishing or transmitting obscene material in electronic form. It prescribes punishment with imprisonment up to 3 years and fine up to ₹5 lakh for first conviction.",
  },
  {
    id: 9,
    question: "What is the best way to protect against data loss?",
    options: [
      "Never store important data",
      "Print everything and store paper copies",
      "Regularly back up your data to multiple locations",
      "Only use one device for all important data",
    ],
    correctAnswer: 2,
    explanation:
      "Regular backups to multiple locations (following the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite) is the best protection against data loss from hardware failure, ransomware, or other disasters.",
  },
  {
    id: 10,
    question: "What is social engineering in cybersecurity?",
    options: [
      "Building social networks securely",
      "Psychological manipulation to trick users into making security mistakes",
      "Using social media for cybersecurity awareness",
      "A method to secure social media accounts",
    ],
    correctAnswer: 1,
    explanation:
      "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It relies on human error rather than technical hacking techniques.",
  },
]

function CyberAwarenessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  const handleOptionSelect = (index) => {
    if (showFeedback) return // Prevent changing answer after submission
    setSelectedOption(index)
  }

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return

    setShowFeedback(true)

    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setShowFeedback(false)

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(null)
      setShowFeedback(false)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions([])
  }

  const getResultMessage = () => {
    const percentage = (score / quizData.length) * 100

    if (percentage >= 90) {
      return "Excellent! You're a cybersecurity expert!"
    } else if (percentage >= 70) {
      return "Good job! You have a solid understanding of cybersecurity."
    } else if (percentage >= 50) {
      return "Not bad, but there's room for improvement in your cybersecurity knowledge."
    } else {
      return "You should review cybersecurity basics to better protect yourself online."
    }
  }

  const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100

  if (quizCompleted) {
    return (
      <div className="quiz-page">
        <div className="container">
          <div className="quiz-container">
            <div className="quiz-header">
              <h1>Cyber Awareness Quiz Results</h1>
              <p>See how well you understand cybersecurity concepts and Indian cyber laws.</p>
            </div>

            <div className="quiz-result">
              <div className="result-score">
                {score} / {quizData.length}
              </div>
              <div className="result-message">
                <h2>{getResultMessage()}</h2>
                <p>
                  You answered {score} out of {quizData.length} questions correctly.
                </p>
              </div>

              <div className="result-actions">
                <button className="btn-primary" onClick={restartQuiz}>
                  <FaRedo /> Take Quiz Again
                </button>
                <Link to="/resources" className="btn-secondary">
                  <FaTrophy /> View Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <div className="container">
        <div className="quiz-container">
          <div className="quiz-header">
            <h1>Cyber Awareness Quiz</h1>
            <p>Test your knowledge about cybersecurity concepts and Indian cyber laws.</p>
          </div>

          <div className="quiz-content">
            <div className="quiz-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <div className="progress-text">
                <span>
                  Question {currentQuestion + 1} of {quizData.length}
                </span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
            </div>

            <div className="quiz-question">
              <h2>{quizData[currentQuestion].question}</h2>

              <div className="quiz-options">
                {quizData[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`quiz-option ${selectedOption === index ? "selected" : ""} ${
                      showFeedback && index === quizData[currentQuestion].correctAnswer ? "correct" : ""
                    } ${
                      showFeedback && selectedOption === index && index !== quizData[currentQuestion].correctAnswer
                        ? "incorrect"
                        : ""
                    }`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <div className="option-marker">{String.fromCharCode(65 + index)}</div>
                    <div className="option-text">{option}</div>
                  </div>
                ))}
              </div>

              {showFeedback && (
                <div
                  className={`quiz-feedback ${selectedOption === quizData[currentQuestion].correctAnswer ? "correct" : "incorrect"}`}
                >
                  <p>
                    {selectedOption === quizData[currentQuestion].correctAnswer ? (
                      <>
                        <FaCheck /> Correct!{" "}
                      </>
                    ) : (
                      <>
                        <FaTimes /> Incorrect.{" "}
                      </>
                    )}
                    {quizData[currentQuestion].explanation}
                  </p>
                </div>
              )}
            </div>

            <div className="quiz-actions">
              <button className="btn-outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                <FaArrowLeft /> Previous
              </button>

              {!showFeedback ? (
                <button className="btn-primary" onClick={handleSubmitAnswer} disabled={selectedOption === null}>
                  Submit Answer
                </button>
              ) : (
                <button className="btn-primary" onClick={handleNextQuestion}>
                  {currentQuestion < quizData.length - 1 ? (
                    <>
                      Next <FaArrowRight />
                    </>
                  ) : (
                    <>
                      Finish Quiz <FaTrophy />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CyberAwarenessQuiz
