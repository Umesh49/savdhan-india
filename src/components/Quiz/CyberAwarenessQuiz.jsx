import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizDataByCategory } from "./quizData_Shuffler";
import {
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
  FaRedo,
  FaTrophy,
  FaShieldAlt,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import "./CyberAwarenessQuiz.css";

function CyberAwarenessQuiz() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hackerEffect, setHackerEffect] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const questionCount = categoryId === "all" ? 10 : 5;
    const selectedQuestions = getQuizDataByCategory(
      categoryId || "all",
      questionCount
    );
    const formattedQuestions = selectedQuestions.map((q, index) => ({
      id: index + 1,
      question: q.question,
      options: q.options,
      correctAnswer: q.options.indexOf(q.correct_answer),
      category: q.category,
    }));
    setQuizData(formattedQuestions);
    setLoading(false);
    timerRef.current = setInterval(
      () => setElapsedTime((prev) => prev + 1),
      1000
    );
    return () => clearInterval(timerRef.current);
  }, [categoryId]);

  useEffect(() => {
    if (!loading) {
      const text = "CYBER SECURITY QUIZ";
      let iteration = 0;
      const interval = setInterval(() => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
        let result = "";
        for (let i = 0; i < text.length; i++) {
          result +=
            i < iteration
              ? text[i]
              : characters[Math.floor(Math.random() * characters.length)];
        }
        setHackerEffect(result);
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleOptionSelect = (index) => {
    if (showFeedback) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setShowFeedback(true);
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      clearInterval(timerRef.current);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const restartQuiz = () => {
    const questionCount = categoryId === "all" ? 10 : 5;
    const selectedQuestions = getQuizDataByCategory(
      categoryId || "all",
      questionCount
    );
    const formattedQuestions = selectedQuestions.map((q, index) => ({
      id: index + 1,
      question: q.question,
      options: q.options,
      correctAnswer: q.options.indexOf(q.correct_answer),
      category: q.category,
    }));
    setQuizData(formattedQuestions);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
    setElapsedTime(0);
    timerRef.current = setInterval(
      () => setElapsedTime((prev) => prev + 1),
      1000
    );
  };

  const getResultMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 90) return "SECURITY LEVEL: EXPERT";
    if (percentage >= 70) return "SECURITY LEVEL: ADVANCED";
    if (percentage >= 50) return "SECURITY LEVEL: INTERMEDIATE";
    return "SECURITY LEVEL: VULNERABLE";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;

  if (loading) {
    return (
      <div className="quiz-savdhan-root">
        <div className="quiz-savdhan-app">
          <div className="quiz-savdhan-container">
            <div className="quiz-savdhan-card">
              <div className="quiz-savdhan-text-center">
                <h2 className="quiz-savdhan-title quiz-savdhan-flicker-text">
                  INITIALIZING SECURITY PROTOCOL
                </h2>
                <div className="quiz-savdhan-progress">
                  <div
                    className="quiz-savdhan-progress-bar quiz-savdhan-shimmer-effect"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <p className="quiz-savdhan-subtitle quiz-savdhan-typing-effect">
                  Loading security tests...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="quiz-savdhan-root">
        <div className="quiz-savdhan-app">
          <div className="quiz-savdhan-container">
            <div className="quiz-savdhan-card">
              <div className="quiz-savdhan-header">
                <div className="quiz-savdhan-icon-wrapper">
                  <FaShieldAlt size={48} className="quiz-savdhan-icon-shield" />
                </div>
                <h1 className="quiz-savdhan-title">
                  CYBER SECURITY ASSESSMENT
                </h1>
                <div className="quiz-savdhan-divider"></div>
                <p className="quiz-savdhan-subtitle">
                  Diagnostic complete. View your cybersecurity awareness
                  profile.
                </p>
              </div>

              <div className="quiz-savdhan-result-score">
                <div className="quiz-savdhan-score-circle">
                  <span>
                    {score}/{quizData.length}
                  </span>
                </div>
                <p className="quiz-savdhan-time-display">
                  Total time: {formatTime(elapsedTime)}
                </p>
              </div>

              <div className="quiz-savdhan-text-center quiz-savdhan-mb-8">
                <h2 className="quiz-savdhan-result-message">
                  {getResultMessage()}
                </h2>
                <div className="quiz-savdhan-progress quiz-savdhan-mb-4">
                  <div
                    className="quiz-savdhan-progress-bar"
                    style={{
                      width: `${(score / quizData.length) * 100}%`,
                      backgroundColor:
                        (score / quizData.length) * 100 >= 70
                          ? "var(--accent-green)"
                          : (score / quizData.length) * 100 >= 50
                          ? "#FFD700"
                          : "var(--accent-red)",
                    }}
                  ></div>
                </div>
                <p className="quiz-savdhan-result-details">
                  Defense capability assessment: {score} out of{" "}
                  {quizData.length} security protocols verified.
                </p>
              </div>

              {score / quizData.length < 0.7 && (
                <div className="quiz-savdhan-terminal quiz-savdhan-mb-8">
                  <span className="quiz-savdhan-prompt">system:~$</span>
                  <span>
                    {" "}
                    <FaExclamationTriangle className="quiz-savdhan-icon-alert" />{" "}
                    SECURITY ADVISORY:
                  </span>
                  <p className="quiz-savdhan-mt-2 quiz-savdhan-pl-4">
                    Recommend additional training to strengthen awareness
                    against cyber threats.
                  </p>
                </div>
              )}

              <div className="quiz-savdhan-action-buttons">
                <button className="quiz-savdhan-btn" onClick={restartQuiz}>
                  <FaRedo className="quiz-savdhan-mr-2" /> Re-run Security Scan
                </button>
                <button
                  className="quiz-savdhan-btn quiz-savdhan-btn-primary"
                  onClick={() => navigate("/")}
                >
                  <FaShieldAlt className="quiz-savdhan-mr-2" /> Select Different
                  Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-savdhan-root">
      <div className="quiz-savdhan-app">
        <div className="quiz-savdhan-container">
          <div className="quiz-savdhan-card">
            <div className="quiz-savdhan-header">
              <div className="quiz-savdhan-icon-wrapper">
                <FaLock size={48} className="quiz-savdhan-icon-lock" />
              </div>
              <h1 className="quiz-savdhan-title">{hackerEffect}</h1>
              <div className="quiz-savdhan-divider"></div>
              <p className="quiz-savdhan-subtitle">
                Test your defense protocols against cyber threats
              </p>
              <div className="quiz-savdhan-quiz-stats">
                <span className="quiz-savdhan-time-display">
                  Time: {formatTime(elapsedTime)}
                </span>
                <span className="quiz-savdhan-score-display">
                  Score: {score}/{answeredQuestions.length}
                </span>
              </div>
            </div>

            <div className="quiz-savdhan-quiz-content">
              <div className="quiz-savdhan-quiz-progress">
                <div className="quiz-savdhan-progress-labels">
                  <span>SCANNING...</span>
                  <span>
                    SECURITY TEST {currentQuestion + 1}/{quizData.length}
                  </span>
                </div>
                <div className="quiz-savdhan-progress">
                  <div
                    className="quiz-savdhan-progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="quiz-savdhan-quiz-question">
                <div className="quiz-savdhan-terminal">
                  <span className="quiz-savdhan-prompt">root@security:~$</span>
                  <span> {quizData[currentQuestion].question}</span>
                </div>

                <div className="quiz-savdhan-options-container">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`quiz-savdhan-option ${
                        selectedOption === index ? "quiz-savdhan-selected" : ""
                      } ${
                        showFeedback &&
                        index === quizData[currentQuestion].correctAnswer
                          ? "quiz-savdhan-correct"
                          : ""
                      } ${
                        showFeedback &&
                        selectedOption === index &&
                        index !== quizData[currentQuestion].correctAnswer
                          ? "quiz-savdhan-incorrect"
                          : ""
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <div className="quiz-savdhan-option-marker">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="quiz-savdhan-option-text">{option}</div>
                      {showFeedback &&
                        index === quizData[currentQuestion].correctAnswer && (
                          <FaCheck className="quiz-savdhan-icon-check" />
                        )}
                      {showFeedback &&
                        selectedOption === index &&
                        index !== quizData[currentQuestion].correctAnswer && (
                          <FaTimes className="quiz-savdhan-icon-x" />
                        )}
                    </div>
                  ))}
                </div>

                {showFeedback && (
                  <div
                    className={`quiz-savdhan-feedback-box ${
                      selectedOption === quizData[currentQuestion].correctAnswer
                        ? "quiz-savdhan-correct"
                        : "quiz-savdhan-incorrect"
                    }`}
                  >
                    <p>
                      {selectedOption ===
                      quizData[currentQuestion].correctAnswer ? (
                        <span className="quiz-savdhan-feedback-status quiz-savdhan-success">
                          <FaCheck /> ACCESS GRANTED
                        </span>
                      ) : (
                        <span className="quiz-savdhan-feedback-status quiz-savdhan-error">
                          <FaTimes /> SECURITY BREACH
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>

              <div className="quiz-savdhan-action-buttons">
                <button
                  className="quiz-savdhan-btn quiz-savdhan-btn-outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  <FaArrowLeft className="quiz-savdhan-mr-2" /> Previous
                </button>

                {!showFeedback ? (
                  <button
                    className="quiz-savdhan-btn quiz-savdhan-btn-primary"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Execute Scan
                  </button>
                ) : (
                  <button
                    className="quiz-savdhan-btn quiz-savdhan-btn-primary"
                    onClick={handleNextQuestion}
                  >
                    {currentQuestion < quizData.length - 1 ? (
                      <>
                        Next Protocol{" "}
                        <FaArrowRight className="quiz-savdhan-ml-2" />
                      </>
                    ) : (
                      <>
                        System Analysis{" "}
                        <FaTrophy className="quiz-savdhan-ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberAwarenessQuiz;