
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        I'm currently seeking new opportunities and am open to collaboration. Whether you have a question or just want to say hi, feel free to reach out. Let's build something amazing together!
      </p>
      <div className="flex justify-center items-center space-x-6">
        <a href="https://www.linkedin.com/in/nilin-m/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110 p-2">
            <LinkedinIcon className="w-9 h-9"/>
            <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://github.com/QRONINE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110 p-2">
            <GithubIcon className="w-9 h-9"/>
            <span className="sr-only">GitHub</span>
        </a>
        <a href="mailto:sunilkumarnilinm@gmail.com" className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110 p-2">
            <MailIcon className="w-9 h-9"/>
            <span className="sr-only">Email</span>
        </a>
      </div>
       <div className="mt-12">
        <a href="mailto:sunilkumarnilinm@gmail.com" className="inline-block bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-600/40">
          Send me an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;