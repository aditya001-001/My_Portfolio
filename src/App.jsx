import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import central data
import portfolioData from './data/portfolioData.json';

// Import components & layouts
import Navbar from './components/Navbar';
import PdfModal from './components/PdfModal';

// Import sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import LearningJourney from './sections/LearningJourney';
import Certificates from './sections/Certificates';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [modalPdf, setModalPdf] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const handlePreviewPdf = (pdfPath, title) => {
    setModalPdf(pdfPath);
    setModalTitle(title);
  };

  const handleCloseModal = () => {
    setModalPdf(null);
    setModalTitle('');
  };

  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-hidden">
      {/* Sticky Top Header Navigation */}
      <Navbar personalInfo={portfolioData.personalInfo} />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero personalInfo={portfolioData.personalInfo} />

        {/* About Section */}
        <About aboutFacts={portfolioData.about} />

        {/* Skills Section */}
        <Skills skills={portfolioData.skills} />

        {/* Projects Section */}
        <Projects projects={portfolioData.projects} />

        {/* Learning Journey Section */}
        <LearningJourney items={portfolioData.learningJourney} />

        {/* Certificates Section */}
        <Certificates 
          certificates={portfolioData.certificates} 
          onPreviewPdf={handlePreviewPdf} 
        />

        {/* Education Section */}
        <Education education={portfolioData.education} />

        {/* Contact Section */}
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive PDF Modal */}
      <AnimatePresence>
        {modalPdf && (
          <PdfModal
            pdfUrl={modalPdf}
            title={modalTitle}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
