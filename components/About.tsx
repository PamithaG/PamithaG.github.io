import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sky-500 rounded-full"></span>
    </h2>
);


const About: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLElement>();
  return (
    <section id="about" ref={ref} className={animationClasses}>
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl text-lg text-slate-400 space-y-4">
            <p>
                Hello! I'm Pamitha, a Web Developer with over six years of experience building scalable, responsive web applications. My journey in tech is driven by a passion for solving complex problems and a commitment to delivering high-quality, user-centric products.
            </p>
            <p>
                I specialize in a range of technologies including Angular, React, .NET Core, and Java Spring Boot. I have a strong foundation in design principles and enjoy collaborating with teams to translate ideas into robust and efficient software solutions. My experience spans across various industries, where I've led the development of cross-platform applications and optimized web performance.
            </p>
            <p>
                I am always eager to learn about new technologies and methodologies to stay at the forefront of web development and create meaningful digital experiences.
            </p>
        </div>
    </section>
  );
};

export default About;
