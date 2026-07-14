import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const words = ['Biotechnologist', 'Research Enthusiast', 'Life Science Learner', 'Bioinformatics Student'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: number;
    const fullWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content animate-fade-in">
        <div className="hero-badge glass-panel animate-float">
          <Sparkles size={16} className="sparkle-icon" />
          <span>Eager to utilize biotech skills in healthcare & industry</span>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text hero-name">Akshaya K S</span>
        </h1>
        
        <h2 className="hero-subtitle">
          I am a <span className="typing-text">{currentText}</span>
          <span className="typing-cursor">|</span>
        </h2>
        
        <p className="hero-description">
          A passionate biotechnology undergraduate eager to utilize my laboratory skills and bioinformatics learnings to contribute to scientific research and industry sectors.
        </p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => handleScrollTo('projects')}>
            View My Research <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-decor">
        <div className="decor-circle circle-purple"></div>
        <div className="decor-circle circle-cyan"></div>
        <div className="specimen-card glass-panel animate-float">
          <div className="specimen-card-header">
            <span className="specimen-dot green-glow"></span>
            <span className="card-title-biotech">Spectrophotometer A260/A280</span>
          </div>
          <div className="specimen-card-body">
            <div className="specimen-line">
              <span className="specimen-label">Sample ID</span>
              <span className="specimen-val text-cyan">DNA-2026-KS</span>
            </div>
            <div className="specimen-line">
              <span className="specimen-label">Concentration</span>
              <span className="specimen-val text-purple">52.4 ng/µl</span>
            </div>
            <div className="specimen-line">
              <span className="specimen-label">Purity (Ratio)</span>
              <span className="specimen-val text-pink">1.82 (Pure)</span>
            </div>
            <div className="specimen-line">
              <span className="specimen-label">Target Organism</span>
              <span className="specimen-val">E. coli DH5α</span>
            </div>
            <div className="specimen-progress-container">
              <div className="progress-labels">
                <span>Purity Check</span>
                <span>Passed</span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <div className="mouse-wheel-container">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
};
