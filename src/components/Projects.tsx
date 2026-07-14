import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Projects.css';

// Custom inline SVG icons because current lucide-react doesn't export brand icons
const FileIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

// Import local assets
import drugDesignImg from '../assets/drug_design.png';
import microbiologyImg from '../assets/microbiology.png';
import dnaGelImg from '../assets/dna_gel.png';

interface Project {
  id: number;
  title: string;
  category: 'Lab Training' | 'Internship' | 'Workshops';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  orgUrl: string;
  syllabus: string[];
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Lab Training' | 'Internship' | 'Workshops'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [syllabusView, setSyllabusView] = useState<{ title: string; topics: string[] } | null>(null);

  const projectsList: Project[] = [
    {
      id: 1,
      title: 'Drug Designing & Discovery Workshop',
      category: 'Workshops',
      description: 'A structural modeling training on molecular docking, molecular graphics, and virtual screening.',
      longDescription: 'Participated in an intensive training workshop on Drug Designing & Discovery at Biozone Research Technologies Pvt Ltd, Chennai. Studied protein structure analysis, molecular modeling, computer-aided drug design (CADD) workflows, and docking parameters for chemical ligand analysis.',
      image: drugDesignImg,
      technologies: ['CADD', 'Molecular Docking', 'PyMOL', 'Bioinformatics', 'Structure Analysis'],
      features: [
        'Molecular docking simulation models of target receptor structures.',
        'Estimating binding affinities and molecular interaction coordinates.',
        'Virtual screening of compound libraries against active ligand sites.',
        'Certified credentials earned in Drug Discovery methodologies.'
      ],
      orgUrl: 'https://biozone.co.in',
      syllabus: [
        'Module 1: Computer-Aided Drug Design (CADD) Foundations',
        'Module 2: Protein Databases & Structure Retrieval (PDB)',
        'Module 3: Ligand and Target Preparation Protocols',
        'Module 4: Molecular Docking Simulations using AutoDock Vina',
        'Module 5: Binding Affinity & Interaction Visualizations (PyMOL)',
        'Module 6: Virtual Screening & Pharmacokinetic (ADME) Profiling'
      ],
    },
    {
      id: 2,
      title: 'Microbiological Culture & Diagnostics',
      category: 'Internship',
      description: 'A 30-day hands-on rotation in a clinical laboratory inoculating, isolation, and staining cells.',
      longDescription: 'Completed a 30-day offline internship at the Microbiology Laboratory of Valluvanad Hospital. Underwent hands-on instruction in clinical safety protocols, media preparation, aseptic isolation, inoculation, streak plating, and microscopic differentiation of target bacteria.',
      image: microbiologyImg,
      technologies: ['Aseptic Handling', 'Cell Culture', 'Gram Staining', 'Microscopy', 'Media Prep'],
      features: [
        'Hands-on preparation of nutrient agar and selective media.',
        'Differential staining techniques to categorize bacterial structures.',
        'Operational familiarity with Autoclaves, Incubators, Centrifuges, and Laminars.',
        'Assisted with diagnostic observations and test records.'
      ],
      orgUrl: 'https://example.com',
      syllabus: [
        'Module 1: Biosafety Regulations & Sterile Practices in Clinical Labs',
        'Module 2: Culture Media Formulation (Nutrient, Selective, Differential Agars)',
        'Module 3: Inoculation Techniques & Isolation Streaking Methods',
        'Module 4: Gram Staining, Acid-Fast Staining, and Morphology Identification',
        'Module 5: Diagnostic Biochemical Assay Identifications',
        'Module 6: Optical Density Measurement & Centrifugation Protocols'
      ],
    },
    {
      id: 3,
      title: 'Green Skill & Nano Research Training',
      category: 'Lab Training',
      description: 'Practical training courses focusing on biotechnology sustainability and nanotechnology exhibitions.',
      longDescription: 'Completed advanced training programs at Nehru Arts & Science College, including the Green Skill Development program and the Nano Jatha lecture series. Gained insights into environmental biotechnology techniques and the deployment of nanoparticles in modern therapeutics.',
      image: dnaGelImg,
      technologies: ['Green Biotech', 'Nanoparticles', 'Gel Electrophoresis', 'Sustainability'],
      features: [
        'Study of green chemistry approaches in agricultural research.',
        'Seminars on nanoparticle synthesis and targeted drug delivery.',
        'Agarose gel electrophoresis setup and DNA band separation observation.',
        'Exhibited scientific models representing nanotech innovations.'
      ],
      orgUrl: 'https://nehrucolleges.com',
      syllabus: [
        'Module 1: Environmental Bioremediation & Microbe Cleanups',
        'Module 2: Green Chemistry Paradigms in Agro-Biotech',
        'Module 3: Nanoparticle Synthesis & Characterization Methodologies',
        'Module 4: Solid Lipid Nanoparticles for Target Drug Delivery',
        'Module 5: Agarose Gel Electrophoresis Casting & Running Systems',
        'Module 6: DNA Band Visualization & Ladder Calibration Analysis'
      ],
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Training & Internships</h2>

      {/* Filter Buttons */}
      <div className="filter-container">
        {(['All', 'Lab Training', 'Internship', 'Workshops'] as const).map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card glass-panel animate-fade-in"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech-tags">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-tag">+{project.technologies.length - 3} more</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            
            <div className="modal-body">
              <div className="modal-info">
                <span className="project-category">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                
                <p className="modal-desc">{selectedProject.longDescription}</p>
                
                <div className="modal-features">
                  <h4>Key Focus Areas:</h4>
                  <ul>
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-tech">
                  <h4>Methods / Systems Learned:</h4>
                  <div className="project-tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setSyllabusView({ title: selectedProject.title, topics: selectedProject.syllabus })}
                  >
                    <FileIcon size={18} /> View Syllabus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Syllabus Sub-Modal */}
      {syllabusView && (
        <div className="modal-overlay syllabus-modal-overlay" onClick={() => setSyllabusView(null)}>
          <div className="modal-content glass-panel syllabus-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSyllabusView(null)} aria-label="Close syllabus modal">
              <X size={20} />
            </button>
            
            <div className="modal-info">
              <h3 className="modal-title syllabus-title">{syllabusView.title}</h3>
              <p className="modal-desc syllabus-subtitle">Curriculum Outline & Core Modules</p>
              
              <div className="syllabus-topics-list">
                {syllabusView.topics.map((topic, idx) => (
                  <div key={idx} className="syllabus-topic-item glass-panel">
                    <span className="topic-number">{idx + 1}</span>
                    <span className="topic-text">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
