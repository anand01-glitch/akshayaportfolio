import React from 'react';
import { Code2, Server, Settings } from 'lucide-react';
import './About.css';

interface Skill {
  name: string;
  level: number; // percentage based on skill familiarity
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const About: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Laboratory Core',
      icon: <Code2 className="category-icon text-cyan" size={24} />,
      skills: [
        { name: 'PCR (Polymerase Chain Reaction)', level: 90 },
        { name: 'Agarose Gel Electrophoresis', level: 90 },
        { name: 'DNA / RNA Isolation', level: 85 },
        { name: 'Media Preparation', level: 95 },
      ],
    },
    {
      title: 'Analysis & Culturing',
      icon: <Server className="category-icon text-purple" size={24} />,
      skills: [
        { name: 'Bacterial & Fungal Cell Culture', level: 85 },
        { name: 'Spectrophotometry / Chromatography', level: 80 },
        { name: 'Microscopy Techniques', level: 90 },
        { name: 'DNA Fingerprinting', level: 75 },
      ],
    },
    {
      title: 'Bioinformatics & Tools',
      icon: <Settings className="category-icon text-pink" size={24} />,
      skills: [
        { name: 'Bioinformatics Tools & Databases', level: 80 },
        { name: 'Immunology Techniques', level: 75 },
        { name: 'MS Office (Word, Excel, PPT)', level: 90 },
      ],
    },
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-bio glass-panel">
          <h3>My Story</h3>
          <p>
            I am a motivated B.Sc. Biotechnology student at Nehru Arts and Science College (Bharathiar University). 
            With strong laboratory capabilities and a keen interest in bioinformatics, molecular biology, and medical research, 
            I look forward to contributing to research initiatives in the healthcare sector.
          </p>
          <p>
            My training has given me hands-on practice in aseptic handling, microbial culture, staining, DNA/RNA extraction, and molecular cloning techniques. 
            I am passionate about applying this scientific knowledge to tackle industrial challenges and gain deep insights in the life sciences space.
          </p>
          <p>
            I am currently seeking internships and entry-level research associate opportunities to help expand diagnostic, agricultural, or pharmaceutical innovations.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">7.8</span>
              <span className="stat-label">B.Sc CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Workshops Attended</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">30</span>
              <span className="stat-label">Days Hospital Intern</span>
            </div>
          </div>
        </div>

        <div className="about-skills">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-category-card glass-panel">
              <div className="category-header">
                {category.icon}
                <h4>{category.title}</h4>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
