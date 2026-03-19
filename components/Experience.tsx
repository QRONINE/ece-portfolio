
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-cyan-500 font-semibold mb-12">{children}</p>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="text-center">
        <SectionTitle>Professional Experience</SectionTitle>
        <SectionSubtitle>My involvement in campus communities and tech clubs.</SectionSubtitle>
      </div>
      <div className="max-w-3xl mx-auto relative border-l-2 border-gray-700/50 pl-8">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[42px] top-1 bg-gray-900 p-2 rounded-full">
              <BriefcaseIcon className="w-6 h-6 text-cyan-500" />
            </div>
            <p className="text-sm font-mono text-cyan-500 mb-1">{exp.duration}</p>
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <h4 className="text-md font-semibold text-gray-400 mb-3">{exp.organization}</h4>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;