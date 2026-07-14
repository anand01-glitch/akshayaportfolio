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
        <div className="code-card glass-panel animate-float">
          <div className="code-card-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="card-title">specimen_purity.json</span>
          </div>
          <div className="code-card-body">
            <pre>
              <code>
                <span className="code-keyword">const</span> DNA_Sample = &#123;<br />
                &nbsp;&nbsp;type: <span className="code-string">'Plasmid DNA'</span>,<br />
                &nbsp;&nbsp;concentration: <span className="code-string">'50 ng/µl'</span>,<br />
                &nbsp;&nbsp;purityRatio: <span className="code-boolean">1.82</span>,<br />
                &nbsp;&nbsp;passedQualityCheck: <span className="code-boolean">true</span><br />
                &#125;;
              </code>
            </pre>
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
