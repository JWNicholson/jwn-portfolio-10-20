import React from 'react';
import ProjectsSection from '../projectsSection/ProjectsSection';
import SkillsSection from '../skillsSection/SkillsSection';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
