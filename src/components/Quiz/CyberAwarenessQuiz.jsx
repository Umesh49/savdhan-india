// // CyberAwarenessQuiz.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { 
//   FaCheck, FaTimes, FaArrowRight, FaArrowLeft, 
//   FaRedo, FaTrophy, FaShieldAlt, FaLock, FaExclamationTriangle 
// } from "react-icons/fa";
// import { allQuizData, getQuizDataByCategory, getExplanation } from "./quizData";
// import "./CyberAwarenessQuiz.css";

// function CyberAwarenessQuiz() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();
//   const [quizData, setQuizData] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hackerEffect, setHackerEffect] = useState("");
//   const [questionTimer, setQuestionTimer] = useState(null);
//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     // Load questions based on selected category
//     const questionCount = categoryId === "all" ? 10 : 5;
//     const selectedQuestions = getQuizDataByCategory(categoryId || "all", questionCount);
    
//     // Format questions for the component
//     const formattedQuestions = selectedQuestions.map((q, index) => ({
//       id: index + 1,
//       question: q.question,
//       options: q.options,
//       correctAnswer: q.options.indexOf(q.correct_answer),
//       explanation: getExplanation(q.correct_answer),
//       category: q.category
//     }));
    
//     setQuizData(formattedQuestions);
//     setLoading(false);
    
//     // Start timer for the quiz
//     const timer = setInterval(() => {
//       setElapsedTime(prev => prev + 1);
//     }, 1000);
    
//     setQuestionTimer(timer);
    
//     return () => clearInterval(timer);
//   }, [categoryId]);

//   // Hacker text effect for headings
//   useEffect(() => {
//     if (!loading) {
//       const text = "CYBER SECURITY QUIZ";
//       let iteration = 0;
//       let interval = null;
      
//       clearInterval(interval);
      
//       interval = setInterval(() => {
//         const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
//         let result = "";
        
//         for (let i = 0; i < text.length; i++) {
//           if (i < iteration) {
//             result += text[i];
//           } else {
//             result += characters[Math.floor(Math.random() * characters.length)];
//           }
//         }
        
//         setHackerEffect(result);
        
//         if (iteration >= text.length) {
//           clearInterval(interval);
//         }
        
//         iteration += 1/3;
//       }, 30);
      
//       return () => clearInterval(interval);
//     }
//   }, [loading]);

//   const handleOptionSelect = (index) => {
//     if (showFeedback) return; // Prevent changing answer after submission
//     setSelectedOption(index);
//   };

//   const handleSubmitAnswer = () => {
//     if (selectedOption === null) return;

//     setShowFeedback(true);

//     if (selectedOption === quizData[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }

//     setAnsweredQuestions([...answeredQuestions, currentQuestion]);
//   };

//   const handleNextQuestion = () => {
//     setSelectedOption(null);
//     setShowFeedback(false);

//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizCompleted(true);
//       clearInterval(questionTimer);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedOption(null);
//       setShowFeedback(false);
//     }
//   };

//   const restartQuiz = () => {
//     // Reload questions for the same category
//     const questionCount = categoryId === "all" ? 10 : 5;
//     const selectedQuestions = getQuizDataByCategory(categoryId || "all", questionCount);
    
//     const formattedQuestions = selectedQuestions.map((q, index) => ({
//       id: index + 1,
//       question: q.question,
//       options: q.options,
//       correctAnswer: q.options.indexOf(q.correct_answer),
//       explanation: getExplanation(q.correct_answer),
//       category: q.category
//     }));
    
//     setQuizData(formattedQuestions);
//     setCurrentQuestion(0);
//     setSelectedOption(null);
//     setShowFeedback(false);
//     setScore(0);
//     setQuizCompleted(false);
//     setAnsweredQuestions([]);
//     setElapsedTime(0);
    
//     // Restart timer
//     clearInterval(questionTimer);
//     const timer = setInterval(() => {
//       setElapsedTime(prev => prev + 1);
//     }, 1000);
    
//     setQuestionTimer(timer);
//   };

//   const getResultMessage = () => {
//     const percentage = (score / quizData.length) * 100;

//     if (percentage >= 90) {
//       return "SECURITY LEVEL: EXPERT";
//     } else if (percentage >= 70) {
//       return "SECURITY LEVEL: ADVANCED";
//     } else if (percentage >= 50) {
//       return "SECURITY LEVEL: INTERMEDIATE";
//     } else {
//       return "SECURITY LEVEL: VULNERABLE";
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;

//   if (loading) {
//     return (
//       <div className="quiz-page">
//         <div className="matrix-background"></div>
//         <div className="cyber-container">
//           <div className="cyber-card">
//             <div className="text-center">
//               <h2 className="cyber-title flicker-text">INITIALIZING SECURITY PROTOCOL</h2>
//               <div className="cyber-progress">
//                 <div className="cyber-progress-bar shimmer-effect" style={{ width: "30%" }}></div>
//               </div>
//               <p className="cyber-subtitle typing-effect">Loading security tests...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (quizCompleted) {
//     return (
//       <div className="quiz-page">
//         <div className="matrix-background"></div>
//         <div className="scan-line"></div>
//         <div className="cyber-container">
//           <div className="cyber-card">
//             <div className="cyber-header">
//               <div className="flex justify-center mb-4">
//                 <FaShieldAlt className="text-4xl" style={{ color: "var(--accent-green)" }} />
//               </div>
//               <h1 className="cyber-title">CYBER SECURITY ASSESSMENT</h1>
//               <div className="cyber-divider"></div>
//               <p className="cyber-subtitle">Diagnostic complete. View your cybersecurity awareness profile.</p>
//             </div>

//             <div className="result-score">
//               <div className="score-circle">
//                 <span>{score}/{quizData.length}</span>
//               </div>
//               <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
//                 Total time: {formatTime(elapsedTime)}
//               </p>
//             </div>
              
//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--accent-green)" }}>{getResultMessage()}</h2>
//               <div className="cyber-progress mb-4">
//                 <div 
//                   className="cyber-progress-bar"
//                   style={{ 
//                     width: `${(score / quizData.length) * 100}%`,
//                     backgroundColor: (score / quizData.length) * 100 >= 70 ? 'var(--accent-green)' : 
//                                     (score / quizData.length) * 100 >= 50 ? '#FFD700' : 'var(--accent-red)'
//                   }}
//                 ></div>
//               </div>
//               <p style={{ color: "var(--text-secondary)" }}>
//                 Defense capability assessment: {score} out of {quizData.length} security protocols verified.
//               </p>
//             </div>

//             {score / quizData.length < 0.7 && (
//               <div className="cyber-terminal mb-8">
//                 <span className="cyber-prompt">system:~$</span>
//                 <span> <FaExclamationTriangle style={{ color: "#FFD700", display: "inline" }} /> SECURITY ADVISORY:</span>
//                 <p className="mt-2 pl-4">Recommend additional training to strengthen awareness against cyber threats.</p>
//               </div>
//             )}

//             <div className="action-buttons">
//               <button 
//                 className="cyber-btn"
//                 onClick={restartQuiz}
//               >
//                 <FaRedo /> Re-run Security Scan
//               </button>
//               <button 
//                 className="cyber-btn cyber-btn-primary"
//                 onClick={() => navigate("/")}
//               >
//                 <FaShieldAlt /> Select Different Category
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-page">
//       <div className="matrix-background"></div>
//       <div className="scan-line"></div>
//       <div className="cyber-container">
//         <div className="cyber-card">
//           <div className="cyber-header">
//             <div className="flex justify-center mb-4">
//               <FaLock className="text-4xl" style={{ color: "var(--accent-green)" }} />
//             </div>
//             <h1 className="cyber-title">{hackerEffect}</h1>
//             <div className="cyber-divider"></div>
//             <p className="cyber-subtitle">Test your defense protocols against cyber threats</p>
//             <div className="flex justify-between items-center mt-4">
//               <span style={{ color: "var(--text-secondary)" }}>Time: {formatTime(elapsedTime)}</span>
//               <span style={{ color: "var(--text-secondary)" }}>Score: {score}/{answeredQuestions.length}</span>
//             </div>
//           </div>

