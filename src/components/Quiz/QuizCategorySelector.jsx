import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { quizCategories } from "./quizData_Shuffler";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";
import "./CyberAwarenessQuiz.css";

function QuizCategorySelector() {
  const navigate = useNavigate();
  const [hackerEffect, setHackerEffect] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const text = "CYBER SECURITY TRAINING";
    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
      let result = "";

      for (let i = 0; i < text.length; i++) {
        if (i < iteration) {
          result += text[i];
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setHackerEffect(result);

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const startQuiz = () => {
    if (selectedCategory) {
      navigate(`/quiz/${selectedCategory.id}`);
    }
  };

  return (
    <div className="quiz-savdhan-root">
      <div className="quiz-savdhan-app">
        <div className="quiz-savdhan-container">
          <div className="quiz-savdhan-card">
            <div className="quiz-savdhan-header">
              <div className="quiz-savdhan-icon-wrapper">
                <FaShieldAlt size={48} className="quiz-savdhan-icon-shield" />
              </div>
              <h1 className="quiz-savdhan-title">{hackerEffect}</h1>
              <div className="quiz-savdhan-divider"></div>
              <p className="quiz-savdhan-subtitle">SELECT SECURITY PROTOCOL // INITIALIZE DEFENSE SYSTEMS</p>
            </div>

            <div className="quiz-savdhan-terminal">
              <span className="quiz-savdhan-prompt">root@security:~$</span>
              <span className="quiz-savdhan-typing-effect"> SELECT TRAINING MODULE</span>
            </div>

            <div className="quiz-savdhan-category-grid">
              {quizCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className={`quiz-savdhan-category-card ${selectedCategory?.id === category.id ? "quiz-savdhan-selected quiz-savdhan-shimmer-effect" : ""}`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    <div className="quiz-savdhan-category-icon">
                      <Icon size={30} />
                    </div>
                    <h3 className="quiz-savdhan-category-title">{category.title}</h3>
                    <p className="quiz-savdhan-category-desc">{category.description}</p>
                    <div className="quiz-savdhan-category-questions">
                      <span className="quiz-savdhan-flicker-text">{category.questions} security tests</span>
                    </div>
                    <div className="quiz-savdhan-card-glow"></div>
                  </div>
                );
              })}
            </div>

            <div className="quiz-savdhan-divider"></div>

            <div className="quiz-savdhan-action-buttons">
              <div className="quiz-savdhan-selected-info">
                {selectedCategory && (
                  <div className="quiz-savdhan-terminal-text">
                    <span className="quiz-savdhan-prompt"></span> Selected: {selectedCategory.title}
                  </div>
                )}
              </div>
              <button className="quiz-savdhan-btn quiz-savdhan-btn-primary" disabled={!selectedCategory} onClick={startQuiz}>
                Initialize Security Test <FaArrowRight className="quiz-savdhan-ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCategorySelector;