import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sky-500 rounded-full"></span>
    </h2>
);

const Experience: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLElement>();
  return (
    <section id="experience" ref={ref} className={animationClasses}>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="relative border-l-2 border-sky-500/30 ml-4 md:ml-0">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={index} className="mb-12 pl-12 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-slate-900"></div>
            <p className="text-sm text-slate-400 mb-1">{job.duration}</p>
            <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
            <div className="flex items-baseline gap-x-2 mb-4">
              <h4 className="text-lg font-semibold text-sky-400">{job.company}</h4>
              {job.location && <span className="text-sm text-slate-500">| {job.location}</span>}
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
