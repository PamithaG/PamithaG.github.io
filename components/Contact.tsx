import React from 'react';
import { PROFILE_DATA } from '../constants';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sky-500 rounded-full"></span>
    </h2>
);


const Contact: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLElement>();
  return (
    <section id="contact" ref={ref} className={`text-center ${animationClasses}`}>
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-6">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as I can!
      </p>
      <a 
        href={`mailto:${PROFILE_DATA.email}`} 
        className="inline-block px-8 py-4 text-lg font-semibold bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-6 mt-12">
        <a href={PROFILE_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><GithubIcon className="w-8 h-8" /></a>
        <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><LinkedinIcon className="w-8 h-8" /></a>
      </div>
    </section>
  );
};

export default Contact;
