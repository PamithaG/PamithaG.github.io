import type { Profile, Skill, Project, Experience } from './types';

export const PROFILE_DATA: Profile = {
  name: "Pamitha Kaluaratchi",
  title: "Web Developer",
  bio: "Web Developer with 6+ years of experience building scalable, responsive web applications using Angular, React, .Net Core and Java Spring Boot. Possesses a strong understanding of design principles and demonstrates analytical and problem-solving skills.",
  avatarUrl: "assets/img/1666568866545.jpeg",
  email: "pamithagk@gmail.com",
  socials: {
    github: "https://github.com/pamithagk",
    linkedin: "https://linkedin.com/in/pamithagk",
  },
};

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML 5', category: 'Frontend' },
  { name: 'CSS / SCSS', category: 'Frontend' },
  { name: 'JavaScript ES6', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'C# .NET / .NET Core', category: 'Backend' },
  { name: 'Java Spring Boot', category: 'Backend' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'Git', category: 'Tools & DevOps' },
  { name: 'Docker', category: 'Tools & DevOps' },
  { name: 'AWS/Azure', category: 'Tools & DevOps' },
  { name: 'DNS', category: 'Tools & DevOps' },
  { name: 'WordPress', category: 'Tools & DevOps' },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Radiant Document Management System",
    description: "Developed a paperless, semi-automated system for student and employee registration. Created a RESTful API using .NET Core, deployed on Azure, and built the frontend with React and Material UI.",
    technologies: ["ASP.NET Core", "React", "MySQL", "Azure", "Entity Framework", "Dropbox API"],
    repoUrl: "https://github.com/pamithagk",
    imageUrl: "https://picsum.photos/seed/radiant/600/400",
  },
  {
    title: "FabNet.lk - Fabrication Industry Platform",
    description: "A platform connecting consumers and suppliers in the fabrication industry, featuring a search engine and user dashboards. The frontend was built with React and the backend with ASP.NET Core and PostgreSQL, deployed on AWS.",
    technologies: ["React", "ASP.NET Core", "PostgreSQL", "AWS S3", "Entity Framework", "Ant Design"],
    repoUrl: "https://github.com/pamithagk",
    imageUrl: "https://picsum.photos/seed/fabnet/600/400",
  },
  {
    title: "TIMIK Panel Design Software",
    description: "A Windows desktop application for designing electrical panel enclosures, including bill of materials and engineering drawings. Developed with Electron.js and a Node.js backend API with MVC architecture.",
    technologies: ["Electron.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "MVC"],
    repoUrl: "https://github.com/pamithagk",
    imageUrl: "https://picsum.photos/seed/timik/600/400",
  },
  {
    title: "TeeJay Product Life Cycle Management",
    description: "Developed an internal product lifecycle management system for a leading fabric manufacturer. Prepared the POC design using Figma and built the application using ASP.NET Core and SQL Server.",
    technologies: ["ASP.NET Core", "SQL Server", "Razor Pages", "jQuery", "Bootstrap", "Figma"],
    repoUrl: "https://github.com/pamithagk",
    imageUrl: "https://picsum.photos/seed/teejay/600/400",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
    {
    role: "Front-End Developer",
    company: "Auxilium Group",
    duration: "Jan 2024 - Present",
    location: "Windsor, ON",
    description: [
      "Focused on building dynamic web applications across various industries using the latest Angular.",
      "Developed and deployed new features to Datalynk (Form builder platform).",
      "Reduced web application load time by 30% through codebase optimization.",
      "Resolved 95% of bug reports within 24 hours through efficient troubleshooting and root cause analysis, contributing to a smoother user experience.",
    ],
  },
  {
    role: "Software Engineer",
    company: "ZorroSign Inc.",
    duration: "May 2021 - Dec 2023",
    location: "Phoenix, United States (Remote)",
    description: [
      "Led the development of cross-platform web applications, improving user experience efficiency by 50%.",
      "Collaborated in designing, development, and implementation of RESTful services (Micro services).",
      "Conducted research and developed proof of concepts (POCs) to enhance product performance.",
      "Directed collaboration with the UI/UX team, translating wireframes into high-quality web elements, boosting user satisfaction.",
      "Ensured smooth rollout of new features by updating and deploying releases in Kubernetes dev clusters.",
      "Engaged in comprehensive code reviews, fostering collaboration and ensuring code quality.",
    ],
  },
  {
    role: "Independent Contractor (Freelance Software Engineer)",
    company: "Self-employed",
    duration: "Jan 2017 - Present",
    location: "Remote",
    description: [
      "Designed and coordinated the development of web-based systems, including websites and web apps, resulting in a 90% on-time project delivery rate.",
      "Engineered web services with third-party API and SDK integrations, providing clients with robust and scalable solutions.",
      "Designed and developed responsive UI elements for cross platforms (Desktop, Smartphones, tablets) using Figma.",
      "Deployed solutions using AWS and Azure, ensuring reliability and scalability for client projects.",
      "Communicated effectively with clients to determine the nature and cause of problems to provide the best solution.",
      "Utilized CI/CD tools such as GitHub/Bitbucket and Azure Deployment Center for continuous integration and deployment processes.",
    ],
  },
   {
    role: "Software Engineer",
    company: "East Link Engineering Co.",
    duration: "Jul 2019 - May 2021",
    location: "Sri Lanka",
    description: [
      "Architected and deployed a complete software solution for design electrical modular panel systems, reducing design time by 80%.",
      "Developed and implemented a RESTful service for application authentication and cloud storage, streamlining the project design process.",
      "Gathered and documented user requirements from managers and engineering team (end users) and discussed the technical boundaries and enhancements which can be added.",
      "Facilitated User Acceptance Testing (UAT) by gathering and documenting user requirements, leading to a 20% reduction in post-deployment issues.",
      "Provided product training to external and internal stakeholders on how to use the application.",
    ],
  },
];