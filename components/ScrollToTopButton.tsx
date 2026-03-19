
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons/ArrowUpIcon';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          className="bg-cyan-600/80 hover:bg-cyan-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
