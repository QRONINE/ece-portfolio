
import React from 'react';
import { PUBLICATIONS_DATA } from '../constants';
import { PaperIcon } from './icons/PaperIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-cyan-500 font-semibold mb-12">{children}</p>
);

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 md:py-24">
      <div className="text-center">
        <SectionTitle>Research & Publications</SectionTitle>
        <SectionSubtitle>My contributions to the field of AI and deep learning.</SectionSubtitle>
      </div>
      <div className="max-w-3xl mx-auto">
        {PUBLICATIONS_DATA.map((pub, index) => (
          <a
            key={index}
            href={'https://ieeexplore.ieee.org/document/11135952 '}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/40 p-6 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/60 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 mt-1">
                    <PaperIcon className="w-8 h-8 text-cyan-500"/>
                </div>
                <div>
                    <h3 className="font-bold text-white text-lg leading-snug">{pub.title}</h3>
                    <p className="text-cyan-500 mt-2">{pub.conference}</p>
                </div>
            </div>
            {pub.teamNote && (
                <div className="mt-4">
                    <blockquote className="border-l-4 border-cyan-600/50 pl-4 italic text-gray-400 text-sm">
                        {pub.teamNote}
                    </blockquote>
                </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;