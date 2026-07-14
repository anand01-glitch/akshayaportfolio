import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export const Experience: React.FC = () => {
  const items: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      role: 'Microbiology Laboratory Intern',
      organization: 'Valluvanad Hospital',
      period: 'May 2026 - June 2026 (30 Days)',
      description: [
        'Studied various microorganisms and their growth culture patterns in an offline hospital laboratory.',
        'Performed basic microbiology techniques including aseptic handling, microbial culture, and differential staining procedures.',
        'Prepared specialized culture media, operated equipment (compound microscope, autoclave, centrifuge, incubator, laminars), and logged experimental records.',
        'Rigidly followed laboratory biosafety protocols during microbiological analyses.',
      ],
    },
    {
      id: 2,
      type: 'education',
      role: 'Bachelor of Science in Biotechnology',
      organization: 'Nehru Arts and Science College | Bharathiar University',
      period: '2024 - 2027',
      description: [
        'Focusing on molecular biology, bioinformatics tools, immunology, and genetic engineering.',
        'Current cumulative CGPA of 7.8 / 10.',
        'Elected student member of Western Ghats Researcher Association of Agricultural Sciences and Technology.',
      ],
    },
    {
      id: 3,
      type: 'education',
      role: 'Higher Secondary (Biology Science)',
      organization: 'GHSS Vadanamkurussi | State Board of Kerala',
      period: 'Class of 2023',
      description: [
        'Studied advanced physics, chemistry, biology, and mathematics.',
        'Graduated with distinction scoring a total percentage of 83%.',
      ],
    },
    {
      id: 4,
      type: 'education',
      role: 'Secondary School',
      organization: 'TRKHSS Vaniamkulam | State Board of Kerala',
      period: 'Class of 2021',
      description: [
        'Completed secondary education curriculum.',
        'Graduated with honors scoring a total percentage of 98%.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Journey</h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline dot */}
            <div className="timeline-dot glass-panel">
              {item.type === 'work' ? (
                <Briefcase size={18} className="timeline-icon text-cyan" />
              ) : (
                <GraduationCap size={18} className="timeline-icon text-purple" />
              )}
            </div>

            {/* Timeline content card */}
            <div className="timeline-content glass-panel">
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-org">{item.organization}</h4>
              <ul className="timeline-desc">
                {item.description.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
