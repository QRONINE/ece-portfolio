
import React from 'react';
import { SKILLS_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-cyan-500 font-semibold mb-12">{children}</p>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="text-center">
        <SectionTitle>Skills Summary</SectionTitle>
        <SectionSubtitle>My toolbox for building robust and intelligent systems.</SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category} className="bg-gray-800/40 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-xl font-bold text-cyan-500 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;