
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-transparent text-gray-200 min-h-screen relative content-wrapper">
      <Header />
      <main className="container mx-auto px-4 md:px-8 relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Publications />
        <Certifications />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
