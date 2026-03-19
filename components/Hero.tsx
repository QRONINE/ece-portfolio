
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center -mt-16">
       <div id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-700 border-4 border-gray-600 shadow-lg">
                <img src="assets\me.jpeg" alt="NILIN" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-2">
              Hi, I'm NILIN
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-cyan-500 mb-4">
              Embedded Systems & Robotics Engineer
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto md:mx-0 mb-4 font-medium">
              I am a final year Electronics and Communication Engineering student at VIT AP UNIVERSITY with a CGPA of 8.65. A lifelong learner and medical aspirant turned engineer.
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto md:mx-0 mb-6 font-medium">
              I am keenly interested in the intersection of medical science and robotics. I specialize in bridging the gap between hardware and software, from microcontroller programming to implementing edge AI.
            </p>
            <div className="flex justify-center md:justify-start space-x-5">
               <a href="https://www.linkedin.com/in/nilin-m/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110">
                 <LinkedinIcon className="w-8 h-8"/>
               </a>
               <a href="https://github.com/QRONINE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110">
                 <GithubIcon className="w-8 h-8"/>
               </a>
               <a href="mailto:sunilkumarnilinm@gmail.com" className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110">
                 <MailIcon className="w-8 h-8"/>
               </a>
            </div>
          </div>
       </div>
    </section>
  );
};

export default Hero;