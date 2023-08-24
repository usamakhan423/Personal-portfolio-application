import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';
import InformationSection from './components/InformationSection';
import ServicesSection from './components/ServicesSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TechExpertise from './components/TechExpertise';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='App'>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <HeroSection />
      <InformationSection id="InformationSection" />
      <ServicesSection />
      <TechExpertise />
      <ProjectSection id="ProjectSection" />
      <ContactSection id="ContactSection" />
      <Footer />
    </div>
  );
}

export default App;
