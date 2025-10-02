
import React from 'react';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sky-500 rounded-full"></span>
    </h2>
);

const Skills: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLElement>();
    const categorizedSkills = SKILLS_DATA.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<Skill['category'], Skill[]>);

    return (
        <section id="skills" ref={ref} className={animationClasses}>
            <SectionTitle>My Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(categorizedSkills).map(([category, skills]) => (
                    <div key={category} className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-sky-400 mb-4">{category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li key={skill.name} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