//           <div className="quiz-content">
//             <div className="quiz-progress mb-6">
//               <div className="flex justify-between text-xs mb-1" style={{ color: "var(--text-secondary)" }}>
//                 <span>SCANNING...</span>
//                 <span>SECURITY TEST {currentQuestion + 1}/{quizData.length}</span>
//               </div>
//               <div className="cyber-progress">
//                 <div 
//                   className="cyber-progress-bar" 
//                   style={{ width: `${progressPercentage}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div className="quiz-question mb-8">
//               <div className="cyber-terminal">
//                 <span className="cyber-prompt">root@security:~$</span>
//                 <span> {quizData[currentQuestion].question}</span>
//               </div>

//               <div className="space-y-3 mt-6">
//                 {quizData[currentQuestion].options.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`cyber-option ${
//                       selectedOption === index ? "selected" : ""
//                     } ${
//                       showFeedback && index === quizData[currentQuestion].correctAnswer ? "correct" : ""
//                     } ${
//                       showFeedback && selectedOption === index && index !== quizData[currentQuestion].correctAnswer
//                         ? "incorrect"
//                         : ""
//                     }`}
//                     onClick={() => handleOptionSelect(index)}
//                   >
//                     <div className="option-marker">
//                       {String.fromCharCode(65 + index)}
//                     </div>
//                     <div className="option-text">{option}</div>
//                     {showFeedback && index === quizData[currentQuestion].correctAnswer && (
//                       <FaCheck style={{ color: "var(--accent-green)" }} />
//                     )}
//                     {showFeedback && selectedOption === index && index !== quizData[currentQuestion].correctAnswer && (
//                       <FaTimes style={{ color: "var(--accent-red)" }} />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {showFeedback && (
//                 <div
//                   className={`feedback-box ${
//                     selectedOption === quizData[currentQuestion].correctAnswer ? "correct" : "incorrect"
//                   }`}
//                 >
//                   <p>
//                     {selectedOption === quizData[currentQuestion].correctAnswer ? (
//                       <span style={{ color: "var(--accent-green)" }}>
//                         <FaCheck style={{ display: "inline" }} /> ACCESS GRANTED: 
//                       </span>
//                     ) : (
//                       <span style={{ color: "var(--accent-red)" }}>
//                         <FaTimes style={{ display: "inline" }} /> SECURITY BREACH: 
//                       </span>
//                     )}
//                     <span className="ml-2">{quizData[currentQuestion].explanation}</span>
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="action-buttons">
//               <button 
//                 className="cyber-btn cyber-btn-outline"
//                 onClick={handlePreviousQuestion} 
//                 disabled={currentQuestion === 0}
//               >
//                 <FaArrowLeft /> Previous
//               </button>

//               {!showFeedback ? (
//                 <button 
//                   className="cyber-btn cyber-btn-primary"
//                   onClick={handleSubmitAnswer} 
//                   disabled={selectedOption === null}
//                 >
//                   Execute Scan
//                 </button>
//               ) : (
//                 <button 
//                   className="cyber-btn cyber-btn-primary"
//                   onClick={handleNextQuestion}
//                 >
//                   {currentQuestion < quizData.length - 1 ? (
//                     <>Next Protocol <FaArrowRight /></>
//                   ) : (
//                     <>System Analysis <FaTrophy /></>
//                   )}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CyberAwarenessQuiz;