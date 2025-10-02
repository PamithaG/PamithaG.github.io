
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sky-500 rounded-full"></span>
    </h2>
);

const Projects: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLElement>();
  return (
    <section id="projects" ref={ref} className={animationClasses}>
      <SectionTitle>My Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105 hover:shadow-sky-500/20">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-semibold bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
               <div className="mt-auto flex justify-end items-center gap-4 pt-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                    <ExternalLinkIcon className="w-6 h-6" />
                  </a>
                )}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
