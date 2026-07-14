import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Dynamic Animated background blobs & canvas particles */}
      <Background />

      {/* Sticky top glassmorphic navigation bar */}
      <Navbar />

      {/* Main scrolling layout sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Brand footer details */}
      <Footer />
    </div>
  );
};

export default App;
