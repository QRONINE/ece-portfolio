
import React from 'react';
import { HOBBIES_DATA } from '../constants';
import { Printing3DIcon } from './icons/Printing3DIcon';
import { GamingIcon } from './icons/GamingIcon';
import { PlaneIcon } from './icons/PlaneIcon';
import { CodeIcon } from './icons/CodeIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-cyan-500 font-semibold mb-12">{children}</p>
);


const HobbyIcon: React.FC<{ name: string }> = ({ name }) => {
    switch (name) {
        case "3D Printing & Design":
            return <Printing3DIcon className="w-10 h-10 text-cyan-500 mb-4" />;
        case "Retro Gaming":
            return <GamingIcon className="w-10 h-10 text-cyan-500 mb-4" />;
        case "RC Aircraft":
            return <PlaneIcon className="w-10 h-10 text-cyan-500 mb-4" />;
        case "Open Source":
            return <CodeIcon className="w-10 h-10 text-cyan-500 mb-4" />;
        default:
            return null;
    }
};

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 md:py-24">
      <div className="text-center">
        <SectionTitle>Hobbies & Interests</SectionTitle>
        <SectionSubtitle>My passions outside of technology.</SectionSubtitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {HOBBIES_DATA.map((hobby) => (
          <div key={hobby.name} className="bg-gray-800/40 p-6 rounded-lg border border-gray-700/50 text-center flex flex-col items-center transition-all hover:-translate-y-2 hover:border-cyan-500/50">
            <HobbyIcon name={hobby.name} />
            <h3 className="font-bold text-white text-lg mb-2">{hobby.name}</h3>
            <p className="text-gray-400 text-sm">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;