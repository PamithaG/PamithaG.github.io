import React from 'react';
import { PROFILE_DATA } from '../constants';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-12 min-h-[70vh]">
      <div className="w-full md:w-2/3">
        <span className="text-sky-400 font-semibold">Hi, my name is</span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-100 mt-2 mb-4">
          {PROFILE_DATA.name}.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 mb-6">
          {PROFILE_DATA.title}.
        </h2>
        <p className="text-lg max-w-xl text-slate-400 mb-8">{PROFILE_DATA.bio}</p>
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
          <div className="flex gap-4">
              <a href={PROFILE_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-1/3 flex justify-center">
        <img 
            src={PROFILE_DATA.avatarUrl} 
            alt={PROFILE_DATA.name} 
            className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover border-4 border-sky-500/50 shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;