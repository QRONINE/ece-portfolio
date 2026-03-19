
import React from 'react';
import { CERTIFICATIONS_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-cyan-500 font-semibold mb-12">{children}</p>
);

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-24">
      <div className="text-center">
        <SectionTitle>Certifications & Achievements</SectionTitle>
        <SectionSubtitle>My commitment to continuous learning and professional development.</SectionSubtitle>
      </div>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <li key={index}>
              <a
                href={cert.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/40 p-5 rounded-lg border border-gray-700/50 sm:flex-row justify-between sm:items-center transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/60 hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-bold text-white text-lg">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <span className="font-mono text-cyan-500 text-sm mt-2 sm:mt-0">{cert.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
