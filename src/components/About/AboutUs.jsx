import React, { useEffect, useRef, useState } from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import "./AboutUs.css";

export default function AboutUs() {
  const observerRef = useRef(null);
  const typingRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Our mission, vision, and the team behind India's premier cybersecurity awareness platform.";

  useEffect(() => {
    let currentIndex = 0;
    const typeSpeed = 50;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typingRef.current = setTimeout(typeText, typeSpeed);
      }
    };

    typingRef.current = setTimeout(typeText, 800);

    const setupObserver = () => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      };

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-animated");
            observerRef.current.unobserve(entry.target);
          }
        });
      }, options);

      document
        .querySelectorAll(".about-animation-element")
        .forEach((element) => {
          observerRef.current.observe(element);
        });
    };

    setupObserver();

    const animateInitialElements = () => {
      const elements = document.querySelectorAll(".about-animation-element");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("about-animated");
        }
      });
    };

    animateInitialElements();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, []);

  return (
    <div className="about-about-page">
      <div className="about-grid-lines"></div>

      <section className="about-page-header">
        <div className="about-container">
          <div className="about-header-content">
            <div className="about-header-brackets">
              <span className="about-header-bracket left">[</span>
              <div className="about-header-inner">
                <h1 className="about-header-title">About Savdhaan India</h1>
                <p className="about-header-subtitle">
                  <span className="about-typed-text">{typedText}</span>
                  <span className="about-cursor">|</span>
                </p>
              </div>
              <span className="about-header-bracket right">]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-container about-main-content">
        <div className="about-stagger-animation">
          <div className="about-panel about-story-panel about-animation-element">
            <div className="about-panel-header">
              <div className="about-panel-title">
                <span className="about-panel-indicator"></span>
                <span>Our Story</span>
              </div>
              <div className="about-panel-controls">
                <div className="about-panel-control"></div>
                <div className="about-panel-control"></div>
                <div className="about-panel-control"></div>
              </div>
            </div>
            <div className="about-panel-content">
              <p>
                Founded in 2025 as part of a college capstone project, this
                initiative was inspired by the popular TV series Savdhaan India,
                which dramatizes real-life frauds and scams targeting everyday
                citizens. We saw an opportunity to bring that same cautionary
                spirit to the digital world, educating users about evolving
                cyber threats.
              </p>
              <p>
                A group of postgraduate students pooled our skills in
                cybersecurity, law, and education technology to build a
                comprehensive platform. Our goal is to demystify complex cyber
                laws and digital risks, making safety practices easy to
                understand and apply for everyone.
              </p>
              <p>
                Through this project, users can explore engaging content on
                common cybercrimes, learn about relevant Indian cyber
                legislation, and discover step-by-step procedures to report
                incidents. We aim to foster widespread awareness and equip
                individuals to protect themselves online.
              </p>
            </div>
          </div>

          <div className="about-mission-vision-grid">
            <div className="about-panel about-mission-panel about-animation-element">
              <div className="about-panel-icon">
                <FaShieldAlt className="about-icon" />
              </div>
              <h3 className="about-panel-heading">Our Mission</h3>
              <p>
                To translate the cautionary lessons of Savdhaan India into the
                digital realm by providing clear, practical guidance on cyber
                safety, empowering students and citizens to recognize and
                counter online threats.
              </p>
            </div>

            <div className="about-panel about-vision-panel about-animation-element">
              <div className="about-panel-icon vision">
                <FaLightbulb className="about-icon" />
              </div>
              <h3 className="about-panel-heading">Our Vision</h3>
              <p>
                A digitally aware community where every user is equipped with
                the knowledge and tools to defend against cybercrime, fostering
                a culture of vigilance and resilience across India.
              </p>
            </div>
          </div>

          <div className="about-panel about-values-panel about-animation-element">
            <div className="about-panel-header">
              <div className="about-panel-title">
                <span className="about-panel-indicator"></span>
                <span>Our Core Values</span>
              </div>
              <div className="about-panel-controls">
                <div className="about-panel-control"></div>
                <div className="about-panel-control"></div>
                <div className="about-panel-control"></div>
              </div>
            </div>
            <div className="about-values-grid">
              <div className="about-value-item">
                <div className="about-value-icon inclusivity">
                  <FaUsers className="about-icon" />
                </div>
                <div className="about-value-content">
                  <h3 className="about-value-title">Inclusivity</h3>
                  <p>
                    We believe cybersecurity knowledge should be accessible to
                    all Indians, regardless of technical background, language,
                    or location.
                  </p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon integrity">
                  <FaHandshake className="about-icon" />
                </div>
                <div className="about-value-content">
                  <h3 className="about-value-title">Integrity</h3>
                  <p>
                    We are committed to providing accurate, unbiased information
                    and maintaining the highest ethical standards in all our
                    operations.
                  </p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon innovation">
                  <FaChartLine className="about-icon" />
                </div>
                <div className="about-value-content">
                  <h3 className="about-value-title">Innovation</h3>
                  <p>
                    We continuously evolve our platform and resources to address
                    emerging cyber threats and leverage new technologies for
                    better security solutions.
                  </p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon empowerment">
                  <FaGlobe className="about-icon" />
                </div>
                <div className="about-value-content">
                  <h3 className="about-value-title">Empowerment</h3>
                  <p>
                    We don't just inform; we equip users with practical tools
                    and actionable knowledge to take control of their digital
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-content about-animation-element">
            <h2 className="about-cta-title">Join Our Mission</h2>
            <p className="about-cta-text">
              Help us create a safer digital India by spreading awareness and
              sharing our resources with your community.
            </p>
            <div className="about-cta-buttons">
              <a href="/contact" className="about-btn-terminal">
                <span className="about-btn-prompt">&gt;</span>Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
