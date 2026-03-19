
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinkClasses = "relative py-1 font-medium text-gray-300 hover:text-cyan-500 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-500 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 py-4">
        <nav className="flex justify-between items-center">
          <a href="#home" onClick={handleNavClick} className="text-2xl font-bold tracking-tight text-white hover:text-cyan-500 transition-colors">
            NILIN M
          </a>
          <ul className="hidden md:flex items-center space-x-6 text-sm">
            <li><a href="#about" onClick={handleNavClick} className={navLinkClasses}>About</a></li>
            <li><a href="#skills" onClick={handleNavClick} className={navLinkClasses}>Skills</a></li>
            <li><a href="#projects" onClick={handleNavClick} className={navLinkClasses}>Projects</a></li>
            <li><a href="#publications" onClick={handleNavClick} className={navLinkClasses}>Publications</a></li>
            <li><a href="#certifications" onClick={handleNavClick} className={navLinkClasses}>Certifications</a></li>
            <li><a href="#hobbies" onClick={handleNavClick} className={navLinkClasses}>Hobbies</a></li>
            <li><a href="#contact" onClick={handleNavClick} className={navLinkClasses}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
