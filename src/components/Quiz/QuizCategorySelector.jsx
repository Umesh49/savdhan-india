// // QuizCategorySelector.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaShieldAlt, FaAngleRight } from "react-icons/fa";
// import { quizCategories } from "./quizData";
// import "./CyberAwarenessQuiz.css";

// function QuizCategorySelector() {
//   const navigate = useNavigate();
//   const [hackerEffect, setHackerEffect] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
  
//   // Matrix text effect for the header
//   useEffect(() => {
//     const text = "CYBER SECURITY TRAINING";
//     let iteration = 0;
//     let interval = null;
    
//     clearInterval(interval);
    
//     interval = setInterval(() => {
//       const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
//       let result = "";
      
//       for (let i = 0; i < text.length; i++) {
//         if (i < iteration) {
//           result += text[i];
//         } else {
//           result += characters[Math.floor(Math.random() * characters.length)];
//         }
//       }
      
//       setHackerEffect(result);
      
//       if (iteration >= text.length) {
//         clearInterval(interval);
//       }
      
//       iteration += 1/3;
//     }, 30);
    
//     return () => clearInterval(interval);
//   }, []);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   const startQuiz = () => {
//     if (selectedCategory) {
//       navigate(`/quiz/${selectedCategory.id}`);
//     }
//   };

//   return (
//     <div className="quiz-page">
//       <div className="matrix-background"></div>
//       <div className="scan-line"></div>
      
//       <div className="cyber-container">
//         <div className="cyber-card">
//           <div className="cyber-header">
//             <div className="icon-wrapper">
//               <FaShieldAlt size={48} color="#00ff9d" />
//             </div>
//             <h1 className="cyber-title">{hackerEffect}</h1>
//             <div className="cyber-divider"></div>
//             <p className="cyber-subtitle">
//               SELECT SECURITY PROTOCOL // INITIALIZE DEFENSE SYSTEMS
//             </p>
//           </div>

//           <div className="cyber-terminal">
//             <span className="cyber-prompt">root@security:~$</span>
//             <span className="typing-effect"> SELECT TRAINING MODULE</span>
//           </div>

//           <div className="category-grid">
//             {quizCategories.map((category) => (
//               <div 
//                 key={category.id}
//                 className={`category-card ${selectedCategory?.id === category.id ? 'selected shimmer-effect' : ''}`}
//                 onClick={() => handleCategorySelect(category)}
//               >
//                 <div className="category-icon">
//                   <category.icon />
//                 </div>
//                 <h3 className="category-title">{category.title}</h3>
//                 <p className="category-desc">{category.description}</p>
//                 <div className="category-questions">
//                   <span className="flicker-text">{category.questions} security tests</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="cyber-divider"></div>

//           <div className="action-buttons">
//             <div className="selected-info">
//               {selectedCategory && (
//                 <div className="terminal-text">
//                   <span className="cyber-prompt">&gt;</span> Selected: {selectedCategory.title}
//                 </div>
//               )}
//             </div>
//             <button 
//               className="cyber-btn cyber-btn-primary"
//               disabled={!selectedCategory}
//               onClick={startQuiz}
//             >
//               Initialize Security Test <FaAngleRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizCategorySelector;